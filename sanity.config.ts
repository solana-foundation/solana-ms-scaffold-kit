'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */
import { documentInternationalization } from '@sanity/document-internationalization'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { seoMetaFields } from 'sanity-plugin-seo'
import { structureTool } from 'sanity/structure'
import { LANGUAGES } from '@/constants/language'
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    // Seo plugin for managing SEO metadata
    // https://www.sanity.io/plugins/sanity-seo-plugin
    seoMetaFields(),
    // Internationalization plugin
    // https://www.sanity.io/plugins/document-internationalization
    documentInternationalization({
      // Required configuration
      supportedLanguages: LANGUAGES,
      schemaTypes: ['page', 'post'],
    }),
  ],
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
  useCdn: process.env.NODE_ENV === 'production',
})
