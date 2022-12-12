import { FC, useMemo } from 'react';
import { Theme, ThemeVariant } from '../../theme';
import { SelectProps } from './internal';

export const Select: FC<SelectProps> = ({
  onChange,
  label = 'label',
  list,
  xfLabel = (val) => val,
  name = 'select',
  value,
  variant = ThemeVariant.slate,
}) => {
  const optionEls = useMemo(
    () =>
      list.map((val) => (
        <option key={val} value={val}>
          {xfLabel(val)}
        </option>
      )),
    [list, xfLabel]
  );

  return (
    <div className="isolate inline-flex rounded-md shadow-sm" role="group">
      <label htmlFor={label} className="hidden">
        {label}
      </label>

      <select
        id={label}
        name={name}
        aria-label={label}
        className={` block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base ${Theme[variant].focusBorder} focus:outline-none ${Theme[variant].focusRing} sm:text-sm`}
        value={value}
        onChange={onChange}
      >
        {optionEls}
      </select>
    </div>
  );
};
