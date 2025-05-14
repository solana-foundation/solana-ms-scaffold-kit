import { groq } from 'next-sanity'
import { seo } from './seo'

export const pageQuery = groq`*[_type == "page" && language == $language && (
    pathname == $pathname || (!defined(pathname) && !defined($pathname))
  )][0]{
  _type,
  pathname,
  title,
  }`

export const pageSeoQuery = groq`*[_type == "page" && language == $language && (
    pathname == $pathname || (!defined(pathname) && !defined($pathname))
  )][0]{
  _type,
  pathname,
  title,
  ${seo},
  }`
