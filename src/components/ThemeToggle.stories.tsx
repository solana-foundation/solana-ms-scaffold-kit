import type { Meta, StoryObj } from '@storybook/react'
import { ThemeToggle } from './ThemeToggle'

/**
 * The ThemeToggle component provides a button to switch between light and dark themes.
 * It persists the user's preference in localStorage and respects system theme preferences on initial load.
 */
const meta = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeToggle>

export default meta
type Story = StoryObj<typeof ThemeToggle>

/**
 * Default state of the theme toggle button
 */
export const Default: Story = {}
