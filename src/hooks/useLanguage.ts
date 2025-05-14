'use client'

import { useContext } from 'react'
import { LanguageContext, LanguageContextType } from '@/contexts/LanguageContext'

export const useLanguage = (): LanguageContextType => useContext(LanguageContext)
