# Project Tools

## @solana/ms-tools-ui

A comprehensive UI component library that provides pre-built, customizable components following Solana's design system.
[Documentation](https://github.com/solana-foundation/solana-ms-tools/)

### Features

1. **Accessibility**
   - ARIA compliant components
   - Keyboard navigation support
   - Screen reader optimized

2. **Theming**
   - Dark/Light mode support
   - Customizable via Tailwind CSS
   - Consistent design tokens

3. **Integration**
   - Seamless Next.js integration
   - TypeScript support
   - React Server Components compatible

### Best Practices

1. **Component Usage**
   - Import only needed components
   - Use composition for complex UIs
   - Follow provided prop patterns

2. **Styling**
   - Use provided CSS variables
   - Extend using Tailwind classes
   - Maintain design system consistency

## @solana/ms-tools-config

Shared configuration package that provides standardized settings and utilities.

### Features

1. **ESLint Configuration**
   - TypeScript support
   - React best practices
   - Next.js specific rules

2. **Prettier Configuration**
   - Consistent code formatting
   - Import sorting
   - Tailwind CSS class sorting

3. **TypeScript Configuration**
   - Strict type checking
   - Path aliases
   - Module resolution

### Usage

#### ESLint Configuration

```javascript
// .eslintrc.js
module.exports = {
  extends: ['@solana/ms-tools-config/eslint'],
  // Project-specific overrides
}
```

#### Prettier Configuration

```javascript
// prettier.config.js
module.exports = {
  ...require('@solana/ms-tools-config/prettier'),
  // Project-specific settings
}
```

#### TypeScript Configuration

```json
// tsconfig.json
{
  "extends": "@solana/ms-tools-config/typescript/next.json",
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### Best Practices

1. **Configuration Extension**
   - Extend base configurations
   - Override only when necessary
   - Document custom rules

2. **Version Management**
   - Keep tools in sync
   - Review changelogs
   - Test before upgrading

3. **Integration**
   - Use with IDE extensions
   - Configure git hooks
   - Automate formatting

### Related Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Configuration](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier Options](https://prettier.io/docs/en/options.html)

## @solana/ms-tools-integrations

Integration utilities for Sanity CMS and other third-party services in Solana projects.

### Features

1. **Sanity CMS Integration**
   - Language field configuration
   - SEO metadata types
   - Content type definitions

2. **Type Definitions**
   - `TSanitySeo` for SEO metadata
   - `Language` interface for internationalization
   - Common content interfaces

### Usage

#### Language Field

```typescript
import { LANGUAGE_FIELD } from '@solana/ms-tools-integrations'

// In Sanity schema definition
defineField(LANGUAGE_FIELD)
```

#### SEO Types

```typescript
import { TSanitySeo } from '@solana/ms-tools-integrations'

// In content type definitions
interface IPage {
  seo: TSanitySeo
  // other fields...
}
```

### Integration with Sanity

1. **Document Types**
   - Pre-configured field definitions
   - Standardized content structures
   - Internationalization support

2. **SEO Management**
   - Meta tags handling
   - Social media previews
   - Search engine optimization

### Related Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Content Internationalization](https://www.sanity.io/docs/localization)
