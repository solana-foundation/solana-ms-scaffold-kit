import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { NextIntlClientProvider } from 'next-intl'
import { DEFAULT_LANGUAGE } from '@/constants/language'
import { Header } from './Header'
import { LanguageContextProvider } from './LanguageContextProvider'
import { SidebarWrapper } from './SidebarWrapper'

const messages = {
  utils: {
    language_selection: 'Select Language',
  },
}

const meta = {
  title: 'Components/Header',
  component: Header,
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
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {
    locale: 'en',
  },
}

export const SpanishLocale: Story = {
  args: {
    locale: 'es',
  },
  decorators: [
    (Story) => (
      <div className="h-screen">
        <React.Suspense fallback={<div>Loading...</div>}>
          <NextIntlClientProvider locale="es" messages={messages}>
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
}
