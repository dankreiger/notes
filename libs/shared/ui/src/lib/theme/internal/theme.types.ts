import type { ThemeVariant } from './theme.enums';

/**
 * Static tailwind class lookup table (for css purging)
 */
export type ThemeRecord<C extends ThemeVariant = ThemeVariant> = Record<
  C,
  {
    readonly bg: `bg-${C}-700`;
    readonly button: `bg-${C}-600 hover:bg-${C}-700 active:bg-${C}-900`;
    readonly focusBorder: `focus:border-${C}-500`;
    readonly focusRing: `focus:ring-${C}-500`;
    readonly icon: `text-${C}-300 group-hover:text-white`;
    readonly link: `text-${C}-100 hover:bg-${C}-800 hover:text-white`;
    readonly linkActive: `bg-${C}-800 text-white`;
  }
>;
