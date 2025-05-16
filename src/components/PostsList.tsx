import Image from 'next/image'
import Link from 'next/link'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { type SanityDocument } from 'next-sanity'
import { urlFor } from '@/sanity/lib/image'
import { sanityFetch } from '@/sanity/lib/live'
import { postsQuery } from '@/sanity/lib/queries/post'
import { ParamsWithLocale } from '@/types/language'
import { log } from '@/utils/log'

export async function PostsList({ locale }: ParamsWithLocale) {
  if (!locale) return null

  // Enable static rendering
  setRequestLocale(locale)

  const t = await getTranslations()

  const { data: posts } = await sanityFetch({ query: postsQuery, params: { language: locale } })

  log('posts', posts)

  if (!posts) return <p>{t('utils.loading')}...</p>

  return (
    <>
      <h3 className="mb-2 text-2xl font-bold">{t('homePage.posts.title')}</h3>
      <ul className="flex flex-col gap-y-4">
        {(posts as SanityDocument[]).map((post) => {
          return (
            <li className="hover:underline" key={post._id}>
              <Link href={`/post/${post.slug.current}`}>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
                {post.image && (
                  <Image
                    src={urlFor(post.image).width(200).height(200).url()}
                    alt={post.title}
                    width={200}
                    height={200}
                    priority
                    className="mt-2 h-auto w-full rounded-md bg-amber-400 dark:bg-amber-800"
                  />
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
