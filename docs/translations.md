# Translation System Documentation

## Libraries Used

- [next-intl](https://next-intl-docs.vercel.app/) - Core internationalization framework
- [@sanity/document-internationalization](https://www.sanity.io/plugins/document-internationalization) - Sanity CMS internationalization plugin

## Project Configuration

### Supported Languages

The project currently supports the following languages (defined in `src/constants/language.ts`):

- English (🇺🇸) - Default language
- Spanish (🇪🇸)

### File Structure

```text
├── messages/           # Translation JSON files
│   ├── en.json        # English translations
│   └── es.json        # Spanish translations
├── src/
│   ├── i18n/         # i18n configuration
│   │   ├── navigation.ts
│   │   ├── request.ts
│   │   └── routing.ts
```

## Maintenance Process

### Adding New Translations

1. Add new translation keys to `messages/en.json`
2. Add corresponding translations to `messages/es.json`
3. Use the translation key in components:

   ```typescript
   // Server Components
   const t = await getTranslations('namespace')

   // Client Components
   const t = useTranslations('namespace')
   ```

### Adding a New Language

1. Add the language configuration to `src/constants/language.ts`:

   ```typescript
   export const LANGUAGES: Language[] = [
     { id: 'en', title: 'English', flag: '🇺🇸' },
     { id: 'es', title: 'Español', flag: '🇪🇸' },
     // Add new language here
   ]
   ```

2. Create a new translation file in `messages/[lang].json`
3. Update Sanity configuration if needed in `sanity.config.ts` (it uses the same languages by default).

### Translation Structure

The project uses a nested structure for translations. Example from `messages/en.json`:

```json
{
  "homePage": {
    "posts": {
      "title": "Posts"
    }
  },
  "navigation": {
    "home": "Home"
  }
}
```

## Content Management (Sanity)

The project uses Sanity's document internationalization plugin for managing translated content. The configuration is in `sanity.config.ts`:

- Supported document types: `['page', 'post']`
- Languages are synchronized with the frontend configuration
- Each document can have language-specific versions

## Development Guidelines

1. Always use translation keys instead of hardcoded strings
2. Keep translation keys organized by feature/page
3. Use the appropriate translation hook based on the component type:
   - Server Components: `getTranslations`
   - Client Components: `useTranslations`
4. Test new translations in all supported languages before deployment.
