// lookup table to allow for tailwindcss purging
// we have to be verbose because
// string concatenation is not supported when purging for production.

import type { HeadingProps } from './heading.types';

// The purging process looks for the complete unbroken string
export const getTagClass = (Tag: HeadingProps['Tag']) => {
  switch (Tag) {
    case 'h1':
      return 'text-3xl sm:text-4xl';
    case 'h2':
      return 'text-2xl sm:text-3xl';
    case 'h3':
      return 'text-xl sm:text-2xl';
    case 'h4':
      return 'text-lg sm:text-xl';
    case 'h5':
      return 'text-base sm:text-lg';
    case 'h6':
      return 'text-sm sm:text-base';
    default:
      return 'text-2xl sm:text-3xl';
  }
};
