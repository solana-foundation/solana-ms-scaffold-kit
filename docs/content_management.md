# Content Management Documentation

## Overview

This project uses Sanity CMS for content management, enhanced with `@solana/ms-tools-integrations` package and various Sanity plugins for a complete content management solution.

## Schema Types

### Available Document Types

1. **Post**

   ```typescript
   {
     title: string
     slug: string
     publishedAt: datetime
     image: image
     body: array[block]
     seo: seoMetaFields
     language: string
   }
   ```

2. **Page**

   ```typescript
   {
     title: string
     pathname: string
     seo: seoMetaFields
     language: string
   }
   ```

## @solana/ms-tools-integrations Usage

The package provides several utilities for Sanity integration:

1. **Language Field**

   ```typescript
   import { LANGUAGE_FIELD } from '@solana/ms-tools-integrations'

   defineField(LANGUAGE_FIELD)
   ```

2. **SEO Types**

   ```typescript
   import { TSanitySeo } from '@solana/ms-tools-integrations'
   ```

## Sanity Studio

[Sanity documentation](https://www.sanity.io/docs)

### Access

The Sanity Studio is mounted at `/studio` route in the application.

### Installed Plugins

1. **Document Internationalization**

   - Manages multilingual content
   - Configured for `page` and `post` document types
   - Synchronized with frontend language settings

2. **Vision Tool**

   - GROQ query interface
   - Available in development mode

3. **SEO Plugin**
   - Manages SEO metadata
   - Integrated with `seoMetaFields` type

### Content Structure

```typescript
S.list().title('Content').items(S.documentTypeListItems())
```

## Environment Variables

For detailed environment variable setup, refer to [Environment Variables Documentation](docs/env.md).

Key variables for Sanity:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` (required)
- `NEXT_PUBLIC_SANITY_DATASET` (required)
- `SANITY_VIEWER_TOKEN` (optional, for development)

## Development Guidelines

### Creating New Schema Types

1. Create a new schema file in `src/sanity/schemaTypes/`
2. Define fields using `defineField` and `defineType`
3. Add to schema types in `src/sanity/schemaTypes/index.ts`
4. Update internationalization configuration if needed

If the schema type is common and could be reused, consider including it in the `@solana/ms-tools-integrations`.

### Best Practices

1. Always include language field for translatable content
2. Implement SEO fields for public-facing content
3. Use appropriate field validations
4. Group fields logically using field groups

### Content Querying

```typescript
import { sanityFetch } from '@/sanity/lib/live'

const { data } = await sanityFetch({
  query: yourQuery,
  params: { language: locale },
})
```

### Image Handling

```typescript
import { urlFor } from '@/sanity/lib/image'

const imageUrl = urlFor(source).url()
```

## Deployment

### Studio Deployment

```bash
pnpm sanity:deploy   # Deploy studio
```

### Production Configuration

- Set `useCdn: true` in production for better performance
- Ensure all required environment variables are set
- Configure CORS settings in Sanity dashboard

## Troubleshooting

1. **Missing Content**

   - Verify correct project ID and dataset
   - Check language configuration
   - Ensure content is published

2. **Studio Access Issues**

   - Verify SANITY_VIEWER_TOKEN
   - Check user permissions in Sanity dashboard

3. **Image Loading Problems**

   - Confirm image asset references
   - Check image URL configuration
