import { DEFAULT_LANGUAGE, LANGUAGES } from '@/constants/language'
import { Language } from '@/types/language'

export function getLanguage(lang?: string): Language {
  if (!lang) {
    return DEFAULT_LANGUAGE
  }
  return LANGUAGES.find((language) => language.id === lang) || DEFAULT_LANGUAGE
}
