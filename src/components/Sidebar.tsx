'use client'

import Link from 'next/link'
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  Sidebar as UISidebar,
} from '@solana/ms-tools-ui'
import { Home } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function Sidebar() {
  const t = useTranslations('navigation')

  return (
    <UISidebar className="border-b border-[var(--border)] bg-slate-100 dark:bg-[var(--surface)]">
      <SidebarHeader className="h-15" />
      <SidebarContent className="overflow-hidden">
        <SidebarGroup>
          <SidebarGroupLabel>{t('label')}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive tooltip={t('home')} asChild>
                  <Link href="/" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    <span>{t('home')}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </UISidebar>
  )
}
