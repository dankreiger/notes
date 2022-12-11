import type { FC } from 'react';
import { getTagClass, HeadingProps } from './internal';

export const Heading: FC<HeadingProps> = ({
  children,
  color = 'text-black',
  Tag = 'h2',
}) => (
  <Tag
    className={`${getTagClass(
      Tag
    )} font-bold leading-7 ${color} text-cy sm:truncate sm:text-3xl sm:tracking-tight`}
  >
    {children}
  </Tag>
);
