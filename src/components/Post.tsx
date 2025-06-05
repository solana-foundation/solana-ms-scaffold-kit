import { draftMode } from 'next/headers'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { client } from '@/sanity/lib/client'
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
  const { isEnabled: isDraftMode } = await draftMode()

  // Use sanityFetch for draft mode, regular client for production
  const post = isDraftMode
    ? (await sanityFetch({
        query: postQuery,
        params: { language: locale, slug },
      })).data
    : await client.fetch(postQuery, { language: locale, slug })

  log('post', post)

  if (!post) return <p>{t('loading')}...</p>

  return <PostView post={post} />
}
