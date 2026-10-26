import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { constructMetadata } from '@/lib/seo';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = constructMetadata({
  title: 'Terms of Service | Shabari Packers and Movers',
  description: 'Terms and conditions governing relocation estimates, booking, and transport services.',
  canonicalPath: '/terms',
});

export default function TermsPage() {
  const breadcrumbItems = [{ label: 'Terms of Service', href: '/terms' }];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#14171C] font-serif mb-6">
            Terms of Service
          </h1>
          <p className="text-xs text-[#56616D] mb-8">Last Updated: October 2026</p>

          <div className="space-y-6 text-sm text-[#56616D] leading-relaxed">
            <p>
              Welcome to the website of {siteConfig.name}. By accessing our website, requesting moving estimates, or engaging our relocation services, you agree to comply with the terms and conditions outlined below.
            </p>

            <h2 className="text-lg font-bold text-[#14171C] font-serif">1. Quotations and Booking</h2>
            <p>
              Estimates provided via online forms, calls, or messaging are based on the initial inventory, floor levels, and locations shared by the client. Any significant changes in inventory volume, lack of working elevators requiring manual stairs carry, or multiple pickup points may adjust the final operational quotation before loading begins.
            </p>

            <h2 className="text-lg font-bold text-[#14171C] font-serif">2. Restricted and Personal Items</h2>
            <p>
              Clients must personally retain and transport all valuable jewellery, physical cash, original legal certificates, title deeds, confidential documents, and emergency prescription medicines. We explicitly disclaim responsibility for items of high individual monetary or sentimental value that are packed without prior written disclosure.
            </p>

            <h2 className="text-lg font-bold text-[#14171C] font-serif">3. Society Approvals and Permissions</h2>
            <p>
              The client is responsible for obtaining any necessary move-out or move-in permits, gate entry passes, elevator bookings, and security clearances from residential gated societies or commercial building administrations before the arrival of our transport vehicles.
            </p>

            <h2 className="text-lg font-bold text-[#14171C] font-serif">4. Force Majeure & Road Conditions</h2>
            <p>
              While we make every effort to adhere to planned delivery schedules, transit delays caused by severe weather conditions, highway checkpost closures, roadblocks, or regional administrative strikes represent force majeure events outside our direct operational control.
            </p>

            <h2 className="text-lg font-bold text-[#14171C] font-serif">5. Contact & Inquiries</h2>
            <p>
              For legal inquiries regarding consignment agreements, please email us at <a href={`mailto:${siteConfig.email}`} className="text-[#0F2C59] underline">{siteConfig.email}</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
