import { initI18n } from '@hear/shared/i18n';
import type { DecoratorFn } from '@storybook/react';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { de, en } from '../locales';

import './tailwind-imports.css';

const i18n = initI18n({
  resources: {
    en: en,
    de: de,
  },
  fallbackLng: 'en',
});

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'de', title: 'Deutsch' },
      ],
      showName: true,
    },
  },
};

const useI18nLanguage = (locale?: string) =>
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

const withI18next =
  (hook: typeof useI18nLanguage): DecoratorFn =>
  (Story, context) => {
    hook(context.globals.locale);
    return (
      <Suspense fallback={<div>loading translations...</div>}>
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      </Suspense>
    );
  };

// needs to be capitalized for rules of hooks
export const decorators = [withI18next(useI18nLanguage)];
