import { seo } from '@hoodieshq/ms-tools-integrations'
import { groq } from 'next-sanity'

export const postQuery = groq`*[
  _type == "post" && language == $language && $slug == slug.current
][0]{
_id,
title,
publishedAt,
image,
body,
}`

export const postSeoQuery = groq`*[
  _type == "post" && language == $language && $slug == slug.current
][0]{
title,
${seo},
}`

export const postsQuery = groq`*[
  _type == "post" && language == $language && defined(slug.current)
]|order(publishedAt desc)[0...12]{
_id,
title,
slug,
publishedAt,
image,
language
}`
