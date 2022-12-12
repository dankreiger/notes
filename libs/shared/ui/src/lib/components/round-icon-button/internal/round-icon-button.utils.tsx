import { LockClosedIcon, PlusIcon } from '@heroicons/react/24/outline';
import { ThemeSize } from '../../../theme';
import { iconSize } from './round-icon-button.constants';
import type { RoundIconButtonProps } from './round-icon-button.types';

// grabbing individual icons so component can tree-shake the icons package
export const getIconCmp = (Icon: RoundIconButtonProps['Icon']) => {
  const { name, size = ThemeSize.md } = Icon || {};
  const props = { className: iconSize[size], 'aria-hidden': true };
  switch (name) {
    case 'PlusIcon':
      return <PlusIcon {...props} />;
    case 'MinusIcon':
      return <PlusIcon {...props} />;
    case 'LockClosedIcon':
      return <LockClosedIcon {...props} />;
    default:
      return <PlusIcon {...props} />;
  }
};

export const getButtonPadding = (size: ThemeSize) => {
  switch (size) {
    case ThemeSize.xs:
      return 'p-1';
    case ThemeSize.sm:
      return 'p-2';
    case ThemeSize.md:
      return 'p-3';
    case ThemeSize.lg:
      return 'p-4';
    case ThemeSize.xl:
      return 'p-5';
    default:
      return 'p-3';
  }
};
