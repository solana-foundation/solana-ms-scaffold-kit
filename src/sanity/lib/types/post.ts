import { SanityDocument } from 'next-sanity'
import { Image, Slug } from 'sanity'
import { TSanitySeo } from './seo'

export interface ISanityPost extends SanityDocument {
  _type: 'post'
  title: string
  slug: Slug
  image: Image
  seo: TSanitySeo
  publishedAt: string
  language: string
}
