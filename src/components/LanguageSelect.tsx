'use client'

import React, { useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@solana/ms-tools-ui'

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
  const pathname = usePathname()

  const handleChange = useCallback(
    (value: string) => {
      if (onChange) {
        onChange(value)
      }

      router.push(`/${value}`)
    },
    [pathname, router, onChange]
  )

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger>
        <SelectValue placeholder="Select a language" />
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
