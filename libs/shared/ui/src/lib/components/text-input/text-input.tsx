import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import type { FC } from 'react';
import type { TextInputProps } from './internal';

/**
 * TODO:
 * - fix padding-left issue
 */

/**
 * Text Input
 */
export const TextInput: FC<TextInputProps> = ({
  placeholder = 'Search',
  onChange,
  screenReaderText = 'Input text',
  value,
}) => (
  <div className="flex w-full md:ml-0">
    <label htmlFor="search-field" className="sr-only">
      {screenReaderText}
    </label>
    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
        <MagnifyingGlassIcon
          className="h-5 w-5 flex-shrink-0"
          aria-hidden="true"
        />
      </div>
      <input
        onChange={onChange}
        value={value}
        name="search-field"
        id="search-field"
        className="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0"
        placeholder={placeholder}
        type="search"
      />
    </div>
  </div>
);
