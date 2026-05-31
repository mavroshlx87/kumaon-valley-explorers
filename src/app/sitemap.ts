import type { MetadataRoute } from 'next';
import { siteConfig } from "@/config/site";

export const dynamic = 'force-static';

const BASE_URL = `${siteConfig.url}${siteConfig.basePath}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/destinations',
    '/experiences',
    '/packages',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
