import { act, render } from '@testing-library/react';

import { UserMenu } from './user-menu';

describe('UserMenu', () => {
  it('should render like a puppy', () => {
    let baseElement;
    act(() => {
      ({ baseElement } = render(
        <UserMenu
          imgAlt="Someone"
          imgSrc="https://avatars.githubusercontent.com/u/5302071?v=4"
          screenReaderText="User Menu"
        />
      ));
    });
    expect(baseElement).toBeTruthy();
  });
});
