import type { MetadataRoute } from 'next'
import { APP_URL } from '@/constants/metadata'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio/',
    },
    sitemap: APP_URL,
  }
}
