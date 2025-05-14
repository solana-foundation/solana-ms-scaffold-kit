import { Geist, Geist_Mono } from 'next/font/google'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { VisualEditing } from 'next-sanity'
import { DraftModeToggle } from '@/components/DraftModeToggle'
import { LanguageContextProvider } from '@/components/LanguageContextProvider'
import { routing } from '@/i18n/routing'
import { SanityLive } from '@/sanity/lib/live'
import { getLanguage } from '@/utils/language'

import '@/styles/globals.css'

import { env } from '@/../env.mjs'
import { LanguageSelect } from '@/components/LanguageSelect'
import { LANGUAGES } from '@/constants/language'

export { generateStaticParams } from '@/utils/page'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  const language = getLanguage(locale)
  const isDraftModeEnabled = (await draftMode()).isEnabled
  const showDevTools = env.NODE_ENV === 'development' && env.SANITY_VIEWER_TOKEN

  return (
    <LanguageContextProvider language={language}>
      <NextIntlClientProvider>
        <html lang={locale}>
          <body className={`${geistSans.className} ${geistMono.className}`}>
            <>
              <div className="header w-full bg-slate-300 px-4 py-2 dark:bg-gray-700">
                <LanguageSelect languages={LANGUAGES} locale={locale} />
              </div>
              {children}
              {showDevTools && isDraftModeEnabled && (
                <>
                  <SanityLive />
                  <VisualEditing />
                  <DraftModeToggle isEnabled={isDraftModeEnabled} />
                </>
              )}
              {showDevTools && !isDraftModeEnabled && (
                <>
                  <DraftModeToggle isEnabled={isDraftModeEnabled} />
                </>
              )}
            </>
          </body>
        </html>
      </NextIntlClientProvider>
    </LanguageContextProvider>
  )
}
