import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { NextIntlClientProvider } from 'next-intl'
import { DEFAULT_LANGUAGE } from '@/constants/language'
import { LanguageContextProvider } from './LanguageContextProvider'
import { Sidebar } from './Sidebar'
import { SidebarWrapper } from './SidebarWrapper'

const messages = {
  utils: {
    language_selection: 'Select Language',
  },
}

const meta = {
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
              <SidebarWrapper>
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

export const Default: Story = {}
