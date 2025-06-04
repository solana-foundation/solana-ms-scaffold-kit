import type { Meta, StoryObj } from '@storybook/react'
import { NextIntlClientProvider } from 'next-intl'
import { DEFAULT_LANGUAGE } from '@/constants/language'
import { Footer } from './Footer'
import { LanguageContextProvider } from './LanguageContextProvider'

const messages = {
  footer: {
    rights_reserved: 'All rights reserved',
  },
}

/**
 * The Footer component displays copyright information and a link to the GitHub repository.
 * It matches the styling of the Header component and supports both light and dark themes.
 */
const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en" messages={messages}>
        <LanguageContextProvider language={DEFAULT_LANGUAGE}>
          <div className="flex h-screen flex-col">
            <div className="flex-1" />
            <Story />
          </div>
        </LanguageContextProvider>
      </NextIntlClientProvider>
    ),
  ],
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof Footer>

/**
 * Default state of the footer
 */
export const Default: Story = {}
