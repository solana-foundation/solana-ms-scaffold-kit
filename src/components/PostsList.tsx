import { getTranslations, setRequestLocale } from 'next-intl/server'
import { sanityFetch } from '@/sanity/lib/live'
import { postsQuery } from '@/sanity/lib/queries/post'
import { ParamsWithLocale } from '@/types/language'
import { log } from '@/utils/log'
import { PostsListView } from './PostsListView'

export async function PostsList({ locale }: ParamsWithLocale) {
  if (!locale) return null

  // Enable static rendering
  setRequestLocale(locale)

  const t = await getTranslations()

  const { data: posts } = await sanityFetch({ query: postsQuery, params: { language: locale } })

  log('posts', posts)

  if (!posts) return <p>{t('utils.loading')}...</p>

  return <PostsListView posts={posts} title={t('homePage.posts.title')} />
}
