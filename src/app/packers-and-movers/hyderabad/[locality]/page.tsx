import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, ArrowRight, ShieldCheck, CheckCircle2, Phone, MessageSquare, Building2, Truck } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import FAQAccordion from '@/components/FAQAccordion';
import StructuredData from '@/components/StructuredData';
import { constructMetadata, generateBreadcrumbSchema, generateFaqSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { getHyderabadLocalityBySlug, getHyderabadLocalities } from '@/data/locations';
import { siteConfig, getTelUrl, getWhatsAppUrl } from '@/data/siteConfig';

interface PageProps {
  params: Promise<{ locality: string }>;
}

export async function generateStaticParams() {
  const localities = getHyderabadLocalities();
  return localities.map((l) => ({
    locality: l.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locality } = await params;
  const loc = getHyderabadLocalityBySlug(locality);

  if (!loc) {
    return constructMetadata({ title: 'Locality Not Found', noIndex: true });
  }

  return constructMetadata({
    title: loc.metaTitle,
    description: loc.metaDescription,
    canonicalPath: `/packers-and-movers/hyderabad/${loc.slug}`,
  });
}

export default async function HyderabadLocalityDetailPage({ params }: PageProps) {
  const { locality } = await params;
  const loc = getHyderabadLocalityBySlug(locality);

  if (!loc) {
    notFound();
  }

  const allLocalities = getHyderabadLocalities();
  const nearbyLocalities = allLocalities.filter((l) => l.slug !== loc.slug).slice(0, 8);

  const breadcrumbItems = [
    { label: 'Service Areas', href: '/packers-and-movers' },
    { label: 'Hyderabad', href: '/packers-and-movers/hyderabad' },
    { label: loc.name, href: `/packers-and-movers/hyderabad/${loc.slug}` },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const faqSchema = generateFaqSchema(loc.faqs);
  const localBusinessSchema = generateLocalBusinessSchema({
    name: `${siteConfig.name} - ${loc.name}, Hyderabad`,
    description: loc.description,
    url: `${siteConfig.baseUrl}/packers-and-movers/hyderabad/${loc.slug}`,
    areaServed: [loc.name, 'Hyderabad', 'Telangana'],
  });

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={localBusinessSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-[#FAF8F5] border-b border-[#EAE5DC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#B88E2F] bg-[#F9F5EC] border border-[#E8D7B8] mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Hyderabad Area Specialization {loc.pincodeRange && `• PIN: ${loc.pincodeRange}`}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171C] font-serif tracking-tight">
            {loc.headline}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#56616D] leading-relaxed max-w-2xl mx-auto">
            {loc.description}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="#loc-quote"
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0F2C59] hover:bg-[#0A1C38] rounded-xl transition-colors"
            >
              Get a Free Quote for {loc.name}
            </a>
            <a
              href={getWhatsAppUrl(`Hello Shabari Packers! I need to move in ${loc.name}, Hyderabad. Please share quotation details.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Highlights for this Locality */}
              <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#EAE5DC]">
                <h2 className="text-xl font-bold text-[#14171C] font-serif mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#0F2C59]" />
                  <span>Why Choose Shabari for Moving in {loc.name}?</span>
                </h2>
                <ul className="space-y-3">
                  {loc.shiftingHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#56616D]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Landmark Highlights */}
              {loc.landmarkHighlights.length > 0 && (
                <div className="p-6 bg-white rounded-2xl border border-[#EAE5DC]">
                  <h3 className="text-base font-bold text-[#14171C] font-serif mb-3">
                    Key Corridors & Society Complexes We Serve in {loc.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {loc.landmarkHighlights.map((landmark, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-stone-50 border border-[#EAE5DC] text-xs text-stone-700 font-medium"
                      >
                        {landmark}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Available Services in this Locality */}
              <div className="p-6 bg-stone-50 rounded-2xl border border-[#EAE5DC]">
                <h3 className="text-base font-bold text-[#14171C] font-serif mb-3">
                  Relocation Services Available in {loc.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#56616D]">
                  <Link href="/services/household-shifting" className="p-2.5 bg-white rounded-lg border border-[#EAE5DC] hover:border-[#B88E2F] flex items-center justify-between">
                    <span>Household Shifting</span>
                    <ArrowRight className="w-3 h-3 text-[#B88E2F]" />
                  </Link>
                  <Link href="/services/local-shifting" className="p-2.5 bg-white rounded-lg border border-[#EAE5DC] hover:border-[#B88E2F] flex items-center justify-between">
                    <span>Same-Day Local Shifting</span>
                    <ArrowRight className="w-3 h-3 text-[#B88E2F]" />
                  </Link>
                  <Link href="/services/office-relocation" className="p-2.5 bg-white rounded-lg border border-[#EAE5DC] hover:border-[#B88E2F] flex items-center justify-between">
                    <span>Office Relocation</span>
                    <ArrowRight className="w-3 h-3 text-[#B88E2F]" />
                  </Link>
                  <Link href="/services/packing-unpacking" className="p-2.5 bg-white rounded-lg border border-[#EAE5DC] hover:border-[#B88E2F] flex items-center justify-between">
                    <span>Packing & Unpacking</span>
                    <ArrowRight className="w-3 h-3 text-[#B88E2F]" />
                  </Link>
                </div>
              </div>

              {/* Surrounding Hyderabad Localities */}
              <div className="p-6 bg-white rounded-2xl border border-[#EAE5DC]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#14171C] mb-3">
                  Nearby Hyderabad Localities We Serve
                </h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  {nearbyLocalities.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/packers-and-movers/hyderabad/${item.slug}`}
                      className="px-3 py-1.5 rounded-lg border border-[#EAE5DC] hover:border-[#B88E2F] text-[#56616D] hover:text-[#0F2C59]"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/packers-and-movers/hyderabad"
                    className="px-3 py-1.5 rounded-lg border border-[#B88E2F] bg-[#F9F5EC] text-[#B88E2F] font-semibold"
                  >
                    View All Localities →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Quote Column */}
            <div className="lg:col-span-5" id="loc-quote">
              <div className="sticky top-28">
                <QuoteForm
                  initialFrom={`${loc.name}, Hyderabad`}
                  initialMoveType="Local Shifting (Within Hyderabad)"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion
        items={loc.faqs}
        title={`${loc.name} Shifting FAQs`}
        subtitle={`Common questions about society permissions, elevator booking, and packing in ${loc.name}.`}
      />
    </>
  );
}
