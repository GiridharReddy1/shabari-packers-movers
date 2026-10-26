import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateLocalBusinessSchema } from '@/lib/seo';
import { siteConfig } from '@/data/siteConfig';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: `${siteConfig.name} | Trusted Relocation in Hyderabad, Telangana, AP & Karnataka`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Reliable packing and moving solutions for homes, flats, and offices across Hyderabad, Telangana, Andhra Pradesh, and Karnataka. Careful handling, transparent quotes, and disciplined moving.',
  keywords: [
    'Packers and Movers in Hyderabad',
    'Packers and Movers Near Me',
    'Household Shifting in Hyderabad',
    'Home Shifting Services in Hyderabad',
    'Local Packers and Movers Hyderabad',
    'Packers and Movers Gachibowli',
    'Packers and Movers Kukatpally',
    'Packers and Movers Bengaluru',
    'Packers and Movers Vijayawada',
    'Shabari Packers and Movers',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
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

  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/shabari-logo.jpg" type="image/jpeg" />
      </head>
      <body className="min-h-full flex flex-col font-sans text-[#14171C] bg-[#FAF8F5]" suppressHydrationWarning>
        <StructuredData data={localBusinessSchema} />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
