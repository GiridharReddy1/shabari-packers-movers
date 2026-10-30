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
  };
}

export function generateLocalBusinessSchema({
  name = siteConfig.name,
  description = siteConfig.tagline,
  url = siteConfig.baseUrl,
  areaServed = ['Hyderabad', 'Telangana', 'Andhra Pradesh', 'Karnataka'],
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
    '@type': 'MovingCompany',
    name: name,
    image: `${siteConfig.baseUrl}/images/shabari-logo.jpg`,
    '@id': `${siteConfig.baseUrl}/#company`,
    url: url,
    telephone: telephone,
    priceRange: '₹₹',
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
