import { ThemeVariant } from '@notes/shared/ui';

const translation = {
  document: {
    title: 'Lieder',
  },
  themeVariant: {
    [ThemeVariant.emerald]: 'Smaragdgrün',
    [ThemeVariant.fuchsia]: 'Fuchsia',
    [ThemeVariant.indigo]: 'Indigo',
    [ThemeVariant.red]: 'Rot',
    [ThemeVariant.sky]: 'Himmel',
    [ThemeVariant.slate]: 'Slate',
  },
  locale: {
    en: 'Englisch',
    de: 'Deutsch',
  },

  shell: {
    sideNavigationItems: {
      songs: 'Lieder',
    },
  },
};
export const de = { translation } as const;
