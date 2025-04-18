import { DEFAULT_METADATA } from '@/constants/metadata'

import '@/styles/globals.css'

export const metadata = DEFAULT_METADATA

export const viewport = {
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  width: 'device-width',
  height: 'device-height',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
