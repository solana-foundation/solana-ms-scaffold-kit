import { Metadata } from 'next'
import { MoveLeft } from 'lucide-react'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Post } from '@/components/Post'
import { Link } from '@/i18n/navigation'
import { postSeoQuery } from '@/sanity/lib/queries/post'
import { ParamsWithLocale } from '@/types/language'
import { TParams } from '@/types/routing'
import { getGenerateMetadata } from '@/utils/page'

export { generateStaticParams } from '@/utils/page'

export async function generateMetadata<
  T extends object,
  P extends ParamsWithLocale & { slug: string | null } = ParamsWithLocale & {
    slug: string | null
  } & T,
>({ params }: { params: P }): Promise<Metadata> {
  const metadataGenerator = await getGenerateMetadata<P>(postSeoQuery, ({ slug }) => 'post/' + slug)

  return await metadataGenerator({ params })
}

interface IPostPageProps {
  params: TParams<{ slug: string }>
}

export default async function PostPage({ params }: IPostPageProps) {
  const { locale, slug } = await params

  // Enable static rendering
  setRequestLocale(locale)

  const t = await getTranslations('utils')

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-10 p-10 pb-20">
      <div className="row-start-1 flex h-2 w-full items-center justify-start">
        <Link href="/" className="underline">
          <MoveLeft className="mr-1 inline-flex" />
          {t('back')}
        </Link>
      </div>
      <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        <Post locale={locale} slug={slug} />
      </main>
    </div>
  )
}
