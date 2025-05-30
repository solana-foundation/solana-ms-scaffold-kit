import { TSanitySeo } from '@solana/ms-tools-integrations'
import { SanityDocument } from 'next-sanity'
import { Image, Slug } from 'sanity'

export interface ISanityPost extends SanityDocument {
  _type: 'post'
  title: string
  slug: Slug
  image: Image
  seo: TSanitySeo
  publishedAt: string
  language: string
}
