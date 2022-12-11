import 'react-i18next';
import type { en } from './locales';

declare module 'react-i18next' {
  export function useTranslation(): {
    t: (key: keyof typeof en['translation']) => string;
  };
}
