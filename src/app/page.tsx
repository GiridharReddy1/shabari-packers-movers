import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Phone,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Truck,
  Box,
  MapPin,
  Clock,
  Navigation,
  ExternalLink,
  Compass,
} from 'lucide-react';
import { siteConfig, getTelUrl, getWhatsAppUrl } from '@/data/siteConfig';
import { getPublishedServices } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';
import LocationDirectory from '@/components/LocationDirectory';
import QuoteForm from '@/components/QuoteForm';
import FAQAccordion from '@/components/FAQAccordion';
import StructuredData from '@/components/StructuredData';
import { generateFaqSchema } from '@/lib/seo';

const homeFaqs = [
  {
    question: 'How do I book packers and movers in Hyderabad with Shabari?',
    answer:
      'You can enquire online by filling out our quote form, calling us directly at +91 98481 61321, or sending a message on WhatsApp. Our coordinator will review your move volume, discuss floor and lift details, and provide an honest estimate before scheduling your move.',
  },
  {
    question: 'What information is required for a moving quotation?',
    answer:
      'We need your current location (floor and lift availability), destination address, preferred moving date, and a general inventory of items (e.g. number of cots, wardrobes, refrigerators, washing machines, and approximate box count).',
  },
  {
    question: 'How much do packers and movers cost in Hyderabad?',
    answer:
      'Moving charges depend on the volume of goods, packing material requirements (single vs multi-layer for fragile goods), vehicle size, distance, and floor levels. Rather than using misleading fixed pricing, we calculate customized, transparent quotations based on your specific requirements.',
  },
  {
    question: 'Do you provide household shifting across apartments and villas?',
    answer:
      'Yes, we handle residential moves for 1 BHK, 2 BHK, 3 BHK+ apartments, gated communities, and independent houses across Hyderabad and inter-state corridors.',
  },
  {
    question: 'Can I enquire about moving between Telangana and Karnataka?',
    answer:
      'Yes, our Hyderabad to Bengaluru moving corridor along NH44 is one of our primary regular routes, with dedicated container vehicles and careful highway packing.',
  },
  {
    question: 'Can I request a move between Hyderabad and Andhra Pradesh?',
    answer:
      'Yes, we regularly service moving routes connecting Hyderabad with Vijayawada, Visakhapatnam, Guntur, Tirupati, and other Andhra Pradesh cities via NH65 and NH16.',
  },
  {
    question: 'How should I prepare for moving day?',
    answer:
      'Defrost and dry your refrigerator 12 to 24 hours prior, keep personal jewelry, cash, and essential documents in your personal handbag, and secure society gate permissions for our transport truck.',
  },
  {
    question: 'How do I contact Shabari Packers and Movers?',
    answer:
      'You can reach our customer support team directly at +91 98481 61321, on WhatsApp at the same number, or via email at contact@shabaripackers.com.',
  },
];

