'use client'

import React from 'react'
import Link from 'next/link'
import { SidebarTrigger } from '@hoodieshq/ms-tools-ui'
import { LANGUAGES } from '@/constants/language'
import { LanguageSelect } from './LanguageSelect'
import { Logo } from './Logo'

interface HeaderProps {
  locale: string
}

export const Header: React.FC<HeaderProps> = ({ locale }) => {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="flex items-center justify-between px-4 py-2.5">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <Link className="flex items-center gap-2" href="/">
            <Logo className="h-10 w-auto text-current" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSelect languages={LANGUAGES} locale={locale} />
        </div>
      </div>
    </header>
  )
}
