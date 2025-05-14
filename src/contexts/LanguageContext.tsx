'use client'

import { createContext } from 'react'
import { DEFAULT_LANGUAGE } from '@/constants/language'
import { Language } from '@/types/language'

export interface LanguageContextType {
  language: Language
}

export const LanguageContext = createContext<LanguageContextType>({
  language: DEFAULT_LANGUAGE,
})
