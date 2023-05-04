import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    title: 'title Default',
    description: 'description Default'
  }
} as Meta

export const Basic: Story = (args) => <Button {...args} />
Basic.args = {
  title: 'title basic',
  description: 'description basic'
}

export const Default: Story = (args) => <Button {...args} />
