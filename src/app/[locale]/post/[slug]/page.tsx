import { Metadata } from 'next'
import { MoveLeft } from 'lucide-react'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Post } from '@/components/Post'
import { Link } from '@/i18n/navigation'
import { client } from '@/sanity/lib/client'
import { postSeoQuery } from '@/sanity/lib/queries/post'
import { ParamsWithLocale } from '@/types/language'
import { TParams } from '@/types/routing'
import { getGenerateMetadata } from '@/utils/page'

// Make the page dynamic because the slug is dynamic
export const dynamic = 'force-dynamic'

type PostParams = ParamsWithLocale & { slug: string }

export async function generateMetadata({
  params,
}: {
  params: TParams<{ slug: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const metadataGenerator = await getGenerateMetadata<PostParams>(
    postSeoQuery,
    ({ slug }) => 'post/' + slug
  )

  return await metadataGenerator({
    params: {
      locale: resolvedParams.locale,
      slug: resolvedParams.slug,
    },
  })
}

interface IPostPageProps {
  params: TParams<{ slug: string }>
}

export default async function PostPage({ params }: IPostPageProps) {
  const resolvedParams = await params
  const { locale, slug } = resolvedParams

  // Enable static rendering
  setRequestLocale(locale)

  const t = await getTranslations('utils')

  // Verify if the post exists
  const post = await client.fetch(
    '*[_type == "post" && language == $language && slug.current == $slug][0]',
    { language: locale, slug }
  )

  // If post doesn't exist, you might want to show a 404 page
  if (!post) {
    return (
      <div className="grid min-h-screen place-items-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">{t('notFound')}</h1>
          <Link href="/" className="mt-4 inline-block underline">
            <MoveLeft className="mr-1 inline-flex" />
            {t('back')}
          </Link>
        </div>
      </div>
    )
  }

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
