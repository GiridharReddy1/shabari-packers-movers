import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShieldCheck, MapPin, Phone, MessageSquare, CheckCircle, HeartHandshake, Eye, Award } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import StructuredData from '@/components/StructuredData';
import { constructMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { siteConfig, getTelUrl, getWhatsAppUrl } from '@/data/siteConfig';

export const metadata: Metadata = constructMetadata({
  title: 'About Shabari Packers and Movers | Our Story and Relocation Standards',
  description:
    'Learn about Shabari Packers and Movers. Rooted in Hyderabad, serving Telangana, Andhra Pradesh, and Karnataka with honest quotes and careful relocation.',
  canonicalPath: '/about',
});

export default function AboutPage() {
  const breadcrumbItems = [{ label: 'About Us', href: '/about' }];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero Header */}
      <section className="py-12 sm:py-16 bg-[#FAF8F5] border-b border-[#EAE5DC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#B88E2F] bg-[#F9F5EC] border border-[#E8D7B8] mb-4">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Our Background & Ethics</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171C] font-serif tracking-tight">
            About Shabari Packers and Movers
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#56616D] leading-relaxed">
            Founded with a commitment to bring honesty, care, and respectful handling to the Indian moving industry.
          </p>
        </div>
      </section>

      {/* Main Content & Mission */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-[#56616D] leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#14171C] font-serif">
                A Relocation Service Grounded in Practical Reality
              </h2>
              <p>
                Shabari Packers and Movers was established to address the common pain points that households face during relocations: hidden price increases on moving day, rough handling of cherished furniture, and poor communication between dispatchers and drivers.
              </p>
              <p>
                From our registered base in Hyderabad, Telangana, we have built a dependable operational network serving households, corporate transferees, and growing businesses throughout Telangana, Andhra Pradesh, and Karnataka.
              </p>
              <p>
                Our philosophy is simple: we treat your possessions with the same dignity and attention to detail that we would expect for our own families. We do not make false claims about having offices in every village or offering instant automated algorithms—instead, we personally assess your inventory to provide accurate, honest quotations.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/get-quote"
                  className="px-5 py-3 text-sm font-semibold text-white bg-[#0F2C59] hover:bg-[#0A1C38] rounded-xl transition-colors"
                >
                  Request a Free Quote
                </Link>
                <a
                  href={getTelUrl()}
                  className="px-5 py-3 text-sm font-semibold text-[#14171C] bg-stone-50 hover:bg-stone-100 border border-[#EAE5DC] rounded-xl transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#B88E2F]" />
                  <span>Call {siteConfig.displayPhone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-[#EAE5DC] shadow-md">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/shabari-team-truck.jpg"
                    alt="Shabari Packers and Movers on-ground staff with moving truck"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-[#FAF8F5] border-t border-[#EAE5DC]">
                  <p className="text-xs font-semibold text-[#14171C]">
                    Direct On-Ground Operations
                  </p>
                  <p className="text-[11px] text-[#56616D] mt-0.5">
                    Our team arrives in official company green uniforms with registered contact details printed clearly on every shirt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] border-y border-[#EAE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#14171C] font-serif">
              Our Core Operating Principles
            </h2>
            <p className="mt-2 text-sm text-[#56616D]">
              How we hold ourselves accountable on every move.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-[#EAE5DC] shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#F9F5EC] text-[#B88E2F] flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#14171C] font-serif mb-2">
                Honest Quotations
              </h3>
              <p className="text-xs sm:text-sm text-[#56616D] leading-relaxed">
                We clearly detail packing material grades, transport vehicles, and manpower upfront. No sudden additions or surprise demands when the truck arrives at your destination.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#EAE5DC] shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#F9F5EC] text-[#B88E2F] flex items-center justify-center mb-5">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#14171C] font-serif mb-2">
                Direct Accountability
              </h3>
              <p className="text-xs sm:text-sm text-[#56616D] leading-relaxed">
                You receive the direct phone numbers of our relocation coordinators. When you call, you speak to the person directly supervising your schedule, not an outsourced call center.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#EAE5DC] shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#F9F5EC] text-[#B88E2F] flex items-center justify-center mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#14171C] font-serif mb-2">
                Material Integrity
              </h3>
              <p className="text-xs sm:text-sm text-[#56616D] leading-relaxed">
                We invest in fresh, high-density bubble wrap, sturdy 5-ply corrugated cardboard, edge protectors, and clean shrink wrap. We do not recycle torn or dirty boxes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
