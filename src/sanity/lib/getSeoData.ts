import { getOpenGraph, TSanitySeo } from '@hoodieshq/ms-tools-integrations'
import { DEFAULT_METADATA } from '@/constants/metadata'
import { ParamsWithLocale } from '@/types/language'
import { log } from '@/utils/log'
import { env } from '../../../env.mjs'
import { sanityFetch } from './live'
import { TSanityPageMeta } from './types'

export async function getSeoData<P extends ParamsWithLocale>({
  query,
  params,
  pathname,
}: {
  query: string
  params: P
  pathname: string | null
}): Promise<TSanityPageMeta> {
  const { locale, ...paramsRes } = params
  const { data } = await sanityFetch({
    query,
    params: { ...paramsRes, language: locale, pathname },
  })
  const { seo, title } = data || {}
  const {
    metaDescription,
    metaTitle,
    twitter,
    seoKeywords,
    nofollowAttributes = false,
    additionalMetaTags,
  } = (seo || {}) as TSanitySeo

  const openGraph = seo?.openGraph ? getOpenGraph(seo?.openGraph) : undefined

  const url =
    (env.NEXT_PUBLIC_APP_URL ?? '') +
    `/${locale}` +
    (pathname == null ? '' : pathname?.startsWith('/') ? pathname : `/${pathname}`)

  const metaData = {
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
    nofollowAttributes,
    additionalMetaTags,
    robots: {
      index: !nofollowAttributes,
      follow: !nofollowAttributes,
      nocache: false,
      googleBot: {
        index: !nofollowAttributes,
        follow: !nofollowAttributes,
        noimageindex: nofollowAttributes,
      },
    },
  }

  log('seo data:', data)
  log('resulting metaData:', metaData)

  return metaData
}
