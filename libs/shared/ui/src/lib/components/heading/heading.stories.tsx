import { withTests } from '@storybook/addon-jest';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { useTranslation } from 'react-i18next';
import results from '../../../../.jest-test-results.json';
import { ThemeVariant } from '../../theme';
import { Heading } from './heading';

const Story: ComponentMeta<typeof Heading> = {
  component: Heading,
  title: 'Design System/Components/Heading',
  parameters: {
    layout: 'centered',
  },
  decorators: [withTests({ results })],
  argTypes: {
    color: {
      control: 'select',
      defaultValue: ThemeVariant.slate,
      description: 'The color variant of the user menu focused outline',
      options: [
        'text-slate-900',
        'text-indigo-900',
        'text-red-500',
        'text-black',
        'text-white',
      ],
    },
  },
};
export default Story;

/*********************************************************************** */

const Template: ComponentStory<typeof Heading> = (args) => {
  const { t } = useTranslation();
  return <Heading {...args}>{t('heading')}</Heading>;
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'text-slate-900',
};
