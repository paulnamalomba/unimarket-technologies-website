import type { MetadataRoute } from 'next';

import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/solutions', '/solutions/pos-eis', '/contact'].map((path) => ({
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    lastModified: new Date(),
    priority: path === '' ? 1 : 0.8,
    url: `${siteConfig.url}${path}`,
  }));
}
