import type { Meta, StoryObj } from '@storybook/react-vite';

import Toast from './Toast';

const meta = {
  component: Toast,
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "info",
    text: "text"
  }
};

export const Info: Story = {
  args: {
    type: "info",
    text: "This is info toast component!"
  }
};

export const Success: Story = {
  args: {
    type: "success",
    text: "This is success toast component"
  }
};

export const Error: Story = {
  args: {
    type: "error",
    text: "This is error toast component"
  }
};

export const Warning: Story = {
  args: {
    type: "warning",
    text: "This is warning toast component!"
  }
};

export const OneSecondInfo: Story = {
  args: {
    type: "info",
    text: "text",
    duration: 1000
  }
};