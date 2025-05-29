import { Geist, Geist_Mono } from 'next/font/google'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { VisualEditing } from 'next-sanity'
import { DraftModeToggle } from '@/components/DraftModeToggle'
import { Header } from '@/components/Header'
import { LanguageContextProvider } from '@/components/LanguageContextProvider'
import { Sidebar } from '@/components/Sidebar'
import { SidebarWrapper } from '@/components/SidebarWrapper'
import { routing } from '@/i18n/routing'
import { SanityLive } from '@/sanity/lib/live'
import { getLanguage } from '@/utils/language'

import '@/styles/globals.css'

import { env } from '@/../env.mjs'

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
            <SidebarWrapper>
              <div className="w-full flex min-h-screen flex-col">
                <Header locale={locale} />
                <Sidebar />
                <main className="flex-1 pt-[60px]">
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
                </main>
              </div>
            </SidebarWrapper>
          </body>
        </html>
      </NextIntlClientProvider>
    </LanguageContextProvider>
  )
}
