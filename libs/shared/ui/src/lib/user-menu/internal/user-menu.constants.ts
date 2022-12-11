import type { UserMenuColorRecord } from './user-menu.types';

/**
 * Static lookup table so component classes
 * can be purged by tailwind
 *
 * Strings need to be fully visible for css purge to work.
 *
 * @see https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
 */
export const UserMenuColors: UserMenuColorRecord = {
  slate: {
    buttonFocus: 'focus:ring-slate-500',
  },
  red: {
    buttonFocus: 'focus:ring-red-500',
  },
  emerald: {
    buttonFocus: 'focus:ring-emerald-500',
  },
  sky: {
    buttonFocus: 'focus:ring-sky-500',
  },
  indigo: {
    buttonFocus: 'focus:ring-indigo-500',
  },
  fuchsia: {
    buttonFocus: 'focus:ring-fuchsia-500',
  },
} as const;
