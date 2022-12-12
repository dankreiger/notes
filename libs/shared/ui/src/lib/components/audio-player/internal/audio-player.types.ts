import { ReactNode } from 'react';

export type AudioPlayerProps = {
  src: string;
  duration: number;
  header: ReactNode;
  footer: ReactNode;
};
