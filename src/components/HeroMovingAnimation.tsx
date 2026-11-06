'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Truck,
  Box,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Sparkles,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  Zap,
  Star,
  Clock,
  Phone,
  Home,
  Navigation,
  Compass,
} from 'lucide-react';
import QuoteForm from './QuoteForm';
import { siteConfig, getTelUrl, getWhatsAppUrl } from '@/data/siteConfig';

type AnimationStage = 'packing' | 'transit' | 'delivery';
type ViewMode = 'animation' | 'form';

export default function HeroMovingAnimation() {
  const [stage, setStage] = useState<AnimationStage>('packing');
  const [viewMode, setViewMode] = useState<ViewMode>('animation');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [packedCount, setPackedCount] = useState<number>(18420);
  const [quickFrom, setQuickFrom] = useState<string>('Hyderabad');
  const [quickTo, setQuickTo] = useState<string>('Bengaluru');
  const [quickType, setQuickType] = useState<string>('Household Shifting (1-2 BHK)');
  const [lastPackedMessage, setLastPackedMessage] = useState<string | null>(null);

  // Auto-advance stages if left playing to tell the complete moving story
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setStage((prev) => {
        if (prev === 'packing') return 'transit';
        if (prev === 'transit') return 'delivery';
        return 'packing';
      });
    }, 9000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Periodic counter increment for lively live-operation feel
  useEffect(() => {
    const counterTimer = setInterval(() => {
      setPackedCount((c) => c + 1);
    }, 4500);
    return () => clearInterval(counterTimer);
  }, []);

  const handlePackCustomBox = () => {
    setPackedCount((c) => c + 1);
    const messages = ['Box Sealed & Tagged! ✨', 'Cushioned with Bubble Wrap! 🛡️', 'Loaded into Truck! 🚚', 'Fragile China Protected! 🍷'];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    setLastPackedMessage(randomMsg);
    setTimeout(() => setLastPackedMessage(null), 2500);
  };

  const handleQuickEstimateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setViewMode('form');
  };

  return (
    <div className="relative w-full rounded-3xl bg-white/90 backdrop-blur-md border border-[#EAE5DC] shadow-xl overflow-hidden transition-all duration-300">
      {/* Top Header Bar with View Toggle & Live Indicator */}
      <div className="px-4 sm:px-6 py-3.5 bg-gradient-to-r from-[#0F2C59] via-[#163B75] to-[#0F2C59] text-white flex flex-wrap items-center justify-between gap-3 border-b border-[#0A1C38]">
        {/* Live Status Pill */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
          <span className="text-xs font-semibold tracking-wide uppercase text-stone-200">
            Shabari Moving Simulator
          </span>
          <span className="hidden sm:inline-block text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-emerald-300 font-medium">
            Live 60 FPS
          </span>
        </div>

        {/* View Switcher: Interactive Scene vs Quote Form */}
        <div className="flex items-center bg-black/25 p-1 rounded-xl border border-white/10 text-xs">
          <button
            type="button"
            onClick={() => setViewMode('animation')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
              viewMode === 'animation'
                ? 'bg-[#E8D7B8] text-[#0F2C59] shadow-xs'
                : 'text-stone-300 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>3D Moving Scene</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('form')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
              viewMode === 'form'
                ? 'bg-[#E8D7B8] text-[#0F2C59] shadow-xs'
                : 'text-stone-300 hover:text-white'
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>Get Instant Quote</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {viewMode === 'form' ? (
        <div className="p-4 sm:p-6 bg-[#FAF8F5]">
          <div className="mb-4 pb-3 border-b border-[#EAE5DC] flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#14171C] font-serif">Quick Relocation Quotation</h3>
              <p className="text-xs text-[#56616D]">Direct response within 15 minutes by our moving coordinator</p>
            </div>
            <button
              type="button"
              onClick={() => setViewMode('animation')}
              className="text-xs text-[#0F2C59] hover:underline font-semibold flex items-center gap-1"
            >
              <span>Back to Animation</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
          <QuoteForm compact initialFrom={quickFrom} initialTo={quickTo} initialMoveType={quickType} />
        </div>
      ) : (
        <div className="p-4 sm:p-6 bg-gradient-to-b from-[#FDFBF7] via-[#FAF6F0] to-[#F5EFEB] flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Ambient Decorative Gradients */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-amber-200/20 via-pink-200/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-300/15 via-emerald-200/15 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Stage Switcher Pills & Floating Metrics */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-[#EAE5DC]/80">
            {/* Stage Selector Tabs */}
            <div className="flex items-center gap-1.5 bg-stone-100/90 p-1 rounded-2xl border border-[#EAE5DC] shadow-inner text-xs">
              <button
                type="button"
                onClick={() => setStage('packing')}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 ${
                  stage === 'packing'
                    ? 'bg-white text-[#0F2C59] shadow-xs border border-[#E8D7B8]'
                    : 'text-[#56616D] hover:text-[#14171C]'
                }`}
              >
                <Box className="w-3.5 h-3.5 text-[#B88E2F]" />
                <span>1. Conveyor Hub</span>
              </button>

              <button
                type="button"
                onClick={() => setStage('transit')}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 ${
                  stage === 'transit'
                    ? 'bg-white text-[#0F2C59] shadow-xs border border-[#E8D7B8]'
                    : 'text-[#56616D] hover:text-[#14171C]'
                }`}
              >
                <Truck className="w-3.5 h-3.5 text-[#0F2C59]" />
                <span>2. Highway Transit</span>
              </button>

              <button
                type="button"
                onClick={() => setStage('delivery')}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 ${
                  stage === 'delivery'
                    ? 'bg-white text-[#0F2C59] shadow-xs border border-[#E8D7B8]'
                    : 'text-[#56616D] hover:text-[#14171C]'
                }`}
              >
                <Home className="w-3.5 h-3.5 text-emerald-600" />
                <span>3. Doorstep Delivery</span>
              </button>
            </div>

            {/* Stage Mini Playback Controls */}
            <div className="flex items-center gap-2 text-xs">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 rounded-xl bg-white border border-[#EAE5DC] text-[#14171C] hover:border-[#B88E2F] transition-all shadow-2xs"
                title={isPlaying ? 'Pause Animation' : 'Play Animation'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 text-stone-600" /> : <Play className="w-3.5 h-3.5 text-emerald-600" />}
              </button>

              <button
                type="button"
                onClick={() => setSpeedMultiplier((s) => (s === 1 ? 1.75 : 1))}
                className={`px-2.5 py-1.5 rounded-xl font-semibold border transition-all flex items-center gap-1 ${
                  speedMultiplier > 1
                    ? 'bg-[#0F2C59] text-white border-[#0F2C59]'
                    : 'bg-white text-[#56616D] border-[#EAE5DC] hover:border-[#B88E2F]'
                }`}
                title="Toggle Speed"
              >
                <Zap className="w-3 h-3 text-[#B88E2F]" />
                <span>{speedMultiplier > 1 ? '1.75x Turbo' : '1.0x Normal'}</span>
              </button>
            </div>
          </div>

          {/* Floating Trust Pills Around the Canvas */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pt-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#0F2C59] border border-[#E8D7B8] shadow-xs animate-pulse">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>4-Layer Bubble Protection Active</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-stone-700 border border-[#EAE5DC] shadow-xs">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              <span>4.9 / 5 Rating (480+ Reviews)</span>
            </div>
          </div>

          {/* THE 3D ISOMETRIC ANIMATION CANVAS */}
          <div className="relative my-4 w-full h-[320px] sm:h-[360px] rounded-2xl bg-gradient-to-b from-[#F5EFEB]/50 via-white to-[#F5EFEB]/80 border border-[#EAE5DC] shadow-inner overflow-hidden flex items-center justify-center select-none">
            {/* Interactive Feedback Toast */}
            {lastPackedMessage && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-xl bg-[#0F2C59] text-white text-xs font-bold shadow-lg border border-[#E8D7B8] animate-bounce">
                {lastPackedMessage}
              </div>
            )}

            {/* STAGE 1: ISOMETRIC PACKING CONVEYOR SCENE */}
            {stage === 'packing' && (
              <div className="relative w-full h-full flex items-center justify-center">
                <svg
                  viewBox="0 0 640 360"
                  className="w-full h-full max-w-[620px] max-h-[350px] drop-shadow-md"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    {/* Shadow Filter */}
                    <filter id="softShadow" x="-10%" y="-10%" width="130%" height="130%">
                      <feDropShadow dx="0" dy="6" stdDeviation="6" floodOpacity="0.18" floodColor="#0F2C59" />
                    </filter>
                    {/* Building Walls Gradient */}
                    <linearGradient id="hubWallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="50%" stopColor="#FAF7F2" />
                      <stop offset="100%" stopColor="#EFE8DE" />
                    </linearGradient>
                    {/* Roof Dome Gradient */}
                    <linearGradient id="hubRoofGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#F5ECE1" />
                      <stop offset="100%" stopColor="#E3D5C3" />
                    </linearGradient>
                    {/* Awning Striped Pattern */}
                    <pattern id="awningStripes" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                      <rect width="10" height="20" fill="#0F2C59" />
                      <rect x="10" width="10" height="20" fill="#D4AF37" />
                    </pattern>
                    {/* Box Kraft Gradient */}
                    <linearGradient id="boxTop" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F5DDB3" />
                      <stop offset="100%" stopColor="#E8CA97" />
                    </linearGradient>
                    <linearGradient id="boxLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C99B61" />
                      <stop offset="100%" stopColor="#A87A40" />
                    </linearGradient>
                    <linearGradient id="boxRight" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E0B175" />
                      <stop offset="100%" stopColor="#BF8E4F" />
                    </linearGradient>
                    {/* Conveyor Belt Gradient */}
                    <linearGradient id="beltGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#475569" />
                      <stop offset="50%" stopColor="#64748B" />
                      <stop offset="100%" stopColor="#334155" />
                    </linearGradient>
                    {/* Truck Gradients */}
                    <linearGradient id="truckCab" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E4B8A" />
                      <stop offset="100%" stopColor="#0F2C59" />
                    </linearGradient>
                    <linearGradient id="truckBody" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#F1EDE6" />
                    </linearGradient>
                  </defs>

                  {/* Ground Tile Isometric Floor Grid */}
                  <g opacity="0.6">
                    <path d="M 320 40 L 600 190 L 320 340 L 40 190 Z" fill="#FBF9F5" stroke="#EAE5DC" strokeWidth="1.5" />
                    <path d="M 320 70 L 560 190 L 320 310 L 80 190 Z" fill="#FAF6EE" stroke="#E8E2D7" strokeWidth="1" strokeDasharray="3 3" />
                  </g>

                  {/* 1. DISPATCH HUB BUILDING (Right/Center-Back) */}
                  <g id="hubBuilding" filter="url(#softShadow)" className="transition-transform duration-500 hover:scale-[1.01]">
                    {/* Floor Shadow of Building */}
                    <ellipse cx="440" cy="210" rx="110" ry="45" fill="rgba(15, 44, 89, 0.12)" />

                    {/* Main Cylindrical / Isometric Warehouse Hub */}
                    {/* Back Wall Base */}
                    <path
                      d="M 360 160 C 360 110, 520 110, 520 160 L 520 220 C 520 250, 360 250, 360 220 Z"
                      fill="url(#hubWallGrad)"
                      stroke="#E5DEC9"
                      strokeWidth="2"
                    />

                    {/* Domed Roof */}
                    <ellipse cx="440" cy="140" rx="80" ry="32" fill="url(#hubRoofGrad)" stroke="#D8C8B1" strokeWidth="2" />
                    {/* Skylight on Roof */}
                    <ellipse cx="440" cy="135" rx="35" ry="14" fill="#C5D9F2" stroke="#93B4E3" strokeWidth="1.5" opacity="0.8" />

                    {/* Striped Canopy Awning with "SHABARI" */}
                    <path
                      d="M 380 180 C 380 165, 460 165, 460 180 L 465 195 C 465 205, 375 205, 375 195 Z"
                      fill="url(#awningStripes)"
                      stroke="#0F2C59"
                      strokeWidth="1.5"
                    />

                    {/* Arched Hub Door with Warm Glowing Light */}
                    <path
                      d="M 400 230 L 400 195 C 400 182, 440 182, 440 195 L 440 230 Z"
                      fill="#FEF3C7"
                      stroke="#F59E0B"
                      strokeWidth="1.5"
                    />
                    {/* Door Interior Glow */}
                    <path
                      d="M 405 230 L 405 198 C 405 188, 435 188, 435 198 L 435 230 Z"
                      fill="#FDE68A"
                      opacity="0.9"
                    />

                    {/* Hub Signboard */}
                    <rect x="390" y="152" width="60" height="14" rx="4" fill="#0F2C59" stroke="#E8D7B8" strokeWidth="1" />
                    <text x="420" y="162" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold" letterSpacing="0.8">
                      SHABARI HUB
                    </text>

                    {/* Cute Potted Plant near Entrance */}
                    <ellipse cx="375" cy="225" rx="8" ry="4" fill="#B45309" />
                    <path d="M 372 225 L 373 232 L 377 232 L 378 225 Z" fill="#D97706" />
                    <circle cx="375" cy="222" r="7" fill="#10B981" />
                    <circle cx="372" cy="220" r="5" fill="#059669" />
                    <circle cx="378" cy="220" r="5" fill="#34D399" />
                  </g>

                  {/* 2. ISOMETRIC CONVEYOR BELT TRACK */}
                  <g id="conveyorTrack" filter="url(#softShadow)">
                    {/* Track Shadow */}
                    <path d="M 410 232 L 230 295 L 210 282 L 390 220 Z" fill="rgba(15, 44, 89, 0.15)" />

                    {/* Metal Support Legs */}
                    <line x1="390" y1="230" x2="390" y2="255" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
                    <line x1="330" y1="250" x2="330" y2="275" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
                    <line x1="270" y1="270" x2="270" y2="295" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
                    <line x1="220" y1="288" x2="220" y2="310" stroke="#475569" strokeWidth="4" strokeLinecap="round" />

                    {/* Main Conveyor Bed Surface */}
                    <path d="M 410 225 L 210 292 L 235 305 L 435 238 Z" fill="url(#beltGrad)" stroke="#334155" strokeWidth="2" />

                    {/* Rollers along the Conveyor */}
                    <g stroke="#94A3B8" strokeWidth="1.5" opacity="0.8">
                      <line x1="400" y1="228" x2="422" y2="236" />
                      <line x1="370" y1="238" x2="392" y2="246" />
                      <line x1="340" y1="248" x2="362" y2="256" />
                      <line x1="310" y1="258" x2="332" y2="266" />
                      <line x1="280" y1="268" x2="302" y2="276" />
                      <line x1="250" y1="278" x2="272" y2="286" />
                      <line x1="220" y1="288" x2="242" y2="296" />
                    </g>

                    {/* Glowing Safety Guard Rails */}
                    <path d="M 408 222 L 208 289" stroke="#B88E2F" strokeWidth="3" strokeLinecap="round" />
                    <path d="M 436 235 L 236 302" stroke="#B88E2F" strokeWidth="3" strokeLinecap="round" />
                  </g>

                  {/* 3. GLIDING 3D CARDBOARD BOXES (Animated along the conveyor) */}
                  {/* Box 1 (Near Hub Door) */}
                  <g className="cursor-pointer transition-transform hover:scale-110" onClick={handlePackCustomBox}>
                    <g transform="translate(370, 218)">
                      {/* Box Shadow */}
                      <ellipse cx="14" cy="22" rx="14" ry="6" fill="rgba(15, 44, 89, 0.2)" />
                      {/* 3D Isometric Box */}
                      {/* Left Face */}
                      <path d="M 0 6 L 14 12 L 14 26 L 0 20 Z" fill="url(#boxLeft)" stroke="#926229" strokeWidth="0.8" />
                      {/* Right Face */}
                      <path d="M 14 12 L 28 6 L 28 20 L 14 26 Z" fill="url(#boxRight)" stroke="#B47E3B" strokeWidth="0.8" />
                      {/* Top Face */}
                      <path d="M 14 0 L 28 6 L 14 12 L 0 6 Z" fill="url(#boxTop)" stroke="#D8A562" strokeWidth="0.8" />
                      {/* Red Fragile Tape */}
                      <path d="M 7 3 L 21 9 L 21 13 L 7 7 Z" fill="#DC2626" opacity="0.85" />
                      <text x="14" y="8" fill="#FFF" fontSize="3.5" fontWeight="bold" textAnchor="middle">FRAGILE</text>
                    </g>
                  </g>

                  {/* Box 2 (Center Conveyor) */}
                  <g className="cursor-pointer transition-transform hover:scale-110" onClick={handlePackCustomBox}>
                    <g transform="translate(305, 238)">
                      {/* Box Shadow */}
                      <ellipse cx="16" cy="25" rx="16" ry="7" fill="rgba(15, 44, 89, 0.25)" />
                      {/* Larger Heavy-Duty Box */}
                      <path d="M 0 7 L 16 14 L 16 30 L 0 23 Z" fill="url(#boxLeft)" stroke="#926229" strokeWidth="0.8" />
                      <path d="M 16 14 L 32 7 L 32 23 L 16 30 Z" fill="url(#boxRight)" stroke="#B47E3B" strokeWidth="0.8" />
                      <path d="M 16 0 L 32 7 L 16 14 L 0 7 Z" fill="url(#boxTop)" stroke="#D8A562" strokeWidth="0.8" />
                      {/* Shabari Stamp */}
                      <rect x="18" y="14" width="10" height="6" rx="1" fill="#0F2C59" />
                      <text x="23" y="18.5" fill="#E8D7B8" fontSize="3.2" fontWeight="bold" textAnchor="middle">SHABARI</text>
                      {/* Handle with care icon */}
                      <circle cx="8" cy="15" r="2.5" fill="#FEF3C7" />
                      <text x="8" y="16.5" fill="#B45309" fontSize="3" fontWeight="bold" textAnchor="middle">⬆️</text>
                    </g>
                  </g>

                  {/* Box 3 (Entering Truck Ramp) */}
                  <g className="cursor-pointer transition-transform hover:scale-110" onClick={handlePackCustomBox}>
                    <g transform="translate(235, 260)">
                      <ellipse cx="13" cy="20" rx="13" ry="5.5" fill="rgba(15, 44, 89, 0.2)" />
                      <path d="M 0 5 L 13 10 L 13 22 L 0 17 Z" fill="url(#boxLeft)" stroke="#926229" strokeWidth="0.8" />
                      <path d="M 13 10 L 26 5 L 26 17 L 13 22 Z" fill="url(#boxRight)" stroke="#B47E3B" strokeWidth="0.8" />
                      <path d="M 13 0 L 26 5 L 13 10 L 0 5 Z" fill="url(#boxTop)" stroke="#D8A562" strokeWidth="0.8" />
                      {/* Cross Taping */}
                      <line x1="0" y1="5" x2="26" y2="5" stroke="#C27A2A" strokeWidth="1.5" />
                      <line x1="13" y1="0" x2="13" y2="10" stroke="#C27A2A" strokeWidth="1.5" />
                    </g>
                  </g>

                  {/* 4. THE SHABARI MOVING TRUCK (Front-Left) */}
                  <g id="shabariTruck" filter="url(#softShadow)" className="transition-transform duration-300">
                    {/* Floor Shadow Under Truck */}
                    <ellipse cx="140" cy="285" rx="85" ry="30" fill="rgba(15, 44, 89, 0.25)" />

                    {/* Truck Open Cargo Loading Ramp */}
                    <path d="M 210 270 L 180 278 L 195 285 L 225 277 Z" fill="#94A3B8" stroke="#475569" strokeWidth="1.5" />

                    {/* Main Covered Cargo Container Body */}
                    {/* Cargo Container Left Wall */}
                    <path d="M 100 150 L 190 195 L 190 265 L 100 220 Z" fill="url(#truckBody)" stroke="#CBD5E1" strokeWidth="2" />
                    {/* Cargo Container Top */}
                    <path d="M 100 150 L 140 130 L 230 175 L 190 195 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
                    {/* Cargo Container Back Wall (Open Bay) */}
                    <path d="M 190 195 L 230 175 L 230 245 L 190 265 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
                    {/* Interior Cargo Light Glowing */}
                    <ellipse cx="210" cy="210" rx="12" ry="25" fill="#FEF08A" opacity="0.3" />

                    {/* "SHABARI" Branded Graphic on Truck Side */}
                    <g transform="translate(112, 172) rotate(26)">
                      <rect x="0" y="0" width="70" height="20" rx="3" fill="#0F2C59" />
                      <text x="35" y="10" fill="#E8D7B8" fontSize="6.5" fontWeight="bold" textAnchor="middle">
                        SHABARI
                      </text>
                      <text x="35" y="16" fill="#FFFFFF" fontSize="3.5" fontWeight="bold" textAnchor="middle" letterSpacing="0.4">
                        PACKERS & MOVERS
                      </text>
                    </g>

                    {/* Speed Stripes on Container */}
                    <path d="M 100 212 L 185 255" stroke="#B88E2F" strokeWidth="3" />
                    <path d="M 100 216 L 185 259" stroke="#E8D7B8" strokeWidth="1.5" />

                    {/* Truck Front Driver Cab */}
                    {/* Cab Body */}
                    <path d="M 50 185 L 100 210 L 100 255 L 50 230 Z" fill="url(#truckCab)" stroke="#0A1C38" strokeWidth="2" />
                    {/* Cab Hood */}
                    <path d="M 30 205 L 50 215 L 50 240 L 30 230 Z" fill="#163B75" stroke="#0A1C38" strokeWidth="2" />
                    {/* Cab Windshield Glass */}
                    <path d="M 52 188 L 78 201 L 78 215 L 52 202 Z" fill="#93C5FD" stroke="#3B82F6" strokeWidth="1" opacity="0.9" />
                    {/* Cab Chrome Bumper & Headlight */}
                    <path d="M 28 228 L 38 233 L 38 240 L 28 235 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
                    <circle cx="34" cy="226" r="3" fill="#FEF08A" stroke="#F59E0B" strokeWidth="1" />
                    {/* Headlight Ray Beam */}
                    <polygon points="34,226 0,220 0,265" fill="rgba(254, 240, 138, 0.25)" />

                    {/* Wheels */}
                    {/* Front Wheel */}
                    <ellipse cx="60" cy="245" rx="10" ry="16" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
                    <ellipse cx="60" cy="245" rx="5" ry="8" fill="#94A3B8" />
                    {/* Middle Wheel */}
                    <ellipse cx="125" cy="265" rx="11" ry="17" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
                    <ellipse cx="125" cy="265" rx="5" ry="9" fill="#94A3B8" />
                    {/* Rear Wheel */}
                    <ellipse cx="170" cy="285" rx="11" ry="17" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
                    <ellipse cx="170" cy="285" rx="5" ry="9" fill="#94A3B8" />
                  </g>

                  {/* Ambient Interactive Floating Badges */}
                  <g className="cursor-pointer" onClick={handlePackCustomBox}>
                    {/* Badge 1: Instant Packing Button */}
                    <g transform="translate(480, 50)">
                      <rect width="130" height="34" rx="12" fill="#FFFFFF" stroke="#E8D7B8" strokeWidth="1.5" filter="url(#softShadow)" />
                      <circle cx="18" cy="17" r="10" fill="#FEF3C7" />
                      <text x="18" y="21" fill="#B45309" fontSize="10" textAnchor="middle">📦</text>
                      <text x="70" y="15" fill="#14171C" fontSize="9" fontWeight="bold">Click to Pack Box!</text>
                      <text x="70" y="26" fill="#10B981" fontSize="7.5" fontWeight="semibold">Click to drop parcel ✨</text>
                    </g>
                  </g>
                </svg>
              </div>
            )}

            {/* STAGE 2: HIGHWAY TRANSIT ON NH44/NH65 */}
            {stage === 'transit' && (
              <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-sky-50 via-[#FDFBF7] to-[#FAF8F5]">
                <svg
                  viewBox="0 0 640 360"
                  className="w-full h-full max-w-[620px] max-h-[350px] drop-shadow-md"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Sky & Distant City Silhouette */}
                  <path d="M 0 160 L 640 160 L 640 360 L 0 360 Z" fill="#F8FAFC" />
                  {/* Distant Hills */}
                  <path d="M 0 160 Q 160 120 320 160 Q 480 130 640 160 L 640 190 L 0 190 Z" fill="#E2E8F0" opacity="0.6" />
                  {/* City Towers Silhouette (Hyderabad & Bengaluru skyline) */}
                  <rect x="80" y="110" width="25" height="50" fill="#CBD5E1" opacity="0.7" rx="2" />
                  <rect x="110" y="90" width="30" height="70" fill="#94A3B8" opacity="0.6" rx="2" />
                  <rect x="145" y="125" width="20" height="35" fill="#CBD5E1" opacity="0.8" rx="2" />
                  <rect x="460" y="95" width="28" height="65" fill="#94A3B8" opacity="0.6" rx="2" />
                  <rect x="492" y="115" width="32" height="45" fill="#CBD5E1" opacity="0.7" rx="2" />

                  {/* 4-Lane Express Highway */}
                  <path d="M 0 200 L 640 200 L 640 320 L 0 320 Z" fill="#334155" />
                  {/* Green Highway Shoulder */}
                  <rect x="0" y="190" width="640" height="10" fill="#10B981" opacity="0.7" />
                  <rect x="0" y="320" width="640" height="40" fill="#059669" opacity="0.6" />

                  {/* Animated Road Dashes */}
                  <line x1="0" y1="260" x2="640" y2="260" stroke="#FDE047" strokeWidth="4" strokeDasharray="30 25" className="animate-pulse" />

                  {/* Milestone Signboard */}
                  <g transform="translate(500, 160)">
                    <rect x="0" y="0" width="70" height="36" rx="6" fill="#047857" stroke="#FFFFFF" strokeWidth="2" />
                    <text x="35" y="14" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">NH-44 EXPRESS</text>
                    <text x="35" y="27" fill="#FEF08A" fontSize="7.5" fontWeight="semibold" textAnchor="middle">Hyd ➔ Blr 380 KM</text>
                    <rect x="32" y="36" width="6" height="25" fill="#64748B" />
                  </g>

                  {/* Moving Shabari Truck in Profile (Driving with Speed Effect) */}
                  <g transform="translate(190, 160)">
                    {/* Ground Shadow */}
                    <ellipse cx="140" cy="115" rx="130" ry="14" fill="rgba(15, 23, 42, 0.45)" />

                    {/* Speed Trails behind the Truck */}
                    <line x1="-30" y1="30" x2="-5" y2="30" stroke="#B88E2F" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
                    <line x1="-50" y1="50" x2="-10" y2="50" stroke="#0F2C59" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
                    <line x1="-35" y1="70" x2="-8" y2="70" stroke="#B88E2F" strokeWidth="3" strokeLinecap="round" opacity="0.8" />

                    {/* Truck Body Container */}
                    <rect x="0" y="10" width="180" height="85" rx="6" fill="#FFFFFF" stroke="#0F2C59" strokeWidth="3" />
                    {/* Navy Branding Stripe */}
                    <rect x="0" y="35" width="180" height="30" fill="#0F2C59" />
                    <text x="90" y="54" fill="#E8D7B8" fontSize="13" fontWeight="bold" textAnchor="middle" letterSpacing="1">
                      SHABARI PACKERS & MOVERS
                    </text>
                    <text x="90" y="80" fill="#56616D" fontSize="7.5" fontWeight="bold" textAnchor="middle">
                      TELANGANA • ANDHRA PRADESH • KARNATAKA
                    </text>

                    {/* Cab */}
                    <path d="M 180 35 L 220 35 L 245 60 L 245 95 L 180 95 Z" fill="#0F2C59" stroke="#0A1C38" strokeWidth="2.5" />
                    <polygon points="185,42 215,42 235,60 185,60" fill="#93C5FD" opacity="0.9" />

                    {/* Glowing Headlight */}
                    <circle cx="242" cy="78" r="4.5" fill="#FEF08A" stroke="#F59E0B" strokeWidth="1.5" />
                    <polygon points="245,78 400,60 400,105" fill="rgba(254, 240, 138, 0.22)" />

                    {/* Wheels */}
                    <circle cx="45" cy="98" r="15" fill="#0F172A" stroke="#475569" strokeWidth="3" />
                    <circle cx="45" cy="98" r="7" fill="#E2E8F0" />
                    <circle cx="135" cy="98" r="15" fill="#0F172A" stroke="#475569" strokeWidth="3" />
                    <circle cx="135" cy="98" r="7" fill="#E2E8F0" />
                    <circle cx="205" cy="98" r="15" fill="#0F172A" stroke="#475569" strokeWidth="3" />
                    <circle cx="205" cy="98" r="7" fill="#E2E8F0" />
                  </g>
                </svg>
              </div>
            )}

            {/* STAGE 3: DOORSTEP SAFE DELIVERY */}
            {stage === 'delivery' && (
              <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-[#FEFCE8]/40 via-white to-[#F5EFEB]">
                <svg
                  viewBox="0 0 640 360"
                  className="w-full h-full max-w-[620px] max-h-[350px] drop-shadow-md"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Destination Villa / Gated Home */}
                  <g transform="translate(320, 70)" filter="url(#softShadow)">
                    {/* House Body */}
                    <rect x="0" y="70" width="180" height="130" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
                    {/* Modern Pitched Roof */}
                    <polygon points="-15,70 90,15 195,70" fill="#0F2C59" stroke="#0A1C38" strokeWidth="2" />
                    {/* Welcome Balcony / Porch */}
                    <rect x="60" y="130" width="60" height="70" rx="4" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    {/* Door */}
                    <rect x="75" y="145" width="30" height="55" rx="3" fill="#78350F" />
                    <circle cx="82" cy="175" r="2" fill="#FDE047" />

                    {/* Window with warm lights */}
                    <rect x="20" y="95" width="35" height="35" rx="4" fill="#93C5FD" stroke="#3B82F6" strokeWidth="1" />
                    <rect x="125" y="95" width="35" height="35" rx="4" fill="#93C5FD" stroke="#3B82F6" strokeWidth="1" />

                    {/* Welcome Mat */}
                    <rect x="65" y="198" width="50" height="10" rx="2" fill="#B45309" />
                    <text x="90" y="205" fill="#FFF" fontSize="5" fontWeight="bold" textAnchor="middle">WELCOME HOME</text>
                  </g>

                  {/* Arrived Truck & Unloaded Furniture */}
                  <g transform="translate(60, 160)">
                    {/* Truck Parked */}
                    <rect x="0" y="20" width="130" height="65" rx="4" fill="#FFFFFF" stroke="#0F2C59" strokeWidth="2" />
                    <rect x="0" y="38" width="130" height="20" fill="#0F2C59" />
                    <text x="65" y="52" fill="#E8D7B8" fontSize="8" fontWeight="bold" textAnchor="middle">SHABARI ARRIVED</text>
                    {/* Wheels */}
                    <circle cx="30" cy="85" r="12" fill="#0F172A" />
                    <circle cx="100" cy="85" r="12" fill="#0F172A" />
                  </g>

                  {/* Protected Furniture Placed Safely at New Home */}
                  <g transform="translate(240, 230)">
                    {/* Safe Sofa */}
                    <rect x="0" y="15" width="55" height="25" rx="6" fill="#1E4B8A" stroke="#0F2C59" strokeWidth="1.5" />
                    <rect x="5" y="8" width="45" height="15" rx="4" fill="#2563EB" />
                    {/* Cushioning Wrap Tag */}
                    <text x="27" y="26" fill="#FFF" fontSize="4.5" fontWeight="bold" textAnchor="middle">100% SAFE</text>

                    {/* Carton Stack */}
                    <rect x="65" y="12" width="22" height="20" rx="2" fill="#D97706" stroke="#92400E" strokeWidth="1" />
                    <text x="76" y="24" fill="#FFF" fontSize="5" fontWeight="bold" textAnchor="middle">FRAGILE</text>

                    <rect x="68" y="-4" width="16" height="15" rx="2" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
                    <text x="76" y="6" fill="#FFF" fontSize="4" fontWeight="bold" textAnchor="middle">KITCHEN</text>
                  </g>

                  {/* Big Green Success Badge */}
                  <g transform="translate(210, 30)">
                    <rect width="220" height="42" rx="14" fill="#059669" stroke="#FFFFFF" strokeWidth="2" filter="url(#softShadow)" />
                    <circle cx="25" cy="21" r="12" fill="#34D399" />
                    <text x="25" y="26" fill="#064E3B" fontSize="13" fontWeight="bold" textAnchor="middle">✓</text>
                    <text x="120" y="18" fill="#FFFFFF" fontSize="11" fontWeight="bold">Safely Delivered & Placed!</text>
                    <text x="120" y="32" fill="#D1FAE5" fontSize="8.5">Zero Damages • Clean Settlement</text>
                  </g>
                </svg>
              </div>
            )}

            {/* Bottom Overlay Pill on Canvas */}
            <div className="absolute bottom-3 left-4 right-4 sm:left-auto sm:right-4 z-20 flex items-center justify-between sm:justify-end gap-3 pointer-events-auto">
              <span className="text-[11px] font-bold text-[#0F2C59] bg-white/95 px-3 py-1.5 rounded-xl border border-[#E8D7B8] shadow-sm flex items-center gap-1.5">
                <Box className="w-3.5 h-3.5 text-[#B88E2F]" />
                <span>Total Moves Protected: <strong>{packedCount.toLocaleString()}</strong></span>
              </span>

              <button
                type="button"
                onClick={handlePackCustomBox}
                className="text-xs font-bold text-white bg-[#0F2C59] hover:bg-[#0A1C38] px-3.5 py-1.5 rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3 text-[#E8D7B8]" />
                <span>Pack Another!</span>
              </button>
            </div>
          </div>

          {/* QUICK MOVING ESTIMATE INPUT STRIP (Matching the Reference Video's Interactive Bar!) */}
          <div className="relative z-10 pt-2 border-t border-[#EAE5DC]/80">
            <form
              onSubmit={handleQuickEstimateSubmit}
              className="bg-white p-2.5 sm:p-3 rounded-2xl border border-[#E8D7B8] shadow-md flex flex-col md:flex-row items-center gap-2.5"
            >
              {/* From input */}
              <div className="w-full md:w-1/3 flex items-center gap-2 px-3 py-2 bg-stone-50 rounded-xl border border-stone-200 focus-within:border-[#B88E2F]">
                <MapPin className="w-4 h-4 text-[#B88E2F] shrink-0" />
                <div className="flex-1 text-left">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-500">
                    From City / Area
                  </label>
                  <input
                    type="text"
                    value={quickFrom}
                    onChange={(e) => setQuickFrom(e.target.value)}
                    placeholder="e.g. Hyderabad, Gachibowli"
                    className="w-full bg-transparent text-xs font-semibold text-[#14171C] focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* To input */}
              <div className="w-full md:w-1/3 flex items-center gap-2 px-3 py-2 bg-stone-50 rounded-xl border border-stone-200 focus-within:border-[#B88E2F]">
                <Navigation className="w-4 h-4 text-[#0F2C59] shrink-0" />
                <div className="flex-1 text-left">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-500">
                    Destination City
                  </label>
                  <input
                    type="text"
                    value={quickTo}
                    onChange={(e) => setQuickTo(e.target.value)}
                    placeholder="e.g. Bengaluru, Vijayawada"
                    className="w-full bg-transparent text-xs font-semibold text-[#14171C] focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Shifting Type Select */}
              <div className="w-full md:w-1/4 flex items-center gap-2 px-3 py-2 bg-stone-50 rounded-xl border border-stone-200">
                <Box className="w-4 h-4 text-[#B88E2F] shrink-0" />
                <div className="flex-1 text-left">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-500">
                    Move Size
                  </label>
                  <select
                    value={quickType}
                    onChange={(e) => setQuickType(e.target.value)}
                    className="w-full bg-transparent text-xs font-semibold text-[#14171C] focus:outline-none cursor-pointer"
                  >
                    <option value="Household Shifting (1-2 BHK)">1 - 2 BHK Home</option>
                    <option value="Household Shifting (3+ BHK / Villa)">3+ BHK / Villa</option>
                    <option value="Office / Commercial Relocation">Office Shifting</option>
                    <option value="Vehicle Transportation (Bike / Car)">Vehicle Shifting</option>
                  </select>
                </div>
              </div>

              {/* Submit Arrow Button (Just like the video!) */}
              <button
                type="submit"
                className="w-full md:w-auto px-5 py-3 rounded-xl font-bold text-xs text-white bg-[#0F2C59] hover:bg-[#0A1C38] active:scale-95 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 shrink-0 group"
              >
                <span>Calculate Quote</span>
                <ArrowRight className="w-4 h-4 text-[#E8D7B8] group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
