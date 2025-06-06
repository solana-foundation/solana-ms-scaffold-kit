import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { DraftModeToggle } from '@/components/DraftModeToggle'

const meta = {
  title: 'Components/DraftModeToggle',
  component: DraftModeToggle,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DraftModeToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Enabled: Story = {
  args: {
    isEnabled: true,
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
}

export const Disabled: Story = {
  args: {
    isEnabled: false,
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
}
