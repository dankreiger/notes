/**
 * Color variants for the Shell component
 */
export type UserMenuColor =
  | 'slate'
  | 'red'
  | 'emerald'
  | 'sky'
  | 'indigo'
  | 'fuchsia';

/**
 * Shape of static class lookup table
 */
export type UserMenuColorRecord<C extends UserMenuColor = UserMenuColor> =
  Record<
    C,
    {
      readonly buttonFocus: `focus:ring-${C}-500`;
    }
  >;

/**
 * Props for the UserMenu component
 */
export type UserMenuProps = {
  /**
   * The color variant around the UserMenu avatar when focused
   */
  readonly focusVariant?: UserMenuColor;
  readonly imgAlt: string;
  readonly imgSrc: string;
  readonly screenReaderText: string;
};
