import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { constructMetadata } from '@/lib/seo';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy | Shabari Packers and Movers',
  description: 'Our customer data privacy policy regarding moving quotation details and contact numbers.',
  canonicalPath: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  const breadcrumbItems = [{ label: 'Privacy Policy', href: '/privacy-policy' }];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#14171C] font-serif mb-6">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#56616D] mb-8">Last Updated: October 2026</p>

          <div className="space-y-6 text-sm text-[#56616D] leading-relaxed">
            <p>
              At {siteConfig.name}, we prioritize the privacy and security of the personal details shared by our customers. This Privacy Policy details how we handle information submitted when you request a moving estimate or contact our team.
            </p>

            <h2 className="text-lg font-bold text-[#14171C] font-serif">1. Information We Collect</h2>
            <p>
              When you submit an online moving enquiry or contact us directly, we may collect your name, phone number, email address, pickup and delivery localities, moving dates, and high-level inventory descriptions necessary to calculate a moving estimate.
            </p>

            <h2 className="text-lg font-bold text-[#14171C] font-serif">2. How We Use Your Information</h2>
            <p>
              We use your contact and location details exclusively for:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Reviewing your inventory requirements and preparing a relocation quotation</li>
              <li>Connecting with you via phone, SMS, or WhatsApp to confirm moving schedules</li>
              <li>Coordinating on-ground packing crews, trucks, and gate passes on moving day</li>
            </ul>

            <h2 className="text-lg font-bold text-[#14171C] font-serif">3. Zero Third-Party Selling</h2>
            <p>
              We do not sell, rent, or lease customer contact information to third-party telemarketers, lead brokers, or unrelated advertising networks. Your information remains strictly within our operations.
            </p>

            <h2 className="text-lg font-bold text-[#14171C] font-serif">4. Data Security</h2>
            <p>
              We implement industry-standard technical measures to safeguard information received through our web forms against unauthorized access or tampering.
            </p>

            <h2 className="text-lg font-bold text-[#14171C] font-serif">5. Contact Information</h2>
            <p>
              If you have any questions or wish to update or delete your contact records from our database, please contact our support team at <a href={`mailto:${siteConfig.email}`} className="text-[#0F2C59] underline">{siteConfig.email}</a> or call {siteConfig.displayPhone}.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
