import { env } from '@/../env.mjs'

export const DEFAULT_METADATA = {
  title: {
    template: '%s | Solana microsite scaffold kit',
    default: 'Solana microsite scaffold kit',
  },
  description: 'Solana microsite scaffold kit',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/android-chrome-192x192.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon',
      url: '/favicon.ico',
    },
  },
}

export const APP_URL = env.NEXT_PUBLIC_APP_URL

export const DEFAULT_JSON_LD = {
  __html: JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: APP_URL,
    publisher: {
      '@type': 'Organization',
      name: env.NEXT_PUBLIC_APP_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${APP_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPageElement',
      url: APP_URL,
    },
  }),
}
