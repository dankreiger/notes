import { ReactNode, SVGProps } from 'react';

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

export type ShellProps = {
  /**
   * Items to render in the header
   */
  readonly headerItems?: ReactNode[];
  /**
   * Alt tag for the logo
   */
  readonly logoAlt?: string;
  /**
   * Image src pointing to the logo
   */
  readonly logoSrc?: string;
  /**
   * Callback for when the search input changes
   */
  readonly onSearchChange?: (value: string) => void;
  /**
   * Main content
   */
  readonly primaryColumn: ReactNode;
  /**
   * Secondary column (hidden on smaller screens)
   */
  readonly secondaryColumn?: ReactNode;
  /**
   * Screen reader texts
   */
  readonly screenReaderTexts?: {
    readonly openSidebar?: string;
    readonly closeSidebar?: string;
    readonly primaryHeading?: string;
  };
  /**
   * Items for the sidebar navigation
   */
  readonly sidebarNavigationItems?: {
    name: string;
    href: string;
    icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    current: boolean;
  }[];
  /**
   * Variant color for the shell
   */
  readonly variant: ShellColor;
};
