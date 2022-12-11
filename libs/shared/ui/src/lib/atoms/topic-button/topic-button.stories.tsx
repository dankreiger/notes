import { withTests } from '@storybook/addon-jest';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import results from '../../../../.jest-test-results.json';
import { TopicButton } from './topic-button';

const Story: ComponentMeta<typeof TopicButton> = {
  component: TopicButton,
  title: 'Design System/Atoms/TopicButton',
  decorators: [withTests({ results })],
  argTypes: {
    onClick: { action: 'onClick executed!' },
  },
};
export default Story;

/*********************************************************************** */

const Template: ComponentStory<typeof TopicButton> = (args) => {
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
