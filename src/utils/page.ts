import { Metadata } from 'next'
import { LANGUAGES } from '@/constants/language'
import { getPageSeoData } from '@/sanity/lib/getSeoData'
import { LocaleParam } from '@/types/language'

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
 * Generates metadata for a given pathname and parameters.
 *
 * @param options - An object containing the pathname and parameters.
 * @param options.pathname - The optional pathname.
 * @param options.params - The parameters, which include a locale parameter.
 * @returns A promise that resolves to a Metadata object.
 */
export async function generateMetadata({
  pathname = null,
  params,
}: {
  pathname?: string | null
  params: { locale: LocaleParam }
}): Promise<Metadata> {
  const { locale } = await params
  const data = await getPageSeoData({ pathname, locale })

  if (!data) return {}

  return data
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
  T extends {} = {},
  P extends { locale: LocaleParam } = { locale: LocaleParam } & T,
>(
  getPathname: (params: P) => string | null
): Promise<({ params }: { params: P }) => Promise<Metadata>> {
  return async ({ params }: { params: P }): Promise<Metadata> => {
    const paramsRes = await params
    return generateMetadata({ pathname: getPathname(paramsRes), params })
  }
}
