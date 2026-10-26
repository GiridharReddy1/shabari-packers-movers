import React from 'react';
import Link from 'next/link';
import {
  Home,
  Truck,
  Building2,
  MapPin,
  Compass,
  Package,
  Boxes,
  ShieldCheck,
  Car,
  Warehouse,
  ArrowRight,
  LucideIcon,
} from 'lucide-react';
import { ServiceItem } from '@/types';

const iconMap: Record<string, LucideIcon> = {
  Home,
  Truck,
  Building2,
  MapPin,
  Compass,
  Package,
  Boxes,
  ShieldCheck,
  Car,
  Warehouse,
};

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Package;

  return (
    <div className="group bg-white rounded-2xl p-6 sm:p-7 border border-[#EAE5DC] hover:border-[#B88E2F]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-xl bg-[#F9F5EC] border border-[#E8D7B8]/60 flex items-center justify-center text-[#B88E2F] group-hover:bg-[#0F2C59] group-hover:text-white group-hover:border-[#0F2C59] transition-all duration-300 mb-5">
          <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
        </div>

        <h3 className="text-lg font-bold text-[#14171C] group-hover:text-[#0F2C59] transition-colors mb-2.5 font-serif">
          {service.title}
        </h3>

        <p className="text-sm text-[#56616D] leading-relaxed line-clamp-3 mb-5">
          {service.shortDescription}
        </p>

        <ul className="space-y-1.5 mb-6 text-xs text-stone-600">
          {service.features.slice(0, 2).map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88E2F] mt-1.5 shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2C59] group-hover:text-[#B88E2F] transition-colors"
        >
          <span>Learn More & Pricing</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
