import { ThemeVariant } from '../../../theme';

export type SelectProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  list: string[];
  /**
   * A function to transform the label before it is displayed.
   */
  xfLabel?: (label: string) => string;
  name?: string;
  screenReaderText?: string;
  value: string;
  variant?: ThemeVariant;
};
