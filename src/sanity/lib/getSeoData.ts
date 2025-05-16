import { Metadata } from 'next'
import { DEFAULT_METADATA } from '@/constants/metadata'
import { ParamsWithLocale } from '@/types/language'
import { log } from '@/utils/log'
import { env } from '../../../env.mjs'
import { sanityFetch } from './live'
import { TSanityCustomImage, TSanityOpenGraph, TSanitySeo } from './types'

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

export async function getSeoData<P extends ParamsWithLocale>({
  query,
  params,
  pathname,
}: {
  query: string
  params: P
  pathname: string | null
}): Promise<Metadata> {
  const { locale, ...paramsRes } = params
  const { data } = await sanityFetch({
    query,
    params: { ...paramsRes, language: locale, pathname },
  })
  const { seo, title } = data || {}
  const { metaDescription, metaTitle, twitter, seoKeywords } = (seo || {}) as TSanitySeo

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
  }

  log('seo data:', data)
  log('resulting metaData:', metaData)

  return metaData
}

/**
 * Generates metadata for a given set of parameters and pathname.
 *
 * @template T - An optional object type to extend the parameter type.
 * @template P - The parameter type, which includes a locale parameter.
 * @param getPathname - A function that takes the parameters and returns the pathname as a string or null.
 * @returns A promise that resolves to a Metadata object.
 */
export async function getGenerateMetadata<
  T extends object,
  P extends ParamsWithLocale = ParamsWithLocale & T,
>(
  query: string,
  getPathname: (params: P) => string | null
): Promise<({ params }: { params: P }) => Promise<Metadata>> {
  return async ({ params }: { params: P }): Promise<Metadata> => {
    const paramsRes = await params
    return getSeoData<P>({ query, pathname: getPathname(paramsRes), params })
  }
}
