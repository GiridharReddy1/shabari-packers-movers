import { siteConfig } from '@/data/siteConfig';
import { Metadata } from 'next';

export function constructMetadata({
  title,
  description,
  canonicalPath = '',
  image = '/images/shabari-logo.jpg',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  canonicalPath?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | Trusted Relocation in Hyderabad, Telangana, AP & Karnataka`;

  const pageDescription =
    description ||
    'Reliable packers and movers in Hyderabad, Telangana, Andhra Pradesh, and Karnataka. Household shifting, office relocation, and inter-city moving with care.';

  const canonicalUrl = `${siteConfig.baseUrl}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
  const ogImageUrl = image.startsWith('http') ? image : `${siteConfig.baseUrl}${image}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImageUrl,
          width: 800,
          height: 600,
          alt: `${siteConfig.name} - ${siteConfig.tagline}`,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [ogImageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    other: {
      'geo.region': 'IN-TG',
      'geo.placename': 'Kothagudem, Telangana',
      'geo.position': '17.5516291;80.6198011',
      'ICBM': '17.5516291, 80.6198011',
    },
  };
}

export function generateLocalBusinessSchema({
  name = siteConfig.name,
  description = siteConfig.tagline,
  url = siteConfig.baseUrl,
  areaServed = [
    'Telangana',
    'Andhra Pradesh',
    'Karnataka',
    'Hyderabad',
    'Kothagudem',
    'Warangal',
    'Karimnagar',
    'Khammam',
    'Nizamabad',
    'Vijayawada',
    'Visakhapatnam',
    'Guntur',
    'Tirupati',
    'Kurnool',
    'Bengaluru',
    'Mysuru',
    'Mangaluru',
    'Hubballi',
    'Ballari',
  ],
  telephone = siteConfig.displayPhone,
}: {
  name?: string;
  description?: string;
  url?: string;
  areaServed?: string[];
  telephone?: string;
} = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': ['MovingCompany', 'LocalBusiness'],
    name: name,
    image: `${siteConfig.baseUrl}/images/shabari-logo.jpg`,
    '@id': `${siteConfig.baseUrl}/#company`,
    url: url,
    telephone: telephone,
    priceRange: '₹₹',
    paymentAccepted: 'Cash, UPI, Net Banking, Credit Card, Debit Card',
    currenciesAccepted: 'INR',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Near Bhajan Mandir Road',
      addressLocality: 'Kothagudem',
      addressRegion: 'Telangana',
      postalCode: '507101',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '17.5516291',
      longitude: '80.6198011',
    },
    hasMap: siteConfig.googleMapsUrl,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '482',
      bestRating: '5',
      worstRating: '1',
    },
    knowsAbout: [
      'Packers and Movers',
      'Household Shifting',
      'Office Relocation',
      'Home Relocation',
      'Bike and Car Transportation',
      'Interstate Moving',
      'Local Shifting Hyderabad',
      'Packing and Unpacking Services',
      'Fragile Items Crating',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Packers and Movers Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Household Shifting Services',
            description:
              'Complete household moving for 1 BHK, 2 BHK, 3 BHK apartments, villas, and independent houses.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Office & Corporate Relocation',
            description:
              'Seamless corporate and office shifting with minimum downtime, IT systems protection, and weekend moving options.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Vehicle & Bike Transportation',
            description:
              'Door-to-door two-wheeler and four-wheeler transport in specialized closed container carriers.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Professional Packing & Unpacking',
            description:
              'Multi-layer bubble wrapping, foam cushioning, edge-guards, and heavy-duty corrugated cartons.',
          },
        },
      ],
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.displayPhone,
      contactType: 'customer service',
      areaServed: ['IN-TG', 'IN-AP', 'IN-KA'],
      availableLanguage: ['Telugu', 'English', 'Hindi'],
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '07:00',
        closes: '21:30',
      },
    ],
    areaServed: areaServed.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area,
    })),
    description: description,
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.baseUrl,
    logo: `${siteConfig.baseUrl}/images/shabari-logo.jpg`,
    image: `${siteConfig.baseUrl}/images/shabari-logo.jpg`,
    description: siteConfig.tagline,
    telephone: siteConfig.displayPhone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Near Bhajan Mandir Road',
      addressLocality: 'Kothagudem',
      addressRegion: 'Telangana',
      postalCode: '507101',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.displayPhone,
      contactType: 'customer service',
      areaServed: ['IN-TG', 'IN-AP', 'IN-KA'],
      availableLanguage: ['Telugu', 'English', 'Hindi'],
    },
    sameAs: [siteConfig.googleMapsUrl],
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.baseUrl}/packers-and-movers?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name?: string; label?: string; url?: string; href?: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const name = item.name || item.label || '';
      const url = item.url || item.href || '';
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: name,
        item: url.startsWith('http') ? url : `${siteConfig.baseUrl}${url}`,
      };
    }),
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateServiceSchema({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: title,
    provider: {
      '@type': 'MovingCompany',
      name: siteConfig.name,
      url: siteConfig.baseUrl,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Telangana, Andhra Pradesh, Karnataka',
    },
    description: description,
    url: url.startsWith('http') ? url : `${siteConfig.baseUrl}${url}`,
  };
}
