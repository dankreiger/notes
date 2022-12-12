import { FC } from 'react';
import { Theme, ThemeVariant } from '../../theme';
import { Select } from '../select';
import { ButtonGroupProps } from './internal';

export const ButtonGroup: FC<ButtonGroupProps> = ({
  activeWhen,
  list,
  xfLabel = (val) => val,
  onClick = () => undefined,
  variant = ThemeVariant.slate,
}) => {
  if (!list?.length) return null;

  return (
    <>
      <div
        className="isolate rounded-md shadow-sm hidden sm:inline-flex"
        role="group"
        data-testid="button-group"
      >
        {list.map((item, idx) => (
          <button
            key={`${item}-${idx}`}
            type="button"
            onClick={() => onClick(item)}
            className={`relative inline-flex items-center first:rounded-l-md last:rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium  focus:z-10 ${
              activeWhen(item)
                ? `${Theme[variant].button} text-white border-transparent`
                : 'text-gray-700'
            } ${Theme[variant].focusBorder} focus:outline-none focus:ring-1 ${
              Theme[variant].focusRing
            } transition ease-in-out duration-150`}
          >
            {xfLabel(item)}
          </button>
        ))}
      </div>
      <div className="sm:hidden">
        <Select
          key="up-to-sm-theme-selector-mobile"
          onChange={(e) => onClick(e.target.value as ThemeVariant)}
          list={list}
          variant={variant}
          value={list.find((val) => activeWhen(val)) ?? list[0]}
          xfLabel={xfLabel}
        />
      </div>
    </>
  );
};
export { getButtonGroupList } from './internal';
