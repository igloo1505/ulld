import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '@ulld/ui';
import {physicsMathConfig} from "@ulld/baseConfigs"
import { appConfigSchema } from '@ulld/configschema';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Navbar',
  component: Navbar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  /* argTypes: { */
    /* backgroundColor: { control: 'color' }, */
  /* }, */
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    open: true,
    navtype: 'top',
    config: appConfigSchema.parse(physicsMathConfig)
  },
};

/* export const Secondary: Story = { */
/*   args: { */
/*     label: 'Button', */
/*   }, */
/* }; */

/* export const Large: Story = { */
/*   args: { */
/*     size: 'large', */
/*     label: 'Button', */
/*   }, */
/* }; */

/* export const Small: Story = { */
/*   args: { */
/*     size: 'small', */
/*     label: 'Button', */
/*   }, */
/* }; */
