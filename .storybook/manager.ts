import { addons } from '@storybook/manager-api'
import { darkCustomTheme } from './customTheme'

addons.setConfig({
  theme: darkCustomTheme,
})
