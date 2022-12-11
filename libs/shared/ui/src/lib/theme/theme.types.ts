/**
 * Color variants
 */
export type ThemeColor =
  | 'slate'
  | 'red'
  | 'emerald'
  | 'sky'
  | 'indigo'
  | 'fuchsia';

/**
 * Static tailwind class lookup table (for css purging)
 */
export type ThemeColorRecord<C extends ThemeColor = ThemeColor> = Record<
  C,
  {
    readonly bg: `bg-${C}-700`;
    readonly button: `bg-${C}-600 hover:bg-${C}-700`;
    readonly buttonFocus: `focus:ring-${C}-500`;
    readonly icon: `text-${C}-300 group-hover:text-white`;
    readonly link: `text-${C}-100 hover:bg-${C}-800 hover:text-white`;
    readonly linkActive: `bg-${C}-800 text-white`;
  }
>;
