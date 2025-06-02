'use client'

import { ReactNode } from 'react'
import { SidebarProvider } from '@hoodieshq/ms-tools-ui'

interface SidebarWrapperProps {
  children: ReactNode
}

export function SidebarWrapper({ children }: SidebarWrapperProps) {
  return <SidebarProvider defaultOpen={false}>{children}</SidebarProvider>
}
