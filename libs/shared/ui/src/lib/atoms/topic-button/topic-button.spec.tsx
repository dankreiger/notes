import { act, render } from '@testing-library/react';

import TopicButton from './topic-button';

describe('TopicButton', () => {
  it('should render like a puppy', () => {
    let baseElement;
    act(() => {
      ({ baseElement } = render(<TopicButton topicName="nextjs" />));
    });
    expect(baseElement).toBeTruthy();
  });
});
