import { Rubik } from 'next/font/google'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { VisualEditing } from 'next-sanity'
import { DraftModeToggle } from '@/components/DraftModeToggle'
import { Footer } from '@/components/Footer'
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

const rubik = Rubik({
  variable: '--font-rubik',
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
  const isProduction = env.NODE_ENV === 'production'
  const showDevTools = env.NODE_ENV === 'development' && env.SANITY_VIEWER_TOKEN

  return (
    <LanguageContextProvider language={language}>
      <NextIntlClientProvider>
        <html lang={locale}>
          <body className={`${rubik.className} dark:bg-(color:--surface)`}>
            <SidebarWrapper>
              <div className="flex min-h-screen w-full flex-col">
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
                </main>
                <Footer appName={process.env.NEXT_PUBLIC_APP_NAME} />
                {showDevTools && !isDraftModeEnabled && (
                  <>
                    <DraftModeToggle isEnabled={isDraftModeEnabled} />
                  </>
                )}
              </div>
            </SidebarWrapper>
          </body>
          {env.NEXT_PUBLIC_GA_ID && isProduction && (
            <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_ID} />
          )}
          {env.NEXT_PUBLIC_GTM_ID && isProduction && (
            <GoogleTagManager gtmId={env.NEXT_PUBLIC_GTM_ID} />
          )}
        </html>
      </NextIntlClientProvider>
    </LanguageContextProvider>
  )
}
