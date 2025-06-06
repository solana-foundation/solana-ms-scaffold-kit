'use client'

import { ReactNode } from 'react'
import { SidebarProvider } from '@solana-foundation/ms-tools-ui'

interface SidebarWrapperProps {
  children: ReactNode
  defaultOpen?: boolean
}

export function SidebarWrapper({ children, defaultOpen = false }: SidebarWrapperProps) {
  return <SidebarProvider defaultOpen={defaultOpen}>{children}</SidebarProvider>
}
