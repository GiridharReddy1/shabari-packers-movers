import React from 'react';
import { Metadata } from 'next';
import { Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceCard from '@/components/ServiceCard';
import StructuredData from '@/components/StructuredData';
import { constructMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { getPublishedServices } from '@/data/services';

export const metadata: Metadata = constructMetadata({
  title: 'Packers and Movers Services | Household Shifting & Office Relocation',
  description:
    'Explore top-rated relocation services by Shabari Packers and Movers: Home shifting, office relocation, local shifting in Hyderabad, vehicle transport, and safe 4-layer packing.',
  canonicalPath: '/services',
});

export default function ServicesPage() {
  const services = getPublishedServices();
  const breadcrumbItems = [{ label: 'Services', href: '/services' }];
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
            <Truck className="w-3.5 h-3.5" />
            <span>Complete Relocation Solutions</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171C] font-serif tracking-tight">
            Our Packing & Moving Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#56616D] leading-relaxed max-w-2xl mx-auto">
            From local apartment shifts across Hyderabad to long-distance domestic moves across South India, explore our dedicated services tailored for your home and office.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Material & Standards Showcase */}
      <section className="py-16 bg-[#FAF8F5] border-t border-[#EAE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-2xl font-bold text-[#14171C] font-serif">
              Our Packaging Quality Standards
            </h2>
            <p className="text-xs sm:text-sm text-[#56616D] mt-2">
              Every item is protected using industrial-grade materials designed for transport safety.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-[#56616D]">
            <div className="p-5 bg-white rounded-xl border border-[#EAE5DC]">
              <strong className="text-sm text-[#14171C] block font-semibold mb-1">
                Multi-Layer Bubble Wrap
              </strong>
              <span>Virgin plastic air bubbles providing heavy impact absorption for electronics and glass.</span>
            </div>
            <div className="p-5 bg-white rounded-xl border border-[#EAE5DC]">
              <strong className="text-sm text-[#14171C] block font-semibold mb-1">
                5-Ply Corrugated Sheets
              </strong>
              <span>Heavy-gauge cardboard forming sturdy protective shells around wooden wardrobes and cots.</span>
            </div>
            <div className="p-5 bg-white rounded-xl border border-[#EAE5DC]">
              <strong className="text-sm text-[#14171C] block font-semibold mb-1">
                Waterproof Stretch Film
              </strong>
              <span>Tight polyethylene wrapping that seals furniture against road dust and unexpected rain.</span>
            </div>
            <div className="p-5 bg-white rounded-xl border border-[#EAE5DC]">
              <strong className="text-sm text-[#14171C] block font-semibold mb-1">
                Reinforced Cartons
              </strong>
              <span>Sturdy dual-wall boxes designated by room type and clearly marked for fragile handling.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
