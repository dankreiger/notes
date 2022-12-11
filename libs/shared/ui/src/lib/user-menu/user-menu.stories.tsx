import { withTests } from '@storybook/addon-jest';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import results from '../../../.jest-test-results.json';
import { UserMenuColors } from './internal';
import { UserMenu } from './user-menu';

const Story: ComponentMeta<typeof UserMenu> = {
  component: UserMenu,
  title: 'Design System/Molecules/UserMenu',
  parameters: {
    layout: 'centered',
  },
  decorators: [withTests({ results })],
  argTypes: {
    focusVariant: {
      control: 'select',
      defaultValue: 'slate',
      description: 'The color variant of the user menu focused outline',
      options: Object.keys(UserMenuColors),
    },
  },
};
export default Story;

/*********************************************************************** */

const Template: ComponentStory<typeof UserMenu> = (args) => {
  return <UserMenu {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  focusVariant: 'slate',
  imgSrc: 'https://avatars.githubusercontent.com/u/5302071?v=4',
  imgAlt: 'Dan Kreiger',
  screenReaderText: 'Open User Menu',
};
