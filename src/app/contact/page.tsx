import React from 'react';
import { Metadata } from 'next';
import { Phone, MessageSquare, Mail, MapPin, Clock, ShieldCheck, ExternalLink, Navigation } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import StructuredData from '@/components/StructuredData';
import { constructMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { siteConfig, getTelUrl, getWhatsAppUrl } from '@/data/siteConfig';

export const metadata: Metadata = constructMetadata({
  title: 'Contact Shabari Packers and Movers | Phone +91 98481 61321 & Office Location',
  description:
    'Contact Shabari Packers and Movers for instant home shifting quotes. Call: +91 98481 61321, WhatsApp support & office near Bhajan Mandir Road, Kothagudem, Telangana.',
  canonicalPath: '/contact',
});

export default function ContactPage() {
  const breadcrumbItems = [{ label: 'Contact', href: '/contact' }];
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
            <Phone className="w-3.5 h-3.5" />
            <span>Customer Support</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171C] font-serif tracking-tight">
            Contact Shabari Packers and Movers
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#56616D] leading-relaxed">
            Reach out directly to discuss your relocation requirements, get moving advice, or receive a transparent quotation.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#14171C] font-serif mb-2">
                  Get in Touch Directly
                </h2>
                <p className="text-sm text-[#56616D] leading-relaxed">
                  We are available 7 days a week to assist you with local moves within Hyderabad or long-distance transfers across South India.
                </p>
              </div>

              {/* Call Card */}
              <div className="p-5 bg-stone-50 rounded-2xl border border-[#EAE5DC] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0F2C59] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#B88E2F]" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#56616D]">
                    Direct Telephone
                  </h3>
                  <a
                    href={getTelUrl()}
                    className="text-base sm:text-lg font-bold text-[#14171C] hover:text-[#0F2C59] transition-colors mt-0.5 block"
                  >
                    {siteConfig.displayPhone}
                  </a>
                  <p className="text-xs text-[#56616D] mt-1">
                    Call our dispatch and quotation coordinators.
                  </p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="p-5 bg-emerald-50/60 rounded-2xl border border-emerald-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                    Official WhatsApp
                  </h3>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-bold text-emerald-950 hover:underline transition-colors mt-0.5 block"
                  >
                    +91 98481 61321
                  </a>
                  <p className="text-xs text-emerald-800/80 mt-1">
                    Send inventory photos, video walkthroughs, and receive quick quotes.
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-5 bg-stone-50 rounded-2xl border border-[#EAE5DC] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0F2C59] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#B88E2F]" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#56616D]">
                    Email Address
                  </h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm sm:text-base font-semibold text-[#14171C] hover:text-[#0F2C59] transition-colors mt-0.5 block"
                  >
                    {siteConfig.email}
                  </a>
                  <p className="text-xs text-[#56616D] mt-1">
                    For corporate queries, tenders, and official consignment records.
                  </p>
                </div>
              </div>

              {/* Office & Hours */}
              <div className="p-5 bg-stone-50 rounded-2xl border border-[#EAE5DC] space-y-4 text-xs text-[#56616D]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B88E2F] shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="font-semibold text-[#14171C] block text-sm">Office & Dispatch Hub:</span>
                    <a
                      href={siteConfig.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs leading-relaxed text-stone-700 hover:text-[#0F2C59] block mt-0.5 group"
                      title="Open office location in Google Maps"
                    >
                      <span className="group-hover:underline">{siteConfig.fullAddress}</span>
                    </a>
                    <a
                      href={siteConfig.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0F2C59] bg-[#E8D7B8]/40 hover:bg-[#E8D7B8] border border-[#E8D7B8] transition-colors shadow-2xs"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#B88E2F]" />
                      <span>Get Driving Directions on Google Maps</span>
                      <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-[#EAE5DC]">
                  <Clock className="w-4 h-4 text-[#B88E2F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#14171C] block">Operating Hours:</span>
                    <span>{siteConfig.operatingHours}</span>
                  </div>
                </div>

                {/* Embedded Map Container */}
                <div className="mt-3 rounded-xl overflow-hidden border border-[#EAE5DC] shadow-inner h-52 relative">
                  <iframe
                    src={siteConfig.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shabari Packers and Movers Office Location"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
