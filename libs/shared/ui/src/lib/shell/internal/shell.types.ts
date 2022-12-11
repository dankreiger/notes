/**
 * Color variants for the Shell component
 */
export type ShellColor =
  | 'slate'
  | 'red'
  | 'emerald'
  | 'sky'
  | 'indigo'
  | 'fuchsia';

/**
 * Shape of static class lookup table
 */
export type ShellColorRecord<C extends ShellColor = ShellColor> = Record<
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

/**
 * Props for the Shell component
 */
export type ShellProps = {
  readonly variant: ShellColor;
};
