import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Truck } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import StructuredData from '@/components/StructuredData';
import { constructMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { getStateBySlug, getCitiesByState } from '@/data/locations';

export const metadata: Metadata = constructMetadata({
  title: 'Packers and Movers in Andhra Pradesh | Vijayawada, Vizag, Guntur, Tirupati',
  description:
    'Professional relocation services across Andhra Pradesh. Connecting Vijayawada, Visakhapatnam, Guntur, Tirupati, Kurnool, Nellore, and Rajahmundry with Hyderabad.',
  canonicalPath: '/packers-and-movers/andhra-pradesh',
});

export default function AndhraPradeshStatePage() {
  const state = getStateBySlug('andhra-pradesh')!;
  const cities = getCitiesByState('andhra-pradesh');

  const breadcrumbItems = [
    { label: 'Service Areas', href: '/packers-and-movers' },
    { label: 'Andhra Pradesh', href: '/packers-and-movers/andhra-pradesh' },
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
            <span>Coastal & Rayalaseema Corridors</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171C] font-serif tracking-tight">
            Packers and Movers Across Andhra Pradesh
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#56616D] leading-relaxed max-w-2xl mx-auto">
            {state.overview}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#14171C] font-serif mb-4">
                  Andhra Pradesh Service Cities & Towns
                </h2>
                <p className="text-sm text-[#56616D] mb-6 leading-relaxed">
                  We coordinate regular moving schedules connecting Andhra Pradesh cities with Hyderabad, Bengaluru, and Chennai. Select a city below to view dedicated shifting services:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/packers-and-movers/${city.slug}`}
                      className="p-4 rounded-xl border border-[#EAE5DC] bg-stone-50/50 hover:bg-white hover:border-[#B88E2F] hover:shadow-xs transition-all flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-[#14171C] hover:text-[#0F2C59]">
                          {city.name}
                        </span>
                        {city.isHub && (
                          <span className="text-[9px] uppercase tracking-wider bg-[#F9F5EC] text-[#B88E2F] px-1.5 py-0.5 rounded font-bold">
                            Hub
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-[#B88E2F] font-medium mt-2 flex items-center gap-1">
                        <span>City Guide</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Highway Corridor Details */}
              <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#EAE5DC]">
                <h3 className="text-base font-bold text-[#14171C] font-serif mb-3">
                  Key Transit Highway Corridors in Andhra Pradesh
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#56616D]">
                  <li className="flex items-start gap-2">
                    <Truck className="w-4 h-4 text-[#0F2C59] mt-0.5 shrink-0" />
                    <span><strong>NH65 Corridor:</strong> Direct express freight connecting Hyderabad to Suryapet, Vijayawada, and Guntur.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Truck className="w-4 h-4 text-[#0F2C59] mt-0.5 shrink-0" />
                    <span><strong>NH16 Grand Trunk Highway:</strong> Connecting coastal industrial cities from Visakhapatnam to Rajahmundry, Vijayawada, and Nellore.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Truck className="w-4 h-4 text-[#0F2C59] mt-0.5 shrink-0" />
                    <span><strong>NH40 / NH44 Rayalaseema:</strong> High-speed links connecting Kurnool, Kadapa, and Tirupati with Hyderabad and Bengaluru.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Quote Column */}
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <QuoteForm initialFrom="Vijayawada, Andhra Pradesh" initialTo="Hyderabad, Telangana" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
