import { withTests } from '@storybook/addon-jest';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { useTranslation } from 'react-i18next';
import results from '../../../../.jest-test-results.json';
import { ThemeVariant, ThemeVariantList } from '../../theme';
import { Select } from './select';

const Story: ComponentMeta<typeof Select> = {
  component: Select,
  title: 'Design System/Components/Select',
  parameters: {
    layout: 'centered',
  },
  decorators: [withTests({ results })],
  argTypes: {
    variant: {
      control: 'select',
      defaultValue: ThemeVariant.slate,
      options: ThemeVariantList.map((color) => color),
    },
  },
};
export default Story;

/*********************************************************************** */

const Template: ComponentStory<typeof Select> = (args) => {
  const { t } = useTranslation();
  return <Select {...args}>{t('Select')}</Select>;
};

export const Basic = Template.bind({});
Basic.args = {
  list: ['Option 1', 'Option 2'],
};
