import {
  CogIcon,
  HomeIcon,
  PhotoIcon,
  RectangleStackIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { withTests } from '@storybook/addon-jest';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChangeEvent, useCallback, useState } from 'react';
import results from '../../../../.jest-test-results.json';
import {
  Heading,
  RoundIconButton,
  TextInput,
  UserMenu,
} from '../../components';
import { ThemeSize, ThemeVariant } from '../../theme';
import { Shell } from './shell';

const Story: ComponentMeta<typeof Shell> = {
  component: Shell,
  title: 'Design System/Layouts/Shell',
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
      defaultValue: ThemeVariant.slate,
      description: 'The color variant of the shell',
      options: Object.keys(ThemeVariant),
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
  const [searchValue, setSearchValue] = useState('');
  const handleSearchChange = useCallback<
    (e: ChangeEvent<HTMLInputElement>) => void
  >((e) => setSearchValue(e.target.value), []);

  const { variant } = args;
  return (
    <Shell
      {...args}
      headerLeft={
        <TextInput onChange={handleSearchChange} value={searchValue} />
      }
      headerRight={[
        <UserMenu
          key="1"
          focusVariant={variant}
          imgAlt="Dan Kreiger"
          imgSrc="https://avatars.githubusercontent.com/u/5302071?v=4"
          screenReaderText="Open user menu"
        />,
        <RoundIconButton key="2" padding={ThemeSize.xs} variant={variant} />,
      ]}
    />
  );
};

export const MultiColumn = Template.bind({});
MultiColumn.args = {
  logoAlt: 'Logo',
  logoSrc: '/logo.svg',
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
  variant: ThemeVariant.slate,
};

export const SingleColumn = Template.bind({});
SingleColumn.args = {
  logoAlt: 'Logo',
  logoSrc: '/logo.svg',

  primaryColumn: (
    <div className="p-4">
      <Heading>Primary Content</Heading>
    </div>
  ),
  sidebarNavigationItems,
  variant: ThemeVariant.slate,
};
