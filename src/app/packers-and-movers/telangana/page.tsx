import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, ShieldCheck, Truck, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import StructuredData from '@/components/StructuredData';
import { constructMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { getStateBySlug, getCitiesByState, getHyderabadLocalities } from '@/data/locations';

export const metadata: Metadata = constructMetadata({
  title: 'Packers and Movers in Telangana | Hyderabad, Warangal, Karimnagar',
  description:
    'Reliable packers and movers across Telangana. Home shifting, office relocation, and district transport covering Hyderabad, Warangal, Karimnagar, Khammam, and Nizamabad.',
  canonicalPath: '/packers-and-movers/telangana',
});

export default function TelanganaStatePage() {
  const state = getStateBySlug('telangana')!;
  const cities = getCitiesByState('telangana');
  const localities = getHyderabadLocalities();

  const breadcrumbItems = [
    { label: 'Service Areas', href: '/packers-and-movers' },
    { label: 'Telangana', href: '/packers-and-movers/telangana' },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <section className="py-12 sm:py-16 bg-[#FAF8F5] border-b border-[#EAE5DC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#B88E2F] bg-[#F9F5EC] border border-[#E8D7B8] mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Home Operations State</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171C] font-serif tracking-tight">
            Packers and Movers Across Telangana
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#56616D] leading-relaxed max-w-2xl mx-auto">
            {state.overview}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-10">
              {/* Primary Hyderabad Hub Spotlight */}
              <div className="p-6 sm:p-8 bg-[#FAF8F5] rounded-3xl border border-[#E8D7B8] shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B88E2F]">
                  State Headquarters & Primary Dispatch Hub
                </span>
                <h2 className="text-2xl font-bold text-[#14171C] font-serif mt-1 mb-3">
                  Greater Hyderabad Operations
                </h2>
                <p className="text-sm text-[#56616D] leading-relaxed mb-6">
                  Hyderabad is the heart of our operations. We offer same-day residential relocations, IT corporate shifting, and direct inter-city dispatches across all major suburban clusters.
                </p>

                <div className="mb-6">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-700 mb-3">
                    Featured Hyderabad Localities (17 Dedicated Areas):
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    {localities.slice(0, 12).map((loc) => (
                      <Link
                        key={loc.slug}
                        href={`/packers-and-movers/hyderabad/${loc.slug}`}
                        className="p-2 rounded-lg bg-white border border-[#EAE5DC] text-[#0F2C59] hover:border-[#B88E2F] transition-colors"
                      >
                        {loc.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/packers-and-movers/hyderabad"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F2C59] hover:text-[#B88E2F] transition-colors"
                >
                  <span>Explore Complete Hyderabad City & Locality Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Other Telangana Cities */}
              <div>
                <h2 className="text-2xl font-bold text-[#14171C] font-serif mb-4">
                  Telangana District Cities & Towns
                </h2>
                <p className="text-sm text-[#56616D] mb-6 leading-relaxed">
                  Click any city below to read our dedicated relocation guide, road connectivity details, and local moving tips:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/packers-and-movers/${city.slug}`}
                      className="p-4 rounded-xl border border-[#EAE5DC] bg-stone-50/50 hover:bg-white hover:border-[#B88E2F] hover:shadow-xs transition-all flex flex-col justify-between"
                    >
                      <span className="text-sm font-semibold text-[#14171C] hover:text-[#0F2C59]">
                        {city.name}
                      </span>
                      <span className="text-[11px] text-[#B88E2F] font-medium mt-2 flex items-center gap-1">
                        <span>View Details</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Quote Column */}
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <QuoteForm initialFrom="Hyderabad, Telangana" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
