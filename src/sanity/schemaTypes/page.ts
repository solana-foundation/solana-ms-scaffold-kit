import { defineField, defineType } from 'sanity'

export const page = defineType({
  type: 'document',
  title: 'Page',
  name: 'page',
  groups: [
    {
      title: 'SEO',
      name: 'seo',
    },
    {
      title: 'Content',
      name: 'content',
    },
  ],
  fields: [
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'seoMetaFields',
      group: 'seo',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'content',
    }),
  ],
  preview: {
    select: {
      metaTitle: 'metaTitle',
    },
    prepare(selection: { metaTitle?: string }) {
      const { metaTitle } = selection

      return {
        title: metaTitle || 'SEO',
      }
    },
  },
})
