import i18n, { InitOptions } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const defaultOpts: InitOptions = {
  interpolation: {
    escapeValue: false,
  },
  debug: false,
};
export const initI18n = (opts: InitOptions) => {
  i18n
    .use(Backend) // lazy loads translations from /public/locales
    .use(LanguageDetector) // detect user language
    .init({
      ...defaultOpts,
      ...opts,
    });
  return i18n;
};
