import path from 'path'
import type { StorybookConfig } from '@storybook/experimental-nextjs-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-themes',
    '@storybook/experimental-addon-test',
  ],
  framework: {
    name: '@storybook/experimental-nextjs-vite',
    options: {},
  },
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    if (config?.resolve) {
      config.resolve.alias = {
        ...config?.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
        'process.env.SANITY_VIEWER_TOKEN': JSON.stringify(process.env.SANITY_VIEWER_TOKEN),
      }
    }
    return config
  },
}
export default config
