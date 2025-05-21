import { DEFAULT_LANGUAGE, LANGUAGES } from '@/constants/language'
import { Language } from '@/types/language'

/**
 * Retrieves the language object based on the provided language ID.
 *
 * @param lang - The optional language identifier.
 * @returns The corresponding Language object, or the default language if not found.
 */
export function getLanguage(lang?: string): Language {
  if (!lang) {
    return DEFAULT_LANGUAGE
  }
  return LANGUAGES.find((language) => language.id === lang) || DEFAULT_LANGUAGE
}
