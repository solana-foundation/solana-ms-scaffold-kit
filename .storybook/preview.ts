import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'
import { initialize, mswLoader } from 'msw-storybook-addon'

import '../src/styles/globals.css'

// Initialize MSW
initialize({
  onUnhandledRequest: 'bypass',
})

// Mock next-intl
const mockUseTranslations = () => (key: string) => {
  return key === 'language_selection' ? 'Select Language' : key
}

// Mock next/navigation
const mockUseRouter = () => ({
  push: (path: string) => {
    console.log('Navigation to:', path)
  },
})

// Add mocks to window
if (typeof window !== 'undefined') {
  window.useTranslations = mockUseTranslations
  window.useRouter = mockUseRouter
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'light',
          value: '#fff',
        },
        {
          name: 'dark',
          value: '#1d181a',
        },
      ],
    },
    nextjs: {
      appDirectory: true,
    },
    msw: {
      handlers: [],
    },
  },
  tags: ['autodocs'],
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
  ],
  loaders: [mswLoader],
}

export default preview
