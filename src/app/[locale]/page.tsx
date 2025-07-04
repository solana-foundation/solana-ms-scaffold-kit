import { setRequestLocale } from 'next-intl/server'
import { CustomHead } from '@/components/CustomHead'
import { PostsList } from '@/components/PostsList'
import { sanityFetch } from '@/sanity/lib/live'
import { pageQuery } from '@/sanity/lib/queries/page'
import { TParams } from '@/types/routing'
import { generatePageMetadata } from '@/utils/page'

export { generateStaticParams } from '@/utils/page'

export async function generateMetadata({ params }: { params: TParams }) {
  const resolvedParams = await params
  return generatePageMetadata({
    params: {
      locale: resolvedParams.locale,
      pathname: null,
    },
  })
}

interface IHomePageProps {
  params: TParams
}

export default async function HomePage({ params }: IHomePageProps) {
  const resolvedParams = await params
  const { locale } = resolvedParams

  // Enable static rendering
  setRequestLocale(locale)

  const { data = {} } = await sanityFetch({
    query: pageQuery,
    params: { language: locale, pathname: null },
  })
  const meta = await generatePageMetadata({ params: { locale, pathname: null } })

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-4 pb-20 font-[family-name:var(--font-geist-sans)]">
      <CustomHead additionalMetaTags={meta.additionalMetaTags || []} />
      <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        <h1 className="mb-3 text-4xl font-bold">{data.title}</h1>
        <PostsList locale={locale} />
      </main>
    </div>
  )
}
