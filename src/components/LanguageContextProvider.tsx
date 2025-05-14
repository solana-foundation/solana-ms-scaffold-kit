'use client'

import React from 'react'
import { DEFAULT_LANGUAGE } from '@/constants/language'
import { LanguageContext } from '@/contexts/LanguageContext'
import { Language } from '@/types/language'

export const LanguageContextProvider: React.FC<{
  children?: React.ReactNode
  language?: Language | undefined
}> = ({ language = DEFAULT_LANGUAGE, children }) => {
  return <LanguageContext.Provider value={{ language }}>{children}</LanguageContext.Provider>
}
