import type { ReactNode } from 'react';
import type { ThemeColor } from '../../../theme';

/** Verbose to allow for tailwind purging */
export type HeadingProps = {
  children: ReactNode;
  color?:
    | `text-${ThemeColor}-${
        | 100
        | 200
        | 300
        | 400
        | 500
        | 600
        | 700
        | 800
        | 900}`
    | 'text-white'
    | 'text-black';

  Tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};
