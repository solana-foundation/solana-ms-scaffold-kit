'use client'

import React, { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@solana/ms-tools-ui'
import { useTranslations } from 'next-intl'

export interface Language {
  id: string
  title: string
  flag: string
}

interface LanguageSelectProps {
  languages: Language[]
  locale: string
  onChange?: (locale: string) => void
}

export const LanguageSelect = ({ languages, locale, onChange }: LanguageSelectProps) => {
  const router = useRouter()
  const t = useTranslations('utils')

  const handleChange = useCallback(
    (value: string) => {
      if (onChange) {
        onChange(value)
      }

      router.push(`/${value}`)
    },
    [router, onChange]
  )

  return (
    <Select name="language-select" value={locale} onValueChange={handleChange}>
      <SelectTrigger>
        <SelectValue placeholder={t('language_selection')} />
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem key={language.id} value={language.id}>
            {language.flag} {language.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
