import { withTests } from '@storybook/addon-jest';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { useTranslation } from 'react-i18next';
import results from '../../../../.jest-test-results.json';
import { ThemeVariant, ThemeVariantList } from '../../theme';
import { RoundIconButton } from './round-icon-button';

const Story: ComponentMeta<typeof RoundIconButton> = {
  component: RoundIconButton,
  title: 'Design System/Components/RoundIconButton',
  parameters: {
    layout: 'centered',
  },
  decorators: [withTests({ results })],
  argTypes: {
    color: {
      control: 'select',
      defaultValue: ThemeVariant.slate,
      description: 'The background color of the button',
      options: ThemeVariantList.map((color) => color),
    },
  },
};
export default Story;

/*********************************************************************** */

const Template: ComponentStory<typeof RoundIconButton> = (args) => {
  const { t } = useTranslation();
  return <RoundIconButton {...args}>{t('RoundIconButton')}</RoundIconButton>;
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'text-slate-900',
};
