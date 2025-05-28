import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { NextIntlClientProvider } from 'next-intl'
import { LANGUAGES } from '@/constants/language'
import { LanguageSelect } from './LanguageSelect'

const messages = {
  utils: {
    language_selection: 'Select Language',
  },
}

const meta = {
  title: 'Components/LanguageSelect',
  component: LanguageSelect,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
    test: {
      useFakeTimers: true,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'language changed' },
  },
  decorators: [
    (Story) => (
      <React.Suspense fallback={<div>Loading...</div>}>
        <NextIntlClientProvider locale={LANGUAGES[0].id} messages={messages}>
          {Story()}
        </NextIntlClientProvider>
      </React.Suspense>
    ),
  ],
} satisfies Meta<typeof LanguageSelect>

export default meta
type Story = StoryObj<typeof LanguageSelect>

/**
 * Basic usage of the LanguageSelect component with English as the current language.
 * The component displays a dropdown with language options, showing flags and language names.
 */
export const English: Story = {
  args: {
    languages: LANGUAGES,
    locale: 'en',
  },
}

/**
 * LanguageSelect with Spanish as the current language.
 * Demonstrates how the component handles a different selected language.
 */
export const Spanish: Story = {
  args: {
    languages: LANGUAGES,
    locale: 'es',
  },
}

/**
 * Example with custom language options.
 * Shows how to use the component with a different set of languages.
 */
export const CustomLanguages: Story = {
  args: {
    languages: [
      { id: 'fr', title: 'Français', flag: '🇫🇷' },
      { id: 'de', title: 'Deutsch', flag: '🇩🇪' },
      { id: 'it', title: 'Italiano', flag: '🇮🇹' },
    ],
    locale: 'fr',
  },
}

/**
 * Example with many language options to demonstrate the dropdown's scrolling behavior.
 * Shows how the component handles a large number of language choices.
 */
export const ManyLanguages: Story = {
  args: {
    languages: [
      { id: 'en', title: 'English', flag: '🇺🇸' },
      { id: 'es', title: 'Español', flag: '🇪🇸' },
      { id: 'fr', title: 'Français', flag: '🇫🇷' },
      { id: 'de', title: 'Deutsch', flag: '🇩🇪' },
      { id: 'it', title: 'Italiano', flag: '🇮🇹' },
      { id: 'pt', title: 'Português', flag: '🇵🇹' },
      { id: 'ja', title: '日本語', flag: '🇯🇵' },
      { id: 'ko', title: '한국어', flag: '🇰🇷' },
      { id: 'zh', title: '中文', flag: '🇨🇳' },
    ],
    locale: 'en',
  },
}
