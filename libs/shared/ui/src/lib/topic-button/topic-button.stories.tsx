import { withTests } from '@storybook/addon-jest';
import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import results from '../../../.jest-test-results.json';
import { TopicButton, TopicButtonProps } from './topic-button';

export default {
  component: TopicButton,
  title: 'TopicButton',
  decorators: [withTests({ results })],
  argTypes: {
    onClick: { action: 'onClick executed!' },
  },
} as Meta;

const Template: Story<TopicButtonProps> = (args) => {
  const [clickedTopic, setClickedTopic] = useState<string | null>(null);
  return (
    <div className="bg-gray-100 p-20">
      <TopicButton
        {...args}
        onClick={(topicName) => setClickedTopic(topicName)}
      />
      {clickedTopic && <div>Button has been clicked: {clickedTopic}</div>}
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  topicName: 'nextjs',
};
