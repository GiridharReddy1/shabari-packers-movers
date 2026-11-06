'use client';

import React from 'react';

/**
 * HeroMovingVanBackground
 * A high-fidelity, realistic cartoon-style moving van animation designed for the Shabari hero section.
 * Features:
 * - Handcrafted cartoon Shabari container moving truck with European/Indian cabin aesthetics
 * - Dynamic realistic cartoon physics: suspension bobbing, chassis pitch, spinning alloy wheels with tire tread
 * - Secondary animation: jiggling roof cargo cartons, fluttering antenna pennant, and expanding cartoon exhaust puffs
 * - Dual glowing headlights projecting a warm light beam onto the highway
 * - Scenic environment: Parallax rolling green hills, distant Hyderabad skyline silhouette, highway milestone (NH-44), green signboard, drifting clouds, and an asphalt road with scrolling dashed lane markings
 */
export default function HeroMovingVanBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* 1. SKY & DISTANT HORIZON */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5] via-[#FBF7EE] to-[#F5ECE0]/70" />

      {/* Floating cartoon clouds drifting across the sky */}
      <div className="absolute top-4 left-0 w-full h-32 pointer-events-none overflow-hidden">
        {/* Cloud 1 */}
        <div
          className="absolute top-2 w-36 h-12 opacity-65"
          style={{
            animation: 'driftCloud 38s linear infinite',
            left: '-160px',
          }}
        >
          <svg viewBox="0 0 120 40" fill="#FFFFFF" className="w-full h-full drop-shadow-xs">
            <path d="M15,35 Q5,35 5,25 Q5,15 18,15 Q22,5 35,5 Q48,5 52,14 Q60,10 70,15 Q82,12 88,22 Q98,22 98,32 Q98,35 90,35 Z" />
          </svg>
        </div>

        {/* Cloud 2 */}
        <div
          className="absolute top-8 w-48 h-14 opacity-50"
          style={{
            animation: 'driftCloud 48s linear infinite 14s',
            left: '-200px',
          }}
        >
          <svg viewBox="0 0 140 45" fill="#FFFFFF" className="w-full h-full drop-shadow-xs">
            <path d="M20,40 Q8,40 8,28 Q8,18 22,18 Q28,6 42,6 Q56,6 62,16 Q72,12 85,18 Q98,14 105,25 Q118,25 118,36 Q118,40 108,40 Z" />
          </svg>
        </div>

        {/* Cloud 3 */}
        <div
          className="absolute top-16 w-28 h-10 opacity-40 hidden sm:block"
          style={{
            animation: 'driftCloud 32s linear infinite 6s',
            left: '-140px',
          }}
        >
          <svg viewBox="0 0 100 35" fill="#FFFFFF" className="w-full h-full drop-shadow-xs">
            <path d="M12,30 Q4,30 4,22 Q4,14 15,14 Q19,5 30,5 Q40,5 44,12 Q52,9 60,13 Q70,11 75,19 Q84,19 84,27 Q84,30 76,30 Z" />
          </svg>
        </div>
      </div>

      {/* 2. DISTANT SILHOUETTE (Hyderabad Skyline & Charminar minarets in warm pastel) */}
      <div className="absolute bottom-28 sm:bottom-32 md:bottom-36 left-0 right-0 h-28 opacity-25 pointer-events-none">
        <svg
          viewBox="0 0 1400 120"
          preserveAspectRatio="none"
          className="w-full h-full fill-[#8F7D65]"
        >
          {/* Charminar & Skyline silhouette motif */}
          <path d="M0,120 L0,105 L40,105 L40,85 L48,85 L48,70 L52,70 L52,85 L60,85 L60,105 L110,105 L110,75 L125,75 L125,55 L130,55 L130,40 L134,40 L134,55 L139,55 L139,75 L155,75 L155,105 L210,105 L210,90 L240,90 L240,65 L270,65 L270,105 L340,105 L340,80 L355,80 L355,60 L360,60 L360,45 L364,45 L364,60 L369,60 L369,80 L385,80 L385,105 L450,105 L450,70 L480,70 L480,105 L530,105 L530,85 L540,85 L540,50 L545,50 L545,35 L548,35 L548,50 L553,50 L553,85 L565,85 L565,105 L640,105 L640,75 L675,75 L675,105 L740,105 L740,85 L770,85 L770,60 L800,60 L800,105 L870,105 L870,75 L885,75 L885,55 L890,55 L890,40 L894,40 L894,55 L899,55 L899,75 L915,75 L915,105 L980,105 L980,70 L1010,70 L1010,105 L1080,105 L1080,85 L1110,85 L1110,65 L1140,65 L1140,105 L1210,105 L1210,75 L1225,75 L1225,55 L1230,55 L1230,40 L1234,40 L1234,55 L1239,55 L1239,75 L1255,75 L1255,105 L1330,105 L1330,80 L1365,80 L1365,105 L1400,105 L1400,120 Z" />
        </svg>
      </div>

      {/* 3. ROLLING GREEN CARTOON HILLS (Midground) */}
      <div className="absolute bottom-24 sm:bottom-28 md:bottom-32 left-0 right-0 h-28 pointer-events-none">
        {/* Back Hill Layer */}
        <svg
          viewBox="0 0 1200 90"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full fill-[#E1ECE2] opacity-75"
        >
          <path d="M0,90 Q220,15 480,55 T960,40 T1200,65 L1200,90 Z" />
        </svg>

        {/* Front Hill Layer with stylized cartoon trees */}
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full fill-[#CFE5D2]"
        >
          <path d="M0,80 Q160,25 360,50 T760,25 T1200,45 L1200,80 Z" />
        </svg>

        {/* Cute decorative cartoon trees along the hill crest */}
        <div className="absolute bottom-3 left-[12%] hidden sm:block">
          <CartoonTree size="sm" />
        </div>
        <div className="absolute bottom-4 left-[28%] hidden md:block">
          <CartoonTree size="md" />
        </div>
        <div className="absolute bottom-2 left-[54%] hidden sm:block">
          <CartoonTree size="sm" />
        </div>
        <div className="absolute bottom-4 left-[76%] hidden lg:block">
          <CartoonTree size="md" />
        </div>
        <div className="absolute bottom-3 left-[91%] hidden sm:block">
          <CartoonTree size="sm" />
        </div>
      </div>

      {/* 4. THE HIGHWAY & ROADSIDE (Foreground Road System) */}
      <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-32 md:h-36 overflow-hidden pointer-events-none">
        {/* Grassy roadside shoulder */}
        <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[#8BB888] to-[#6E9E6B] border-t border-[#A4CAA1] flex items-center px-4 overflow-hidden">
          {/* Wildflowers and grass tufts */}
          <div className="flex justify-between w-full opacity-70">
            <span className="text-[10px]">🌼</span>
            <span className="text-[9px] hidden sm:inline">🌱</span>
            <span className="text-[10px]">🌸</span>
            <span className="text-[9px] hidden md:inline">🌱</span>
            <span className="text-[10px]">🌼</span>
            <span className="text-[9px] hidden sm:inline">🌸</span>
            <span className="text-[10px]">🌱</span>
            <span className="text-[10px] hidden lg:inline">🌼</span>
            <span className="text-[9px] hidden sm:inline">🌸</span>
            <span className="text-[10px]">🌱</span>
          </div>
        </div>

        {/* Concrete roadside curb */}
        <div className="absolute top-6 left-0 right-0 h-2.5 bg-[#CBD5E1] border-t border-b border-[#94A3B8] shadow-xs" />

        {/* Asphalt Road Surface */}
        <div className="absolute top-8.5 bottom-0 left-0 right-0 bg-gradient-to-b from-[#2E343D] to-[#20252C] shadow-inner">
          {/* Road texture grain / sheen */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Animated Dashed Center Lane Marking */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-2 overflow-hidden">
            <div
              className="w-[200%] h-full flex"
              style={{
                animation: 'scrollRoadLine 0.8s linear infinite',
              }}
            >
              {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className="flex-1 flex items-center justify-center">
                  <div className="w-12 h-1.5 bg-[#FBBF24] rounded-full shadow-xs" />
                </div>
              ))}
            </div>
          </div>

          {/* White side edge road lines */}
          <div className="absolute top-2 left-0 right-0 h-0.5 bg-white/40" />
          <div className="absolute bottom-2 left-0 right-0 h-0.5 bg-white/30" />
        </div>

        {/* Authentic Indian Highway Milestone Marker (NH-44) */}
        <div className="absolute top-0.5 left-[8%] hidden sm:block z-10 pointer-events-none">
          <IndianMilestone />
        </div>

        {/* Green Overhead Highway Directional Sign */}
        <div className="absolute top-0 right-[10%] hidden md:block z-10 pointer-events-none">
          <HighwaySignboard />
        </div>
      </div>

      {/* 5. THE BIG REALISTIC CARTOON MOVING VAN (Hero Star Component) */}
      <div
        className="absolute bottom-2 sm:bottom-4 md:bottom-5 left-0 pointer-events-auto"
        style={{
          animation: 'driveBigVan 14s linear infinite',
          willChange: 'transform',
        }}
      >
        <RealisticCartoonVan />
      </div>

      {/* INLINE CSS STYLES FOR HIGH-PERFORMANCE 60FPS CSS ANIMATIONS */}
      <style jsx>{`
        /* Cloud Drifting */
        @keyframes driftCloud {
          0% {
            transform: translateX(-220px);
          }
          100% {
            transform: translateX(calc(100vw + 220px));
          }
        }

        /* Road Dashed Line Scrolling to give high speed driving illusion */
        @keyframes scrollRoadLine {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Continuous Left-to-Right van cruising across the entire hero width */
        @keyframes driveBigVan {
          0% {
            transform: translate3d(-520px, 0, 0);
          }
          100% {
            transform: translate3d(calc(100vw + 120px), 0, 0);
          }
        }
      `}</style>
    </div>
  );
}

/**
 * RealisticCartoonVan Component
 * Hand-illustrated SVG vector van with rich cartoon aesthetics:
 * - Royal navy cabin with glossy windshield, smiling driver waving, chrome grille, license plate
 * - Big cream container with crisp "SHABARI PACKERS & MOVERS" livery, furniture icons, Indian hazard safety stripes
 * - Realistic cartoon physics: suspension bobbing, wheel spin, roof luggage jiggle, smoke puffs, glowing headlights
 */
function RealisticCartoonVan() {
  return (
    <div className="relative group cursor-pointer">
      {/* Friendly Easter Egg Toast on Hover / Touch */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30">
        <div className="bg-[#0F2C59] text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg border border-[#B88E2F] flex items-center gap-1.5 whitespace-nowrap">
          <span>🚚💨</span>
          <span>Shabari Express • On Safe Journey!</span>
        </div>
      </div>

      <div
        className="w-[340px] sm:w-[420px] md:w-[480px] h-auto drop-shadow-2xl"
        style={{
          animation: 'chassisSuspension 0.6s ease-in-out infinite alternate',
          transformOrigin: 'bottom center',
        }}
      >
        <svg
          viewBox="0 0 520 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto overflow-visible"
        >
          <defs>
            {/* Cabin Navy Gradient */}
            <linearGradient id="cabinNavyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E447E" />
              <stop offset="50%" stopColor="#133364" />
              <stop offset="100%" stopColor="#0B1E3C" />
            </linearGradient>

            {/* Container Body Cream Gradient */}
            <linearGradient id="containerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#FAF8F5" />
              <stop offset="100%" stopColor="#EFE9DE" />
            </linearGradient>

            {/* Gold Ribbon Gradient */}
            <linearGradient id="goldRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E2A127" />
              <stop offset="50%" stopColor="#F5BE47" />
              <stop offset="100%" stopColor="#C98818" />
            </linearGradient>

            {/* Windshield Glass Gradient */}
            <linearGradient id="windshieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BAE6FD" />
              <stop offset="60%" stopColor="#7DD3FC" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>

            {/* Headlight Beam Cone Glow */}
            <linearGradient id="headlightBeam" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.75" />
              <stop offset="30%" stopColor="#FDE047" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FEF08A" stopOpacity="0" />
            </linearGradient>

            {/* Wheel Alloy Rim Metallic Gradient */}
            <radialGradient id="alloyRimGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#64748B" />
            </radialGradient>

            {/* Tire Rubber Gradient */}
            <radialGradient id="tireRubberGrad" cx="45%" cy="45%" r="55%">
              <stop offset="60%" stopColor="#2A303A" />
              <stop offset="90%" stopColor="#181C22" />
              <stop offset="100%" stopColor="#0B0D10" />
            </radialGradient>

            {/* Indian Red-White Reflective Hazard Stripe Pattern */}
            <pattern id="hazardStripes" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="10" height="20" fill="#DC2626" />
              <rect x="10" width="10" height="20" fill="#FFFFFF" />
            </pattern>
          </defs>

          {/* 1. SOFT GROUND SHADOW (Expands & contracts with bounce) */}
          <ellipse
            cx="255"
            cy="195"
            rx="235"
            ry="9"
            fill="#0F172A"
            fillOpacity="0.35"
            className="blur-[2px]"
          />

          {/* 2. HEADLIGHT BEAM CASTING LIGHT FORWARD */}
          <polygon
            points="480,126 660,95 660,195 480,146"
            fill="url(#headlightBeam)"
          />

          {/* 3. EXHAUST SMOKE PUFFS (Animated trailing cartoon clouds) */}
          <g className="smoke-trail">
            {/* Smoke Puff 1 */}
            <circle cx="12" cy="165" r="7" fill="#F1F5F9" fillOpacity="0.8">
              <animate attributeName="cx" values="12;-35;-80" dur="1s" repeatCount="indefinite" />
              <animate attributeName="cy" values="165;155;145" dur="1s" repeatCount="indefinite" />
              <animate attributeName="r" values="6;16;24" dur="1s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.4;0" dur="1s" repeatCount="indefinite" />
            </circle>

            {/* Smoke Puff 2 */}
            <circle cx="12" cy="165" r="5" fill="#E2E8F0" fillOpacity="0.8">
              <animate attributeName="cx" values="12;-25;-65" dur="1s" begin="0.33s" repeatCount="indefinite" />
              <animate attributeName="cy" values="165;158;150" dur="1s" begin="0.33s" repeatCount="indefinite" />
              <animate attributeName="r" values="5;14;20" dur="1s" begin="0.33s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.5;0" dur="1s" begin="0.33s" repeatCount="indefinite" />
            </circle>

            {/* Smoke Puff 3 */}
            <circle cx="12" cy="165" r="4" fill="#FFFFFF" fillOpacity="0.8">
              <animate attributeName="cx" values="12;-20;-55" dur="1s" begin="0.66s" repeatCount="indefinite" />
              <animate attributeName="cy" values="165;160;154" dur="1s" begin="0.66s" repeatCount="indefinite" />
              <animate attributeName="r" values="4;12;18" dur="1s" begin="0.66s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0.4;0" dur="1s" begin="0.66s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* 4. ROOF LUGGAGE RACK & TIED PACKAGES (Jiggling with secondary bounce) */}
          <g
            style={{
              animation: 'cargoJiggle 0.6s ease-in-out infinite alternate 0.08s',
              transformOrigin: '150px 35px',
            }}
          >
            {/* Steel tubular rack */}
            <rect x="40" y="30" width="250" height="5" rx="2" fill="#334155" />
            <rect x="55" y="34" width="4" height="6" fill="#1E293B" />
            <rect x="135" y="34" width="4" height="6" fill="#1E293B" />
            <rect x="215" y="34" width="4" height="6" fill="#1E293B" />
            <rect x="280" y="34" width="4" height="6" fill="#1E293B" />

            {/* Big Cardboard Box 1 */}
            <g transform="translate(60, 10)">
              <rect x="0" y="0" width="64" height="23" rx="3" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />
              {/* Tape */}
              <line x1="32" y1="0" x2="32" y2="23" stroke="#B45309" strokeWidth="3" />
              <line x1="0" y1="11" x2="64" y2="11" stroke="#B45309" strokeWidth="2" />
              {/* Fragile Label */}
              <rect x="8" y="4" width="18" height="7" rx="1.5" fill="#EF4444" />
              <text x="17" y="9.5" fill="#FFFFFF" fontSize="4.5" fontWeight="bold" textAnchor="middle">FRAGILE</text>
            </g>

            {/* Medium Cardboard Box 2 */}
            <g transform="translate(132, 14)">
              <rect x="0" y="0" width="46" height="19" rx="2.5" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
              <line x1="23" y1="0" x2="23" y2="19" stroke="#92400E" strokeWidth="2.5" />
              <text x="8" y="12" fill="#78350F" fontSize="5" fontWeight="bold">BOX #1</text>
            </g>

            {/* Rolled Mattress / Rug with Yellow Straps */}
            <g transform="translate(186, 12)">
              <rect x="0" y="0" width="92" height="21" rx="9" fill="#0284C7" stroke="#0369A1" strokeWidth="1.5" />
              <ellipse cx="90" cy="10.5" rx="5" ry="9" fill="#38BDF8" stroke="#0369A1" strokeWidth="1.5" />
              <ellipse cx="90" cy="10.5" rx="2" ry="4" fill="#0284C7" />
              {/* Yellow Tie-down Straps */}
              <rect x="18" y="0" width="4" height="21" fill="#FACC15" />
              <rect x="44" y="0" width="4" height="21" fill="#FACC15" />
              <rect x="70" y="0" width="4" height="21" fill="#FACC15" />
            </g>

            {/* Flexible Radio Antenna with Fluttering Shabari Gold Pennant */}
            <g transform="translate(365, 33)">
              <line x1="0" y1="0" x2="0" y2="-28" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
              {/* Gold Pennant Flag */}
              <polygon
                points="0,-28 16,-22 0,-16"
                fill="#F59E0B"
                stroke="#D97706"
                strokeWidth="0.8"
                style={{
                  animation: 'flagFlutter 0.3s ease-in-out infinite alternate',
                  transformOrigin: '0px -22px',
                }}
              />
            </g>
          </g>

          {/* 5. MAIN CARGO CONTAINER BODY */}
          <g id="cargoContainer">
            {/* Container Box Shell */}
            <rect
              x="25"
              y="38"
              width="295"
              height="136"
              rx="8"
              fill="url(#containerGrad)"
              stroke="#D6CEBF"
              strokeWidth="2"
            />

            {/* Corrugated Texture Lines (Subtle realistic vertical container ribs) */}
            {[55, 80, 105, 130, 155, 180, 205, 230, 255, 280, 305].map((xPos) => (
              <line
                key={xPos}
                x1={xPos}
                y1="40"
                x2={xPos}
                y2="162"
                stroke="#E8E2D5"
                strokeWidth="1.5"
                strokeDasharray="4 2"
              />
            ))}

            {/* Corner Structural Brackets */}
            <path d="M25,48 L35,48 L35,38 L25,38 Z" fill="#0F2C59" />
            <path d="M310,48 L320,48 L320,38 L310,38 Z" fill="#0F2C59" />
            <path d="M25,164 L35,164 L35,174 L25,174 Z" fill="#0F2C59" />

            {/* Rear Cargo Door Hardware (Vertical chrome rods and locks) */}
            <rect x="25" y="40" width="12" height="132" fill="#E2E8F0" />
            <line x1="31" y1="40" x2="31" y2="172" stroke="#475569" strokeWidth="2" />
            <rect x="28" y="100" width="6" height="14" rx="1" fill="#0F2C59" />
            {/* Taillights */}
            <rect x="25" y="145" width="4" height="16" rx="1.5" fill="#EF4444" />
            <rect x="25" y="163" width="4" height="6" rx="1" fill="#F59E0B" />

            {/* Red & White Reflective Safety Stripe Bar (Indian Transport Regulation) */}
            <rect
              x="37"
              y="162"
              width="283"
              height="10"
              fill="url(#hazardStripes)"
              stroke="#CBD5E1"
              strokeWidth="0.8"
            />

            {/* BRANDING: "SHABARI" in Bold Navy & "PACKERS AND MOVERS" Gold Ribbon */}
            <g transform="translate(45, 52)">
              {/* "SHABARI" Main Brand Name */}
              <text
                x="135"
                y="35"
                fill="#0F2C59"
                fontSize="32"
                fontWeight="900"
                fontFamily="system-ui, -apple-system, sans-serif"
                letterSpacing="3"
                textAnchor="middle"
              >
                SHABARI
              </text>

              {/* Gold Banner for "PACKERS & MOVERS" */}
              <g transform="translate(15, 46)">
                <rect
                  x="0"
                  y="0"
                  width="240"
                  height="22"
                  rx="6"
                  fill="url(#goldRibbon)"
                  stroke="#B45309"
                  strokeWidth="1"
                />
                <text
                  x="120"
                  y="15.5"
                  fill="#0F2C59"
                  fontSize="12.5"
                  fontWeight="800"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  letterSpacing="1.5"
                  textAnchor="middle"
                >
                  PACKERS & MOVERS
                </text>
              </g>

              {/* Tagline */}
              <text
                x="135"
                y="80"
                fill="#64748B"
                fontSize="8"
                fontWeight="700"
                letterSpacing="0.8"
                textAnchor="middle"
              >
                HOUSEHOLD SHIFTING • OFFICE RELOCATION • VEHICLE TRANSPORT
              </text>

              {/* 4 Cute Illustrated Moving Icons */}
              <g transform="translate(25, 87)">
                {/* 1. Sofa Icon */}
                <circle cx="16" cy="10" r="10" fill="#FFEDD5" stroke="#EA580C" strokeWidth="1" />
                <path d="M11,11 L11,9 Q11,7 13,7 L19,7 Q21,7 21,9 L21,11 L22,11 Q23,11 23,12 L23,13 L9,13 L9,12 Q9,11 10,11 Z" fill="#EA580C" />

                {/* 2. Packed Box Icon */}
                <circle cx="80" cy="10" r="10" fill="#FEF3C7" stroke="#D97706" strokeWidth="1" />
                <rect x="74" y="5" width="12" height="10" rx="1" fill="#D97706" />
                <line x1="80" y1="5" x2="80" y2="15" stroke="#FEF3C7" strokeWidth="1.5" />

                {/* 3. Refrigerator Icon */}
                <circle cx="144" cy="10" r="10" fill="#CCFBF1" stroke="#0D9488" strokeWidth="1" />
                <rect x="139" y="4" width="10" height="12" rx="1.5" fill="#0D9488" />
                <line x1="139" y1="8" x2="149" y2="8" stroke="#CCFBF1" strokeWidth="1" />
                <rect x="140.5" y="6" width="1" height="1.5" fill="#FFFFFF" />
                <rect x="140.5" y="10" width="1" height="2" fill="#FFFFFF" />

                {/* 4. Fragile Lamp / Shield Icon */}
                <circle cx="208" cy="10" r="10" fill="#E0E7FF" stroke="#4F46E5" strokeWidth="1" />
                <path d="M208,5 L212,7 L212,11 Q212,14 208,16 Q204,14 204,11 L204,7 Z" fill="#4F46E5" />
              </g>
            </g>
          </g>

          {/* 6. CABIN (Curved Front, Windshield, Smiling Driver, Grille, Headlights) */}
          <g id="truckCabin">
            {/* Aerodynamic Cab Body */}
            <path
              d="M320,58 
                 L375,58 
                 Q395,58 410,72 
                 L452,112 
                 Q468,126 476,142 
                 L482,158 
                 Q486,168 482,174 
                 L478,174 
                 L320,174 Z"
              fill="url(#cabinNavyGrad)"
              stroke="#0A1830"
              strokeWidth="2"
            />

            {/* Sun Visor / Cab Top Fin with Amber Clearance Lights */}
            <path d="M370,55 L420,68 L415,73 L368,60 Z" fill="#0F2C59" stroke="#E2A127" strokeWidth="1" />
            <circle cx="380" cy="59" r="1.5" fill="#F59E0B" />
            <circle cx="395" cy="63" r="1.5" fill="#F59E0B" />
            <circle cx="410" cy="68" r="1.5" fill="#F59E0B" />

            {/* Panoramic Curved Windshield Glass */}
            <path
              d="M375,70 
                 L412,74 
                 Q425,78 436,89 
                 L456,114 
                 L375,114 Z"
              fill="url(#windshieldGrad)"
              stroke="#0B1E3C"
              strokeWidth="1.5"
            />

            {/* Specular High-Gloss Reflection on Windshield */}
            <polygon points="385,73 400,74 385,114 378,114" fill="#FFFFFF" fillOpacity="0.45" />
            <polygon points="415,80 423,83 400,114 394,114" fill="#FFFFFF" fillOpacity="0.3" />

            {/* Friendly Cartoon Driver Inside Cab */}
            <g transform="translate(385, 82)">
              {/* Driver Cap */}
              <ellipse cx="14" cy="5" rx="7" ry="4" fill="#0F2C59" />
              <path d="M12,4 L24,5 L22,7 L12,7 Z" fill="#F59E0B" />
              {/* Head & Smiling Face */}
              <circle cx="14" cy="11" r="6" fill="#FDBA74" />
              {/* Friendly Eyes */}
              <circle cx="17" cy="10" r="1.2" fill="#0F2C59" />
              {/* Happy Smile */}
              <path d="M15,13 Q17,16 19,13" stroke="#9A3412" strokeWidth="1" fill="none" strokeLinecap="round" />
              {/* Uniform Shirt */}
              <path d="M8,17 L22,17 L24,30 L6,30 Z" fill="#0F2C59" />
              {/* Cheerful Waving Hand through Window */}
              <path
                d="M20,18 Q25,14 27,9 Q29,8 30,11 Q28,15 24,20 Z"
                fill="#FDBA74"
                style={{
                  animation: 'driverWave 0.8s ease-in-out infinite alternate',
                  transformOrigin: '20px 18px',
                }}
              />
            </g>

            {/* Driver Door Seam, Handle & Footstep */}
            <path d="M370,115 L456,115 L462,174 L370,174 Z" fill="none" stroke="#0B1E3C" strokeWidth="1.5" />
            <rect x="382" y="125" width="12" height="3" rx="1.5" fill="#E2E8F0" />
            {/* Chrome Footstep Ladder */}
            <rect x="375" y="170" width="22" height="4" rx="1" fill="#94A3B8" />

            {/* Aerodynamic Side View Mirror on Chrome Bracket */}
            <g transform="translate(425, 96)">
              <line x1="0" y1="10" x2="-8" y2="4" stroke="#CBD5E1" strokeWidth="2.5" />
              <rect x="-14" y="-2" width="7" height="18" rx="3.5" fill="#0F2C59" stroke="#CBD5E1" strokeWidth="1.5" />
              <rect x="-12.5" y="0" width="4" height="14" rx="2" fill="#7DD3FC" />
            </g>

            {/* Front Chrome Grille with Slats & Shabari Gold Crest */}
            <g transform="translate(460, 128)">
              <rect x="0" y="0" width="20" height="32" rx="3" fill="#1E293B" />
              <line x1="2" y1="6" x2="18" y2="6" stroke="#E2E8F0" strokeWidth="2" />
              <line x1="2" y1="12" x2="18" y2="12" stroke="#E2E8F0" strokeWidth="2" />
              <line x1="2" y1="18" x2="18" y2="18" stroke="#E2E8F0" strokeWidth="2" />
              <line x1="2" y1="24" x2="18" y2="24" stroke="#E2E8F0" strokeWidth="2" />
              {/* Gold Crest */}
              <circle cx="10" cy="15" r="4" fill="#F59E0B" stroke="#B45309" strokeWidth="0.8" />
            </g>

            {/* Heavy Front Bumper with Fog Lights & Number Plate */}
            <rect x="455" y="165" width="34" height="12" rx="3" fill="#CBD5E1" stroke="#64748B" strokeWidth="1.5" />
            {/* License Plate: TS 08 SHABARI */}
            <rect x="460" y="168" width="22" height="6" rx="1" fill="#FEF08A" stroke="#CA8A04" strokeWidth="0.5" />
            <text x="471" y="172.5" fill="#000000" fontSize="3.5" fontWeight="bold" textAnchor="middle">TS 08 SHABARI</text>

            {/* Dual Shiny Glass Headlights with Chrome Rings */}
            <circle cx="476" cy="136" r="8" fill="#CBD5E1" stroke="#475569" strokeWidth="1" />
            <circle cx="476" cy="136" r="6" fill="#FEF08A" />
            <circle cx="475" cy="135" r="2.5" fill="#FFFFFF" />
            {/* Amber Turn Indicator */}
            <circle cx="468" cy="146" r="3" fill="#F59E0B" stroke="#B45309" strokeWidth="0.5" />
          </g>

          {/* 7. CHASSIS UNDERCARRIAGE & EXHAUST */}
          <rect x="30" y="170" width="430" height="8" fill="#1E293B" />
          {/* Chrome Curved Tailpipe */}
          <path d="M26,170 Q14,170 12,165" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" fill="none" />

          {/* 8. WHEELS (3 Heavy Duty Wheels: 1 Steer Axle Front + 2 Load Axles Rear) */}
          {/* Rear Wheel 1 */}
          <g transform="translate(90, 178)">
            <WheelAssembly />
          </g>

          {/* Rear Wheel 2 */}
          <g transform="translate(165, 178)">
            <WheelAssembly />
          </g>

          {/* Front Steer Wheel */}
          <g transform="translate(425, 178)">
            <WheelAssembly />
          </g>
        </svg>
      </div>

      {/* COMPONENT-LEVEL INLINE STYLES FOR DETAILED WHEEL & CHASSIS CARTOON BOUNCE */}
      <style jsx>{`
        /* Suspension up and down gentle bobbing */
        @keyframes chassisSuspension {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-4px) rotate(-0.5deg);
          }
          100% {
            transform: translateY(1.5px) rotate(0.4deg);
          }
        }

        /* Secondary spring bounce on roof luggage */
        @keyframes cargoJiggle {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          100% {
            transform: translateY(-5px) rotate(-1.5deg);
          }
        }

        /* Flag flutter in the wind */
        @keyframes flagFlutter {
          0% {
            transform: scaleX(1) skewY(0deg);
          }
          100% {
            transform: scaleX(0.85) skewY(-6deg);
          }
        }

        /* Driver cheerful wave */
        @keyframes driverWave {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-12deg);
          }
        }
      `}</style>
    </div>
  );
}

/**
 * WheelAssembly Component
 * Realistic cartoon wheel with rubber tire treads, shiny alloy rim, and 6 alloy spokes spinning fast
 */
function WheelAssembly() {
  return (
    <g className="wheel-unit">
      {/* Outer Thick Rubber Tire with Treads */}
      <circle cx="0" cy="0" r="26" fill="url(#tireRubberGrad)" stroke="#0F172A" strokeWidth="1.5" />
      {/* Rubber Tread Notches */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="0"
          y1="-26"
          x2="0"
          y2="-23"
          stroke="#475569"
          strokeWidth="2.5"
          transform={`rotate(${deg} 0 0)`}
        />
      ))}

      {/* Inner Metallic Alloy Rim (Spinning at high speed) */}
      <g
        style={{
          animation: 'spinAlloyRim 0.42s linear infinite',
          transformOrigin: '0px 0px',
        }}
      >
        <circle cx="0" cy="0" r="17" fill="url(#alloyRimGrad)" stroke="#475569" strokeWidth="1" />

        {/* 6 Alloy Spokes with Highlights */}
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <line
            key={angle}
            x1="0"
            y1="0"
            x2="0"
            y2="-16"
            stroke="#F8FAFC"
            strokeWidth="3.2"
            strokeLinecap="round"
            transform={`rotate(${angle} 0 0)`}
          />
        ))}

        {/* Center Chrome Hubcap with Lug Nuts */}
        <circle cx="0" cy="0" r="7.5" fill="#1E293B" stroke="#CBD5E1" strokeWidth="1" />
        <circle cx="0" cy="0" r="4" fill="#F59E0B" />
        {[0, 72, 144, 216, 288].map((lugAngle) => (
          <circle
            key={lugAngle}
            cx="0"
            cy="-5.5"
            r="1"
            fill="#FFFFFF"
            transform={`rotate(${lugAngle} 0 0)`}
          />
        ))}
      </g>

      <style jsx>{`
        @keyframes spinAlloyRim {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </g>
  );
}

/**
 * CartoonTree Component
 * Stylized round cartoon tree on the green rolling hills
 */
function CartoonTree({ size = 'sm' }: { size?: 'sm' | 'md' }) {
  const isMd = size === 'md';
  const width = isMd ? 28 : 20;
  const height = isMd ? 40 : 28;

  return (
    <svg width={width} height={height} viewBox="0 0 30 42" fill="none" className="opacity-80">
      {/* Trunk */}
      <rect x="13" y="24" width="4" height="18" rx="2" fill="#78350F" />
      {/* Foliage Circles */}
      <circle cx="15" cy="18" r="12" fill="#5E9668" />
      <circle cx="11" cy="14" r="8" fill="#74AC7E" />
      <circle cx="18" cy="12" r="7" fill="#88BF92" />
    </svg>
  );
}

/**
 * IndianMilestone Component
 * Authentic yellow & white Indian highway milestone (NH 44 / HYDERABAD)
 */
function IndianMilestone() {
  return (
    <div className="w-8 sm:w-10 h-11 sm:h-13 bg-white rounded-t-full border border-stone-300 shadow-md flex flex-col items-center overflow-hidden">
      {/* Yellow top dome for National Highway */}
      <div className="w-full h-4 bg-[#F59E0B] flex items-center justify-center">
        <span className="text-[7px] font-black text-black tracking-tight">NH 44</span>
      </div>
      {/* White body with destination */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-0.5">
        <span className="text-[6.5px] font-black text-stone-900 leading-none">HYD</span>
        <span className="text-[5px] font-bold text-[#0F2C59] mt-0.5">0 KM</span>
      </div>
    </div>
  );
}

/**
 * HighwaySignboard Component
 * Realistic green highway route signboard
 */
function HighwaySignboard() {
  return (
    <div className="bg-[#15803D] text-white border-2 border-white rounded-lg px-2.5 py-1 shadow-lg flex items-center gap-2">
      <div className="text-[8px] font-black tracking-wider uppercase">
        <div className="text-[#FEF08A] flex items-center gap-1">
          <span>➔</span>
          <span>BENGALURU • VIJAYAWADA</span>
        </div>
        <div className="text-[7px] font-medium text-emerald-100 mt-0.5">
          SHABARI RELOCATION EXPRESS
        </div>
      </div>
    </div>
  );
}
