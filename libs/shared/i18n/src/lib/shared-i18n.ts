import i18n, { Resource } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

export const initI18n = (resources: Resource) => {
  // When The language changes, set the document direction
  i18n.on('languageChanged', (locale) => {
    const direction = i18n.dir(locale);
    document.dir = direction;
  });
  i18n
    .use(Backend) // lazy loads translations from /public/locales
    .use(LanguageDetector) // detect user language
    .init({
      fallbackLng: 'en',
      debug: true,
      interpolation: {
        escapeValue: false,
      },
      resources,
    });
  return i18n;
};
