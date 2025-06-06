import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Logo } from './Logo'

const meta = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the logo',
    },
  },
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof Logo>

export const Default: Story = {
  args: {
    className: 'h-10 w-auto',
  },
}
