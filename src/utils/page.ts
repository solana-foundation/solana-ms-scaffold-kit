import { Metadata } from 'next'
import { LANGUAGES } from '@/constants/language'
import { getSeoData } from '@/sanity/lib/getSeoData'
import { pageSeoQuery } from '@/sanity/lib/queries/page'
import { ParamsWithLocale } from '@/types/language'

/**
 * Generates static parameters for internationalization.
 *
 * @returns A promise that resolves to an array of objects, each containing a language ID.
 */
export async function generateStaticParams(): Promise<
  {
    locale: string
  }[]
> {
  return LANGUAGES.map((lang) => ({
    locale: lang.id,
  }))
}

/**
 * Generates metadata for a given set of parameters and pathname.
 *
 * @template T - An optional object type to extend the parameter type.
 * @template P - The parameter type, which includes a locale parameter.
 * @param query - A string query used to fetch SEO data.
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
    const pathname = getPathname(paramsRes)
    if (!pathname && pathname !== null) {
      throw new Error('Pathname could not be generated.')
    }
    return await getSeoData<P>({ query, pathname, params: paramsRes })
  }
}

/**
 * Generates page-specific metadata for a given set of parameters.
 *
 * @template T - An optional object type to extend the parameter type.
 * @template P - The parameter type, which includes locale and pathname parameters.
 * @param options - An object containing the parameters.
 * @param options.params - The parameters, which include locale and pathname.
 * @returns A promise that resolves to a Metadata object.
 */
export async function generatePageMetadata<
  T extends object,
  P extends ParamsWithLocale & { pathname: string | null } = ParamsWithLocale & {
    pathname: string | null
  } & T,
>({ params }: { params: P }): Promise<Metadata> {
  const metadataGenerator = await getGenerateMetadata<P>(
    pageSeoQuery,
    ({ pathname }) => pathname || null
  )

  return await metadataGenerator({ params })
}
