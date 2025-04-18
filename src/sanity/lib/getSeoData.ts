import { Metadata } from 'next'
import { DEFAULT_METADATA } from '@/constants/metadata'
import { client } from '@/sanity/lib/client'
import { pageSeoQuery } from './queries/page'
import { ISanityPage, TSanityCustomImage, TSanityOpenGraph, TSanitySeo } from './types'

export const getOpenGraph = (args: TSanityOpenGraph) => {
  const { description, image, title, _type, siteName, url } = args
  const getImage = image ? resolveImage(image) : null
  const values = {
    _type,
    description,
    siteName,
    url,
    title,
    images: [{ url: getImage ?? '' }],
  }
  return values as Metadata['openGraph']
}

export const resolveImage = (image?: TSanityCustomImage) => {
  return image?.asset?.url ?? ''
}

export async function getSeoData(slug: string = ''): Promise<Metadata> {
  const { seo } = await client.fetch<ISanityPage>(pageSeoQuery, { slug })

  const { metaDescription, metaTitle, twitter, seoKeywords } = (seo || {}) as TSanitySeo

  const openGraph = seo?.openGraph ? getOpenGraph(seo?.openGraph) : undefined

  const url = (process.env.NEXT_PUBLIC_APP_URL ?? '') + (slug?.startsWith('/') ? slug : `/${slug}`)

  return {
    ...DEFAULT_METADATA,
    twitter: {
      creator: twitter?.creator,
      site: twitter?.site,
      card: twitter?.cardType || 'summary',
    },
    openGraph,
    alternates: {
      canonical: url || '',
    },
    keywords: seoKeywords,
    title: metaTitle || DEFAULT_METADATA.title,
    description: metaDescription || DEFAULT_METADATA.description,
  }
}
