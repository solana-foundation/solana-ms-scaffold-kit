import { Language } from '@/types/language'

export const LANGUAGES: Language[] = [
  { id: 'en', title: 'English', flag: '🇺🇸' },
  { id: 'es', title: 'Español', flag: '🇪🇸' },
]

export const DEFAULT_LANGUAGE = LANGUAGES[0]
export const DEFAULT_LANGUAGE_ID = DEFAULT_LANGUAGE.id
export const DEFAULT_LANGUAGE_TITLE = DEFAULT_LANGUAGE.title
