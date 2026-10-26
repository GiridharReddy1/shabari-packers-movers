import React from 'react';
import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import { MapPin, ArrowRight, ShieldCheck, CheckCircle2, Truck, Phone, MessageSquare } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import FAQAccordion from '@/components/FAQAccordion';
import StructuredData from '@/components/StructuredData';
import { constructMetadata, generateBreadcrumbSchema, generateFaqSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { getCityBySlug, citiesData, getCitiesByState } from '@/data/locations';
import { siteConfig, getTelUrl, getWhatsAppUrl } from '@/data/siteConfig';

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  // Exclude static folders (hyderabad, telangana, andhra-pradesh, karnataka)
  const reservedSlugs = new Set(['hyderabad', 'telangana', 'andhra-pradesh', 'karnataka']);
  const publishedCities = citiesData.filter(
    (c) => c.isPublished && !reservedSlugs.has(c.slug)
  );

  return publishedCities.map((c) => ({
    city: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;

  if (city === 'hyderabad') {
    redirect('/packers-and-movers/hyderabad');
  }

  const cityData = getCityBySlug(city);

  if (!cityData) {
    return constructMetadata({ title: 'Location Not Found', noIndex: true });
  }

  return constructMetadata({
    title: cityData.metaTitle,
    description: cityData.metaDescription,
    canonicalPath: `/packers-and-movers/${cityData.slug}`,
  });
}

export default async function CityDetailPage({ params }: PageProps) {
  const { city } = await params;

  if (city === 'hyderabad') {
    redirect('/packers-and-movers/hyderabad');
  }

  const cityData = getCityBySlug(city);

  if (!cityData) {
    notFound();
  }

  const stateCities = getCitiesByState(cityData.stateSlug).filter((c) => c.slug !== cityData.slug);

  const breadcrumbItems = [
    { label: 'Service Areas', href: '/packers-and-movers' },
    { label: cityData.stateName, href: `/packers-and-movers/${cityData.stateSlug}` },
    { label: cityData.name, href: `/packers-and-movers/${cityData.slug}` },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const faqSchema = generateFaqSchema(cityData.faqs);
  const localBusinessSchema = generateLocalBusinessSchema({
    name: `${siteConfig.name} - ${cityData.name} Service Area`,
    description: cityData.summary,
    url: `${siteConfig.baseUrl}/packers-and-movers/${cityData.slug}`,
    areaServed: [cityData.name, cityData.stateName],
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
            <span>{cityData.stateName} Service Area</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171C] font-serif tracking-tight">
            {cityData.heroHeadline}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#56616D] leading-relaxed max-w-2xl mx-auto">
            {cityData.summary}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="#city-quote"
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0F2C59] hover:bg-[#0A1C38] rounded-xl transition-colors"
            >
              Get a Free Quote for {cityData.name}
            </a>
            <a
              href={getWhatsAppUrl(`Hello Shabari Packers! I would like to enquire about relocation services in ${cityData.name}, ${cityData.stateName}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Split Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#14171C] font-serif mb-4">
                  Relocation Services in {cityData.name}
                </h2>
                <p className="text-sm sm:text-base text-[#56616D] leading-relaxed">
                  {cityData.localDetails.description}
                </p>
              </div>

              {/* Services Offered */}
              <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#EAE5DC]">
                <h3 className="text-lg font-bold text-[#14171C] font-serif mb-4">
                  Moving Solutions Available for {cityData.name}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#56616D]">
                  {cityData.localDetails.servicesOffered.map((serviceName, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{serviceName}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Road Connectivity */}
              <div className="p-6 bg-white rounded-2xl border border-[#EAE5DC]">
                <h3 className="text-base font-bold text-[#14171C] font-serif mb-2 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#0F2C59]" />
                  <span>Highway & Transport Connectivity</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#56616D] leading-relaxed">
                  {cityData.localDetails.roadConnectivity}
                </p>
              </div>

              {/* Local Moving Tips */}
              <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#EAE5DC]">
                <h3 className="text-base font-bold text-[#14171C] font-serif mb-3">
                  Local Shifting Advice for {cityData.name}
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#56616D]">
                  {cityData.localDetails.movingTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B88E2F] mt-2 shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Cities in this State */}
              <div className="p-6 bg-stone-50 rounded-2xl border border-[#EAE5DC]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#14171C] mb-3">
                  Other {cityData.stateName} Locations
                </h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  {stateCities.map((otherCity) => (
                    <Link
                      key={otherCity.slug}
                      href={`/packers-and-movers/${otherCity.slug}`}
                      className="px-3 py-1.5 bg-white rounded-lg border border-[#EAE5DC] text-[#56616D] hover:text-[#0F2C59] hover:border-[#B88E2F]"
                    >
                      {otherCity.name}
                    </Link>
                  ))}
                  <Link
                    href={`/packers-and-movers/${cityData.stateSlug}`}
                    className="px-3 py-1.5 rounded-lg border border-[#B88E2F] bg-[#F9F5EC] text-[#B88E2F] font-semibold"
                  >
                    View All {cityData.stateName} Cities →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Quote Column */}
            <div className="lg:col-span-5" id="city-quote">
              <div className="sticky top-28">
                <QuoteForm initialFrom={`${cityData.name}, ${cityData.stateName}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City Specific FAQs */}
      <FAQAccordion
        items={cityData.faqs}
        title={`Moving in ${cityData.name} FAQs`}
        subtitle={`Practical answers for household and office relocations in ${cityData.name}.`}
      />
    </>
  );
}
