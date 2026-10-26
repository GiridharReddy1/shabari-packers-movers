import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { ClipboardList, Phone, MessageSquare, CheckCircle, ShieldCheck } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import StructuredData from '@/components/StructuredData';
import { constructMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { siteConfig, getTelUrl, getWhatsAppUrl } from '@/data/siteConfig';

export const metadata: Metadata = constructMetadata({
  title: 'Get a Free Moving Quote | Shabari Packers and Movers',
  description:
    'Request a free, accurate relocation quote from Shabari Packers and Movers. Household shifting, office moves, and interstate relocations across Telangana, AP & Karnataka.',
  canonicalPath: '/get-quote',
});

// Helper component to read query params wrapped in Suspense for Next.js 16
function QuoteFormWrapper() {
  return <QuoteForm />;
}

export default function GetQuotePage() {
  const breadcrumbItems = [{ label: 'Get a Quote', href: '/get-quote' }];
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
            <ClipboardList className="w-3.5 h-3.5" />
            <span>Honest & Transparent Pricing</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171C] font-serif tracking-tight">
            Request a Free Moving Quote
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#56616D] leading-relaxed max-w-2xl mx-auto">
            Fill in your pickup and destination details below. Our relocation coordinator will assess your requirements and contact you with a transparent quotation.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="p-8 text-center text-stone-500">Loading form...</div>}>
                <QuoteFormWrapper />
              </Suspense>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-7 border border-[#EAE5DC]">
                <h3 className="text-lg font-bold text-[#14171C] font-serif mb-4">
                  What Happens After You Submit?
                </h3>
                <ul className="space-y-4 text-xs sm:text-sm text-[#56616D]">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-[#14171C] block font-semibold">1. Requirement Review:</strong>
                      <span>Our coordinator checks volume, route, and floor access details.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-[#14171C] block font-semibold">2. Clarification Call:</strong>
                      <span>We connect to confirm delicate items, lift permissions, and vehicle size.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-[#14171C] block font-semibold">3. Transparent Quote:</strong>
                      <span>You receive a clear breakdown of packing materials, transport, and crew.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#EAE5DC] space-y-3">
                <h4 className="text-sm font-bold text-[#14171C]">Need an Immediate Quotation?</h4>
                <p className="text-xs text-[#56616D] leading-relaxed">
                  If your move is urgent or within the next 24 to 48 hours, reach out directly via telephone or WhatsApp:
                </p>
                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={getTelUrl()}
                    className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-[#14171C] bg-stone-50 hover:bg-stone-100 border border-[#EAE5DC] rounded-xl transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#B88E2F]" />
                    <span>Call Coordinator: {siteConfig.displayPhone}</span>
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Enquiry: +91 98481 61321</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
