import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navigation, MapPin, ArrowRight, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import FAQAccordion from '@/components/FAQAccordion';
import StructuredData from '@/components/StructuredData';
import { constructMetadata, generateBreadcrumbSchema, generateFaqSchema } from '@/lib/seo';
import { getRouteBySlug, getRoutes } from '@/data/routes';
import { getCityBySlug } from '@/data/locations';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const routes = getRoutes();
  return routes.map((r) => ({
    slug: r.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteBySlug(slug);

  if (!route) {
    return constructMetadata({ title: 'Route Not Found', noIndex: true });
  }

  return constructMetadata({
    title: route.metaTitle,
    description: route.metaDescription,
    canonicalPath: `/moving-routes/${route.slug}`,
  });
}

export default async function RouteDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);

  if (!route) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Moving Routes', href: '/moving-routes' },
    { label: `${route.originCity} to ${route.destinationCity}`, href: `/moving-routes/${route.slug}` },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const faqSchema = generateFaqSchema(route.faqs);

  const originSlug = route.originCity.toLowerCase().replace(/\s+/g, '-');
  const destSlug = route.destinationCity.toLowerCase().replace(/\s+/g, '-');

  const originCityObj = getCityBySlug(originSlug);
  const destCityObj = getCityBySlug(destSlug);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-[#FAF8F5] border-b border-[#EAE5DC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#B88E2F] bg-[#F9F5EC] border border-[#E8D7B8] mb-4">
            <Navigation className="w-3.5 h-3.5" />
            <span>{route.typicalHighway} • {route.approxDistance}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171C] font-serif tracking-tight">
            {route.headline}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#56616D] leading-relaxed max-w-2xl mx-auto">
            {route.summary}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs font-medium text-stone-600">
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#EAE5DC]">
              <MapPin className="w-3.5 h-3.5 text-[#B88E2F]" />
              Pickup: {route.originCity}, {route.originState}
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#EAE5DC]">
              <MapPin className="w-3.5 h-3.5 text-[#0F2C59]" />
              Drop: {route.destinationCity}, {route.destinationState}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content & Quote Form Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Planning Advice */}
              <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#EAE5DC]">
                <h2 className="text-xl font-bold text-[#14171C] font-serif mb-4 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-[#0F2C59]" />
                  <span>Planning Your Move: {route.originCity} to {route.destinationCity}</span>
                </h2>
                <ul className="space-y-3">
                  {route.planningAdvice.map((advice, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#56616D]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{advice}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Packaging Precautions */}
              <div className="p-6 bg-white rounded-2xl border border-[#EAE5DC]">
                <h3 className="text-xl font-bold text-[#14171C] font-serif mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#B88E2F]" />
                  <span>Highway Protection & Packaging</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#56616D] mb-4 leading-relaxed">
                  Transit along {route.typicalHighway} requires dedicated safeguards against road friction and weather changes:
                </p>
                <ul className="space-y-3">
                  {route.packingPrecautions.map((precaution, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#56616D]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B88E2F] mt-2 shrink-0" />
                      <span>{precaution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* City Hub Cross-Links */}
              <div className="p-6 bg-stone-50 rounded-2xl border border-[#EAE5DC]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#14171C] mb-3">
                  Explore Related City Moving Guides
                </h3>
                <div className="flex flex-wrap gap-3 text-xs">
                  {originCityObj && (
                    <Link
                      href={`/packers-and-movers/${originCityObj.slug}`}
                      className="px-3.5 py-2 bg-white border border-[#EAE5DC] rounded-xl text-[#0F2C59] hover:border-[#B88E2F] font-semibold"
                    >
                      Packers and Movers in {route.originCity} →
                    </Link>
                  )}
                  {destCityObj && (
                    <Link
                      href={`/packers-and-movers/${destCityObj.slug}`}
                      className="px-3.5 py-2 bg-white border border-[#EAE5DC] rounded-xl text-[#0F2C59] hover:border-[#B88E2F] font-semibold"
                    >
                      Packers and Movers in {route.destinationCity} →
                    </Link>
                  )}
                  <Link
                    href="/moving-routes"
                    className="px-3.5 py-2 bg-white border border-[#EAE5DC] rounded-xl text-[#56616D] hover:text-[#14171C]"
                  >
                    View All Moving Routes
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Quote Column */}
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <QuoteForm
                  initialFrom={route.originCity}
                  initialTo={route.destinationCity}
                  initialMoveType="Inter-State Relocation"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Route Specific FAQs */}
      <FAQAccordion
        items={route.faqs}
        title={`${route.originCity} to ${route.destinationCity} FAQs`}
        subtitle="Practical questions regarding transit timeline, truck allocation, and vehicle transport."
      />
    </>
  );
}
