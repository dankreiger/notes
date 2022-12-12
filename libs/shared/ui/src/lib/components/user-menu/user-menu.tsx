import { Menu, Transition } from '@headlessui/react';
import { FC, Fragment } from 'react';
import { Theme, ThemeVariant } from '../../theme';
import { classNames } from '../../_shared';
import type { UserMenuProps } from './internal';
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Sign out', href: '#' },
] as const;

export const UserMenu: FC<UserMenuProps> = ({
  focusVariant = ThemeVariant.slate,
  imgSrc,
  imgAlt,
  screenReaderText = 'User Menu',
}) => (
  <div className="flex justify-end">
    <Menu as="div" className="relative flex-shrink-0">
      <div>
        <Menu.Button
          className={`flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 ${Theme[focusVariant].focusRing} focus:ring-offset-2`}
        >
          <span className="sr-only">{screenReaderText}</span>
          <img className="h-8 w-8 rounded-full" src={imgSrc} alt={imgAlt} />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {userNavigation.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <a
                  href={item.href}
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  {item.name}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  </div>
);
