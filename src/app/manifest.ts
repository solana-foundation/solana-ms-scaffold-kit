import type { MetadataRoute } from 'next'
import { env } from '@/../env.mjs'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: env.NEXT_PUBLIC_APP_NAME,
    short_name: env.NEXT_PUBLIC_APP_SHORT_NAME,
    description: env.NEXT_PUBLIC_APP_DESCRIPTION,
    start_url: env.NEXT_PUBLIC_APP_START_URL,
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#13d89b',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
