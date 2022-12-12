import { initI18n } from '@hear/shared/i18n';
import type { i18n } from 'react-i18next';
import { de, en } from './locales';

const _i18n: i18n = initI18n({
  resources: {
    en,
    de,
  },
  fallbackLng: 'en',
  debug: false,
});

export { _i18n as i18n };

export type SupportedLocale = 'en' | 'de';
