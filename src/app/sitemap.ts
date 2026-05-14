import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://kumaonvalley.in/kumaon-valley-explorers';

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
