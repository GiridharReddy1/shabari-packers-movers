import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Phone, MessageSquare, ShieldCheck, Box } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import FAQAccordion from '@/components/FAQAccordion';
import StructuredData from '@/components/StructuredData';
import {
  constructMetadata,
  generateBreadcrumbSchema,
  generateFaqSchema,
  generateServiceSchema,
} from '@/lib/seo';
import { getServiceBySlug, getPublishedServices } from '@/data/services';
import { siteConfig, getTelUrl, getWhatsAppUrl } from '@/data/siteConfig';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = getPublishedServices();
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return constructMetadata({ title: 'Service Not Found', noIndex: true });
  }

  return constructMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    canonicalPath: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Services', href: '/services' },
    { label: service.title, href: `/services/${service.slug}` },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const faqSchema = generateFaqSchema(service.faqs);
  const serviceSchema = generateServiceSchema({
    title: service.title,
    description: service.shortDescription,
    url: `/services/${service.slug}`,
  });

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={serviceSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-[#FAF8F5] border-b border-[#EAE5DC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#B88E2F] bg-[#F9F5EC] border border-[#E8D7B8] mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Professional Relocation Service</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171C] font-serif tracking-tight">
            {service.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#56616D] leading-relaxed max-w-2xl mx-auto">
            {service.shortDescription}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="#service-quote"
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0F2C59] hover:bg-[#0A1C38] rounded-xl transition-colors"
            >
              Get a Quote for {service.title}
            </a>
            <a
              href={getWhatsAppUrl(`Hello Shabari Packers! I would like to enquire about ${service.title}.`)}
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

      {/* Detailed Overview & Quote Form Split */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#14171C] font-serif mb-4">
                  Service Overview & Process
                </h2>
                <p className="text-sm sm:text-base text-[#56616D] leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* What is Included */}
              <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#EAE5DC]">
                <h3 className="text-lg font-bold text-[#14171C] font-serif mb-4">
                  Key Service Inclusions
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#56616D]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step by Step Workflow */}
              <div>
                <h3 className="text-xl font-bold text-[#14171C] font-serif mb-6">
                  How We Execute This Move
                </h3>
                <div className="space-y-4">
                  {service.processSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl border border-[#EAE5DC] bg-white flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#0F2C59] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#14171C]">
                          {step.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#56616D] mt-1 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Locations Hub */}
              <div className="p-6 bg-stone-50 rounded-2xl border border-[#EAE5DC]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#14171C] mb-3">
                  Available Across Key Hubs
                </h3>
                <p className="text-xs text-[#56616D] mb-4">
                  We offer this service across all our active operational areas:
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/packers-and-movers/hyderabad"
                    className="px-3 py-1.5 bg-white border border-[#EAE5DC] rounded-lg text-[#0F2C59] hover:border-[#B88E2F] font-medium"
                  >
                    Hyderabad (Primary Hub)
                  </Link>
                  <Link
                    href="/packers-and-movers/bengaluru"
                    className="px-3 py-1.5 bg-white border border-[#EAE5DC] rounded-lg text-[#0F2C59] hover:border-[#B88E2F]"
                  >
                    Bengaluru
                  </Link>
                  <Link
                    href="/packers-and-movers/vijayawada"
                    className="px-3 py-1.5 bg-white border border-[#EAE5DC] rounded-lg text-[#0F2C59] hover:border-[#B88E2F]"
                  >
                    Vijayawada
                  </Link>
                  <Link
                    href="/packers-and-movers/visakhapatnam"
                    className="px-3 py-1.5 bg-white border border-[#EAE5DC] rounded-lg text-[#0F2C59] hover:border-[#B88E2F]"
                  >
                    Visakhapatnam
                  </Link>
                  <Link
                    href="/packers-and-movers/warangal"
                    className="px-3 py-1.5 bg-white border border-[#EAE5DC] rounded-lg text-[#0F2C59] hover:border-[#B88E2F]"
                  >
                    Warangal
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Quote Column */}
            <div className="lg:col-span-5" id="service-quote">
              <div className="sticky top-28">
                <QuoteForm initialMoveType={service.title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Specific FAQs */}
      <FAQAccordion
        items={service.faqs}
        title={`${service.title} FAQs`}
        subtitle="Common questions about preparation, timeline, and packing requirements."
      />
    </>
  );
}