export default function HomePage() {
  const services = getPublishedServices();
  const faqSchema = generateFaqSchema(homeFaqs);

  return (
    <>
      <StructuredData data={faqSchema} />

      {/* A. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#FAF8F5] pt-8 pb-16 sm:pb-24 border-b border-[#EAE5DC]">
        {/* Subtle decorative background circles */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-[#F5EFEB] blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 rounded-full bg-[#F9F5EC] blur-3xl opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Regional Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#0F2C59] bg-[#E8D7B8]/30 border border-[#E8D7B8]">
                <MapPin className="w-3.5 h-3.5 text-[#B88E2F]" />
                <span>Hyderabad • Telangana • Andhra Pradesh • Karnataka</span>
              </div>

              {/* Suggested H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14171C] font-serif tracking-tight leading-[1.15]">
                Moving Made Simple.{' '}
                <span className="text-[#0F2C59] block sm:inline">Care You Can Trust.</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-[#56616D] max-w-xl leading-relaxed">
                Reliable packing and moving solutions for your home, office, and next destination. Let Shabari help make your move simpler and better organised.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/get-quote"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#0F2C59] hover:bg-[#0A1C38] rounded-xl shadow-xs hover:shadow-md transition-all duration-200"
                >
                  <span>Get a Free Moving Quote</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>

                <a
                  href={getTelUrl()}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-[#14171C] bg-white border border-[#EAE5DC] hover:border-[#B88E2F] rounded-xl shadow-2xs hover:bg-stone-50 transition-all duration-200"
                >
                  <Phone className="w-4 h-4 text-[#B88E2F] mr-2" />
                  <span>Talk to Our Team</span>
                </a>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-6 border-t border-[#EAE5DC]/80 grid grid-cols-3 gap-4 text-xs text-[#56616D]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Trained Loading Crew</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Multi-Layer Packing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Honest Quotations</span>
                </div>
              </div>
            </div>

            {/* Right Column: Quote Form Card */}
            <div className="lg:col-span-5">
              <QuoteForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* AUTHENTIC OPERATIONS SHOWCASE (Real photos from actual jobs!) */}
      <section className="py-12 bg-white border-b border-[#EAE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B88E2F]">
                Real Operations • Real Team
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#14171C] font-serif mt-1">
                On-Ground Moving Operations
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#56616D] max-w-md">
              Authentic photographs from our actual moving operations across Hyderabad, featuring our branded staff and transport vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Photo 1: Team & Truck */}
            <div className="group relative rounded-2xl overflow-hidden border border-[#EAE5DC] bg-stone-100 shadow-xs">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/shabari-team-truck.jpg"
                  alt="Shabari Packers and Movers team in uniform with company transport vehicle"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-xs font-semibold text-[#14171C]">
                  Dedicated Fleet & Uniformed Crew
                </p>
                <p className="text-[11px] text-[#56616D] mt-0.5">
                  Direct operations with verified staff and transparent direct contact.
                </p>
              </div>
            </div>

            {/* Photo 2: Careful Box Packing */}
            <div className="group relative rounded-2xl overflow-hidden border border-[#EAE5DC] bg-stone-100 shadow-xs">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/shabari-packing-boxes.jpg"
                  alt="Organised packaging and sturdy cartons prepared by Shabari Packers"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-xs font-semibold text-[#14171C]">
                  Sturdy Carton Packing & Sealing
                </p>
                <p className="text-[11px] text-[#56616D] mt-0.5">
                  Heavy-duty boxes and reinforced taping for books, clothes, and pantry items.
                </p>
              </div>
            </div>

            {/* Photo 3: Loading Truck Operation */}
            <div className="group relative rounded-2xl overflow-hidden border border-[#EAE5DC] bg-stone-100 shadow-xs">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/shabari-loading-operation.jpg"
                  alt="Shabari crew carefully loading heavy furniture and mattress onto truck"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-xs font-semibold text-[#14171C]">
                  Disciplined Truck Loading
                </p>
                <p className="text-[11px] text-[#56616D] mt-0.5">
                  Ergonomic handling of mattresses, appliances, and protected cargo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B. TRUST & SERVICE INTRODUCTION */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#B88E2F] bg-[#F9F5EC] border border-[#E8D7B8]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>About Shabari</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#14171C] font-serif tracking-tight leading-tight">
                A Relocation Partner Focused on Care, Clarity, and Respect
              </h2>
              <p className="text-sm sm:text-base text-[#56616D] leading-relaxed">
                Relocating your household or office is not merely about transporting boxes from one street to another. It represents life transitions, precious memories, and fragile investments.
              </p>
              <p className="text-sm sm:text-base text-[#56616D] leading-relaxed">
                At Shabari Packers and Movers, we operate with a genuine commitment to careful handling, clear communication, and personalized coordination across Hyderabad, Telangana, Andhra Pradesh, and Karnataka.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F2C59] hover:text-[#B88E2F] transition-colors"
                >
                  <span>Read More About Our Background & Values</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-white rounded-2xl border border-[#EAE5DC] shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#F9F5EC] text-[#B88E2F] flex items-center justify-center mb-3">
                  <Box className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#14171C] font-serif mb-1">
                  Careful Packing & Handling
                </h3>
                <p className="text-xs sm:text-sm text-[#56616D] leading-relaxed">
                  We use multi-layer bubble wrap, corrugated sheets, and heavy-gauge carton boxes to safeguard delicate china, electronics, and furnishings.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[#EAE5DC] shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#F9F5EC] text-[#B88E2F] flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#14171C] font-serif mb-1">
                  Organised Relocation Planning
                </h3>
                <p className="text-xs sm:text-sm text-[#56616D] leading-relaxed">
                  Clear schedules, pre-allocated moving time windows, and early coordination with apartment societies ensure punctual departures.
                </p>
              </div>

              <div className="sm:col-span-2 p-6 bg-white rounded-2xl border border-[#EAE5DC] shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#F9F5EC] text-[#B88E2F] flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#14171C] font-serif mb-1">
                  Clear, Direct Communication
                </h3>
                <p className="text-xs sm:text-sm text-[#56616D] leading-relaxed">
                  Direct phone and WhatsApp support without confusing call centers. You communicate directly with coordinators who know your move.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* C. SERVICES OVERVIEW */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#EAE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#B88E2F] bg-[#F9F5EC] border border-[#E8D7B8] mb-3">
              <Truck className="w-3.5 h-3.5" />
              <span>Comprehensive Relocation</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#14171C] font-serif tracking-tight">
              Our Professional Moving Services
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#56616D] leading-relaxed">
              Every relocation has unique requirements. Browse our dedicated services for local shifting, inter-city moves, corporate transfers, and specialized packing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#0F2C59] bg-[#F9F5EC] hover:bg-[#E8D7B8]/40 border border-[#E8D7B8] rounded-xl transition-colors"
            >
              <span>Explore All 10 Moving Services & Preparation Tips</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* G. STATE-WISE LOCATION DIRECTORY (Crucial centerpiece!) */}
      <LocationDirectory />

      {/* 13B. OFFICE LOCATION & GOOGLE MAPS SECTION */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#EAE5DC] relative overflow-hidden" id="office-location">
        {/* Subtle decorative background blur */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-20 w-80 h-80 rounded-full bg-[#E8D7B8]/20 blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 translate-x-20 w-96 h-96 rounded-full bg-[#0F2C59]/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#B88E2F] bg-[#F9F5EC] border border-[#E8D7B8] mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Visit Us In Person</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#14171C] font-serif tracking-tight">
              Our Office Location & Driving Directions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#56616D] leading-relaxed">
              Customers are warmly welcomed to visit our office for in-person moving consultations, packaging demonstrations, or booking discussions. Navigate directly with Google Maps below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Card: Office & Contact Info */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#EAE5DC] shadow-sm flex flex-col justify-between">
              <div className="space-y-6">
                {/* Header with status pill */}
                <div className="flex items-center justify-between pb-4 border-b border-[#EAE5DC]">
                  <div>
                    <span className="text-xs font-semibold text-[#B88E2F] uppercase tracking-wider block">Office & Dispatch Hub</span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#14171C] mt-0.5">Shabari Packers & Movers</h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Open Today
                  </span>
                </div>

                {/* Address block */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F9F5EC] border border-[#E8D7B8] flex items-center justify-center shrink-0 text-[#B88E2F] mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#14171C]">Office Address</h4>
                    <a
                      href={siteConfig.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#56616D] hover:text-[#0F2C59] mt-1 leading-relaxed block group"
                      title="Open office location in Google Maps"
                    >
                      <span className="group-hover:underline">{siteConfig.fullAddress}</span>
                      <span className="block text-xs text-[#B88E2F] group-hover:underline mt-0.5 font-medium">
                        📍 View on Google Maps →
                      </span>
                    </a>
                    <p className="text-xs text-[#857567] mt-1">
                      Coordinates: 17.5516291° N, 80.6198011° E
                    </p>
                  </div>
                </div>

                {/* Operating hours */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F9F5EC] border border-[#E8D7B8] flex items-center justify-center shrink-0 text-[#B88E2F] mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#14171C]">Working Hours</h4>
                    <p className="text-sm text-[#56616D] mt-1">
                      {siteConfig.operatingHours}
                    </p>
                    <p className="text-xs text-stone-500 mt-1">
                      Direct coordinator available on-site for booking schedules.
                    </p>
                  </div>
                </div>

                {/* Direct Contact links */}
                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#EAE5DC] space-y-2.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#56616D] font-medium">Direct Telephone:</span>
                    <a href={getTelUrl()} className="font-semibold text-[#0F2C59] hover:underline flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-[#B88E2F]" />
                      <span>{siteConfig.displayPhone}</span>
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#56616D] font-medium">Instant WhatsApp:</span>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-emerald-700 hover:underline flex items-center gap-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Chat with Office</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-[#EAE5DC] space-y-3">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0F2C59] hover:bg-[#0A1C38] shadow-sm hover:shadow-md transition-all group"
                >
                  <Navigation className="w-4 h-4 text-[#E8D7B8] group-hover:rotate-12 transition-transform" />
                  <span>Open in Google Maps for Navigation</span>
                  <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
                </a>

                <a
                  href={getTelUrl()}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-[#14171C] bg-white border border-[#EAE5DC] hover:border-[#B88E2F] hover:bg-stone-50 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B88E2F]" />
                  <span>Call Before You Arrive: {siteConfig.displayPhone}</span>
                </a>
              </div>
            </div>

            {/* Right Card: Interactive Map View */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-[#EAE5DC] shadow-sm overflow-hidden flex flex-col min-h-[440px] sm:min-h-[500px]">
              {/* Map header bar */}
              <div className="px-5 py-3.5 bg-stone-50 border-b border-[#EAE5DC] flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-[#14171C]">Live Google Maps Office Pin</span>
                  <span className="text-xs text-[#56616D] hidden sm:inline">• 17.5516291, 80.6198011</span>
                </div>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2C59] hover:text-[#B88E2F] transition-colors"
                >
                  <span>View Larger Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Interactive iframe with fallback button */}
              <div className="flex-1 relative w-full h-full min-h-[380px] bg-stone-100">
                <iframe
                  src={siteConfig.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shabari Packers and Movers Google Maps Location"
                  className="w-full h-full absolute inset-0"
                />

                {/* Floating overlay chip for immediate directions on mobile/desktop */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-10 pointer-events-auto">
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0F2C59]/95 hover:bg-[#0F2C59] backdrop-blur-md shadow-lg border border-white/20 transition-all hover:scale-[1.02]"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#E8D7B8]" />
                    <span>Navigate Here with Google Maps</span>
                    <ExternalLink className="w-3 h-3 opacity-80" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQS SECTION */}
      <FAQAccordion
        items={homeFaqs}
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about our packing, moving, pricing, and scheduling process."
      />

      {/* BOTTOM CTA BANNER */}
      <section className="py-14 sm:py-16 bg-[#0F2C59] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif tracking-tight">
            Planning Your Move in Hyderabad or Beyond?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-200 max-w-xl mx-auto leading-relaxed">
            Contact Shabari Packers and Movers today for a transparent, honest quotation tailored to your home or office.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/get-quote"
              className="px-6 py-3.5 text-sm font-semibold text-[#0F2C59] bg-[#E8D7B8] hover:bg-white rounded-xl shadow-sm transition-all"
            >
              Get a Free Moving Quote
            </Link>
            <a
              href={getTelUrl()}
              className="px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all"
            >
              Call {siteConfig.displayPhone}
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
