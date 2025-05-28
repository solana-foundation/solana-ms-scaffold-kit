import { ReactNode } from 'react'
import Head from 'next/head'
import { TSanitySeo } from '@hoodieshq/ms-tools-integrations'
import { DEFAULT_JSON_LD } from '@/constants/metadata'

/**
 * Maps Sanity CMS meta tags to React meta elements
 * @param {TSanitySeo['additionalMetaTags']} metaTags - Array of meta tag objects from Sanity CMS
 * @returns {ReactNode[]} Array of React meta elements
 *
 * @example
 * const metaTags = [{
 *   _type: 'metaTag',
 *   metaAttributes: [{
 *     attributeKey: 'og:image',
 *     attributeType: 'image',
 *     attributeValueImage: { asset: { url: 'https://example.com/image.jpg' } }
 *   }]
 * }]
 * const metaElements = mapSanityMetaTags(metaTags)
 */
export function mapSanityMetaTags(metaTags: TSanitySeo['additionalMetaTags'] = []): ReactNode[] {
  if (!metaTags) return []

  return metaTags
    .flatMap((tag, index) => {
      if (tag._type !== 'metaTag' || !tag.metaAttributes) return null

      return tag.metaAttributes.map((attr, i) => {
        const content =
          attr.attributeType === 'image'
            ? attr.attributeValueImage?.asset?.url
            : attr.attributeValueString

        if (!attr.attributeKey || !content) return null

        return <meta key={`${index}-${i}`} name={attr.attributeKey} content={content} />
      })
    })
    .filter(Boolean) as ReactNode[]
}

export function CustomHead({
  title,
  description,
  seoKeywords,
  additionalMetaTags,
}: {
  title?: string
  description?: string
  seoKeywords?: string[]
  nofollowAttributes?: boolean
  additionalMetaTags?: TSanitySeo['additionalMetaTags']
}) {
  return (
    <Head>
      {seoKeywords?.length && <meta name="keywords" content={seoKeywords.join(', ')} />}
      {mapSanityMetaTags(additionalMetaTags)}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...DEFAULT_JSON_LD,
            name: title,
            description: description,
          }),
        }}
      />
    </Head>
  )
}
