import {
  CogIcon,
  HomeIcon,
  PhotoIcon,
  PlusIcon,
  RectangleStackIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { withTests } from '@storybook/addon-jest';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import results from '../../../.jest-test-results.json';
import { UserMenu } from '../user-menu/user-menu';
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

const sidebarNavigationItems = [
  { name: 'Home', href: '#', icon: HomeIcon, current: false },
  { name: 'All Files', href: '#', icon: Squares2X2Icon, current: false },
  { name: 'Photos', href: '#', icon: PhotoIcon, current: true },
  { name: 'Shared', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Albums', href: '#', icon: RectangleStackIcon, current: false },
  { name: 'Settings', href: '#', icon: CogIcon, current: false },
];

/*********************************************************************** */

const Template: ComponentStory<typeof Shell> = (args) => <Shell {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  logoAlt: "My Company's Logo",
  logoSrc: 'https://tailwindui.com/img/logos/workflow-mark.svg?color=white',
  sidebarNavigationItems,
  primaryColumn: <h1 className="p-4">Hello primary puppy</h1>,
  secondaryColumn: <h2 className="p-4">Hello secondary puppy</h2>,
  variant: 'slate',
};

export const WithHeaderItems = Template.bind({});
WithHeaderItems.args = {
  headerItems: [
    <UserMenu
      key="1"
      focusVariant="slate"
      imgAlt="Dan Kreiger"
      imgSrc="https://avatars.githubusercontent.com/u/5302071?v=4"
      screenReaderText="Open user menu"
    />,
    <button
      key="2"
      type="button"
      className={`flex items-center justify-center rounded-full p-1 text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2`}
    >
      <PlusIcon className="h-6 w-6" aria-hidden="true" />
      <span className="sr-only">Add file</span>
    </button>,
  ],
  logoAlt: "My Company's Logo",
  logoSrc: 'https://tailwindui.com/img/logos/workflow-mark.svg?color=white',
  sidebarNavigationItems,
  primaryColumn: <h1 className="p-4">Hello primary puppy</h1>,
  secondaryColumn: <h2 className="p-4">Hello secondary puppy</h2>,
  variant: 'slate',
};

export const NoSecondaryColumn = Template.bind({});
NoSecondaryColumn.args = {
  headerItems: [
    <UserMenu
      key="1"
      focusVariant="slate"
      imgAlt="Dan Kreiger"
      imgSrc="https://avatars.githubusercontent.com/u/5302071?v=4"
      screenReaderText="Open user menu"
    />,
    <button
      key="2"
      type="button"
      className={`flex items-center justify-center rounded-full p-1 text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2`}
    >
      <PlusIcon className="h-6 w-6" aria-hidden="true" />
      <span className="sr-only">Add file</span>
    </button>,
  ],
  logoAlt: "My Company's Logo",
  logoSrc: 'https://tailwindui.com/img/logos/workflow-mark.svg?color=white',
  primaryColumn: <h1 className="p-4">Hello primary puppy</h1>,
  sidebarNavigationItems,
  variant: 'slate',
};
