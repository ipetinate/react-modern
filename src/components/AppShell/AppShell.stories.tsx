import type { Meta, StoryObj } from '@storybook/react'

import { AppShell } from './AppShell'

const meta: Meta<typeof AppShell> = {
  component: AppShell
}

export default meta
type Story = StoryObj<typeof AppShell>

export const Primary: Story = {
  args: {
    children: <p>AppShell</p>
  }
}
