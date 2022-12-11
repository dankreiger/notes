import { withTests } from '@storybook/addon-jest';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import results from '../../../.jest-test-results.json';
import { ShellColors } from './internal';
import { Shell } from './shell';

const Story: ComponentMeta<typeof Shell> = {
  component: Shell,
  title: 'Design System/Layout/Shell',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    withTests({ results }),
    (Story) => (
      <div className="h-full bg-gray-50">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      defaultValue: 'slate',
      description: 'The color variant of the shell',
      options: Object.keys(ShellColors),
    },
  },
};
export default Story;

/*********************************************************************** */

const Template: ComponentStory<typeof Shell> = (args) => {
  return <Shell {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'slate',
};
