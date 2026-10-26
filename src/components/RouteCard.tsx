import React from 'react';
import Link from 'next/link';
import { ArrowRight, Truck, Navigation, ShieldCheck } from 'lucide-react';
import { MovingRoute } from '@/types';

interface RouteCardProps {
  route: MovingRoute;
}

export default function RouteCard({ route }: RouteCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-6 border border-[#EAE5DC] hover:border-[#B88E2F] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Origin to Destination Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#B88E2F] bg-[#F9F5EC] px-2.5 py-1 rounded-md border border-[#E8D7B8]">
            <Navigation className="w-3 h-3" />
            <span>{route.typicalHighway}</span>
          </span>
          <span className="text-xs text-[#56616D] font-medium">
            {route.approxDistance}
          </span>
        </div>

        <h3 className="text-lg font-bold text-[#14171C] group-hover:text-[#0F2C59] transition-colors mb-2 font-serif">
          {route.originCity} to {route.destinationCity}
        </h3>

        <p className="text-xs sm:text-sm text-[#56616D] leading-relaxed line-clamp-2 mb-4">
          {route.summary}
        </p>

        <div className="space-y-1 text-xs text-stone-600 mb-6">
          <div className="flex items-center gap-2">
            <Truck className="w-3.5 h-3.5 text-[#0F2C59]" />
            <span>Dedicated covered container trucks</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Multi-layer highway protective packing</span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
        <Link
          href={`/moving-routes/${route.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2C59] group-hover:text-[#B88E2F] transition-colors"
        >
          <span>View Route Guide</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          href={`/get-quote?from=${encodeURIComponent(route.originCity)}&to=${encodeURIComponent(route.destinationCity)}`}
          className="text-[11px] font-semibold text-[#B88E2F] hover:underline"
        >
          Get Route Quote →
        </Link>
      </div>
    </div>
  );
}
