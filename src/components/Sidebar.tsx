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
  SidebarTrigger,
  Sidebar as UISidebar,
} from '@hoodieshq/ms-tools-ui'
import { Home } from 'lucide-react'
import { Logo } from './Logo'

export function Sidebar() {
  return (
    <UISidebar className="border-r border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <SidebarHeader>
        <div className="flex items-center justify-between px-4 pb-2">
          <SidebarTrigger />
          <Logo className="h-10 w-auto text-current" />
        </div>
      </SidebarHeader>
      <SidebarContent className="overflow-hidden">
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive tooltip="Home" asChild>
                  <Link href="/" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    <span>Home</span>
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
