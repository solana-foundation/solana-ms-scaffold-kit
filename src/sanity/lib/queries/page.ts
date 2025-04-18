import { groq } from 'next-sanity'
import { seo } from './seo'

export const pageQuery = groq`*[_type == "page"]{
  _type,
  "slug":slug.current,
  slug,
  }`

export const pageSeoQuery = groq`*[_type == "page"]{
  _type,
  "slug":slug.current,
  title,
  ${seo},
  }`
