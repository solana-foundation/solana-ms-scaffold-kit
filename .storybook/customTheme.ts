import { create } from 'storybook/theming'
import logoDark from './assets/logoDark.svg'
import logoLight from './assets/logoLight.svg'

export const darkCustomTheme = create({
  base: 'dark',
  brandTitle: 'Solana MS scaffold kit',
  brandImage: logoDark,
})

export const lightCustomTheme = create({
  base: 'light',
  brandTitle: 'Solana MS scaffold kit',
  brandImage: logoLight,
})
