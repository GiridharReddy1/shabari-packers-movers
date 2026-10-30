import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight, ShieldCheck, CheckCircle2, Truck, Phone, MessageSquare } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import FAQAccordion from '@/components/FAQAccordion';
import StructuredData from '@/components/StructuredData';
import { constructMetadata, generateBreadcrumbSchema, generateFaqSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { getCityBySlug, getHyderabadLocalities } from '@/data/locations';
import { siteConfig, getTelUrl, getWhatsAppUrl } from '@/data/siteConfig';

export const metadata: Metadata = constructMetadata({
  title: 'Packers and Movers in Hyderabad | Best Home & Office Shifting',
  description:
    'Premier packers and movers in Hyderabad. Professional home shifting, office relocation, and local moving across Gachibowli, Kukatpally, Kondapur, Madhapur, Miyapur & Secunderabad.',
  canonicalPath: '/packers-and-movers/hyderabad',
});

export default function HyderabadHubPage() {
  const city = getCityBySlug('hyderabad')!;
  const localities = getHyderabadLocalities();

  const breadcrumbItems = [
    { label: 'Service Areas', href: '/packers-and-movers' },
    { label: 'Telangana', href: '/packers-and-movers/telangana' },
    { label: 'Hyderabad', href: '/packers-and-movers/hyderabad' },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const faqSchema = generateFaqSchema(city.faqs);
  const localBusinessSchema = generateLocalBusinessSchema({
    name: `${siteConfig.name} - Hyderabad Operations Hub`,
    description: city.summary,
    url: `${siteConfig.baseUrl}/packers-and-movers/hyderabad`,
    areaServed: [
      'Hyderabad',
      'Gachibowli',
      'Kukatpally',
      'Madhapur',
      'Kondapur',
      'Secunderabad',
      'Miyapur',
      'HITEC City',
      'Manikonda',
      'Banjara Hills',
      'Jubilee Hills',
      'Uppal',
      'LB Nagar',
    ],
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
            <span>Central Dispatch Headquarters</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171C] font-serif tracking-tight">
            Packers and Movers in Hyderabad, Telangana
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#56616D] leading-relaxed max-w-2xl mx-auto">
            {city.summary}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="#hyd-quote"
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0F2C59] hover:bg-[#0A1C38] rounded-xl transition-colors"
            >
              Get a Hyderabad Moving Quote
            </a>
            <a
              href={getTelUrl()}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#14171C] bg-white border border-[#EAE5DC] hover:border-[#B88E2F] rounded-xl transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#B88E2F]" />
              <span>Call {siteConfig.displayPhone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Split Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-[#14171C] font-serif mb-4">
                  Moving in Greater Hyderabad: Local Expertise & Care
                </h2>
                <p className="text-sm sm:text-base text-[#56616D] leading-relaxed">
                  {city.localDetails.description}
                </p>
              </div>

              {/* 17 Locality Sub-Pages Directory */}
              <div className="p-6 sm:p-8 bg-[#FAF8F5] rounded-3xl border border-[#E8D7B8]">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#14171C] font-serif">
                      Explore Hyderabad Localities (17 Dedicated Areas)
                    </h3>
                    <p className="text-xs text-[#56616D] mt-0.5">
                      Select your neighborhood to view area-specific moving tips, society clearances, and localized contact details.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                  {localities.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/packers-and-movers/hyderabad/${loc.slug}`}
                      className="p-3 bg-white rounded-xl border border-[#EAE5DC] hover:border-[#B88E2F] hover:shadow-xs transition-all flex flex-col justify-between group"
                    >
                      <span className="text-xs font-semibold text-[#14171C] group-hover:text-[#0F2C59]">
                        {loc.name}
                      </span>
                      <span className="text-[10px] text-[#B88E2F] font-medium mt-1 flex items-center gap-1">
                        <span>View Area</span>
                        <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Services Offered in Hyderabad */}
              <div className="p-6 bg-white rounded-2xl border border-[#EAE5DC]">
                <h3 className="text-lg font-bold text-[#14171C] font-serif mb-4">
                  Services Available in Greater Hyderabad
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#56616D]">
                  {city.localDetails.servicesOffered.map((serviceName, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{serviceName}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Real Photo Showcase for Hyderabad */}
              <div className="rounded-2xl overflow-hidden border border-[#EAE5DC]">
                <div className="relative h-64 sm:h-72 w-full">
                  <Image
                    src="/images/shabari-team-truck.jpg"
                    alt="Shabari Packers and Movers team and truck operating in Hyderabad"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-stone-50 text-xs text-[#56616D]">
                  <p className="font-semibold text-[#14171C]">
                    Registered Operations Based in Hyderabad
                  </p>
                  <p className="mt-0.5 text-[11px]">
                    Direct transport vehicles and permanent staff ensuring dependable local moving.
                  </p>
                </div>
              </div>

              {/* Hyderabad Shifting Tips */}
              <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#EAE5DC]">
                <h3 className="text-base font-bold text-[#14171C] font-serif mb-3">
                  Practical Hyderabad Shifting Guidelines
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#56616D]">
                  {city.localDetails.movingTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B88E2F] mt-2 shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Quote Column */}
            <div className="lg:col-span-5" id="hyd-quote">
              <div className="sticky top-28">
                <QuoteForm initialFrom="Hyderabad, Telangana" initialMoveType="Local Shifting (Within Hyderabad)" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hyderabad Specific FAQs */}
      <FAQAccordion
        items={city.faqs}
        title="Hyderabad Packers and Movers FAQs"
        subtitle="Answers to common questions regarding local and inter-city moving from Hyderabad."
      />
    </>
  );
}
