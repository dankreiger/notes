import { ThemeVariant } from './theme.enums';
import { ThemeRecord } from './theme.types';

/**
 * Static lookup table so component classes
 * can be purged by tailwind
 *
 * Strings need to be fully visible for css purge to work.
 *
 * @see https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
 */
export const Theme: ThemeRecord = {
  [ThemeVariant.slate]: {
    bg: 'bg-slate-700',
    button: 'bg-slate-600 hover:bg-slate-700 active:bg-slate-900',
    focusBorder: 'focus:border-slate-500',
    focusRing: 'focus:ring-slate-500',
    icon: 'text-slate-300 group-hover:text-white',
    link: 'text-slate-100 hover:bg-slate-800 hover:text-white',
    linkActive: 'bg-slate-800 text-white',
  },
  [ThemeVariant.red]: {
    bg: 'bg-red-700',
    button: 'bg-red-600 hover:bg-red-700 active:bg-red-900',
    focusBorder: 'focus:border-red-500',
    focusRing: 'focus:ring-red-500',
    icon: 'text-red-300 group-hover:text-white',
    link: 'text-red-100 hover:bg-red-800 hover:text-white',
    linkActive: 'bg-red-800 text-white',
  },
  [ThemeVariant.emerald]: {
    bg: 'bg-emerald-700',
    button: 'bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-900',
    focusBorder: 'focus:border-emerald-500',
    focusRing: 'focus:ring-emerald-500',
    icon: 'text-emerald-300 group-hover:text-white',
    link: 'text-emerald-100 hover:bg-emerald-800 hover:text-white',
    linkActive: 'bg-emerald-800 text-white',
  },
  [ThemeVariant.sky]: {
    bg: 'bg-sky-700',
    button: 'bg-sky-600 hover:bg-sky-700 active:bg-sky-900',
    focusBorder: 'focus:border-sky-500',
    focusRing: 'focus:ring-sky-500',
    icon: 'text-sky-300 group-hover:text-white',
    link: 'text-sky-100 hover:bg-sky-800 hover:text-white',
    linkActive: 'bg-sky-800 text-white',
  },
  [ThemeVariant.indigo]: {
    bg: 'bg-indigo-700',
    button: 'bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-900',
    focusBorder: 'focus:border-indigo-500',
    focusRing: 'focus:ring-indigo-500',
    icon: 'text-indigo-300 group-hover:text-white',
    link: 'text-indigo-100 hover:bg-indigo-800 hover:text-white',
    linkActive: 'bg-indigo-800 text-white',
  },
  [ThemeVariant.fuchsia]: {
    bg: 'bg-fuchsia-700',
    button: 'bg-fuchsia-600 hover:bg-fuchsia-700 active:bg-fuchsia-900',
    focusBorder: 'focus:border-fuchsia-500',
    focusRing: 'focus:ring-fuchsia-500',
    icon: 'text-fuchsia-300 group-hover:text-white',
    link: 'text-fuchsia-100 hover:bg-fuchsia-800 hover:text-white',
    linkActive: 'bg-fuchsia-800 text-white',
  },
} as const;

export const ThemeVariantList = Object.values(ThemeVariant);
export const ThemeVariantListOptions = ThemeVariantList.map((color) => ({
  label: color,
  value: color,
}));
