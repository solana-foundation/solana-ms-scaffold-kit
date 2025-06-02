import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'

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
      <div className="flex h-screen flex-col">
        <div className="flex-1" />
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof Footer>

/**
 * Default state of the footer
 */
export const Default: Story = {}
