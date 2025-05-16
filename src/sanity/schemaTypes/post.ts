import { defineField, defineType } from 'sanity'
import { LANGUAGE_FIELD } from '../../constants/language'

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  groups: [
    {
      title: 'Content',
      name: 'content',
    },
    {
      title: 'SEO',
      name: 'seo',
    },
  ],
  fields: [
    defineField(LANGUAGE_FIELD),
    defineField({
      name: 'title',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      group: 'content',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      group: 'content',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      group: 'content',
    }),
    defineField({
      name: 'body',
      type: 'array',
      group: 'content',
      of: [{ type: 'block' }],
    }),
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'seoMetaFields',
      group: 'seo',
    }),
  ],
})
