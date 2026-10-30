import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/siteConfig';
import { getPublishedServices } from '@/data/services';
import { getRoutes } from '@/data/routes';
import { statesData, citiesData, getHyderabadLocalities } from '@/data/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.baseUrl;
  const now = new Date();

  // 1. Core Static Pages
  const staticPages = [
    { url: `${baseUrl}`, lastModified: now, changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/get-quote`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  // 2. Services Pages
  const servicesIndex = {
    url: `${baseUrl}/services`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  };

  const servicePages = getPublishedServices().map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // 3. Moving Routes
  const routesIndex = {
    url: `${baseUrl}/moving-routes`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  };

  const routePages = getRoutes().map((r) => ({
    url: `${baseUrl}/moving-routes/${r.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 4. Directory & States
  const directoryIndex = {
    url: `${baseUrl}/packers-and-movers`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  };

  const statePages = statesData.filter((s) => s.isPublished).map((s) => ({
    url: `${baseUrl}/packers-and-movers/${s.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // 5. Hyderabad Hub & 17 Localities
  const hyderabadHub = {
    url: `${baseUrl}/packers-and-movers/hyderabad`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 0.95,
  };

  const hyderabadLocalityPages = getHyderabadLocalities().map((loc) => ({
    url: `${baseUrl}/packers-and-movers/hyderabad/${loc.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // 6. Other Published Cities
  const reservedSlugs = new Set(['hyderabad', 'telangana', 'andhra-pradesh', 'karnataka']);
  const cityPages = citiesData
    .filter((c) => c.isPublished && !reservedSlugs.has(c.slug))
    .map((c) => ({
      url: `${baseUrl}/packers-and-movers/${c.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: c.isHub ? 0.85 : 0.75,
    }));

  return [
    ...staticPages,
    servicesIndex,
    ...servicePages,
    routesIndex,
    ...routePages,
    directoryIndex,
    ...statePages,
    hyderabadHub,
    ...hyderabadLocalityPages,
    ...cityPages,
  ];
}
