import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from '@/lib/seo';
import { siteConfig } from '@/data/siteConfig';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: `${siteConfig.name} | Best Packers and Movers in Hyderabad, Telangana, AP & Karnataka`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Top-rated packers and movers in Hyderabad, Telangana, Andhra Pradesh, and Karnataka. Professional home shifting, office relocation, bike & car transport with safe packing and transparent pricing.',
  keywords: [
    // Primary High Intent
    'Packers and Movers Near Me',
    'Best Packers and Movers in Hyderabad',
    'Packers and Movers in Telangana',
    'Packers and Movers in Andhra Pradesh',
    'Packers and Movers in Karnataka',
    'Household Shifting Services Near Me',
    'Home Shifting Services Hyderabad',
    'Local Packers and Movers Hyderabad',
    'Office Relocation Services',
    'Interstate Packers and Movers',
    'Bike and Car Transportation Services',
    'Shabari Packers and Movers',
    'Shabari Packers and Movers Contact Number',
    // Telangana Districts & Hubs
    'Packers and Movers in Kothagudem',
    'Packers and Movers in Warangal',
    'Packers and Movers in Karimnagar',
    'Packers and Movers in Khammam',
    'Packers and Movers in Nizamabad',
    'Packers and Movers in Siddipet',
    'Packers and Movers in Ramagundam',
    'Packers and Movers in Mahabubnagar',
    'Packers and Movers in Nalgonda',
    'Packers and Movers in Suryapet',
    'Packers and Movers in Sangareddy',
    // Andhra Pradesh Districts & Hubs
    'Packers and Movers in Vijayawada',
    'Packers and Movers in Visakhapatnam',
    'Packers and Movers in Vizag',
    'Packers and Movers in Guntur',
    'Packers and Movers in Tirupati',
    'Packers and Movers in Kurnool',
    'Packers and Movers in Nellore',
    'Packers and Movers in Anantapur',
    'Packers and Movers in Rajahmundry',
    'Packers and Movers in Kakinada',
    'Packers and Movers in Kadapa',
    'Packers and Movers in Ongole',
    // Karnataka Districts & Hubs
    'Packers and Movers in Bengaluru',
    'Packers and Movers in Bangalore',
    'Packers and Movers in Mysuru',
    'Packers and Movers in Mangaluru',
    'Packers and Movers in Hubballi',
    'Packers and Movers in Belagavi',
    'Packers and Movers in Ballari',
    'Packers and Movers in Kalaburagi',
    'Packers and Movers in Shivamogga',
    // Hyderabad Top Localities
    'Packers and Movers Gachibowli',
    'Packers and Movers Kondapur',
    'Packers and Movers Madhapur',
    'Packers and Movers HITEC City',
    'Packers and Movers Kukatpally',
    'Packers and Movers Miyapur',
    'Packers and Movers Manikonda',
    'Packers and Movers Secunderabad',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  verification: {
    google: 'googleae46e04519b3f332',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description:
      'Reliable packing and moving solutions for your home, office, and next destination across Hyderabad, Telangana, AP, and Karnataka.',
    images: [
      {
        url: '/images/shabari-logo.jpg',
        width: 800,
        height: 600,
        alt: `${siteConfig.name} Official Logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description:
      'Professional packing, household shifting, and interstate moving in Hyderabad and South India.',
    images: ['/images/shabari-logo.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const organizationSchema = generateOrganizationSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/shabari-logo.jpg" type="image/jpeg" />
      </head>
      <body className="min-h-full flex flex-col font-sans text-[#14171C] bg-[#FAF8F5]" suppressHydrationWarning>
        <StructuredData data={organizationSchema} />
        <StructuredData data={webSiteSchema} />
        <StructuredData data={localBusinessSchema} />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
