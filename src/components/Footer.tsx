'use client'

import Link from 'next/link'
import { BookOpen } from 'lucide-react'
import { useTranslations } from 'next-intl'

export const Footer = ({ appName = 'Application' }: { appName?: string }) => {
  const currentYear = new Date().getFullYear()
  const t = useTranslations('footer')

  return (
    <footer className="w-full border-t border-[var(--border)] bg-slate-100 dark:bg-[var(--surface)]">
      <div className="mx-auto flex w-full grow items-center justify-between px-4 py-4">
        <div className="text-xs text-gray-600 dark:text-gray-400">
          © {currentYear} {appName}. {t('rights_reserved')}.
        </div>
        <Link
          href="https://github.com/solana-foundation/solana-ms-scaffold-kit"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <BookOpen className="h-4 w-4" />
          <span>GitHub</span>
        </Link>
      </div>
    </footer>
  )
}
