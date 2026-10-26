import React from 'react';
import { Metadata } from 'next';
import { Compass, Navigation } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RouteCard from '@/components/RouteCard';
import StructuredData from '@/components/StructuredData';
import { constructMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { getRoutes } from '@/data/routes';

export const metadata: Metadata = constructMetadata({
  title: 'Interstate & Inter-City Moving Routes | Shabari Packers and Movers',
  description:
    'Dedicated moving routes connecting Hyderabad, Bengaluru, Vijayawada, Visakhapatnam, Tirupati, and Mysuru. High-grade highway packaging and on-time transit.',
  canonicalPath: '/moving-routes',
});

export default function MovingRoutesPage() {
  const routes = getRoutes();
  const breadcrumbItems = [{ label: 'Moving Routes', href: '/moving-routes' }];
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
            <span>Active Transport Corridors</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171C] font-serif tracking-tight">
            Our Regular Moving Routes
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#56616D] leading-relaxed max-w-2xl mx-auto">
            Discover our primary operational corridors connecting Telangana, Andhra Pradesh, and Karnataka along major national highway networks with dedicated container transport.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {routes.map((route) => (
              <RouteCard key={route.id} route={route} />
            ))}
          </div>
        </div>
      </section>

      {/* Highway Safety Standards */}
      <section className="py-16 bg-[#FAF8F5] border-t border-[#EAE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-2xl font-bold text-[#14171C] font-serif">
              Highway Transit Safeguards
            </h2>
            <p className="text-xs sm:text-sm text-[#56616D] mt-2">
              How we protect your cargo across long distances on NH44, NH65, and NH16.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-[#56616D]">
            <div className="p-6 bg-white rounded-2xl border border-[#EAE5DC]">
              <strong className="text-sm sm:text-base text-[#14171C] block font-semibold mb-2">
                All-Weather Covered Containers
              </strong>
              <p className="leading-relaxed">
                We transport household belongings in clean, closed container vehicles that shield goods completely from rain, highway road grit, and direct sun exposure.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-[#EAE5DC]">
              <strong className="text-sm sm:text-base text-[#14171C] block font-semibold mb-2">
                Shock-Absorbing Vehicle Stacking
              </strong>
              <p className="leading-relaxed">
                Heavy items are placed firmly at the vehicle base and locked with internal tie-downs to ensure zero sliding or friction during highway speed changes.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-[#EAE5DC]">
              <strong className="text-sm sm:text-base text-[#14171C] block font-semibold mb-2">
                Transparent Checkpost Compliance
              </strong>
              <p className="leading-relaxed">
                Every long-distance consignment carries official documentation, goods manifests, and commercial transit passes for swift inter-state toll clearance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
