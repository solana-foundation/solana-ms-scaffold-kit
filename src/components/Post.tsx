import { getTranslations, setRequestLocale } from 'next-intl/server'
import { sanityFetch } from '@/sanity/lib/live'
import { postQuery } from '@/sanity/lib/queries/post'
import { ParamsWithLocale } from '@/types/language'
import { log } from '@/utils/log'
import { PostView } from './PostView'

export interface IPostPageProps extends ParamsWithLocale {
  slug: string
}

export async function Post({ locale, slug }: IPostPageProps) {
  if (!locale) return null

  // Enable static rendering
  setRequestLocale(locale)

  const t = await getTranslations('utils')

  // Use sanityFetch for draft mode, regular client for production
  const { data: post } = await sanityFetch({
    query: postQuery,
    params: { language: locale, slug },
  })

  log('post', post)

  if (!post) return <p>{t('loading')}...</p>

  return <PostView post={post} />
}
