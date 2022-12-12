import { withTests } from '@storybook/addon-jest';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import results from '../../../../.jest-test-results.json';
import { TextInput } from './text-input';

const Story: ComponentMeta<typeof TextInput> = {
  component: TextInput,
  title: 'Design System/Components/TextInput',
  decorators: [withTests({ results })],
  argTypes: {
    onChange: { action: 'onChange executed!' },
  },
};
export default Story;

/*********************************************************************** */

const Template: ComponentStory<typeof TextInput> = (args) => {
  const [value, setValue] = useState('');
  return (
    <>
      <TextInput
        {...args}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          args.onChange(e);
        }}
      />
      <hr />
      <div className="mt-5">
        Input value is:{' '}
        <span className="text-emerald-800 font-bold">{value}</span>
      </div>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  value: 'nextjs',
  onChange: (e) => console.log('onChange executed!', e.target.value),
};
