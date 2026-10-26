'use client';

import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { getWhatsAppUrl, getTelUrl, siteConfig } from '@/data/siteConfig';

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto"
    >
      {/* Quick Call Float (Mobile only) */}
      <a
        href={getTelUrl()}
        className="sm:hidden flex items-center justify-center w-12 h-12 bg-white text-[#0F2C59] rounded-full shadow-lg border border-[#EAE5DC] hover:scale-105 active:scale-95 transition-transform"
        aria-label={`Call Shabari Packers at ${siteConfig.displayPhone}`}
      >
        <Phone className="w-5 h-5 text-[#B88E2F]" />
      </a>

      {/* WhatsApp Floating Pill Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat with Shabari Packers and Movers on WhatsApp for quotation"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 text-white fill-white/20" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
        </div>
        <span className="text-sm font-semibold tracking-wide hidden sm:inline-block">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
