import { SanityDocument } from 'next-sanity'
import { TSanitySeo } from './seo'

export interface ISanityPage extends SanityDocument {
  _type: 'page'
  title: string
  slug: 'string'
  seo: TSanitySeo
}
