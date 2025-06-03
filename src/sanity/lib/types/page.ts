import { Metadata } from 'next'
import { TSanitySeo } from '@solana-foundation/ms-tools-integrations'
import { SanityDocument } from 'next-sanity'

export interface ISanityPage extends SanityDocument {
  _type: 'page'
  title: string
  pathname: 'string'
  seo: TSanitySeo
}

export type TSanityPageMeta = Metadata &
  Pick<TSanitySeo, 'nofollowAttributes' | 'additionalMetaTags'>
