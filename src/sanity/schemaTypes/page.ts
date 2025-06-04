import { LANGUAGE_FIELD } from '@solana-foundation/ms-tools-integrations'
import { defineField, defineType } from 'sanity'

export const page = defineType({
  type: 'document',
  title: 'Page',
  name: 'page',
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
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.max(50).warning('Shorter titles are usually better'),
    }),
    defineField({
      name: 'pathname',
      title: 'Pathname',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.max(50).warning('Shorter pathnames are usually better'),
    }),
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'seoMetaFields',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      metaTitle: 'seo.metaTitle',
      title: 'title',
    },
    prepare(selection: { title?: string; metaTitle?: string }) {
      const { title, metaTitle } = selection
      return {
        title: title || metaTitle || 'Untitled Page',
      }
    },
  },
})
