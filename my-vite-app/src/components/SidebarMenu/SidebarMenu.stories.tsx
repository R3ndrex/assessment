import type { Meta, StoryObj } from "@storybook/react-vite";

import SidebarMenu from "./SidebarMenu";

const meta = {
    component: SidebarMenu,
} satisfies Meta<typeof SidebarMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const Open: Story = {
    args: {
        state: "open",
    },
};
export const OpenOneNested: Story = {
    args: {
        state: "open",
        menu: [
            {
                label: "Item 1",
                children: [{ label: "Subitem 1-1" }],
            },
        ],
    },
};

export const OpenTwoNested: Story = {
    args: {
        state: "open",
        menu: [
            { label: "Home" },
            {
                label: "Products",
                children: [
                    {
                        label: "Phones",
                        children: [{ label: "Iphone" }, { label: "Samsung" }],
                    },
                    { label: "Laptops" },
                ],
            },
            { label: "About" },
        ],
    },
};

export const Closed: Story = {
    args: {
        state: "closed",
    },
};
