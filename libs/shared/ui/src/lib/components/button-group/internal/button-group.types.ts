import { ThemeVariant } from '../../../theme';

export type ButtonGroupProps = {
  activeWhen: (val: string) => boolean;
  onClick?: (val: string) => void;
  list: string[];
  /**
   * A function to transform the label before it is displayed.
   */
  xfLabel?: (val: string) => string;
  variant: ThemeVariant;
};
