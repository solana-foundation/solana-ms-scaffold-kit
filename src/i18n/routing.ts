import { defineRouting } from 'next-intl/routing'
import { DEFAULT_LANGUAGE_ID, LANGUAGES } from '@/constants/language'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: LANGUAGES.map((lang) => lang.id),

  // Used when no locale matches
  defaultLocale: DEFAULT_LANGUAGE_ID,
})
