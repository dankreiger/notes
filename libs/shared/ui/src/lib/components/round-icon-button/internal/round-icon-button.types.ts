import type { ThemeVariant } from '../../../theme';
import { ThemeSize } from '../../../theme';

/** Verbose to allow for tailwind purging */
export type RoundIconButtonProps = {
  Icon?: {
    name: 'PlusIcon' | 'MinusIcon' | 'LockClosedIcon';
    size: ThemeSize;
  };
  padding?: ThemeSize;
  screenReaderText?: string;
  variant?: ThemeVariant;
};
