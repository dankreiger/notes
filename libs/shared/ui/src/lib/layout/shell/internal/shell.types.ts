import type { ReactNode, SVGProps } from 'react';
import type { ThemeVariant } from '../../../theme';

export type ShellProps = {
  /**
   * Search input in the header (optional)
   */
  readonly headerLeft?: ReactNode;
  /**
   * Items to render in the header (optional)
   */
  readonly headerRight?: ReactNode;
  /**
   * Alt tag for the logo image (optional)
   */
  readonly logoAlt?: string;
  /**
   * Image src pointing to the logo (optional)
   */
  readonly logoSrc?: string;
  /**
   * Main content
   */
  readonly primaryColumn: ReactNode;
  /**
   * Secondary column - hidden on smaller screens (optional)
   */
  readonly secondaryColumn?: ReactNode;
  /**
   * Screen reader texts for the shell (optional)
   */
  readonly screenReaderTexts?: {
    readonly openSidebar?: string;
    readonly closeSidebar?: string;
    readonly primaryHeading?: string;
  };
  /**
   * Items for the sidebar navigation (optional)
   */
  readonly sidebarNavigationItems?: {
    name: string;
    href: string;
    icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    current: boolean;
  }[];
  /**
   * Variant color for the shell (optional)
   */
  readonly variant?: ThemeVariant;
};
