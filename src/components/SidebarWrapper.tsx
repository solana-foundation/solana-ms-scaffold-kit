'use client'

import { SidebarProvider } from '@hoodieshq/ms-tools-ui'
import { ReactNode } from 'react'

interface SidebarWrapperProps {
  children: ReactNode
}

export function SidebarWrapper({ children }: SidebarWrapperProps) {
  return <SidebarProvider defaultOpen={false}>{children}</SidebarProvider>
}
