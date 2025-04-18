import { SanityDocument } from 'next-sanity'
import { TSanitySeo } from './seo'

export interface ISanityPage extends SanityDocument {
  _type: 'page'
  slug: 'string'
  seo: TSanitySeo
}
