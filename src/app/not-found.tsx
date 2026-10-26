import React from 'react';
import Link from 'next/link';
import { Compass, Home, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { siteConfig, getTelUrl, getWhatsAppUrl } from '@/data/siteConfig';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 bg-[#F9F5EC] border border-[#E8D7B8] text-[#B88E2F] rounded-full flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#B88E2F]">
            Error 404
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#14171C] font-serif mt-1">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#56616D] mt-2 leading-relaxed">
            The relocation page or service directory you are looking for may have moved or is currently not published.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-[#EAE5DC] text-left space-y-2.5 text-xs text-[#56616D]">
          <p className="font-semibold text-[#14171C]">Helpful Navigation Links:</p>
          <ul className="space-y-1.5">
            <li>
              <Link href="/" className="hover:text-[#0F2C59] flex items-center gap-1.5">
                <ArrowRight className="w-3 h-3 text-[#B88E2F]" />
                <span>Return to Homepage</span>
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#0F2C59] flex items-center gap-1.5">
                <ArrowRight className="w-3 h-3 text-[#B88E2F]" />
                <span>Browse All Relocation Services</span>
              </Link>
            </li>
            <li>
              <Link href="/packers-and-movers/hyderabad" className="hover:text-[#0F2C59] flex items-center gap-1.5">
                <ArrowRight className="w-3 h-3 text-[#B88E2F]" />
                <span>Packers & Movers in Hyderabad</span>
              </Link>
            </li>
            <li>
              <Link href="/packers-and-movers" className="hover:text-[#0F2C59] flex items-center gap-1.5">
                <ArrowRight className="w-3 h-3 text-[#B88E2F]" />
                <span>South India Service Areas Directory</span>
              </Link>
            </li>
            <li>
              <Link href="/moving-routes" className="hover:text-[#0F2C59] flex items-center gap-1.5">
                <ArrowRight className="w-3 h-3 text-[#B88E2F]" />
                <span>Inter-City Moving Routes</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0F2C59] hover:bg-[#0A1C38] rounded-xl transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Go to Home</span>
          </Link>
          <a
            href={getTelUrl()}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#14171C] bg-white border border-[#EAE5DC] hover:border-[#B88E2F] rounded-xl transition-colors"
          >
            <Phone className="w-4 h-4 text-[#B88E2F]" />
            <span>Call Support</span>
          </a>
        </div>
      </div>
    </div>
  );
}
