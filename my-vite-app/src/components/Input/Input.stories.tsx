import type { Meta, StoryObj } from '@storybook/react-vite';

import Input from './Input';

const meta = {
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const TextNoClearable: Story = {
  args: {
    type: "text",
    clearable: false
  }
};

export const PasswordClearable: Story = {
  args: {
    clearable: true,
    type: "password"
  }
};

export const PasswordNotClearable: Story = {
  args: {
    type: "password",
    clearable: false
  }
};

export const TextClearable: Story = {
  args: {
    type: "text",
    clearable: true
  }
};