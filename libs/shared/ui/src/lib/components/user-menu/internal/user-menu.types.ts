import type { ThemeVariant } from '../../../theme';

/**
 * Props for the UserMenu component
 */
export type UserMenuProps = {
  /**
   * The color variant around the UserMenu avatar when focused
   */
  readonly focusVariant?: ThemeVariant;
  readonly imgAlt: string;
  readonly imgSrc: string;
  readonly screenReaderText?: string;
};
