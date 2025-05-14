import Image from 'next/image'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { defineQuery, PortableText, type SanityDocument } from 'next-sanity'
import { urlFor } from '@/sanity/lib/image'
import { sanityFetch } from '@/sanity/lib/live'
import { ParamsWithLocale } from '@/types/language'

const POST_QUERY = defineQuery(`*[
  _type == "post" && language == $language && $slug == slug.current
][0]{
_id,
title,
publishedAt,
image,
body
}`)

export interface IPostPageProps extends ParamsWithLocale {
  slug: string
}

export async function Post({ locale, slug }: IPostPageProps) {
  if (!locale) return null

  // Enable static rendering
  setRequestLocale(locale)

  const t = await getTranslations('utils')

  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: { language: locale, slug },
  })

  if (!post) return <p>{t('loading')}...</p>

  return (
    <article className="mx-auto max-w-screen-md">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
      {post.image && (
        <Image
          src={urlFor(post.image).width(400).height(400).url()}
          alt={post.title}
          width={400}
          height={400}
          priority
          className="mt-2 rounded-md bg-amber-400 dark:bg-amber-800"
        />
      )}
      <div className="mt-4">{post.body && <PortableText value={post.body} />}</div>
    </article>
  )
}
