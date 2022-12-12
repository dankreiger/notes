/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Dialog, Transition } from '@headlessui/react';
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { FC, Fragment, useState } from 'react';
import { Theme, ThemeVariant } from '../../theme';
import { classNames } from '../../_shared';
import { ShellProps } from './internal';

export const Shell: FC<ShellProps> = ({
  headerLeft,
  headerRight,
  logoAlt,
  logoSrc,
  sidebarNavigationItems = [],
  primaryColumn,
  secondaryColumn,
  screenReaderTexts = {
    openSidebar: 'Open sidebar',
    closeSidebar: 'Close sidebar',
    primaryHeading: 'Main content',
  },
  variant = ThemeVariant.slate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full overflow-hidden">
        ```
      */}
      <div className="flex h-full">
        {/* Narrow sidebar */}
        <div
          className={`hidden w-28 overflow-y-auto ${Theme[variant].bg} md:block`}
        >
          <div className="flex w-full flex-col items-center py-6">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src={logoSrc} alt={logoAlt} />
            </div>
            <div className="mt-6 w-full flex-1 space-y-1 px-2">
              {sidebarNavigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    Theme[variant][item.current ? 'linkActive' : 'link'],
                    'transition duration-250 group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <item.icon
                    className={classNames(
                      item.current ? 'text-white' : Theme[variant].icon,
                      'h-6 w-6 transition duration-250'
                    )}
                    aria-hidden="true"
                  />
                  <span className="mt-2">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-20 md:hidden"
            onClose={setMobileMenuOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel
                  className={`relative flex w-full max-w-xs flex-1 flex-col ${Theme[variant].bg} pt-5 pb-4`}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-1 right-0 -mr-14 p-1">
                      <button
                        type="button"
                        className="flex h-12 w-12 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                        <span className="sr-only">
                          {screenReaderTexts.closeSidebar}
                        </span>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img className="h-8 w-auto" src={logoSrc} alt={logoAlt} />
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto px-2">
                    <nav className="flex h-full flex-col">
                      <div className="space-y-1">
                        {sidebarNavigationItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? Theme[variant].linkActive
                                : Theme[variant].link,
                              'group py-2 px-3 rounded-md flex items-center text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            <item.icon
                              className={classNames(
                                item.current
                                  ? 'text-white'
                                  : Theme[variant].icon,
                                'mr-3 h-6 w-6'
                              )}
                              aria-hidden="true"
                            />
                            <span>{item.name}</span>
                          </a>
                        ))}
                      </div>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Content area */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <header className="w-full">
            <div className="relative z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white shadow-sm">
              <button
                type="button"
                className={`border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset ${Theme[variant].focusRing} md:hidden`}
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">{screenReaderTexts.openSidebar}</span>
                <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="flex flex-1 justify-between px-4 sm:px-6">
                <div className="flex flex-1">{headerLeft}</div>
                <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                  {headerRight}
                </div>
              </div>
            </div>
          </header>

          {/* Main content */}
          <div className="flex flex-1 items-stretch overflow-hidden">
            <main className="flex-1 overflow-y-auto">
              {/* Primary column */}
              <section
                aria-labelledby="primary-heading"
                className="flex h-full min-w-0 flex-1 flex-col lg:order-last"
              >
                <h1 id="primary-heading" className="sr-only">
                  {screenReaderTexts.primaryHeading}
                </h1>
                {primaryColumn}
              </section>
            </main>

            {/* Secondary column (hidden on smaller screens) */}
            {secondaryColumn && (
              <aside className="hidden w-96 overflow-y-auto border-l border-gray-200 bg-white lg:block">
                {secondaryColumn}
              </aside>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
