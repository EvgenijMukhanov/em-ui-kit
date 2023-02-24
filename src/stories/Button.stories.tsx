import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../native';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {

  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {};
