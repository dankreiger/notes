import { withTests } from '@storybook/addon-jest';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import results from '../../../../.jest-test-results.json';
import { ThemeVariant, ThemeVariantList } from '../../theme';
import { ButtonGroup } from './button-group';

const Story: ComponentMeta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: 'Design System/Components/ButtonGroup',
  parameters: {
    layout: 'centered',
  },
  decorators: [withTests({ results })],
  argTypes: {
    variant: {
      control: 'select',
      defaultValue: ThemeVariant.slate,
      description: 'The background color of the button',
      options: ThemeVariantList.map((color) => color),
    },
  },
};
export default Story;

/*********************************************************************** */

const Template: ComponentStory<typeof ButtonGroup> = (args) => {
  const [state, setState] = useState('');
  return (
    <ButtonGroup
      {...args}
      activeWhen={(val) => val === state}
      onClick={setState}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  list: ['Button 1', 'Button 2'],
  onClick: (val) => console.log(val),
};
