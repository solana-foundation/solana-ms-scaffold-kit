import React from 'react'
import { SidebarTrigger } from '@solana-foundation/ms-tools-ui'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { NextIntlClientProvider } from 'next-intl'
import { DEFAULT_LANGUAGE } from '@/constants/language'
import { LanguageContextProvider } from './LanguageContextProvider'
import { Sidebar } from './Sidebar'
import { SidebarWrapper } from './SidebarWrapper'

const messages = {
  utils: {
    language_selection: 'Select Language',
  },
  navigation: {
    home: 'Home',
    label: 'Navigation',
  },
}

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="h-screen">
        <React.Suspense fallback={<div>Loading...</div>}>
          <NextIntlClientProvider locale="en" messages={messages}>
            <LanguageContextProvider language={DEFAULT_LANGUAGE}>
              <SidebarWrapper defaultOpen>
                <SidebarTrigger role="button" aria-label="sidebar-trigger-1" />
                <Story />
              </SidebarWrapper>
            </LanguageContextProvider>
          </NextIntlClientProvider>
        </React.Suspense>
      </div>
    ),
  ],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof Sidebar>

export const Default: Story = {
  render: () => (
    <>
      <Sidebar>
        <SidebarTrigger role="button" aria-label="sidebar-trigger-2" />
      </Sidebar>
    </>
  ),
}
