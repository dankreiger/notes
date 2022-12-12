import { withTests } from '@storybook/addon-jest';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import results from '../../../../.jest-test-results.json';
import { AudioPlayer } from './audio-player';

const Story: ComponentMeta<typeof AudioPlayer> = {
  component: AudioPlayer,
  title: 'Design System/Components/AudioPlayer',
  parameters: {
    layout: 'centered',
  },
  decorators: [withTests({ results })],
};

export default Story;

/*********************************************************************** */

const Template: ComponentStory<typeof AudioPlayer> = (args) => {
  return <AudioPlayer {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  header: (
    <div>
      <span className="flex justify-between items-center">
        <img
          className="h-16 w-16 rounded-md"
          src="https://avatars.githubusercontent.com/u/5302071?v=4"
          alt=""
        />
        <p>Hello</p>
      </span>
    </div>
  ),
  footer: 'Footer',
  src: 'https://dz2l6nhikl0ua.cloudfront.net/assets/music_file/2bc3fc9b-6f28-11ed-bebe-022ed69f96e6.m4a?cb=20221128152317',
};
