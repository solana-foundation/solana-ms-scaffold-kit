export type TSanitySeo = {
  _type?: 'seo'
  nofollowAttributes?: boolean
  metaDescription?: string
  additionalMetaTags?: TSanityMetaTag[]
  metaTitle?: string
  seoKeywords?: string[]
  openGraph?: TSanityOpenGraph
  twitter?: Twitter
}

export type TSanityMetaTag = {
  _type: 'metaTag'
  metaAttributes?: TSanityMetaAttribute[]
}

export type TSanityMetaAttribute = {
  _type: 'metaAttribute'
  attributeKey?: string
  attributeType?: string
  attributeValueString?: string
  attributeValueImage?: TSanityCustomImage
}

export type TSanityOpenGraph = {
  _type: 'openGraph'
  title: string
  url?: string
  siteName?: string
  description: string
  image: TSanityCustomImage
}

export type Twitter = {
  _type: 'twitter'
  handle?: string
  creator?: string
  site?: string
  cardType?: 'summary' | 'summary_large_image' | 'player' | 'app'
}

export type TSanityCustomImage = {
  _type: 'customImage'
  asset?: TSanityImageAsset
  crop?: {
    _type: 'SanityImageCrop'
    right: number
    top: number
    left: number
    bottom: number
  }
  hotspot?: {
    x: number
    y: number
    height: number
    _type: 'SanityImageHotspot'
    width?: number
  }
}

export type TSanityImageAsset = {
  _type?: 'SanityImageAsset'
  _id?: string
  path?: string
  url?: string
  metadata?: {
    _type?: 'SanityImageMetadata'
    dimensions?: {
      _type?: 'SanityImageDimensions'
      height?: number
      width?: number
    }
  }
}
