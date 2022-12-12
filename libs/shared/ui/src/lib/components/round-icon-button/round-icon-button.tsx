import { FC, useMemo } from 'react';
import { Theme, ThemeSize, ThemeVariant } from '../../theme';
import { getButtonPadding, getIconCmp, RoundIconButtonProps } from './internal';

export const RoundIconButton: FC<RoundIconButtonProps> = ({
  Icon = {
    name: 'PlusIcon',
    size: ThemeSize.md,
  },
  padding = ThemeSize.md,
  variant = ThemeVariant.emerald,
  screenReaderText = 'Action Button',
}) => {
  const IconCmp = useMemo(() => getIconCmp(Icon), [Icon]);
  const buttonPadding = useMemo(() => getButtonPadding(padding), [padding]);

  return (
    <button
      type="button"
      className={`inline-flex items-center rounded-full border border-transparent ${Theme[variant].button} ${buttonPadding} text-white shadow-sm focus:outline-none focus:ring-2 ${Theme[variant].focusRing} focus:ring-offset-2`}
    >
      {IconCmp}
      <span className="sr-only">{screenReaderText}</span>
    </button>
  );
};
