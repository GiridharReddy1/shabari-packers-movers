import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Compass, MapPin, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import LocationDirectory from '@/components/LocationDirectory';
import StructuredData from '@/components/StructuredData';
import { constructMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { statesData } from '@/data/locations';

export const metadata: Metadata = constructMetadata({
  title: 'Service Areas Directory | Telangana, Andhra Pradesh & Karnataka',
  description:
    'Complete directory of packers and movers across Telangana, Andhra Pradesh, and Karnataka. Browse city guides, Hyderabad localities, and moving solutions.',
  canonicalPath: '/packers-and-movers',
});

export default function ServiceAreasDirectoryPage() {
  const breadcrumbItems = [{ label: 'Service Areas', href: '/packers-and-movers' }];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <section className="py-12 sm:py-16 bg-[#FAF8F5] border-b border-[#EAE5DC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#B88E2F] bg-[#F9F5EC] border border-[#E8D7B8] mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Regional Coverage Directory</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171C] font-serif tracking-tight">
            Packers and Movers Service Areas
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#56616D] leading-relaxed max-w-2xl mx-auto">
            Shabari Packers and Movers provides organized relocation solutions centered in Hyderabad, with extensive operational coverage throughout Telangana, Andhra Pradesh, and Karnataka.
          </p>
        </div>
      </section>

      {/* State Landing Summaries */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statesData.map((state) => (
              <div
                key={state.id}
                className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-7 border border-[#EAE5DC] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-[#B88E2F]" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#56616D]">
                      {state.region}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-[#14171C] font-serif mb-2">
                    {state.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#56616D] leading-relaxed mb-4">
                    {state.overview}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAE5DC]">
                  <Link
                    href={`/packers-and-movers/${state.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2C59] hover:text-[#B88E2F] transition-colors"
                  >
                    <span>Explore {state.name} Directory</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Centerpiece Location Directory */}
      <LocationDirectory />
    </>
  );
}
