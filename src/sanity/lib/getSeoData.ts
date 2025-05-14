import { Metadata } from 'next'
import { DEFAULT_METADATA } from '@/constants/metadata'
import { LocaleParam } from '@/types/language'
import { env } from '../../../env.mjs'
import { sanityFetch } from './live'
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

export async function getPageSeoData({
  pathname = null,
  locale,
}: {
  pathname: string | null
  locale: LocaleParam
}): Promise<Metadata> {
  const { data } = await sanityFetch({
    query: pageSeoQuery,
    params: { pathname, language: locale },
  })
  const { seo, title } = (data?.[0] || {}) as ISanityPage
  const { metaDescription, metaTitle, twitter, seoKeywords } = (seo || {}) as TSanitySeo

  const openGraph = seo?.openGraph ? getOpenGraph(seo?.openGraph) : undefined

  const url =
    (env.NEXT_PUBLIC_APP_URL ?? '') +
    `/${locale}` +
    (pathname == null ? '' : pathname?.startsWith('/') ? pathname : `/${pathname}`)

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
    title: metaTitle || title || DEFAULT_METADATA.title,
    description: metaDescription || DEFAULT_METADATA.description,
  }
}
