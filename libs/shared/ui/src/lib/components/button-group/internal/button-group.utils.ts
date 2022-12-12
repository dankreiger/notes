import type { SetStateAction } from 'react';

export const getButtonGroupList = <T extends string>(opts: {
  list: T[];
  activeValue: T;
  onClick: (val: T) => void | ((val: T) => void) | SetStateAction<T>;
  xfLabel?: (val: T) => string;
}) => {
  return opts.list.map((val) => ({
    label: opts.xfLabel?.(val) || val,
    value: val,
    active: opts.activeValue === val,
    onClick: opts.onClick,
  }));
};
