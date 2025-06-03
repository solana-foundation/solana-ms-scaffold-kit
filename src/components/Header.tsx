'use client'

import React from 'react'
import Link from 'next/link'
import { SidebarTrigger } from '@solana/ms-tools-ui'
import { LANGUAGES } from '@/constants/language'
import { LanguageSelect } from './LanguageSelect'
import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'

interface HeaderProps {
  locale: string
}

export const Header: React.FC<HeaderProps> = ({ locale }) => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-slate-100 dark:bg-[var(--surface)]">
      <div className="flex items-center justify-between px-4 py-2.5">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <Link className="flex items-center gap-2" href="/">
            <Logo className="h-10 w-auto text-current" />
          </Link>
        </div>

        <div className="relative z-50 flex items-center gap-4">
          <LanguageSelect languages={LANGUAGES} locale={locale} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
