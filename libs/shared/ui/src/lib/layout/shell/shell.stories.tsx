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
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import results from '../../../../.jest-test-results.json';
import { Heading } from '../../atoms/heading/heading';
import { TextInput } from '../../molecules/text-input';
import { UserMenu } from '../../molecules/user-menu';
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

const Template: ComponentStory<typeof Shell> = (args) => {
  // just to demonstrate a real input
  // (TextInput component is dumb and only a style wrapper for the native HTML input)
  const { onSearchChange = () => undefined } = args;
  const [searchValue, setSearchValue] = useState('');
  const handleSearchChange = useCallback<
    (e: ChangeEvent<HTMLInputElement>) => void
  >((e) => setSearchValue(e.target.value), []);

  useEffect(() => onSearchChange(searchValue), [searchValue, onSearchChange]);

  return (
    <Shell
      {...args}
      headerLeft={
        <TextInput onChange={handleSearchChange} value={searchValue} />
      }
    />
  );
};

export const MultiColumn = Template.bind({});
MultiColumn.args = {
  headerRight: [
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
  logoSrc:
    'https://www.loudly.com/wp-content/uploads/2021/01/Loudly_type_logo_wht.png',
  sidebarNavigationItems,

  primaryColumn: (
    <div className="p-4">
      <Heading>Primary Content</Heading>
    </div>
  ),
  secondaryColumn: (
    <div className="p-4">
      <Heading Tag="h3">Secondary Content</Heading>
    </div>
  ),
  onSearchChange: (value) => console.log('search value', value),
  variant: 'slate',
};

export const SingleColumn = Template.bind({});
SingleColumn.args = {
  headerRight: [
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
  logoSrc:
    'https://www.loudly.com/wp-content/uploads/2021/01/Loudly_type_logo_wht.png',

  primaryColumn: (
    <div className="p-4">
      <Heading>Primary Content</Heading>
    </div>
  ),
  sidebarNavigationItems,
  onSearchChange: (value) => console.log('search value', value),
  variant: 'slate',
};
