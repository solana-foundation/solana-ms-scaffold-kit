import type { Preview } from '@storybook/react'
import { withThemeByClassName } from '@storybook/addon-themes'
import { initialize, mswLoader } from 'msw-storybook-addon'
import '../src/styles/globals.css'

// Initialize MSW
initialize({
  onUnhandledRequest: 'bypass'
});

// Mock next-intl
const mockUseTranslations = () => (key: string) => {
  return key === 'language_selection' ? 'Select Language' : key;
};

// Mock next/navigation
const mockUseRouter = () => ({
  push: (path: string) => {
    console.log('Navigation to:', path);
  },
});

// Add mocks to window
if (typeof window !== 'undefined') {
  // @ts-expect-error - Mocking for Storybook
  window.useTranslations = mockUseTranslations;
  // @ts-expect-error - Mocking for Storybook
  window.useRouter = mockUseRouter;
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
    nextjs: {
      appDirectory: true,
    },
    msw: {
      handlers: [],
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
  loaders: [mswLoader],
};

export default preview;
