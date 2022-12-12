import { ThemeVariant } from '@hear/shared/ui';

const translation = {
  document: {
    title: 'Songs',
  },
  themeVariant: {
    [ThemeVariant.emerald]: 'emerald',
    [ThemeVariant.fuchsia]: 'fuchsia',
    [ThemeVariant.indigo]: 'indigo',
    [ThemeVariant.red]: 'red',
    [ThemeVariant.sky]: 'sky',
    [ThemeVariant.slate]: 'slate',
  },
  locale: {
    en: 'English',
    de: 'German',
  },

  shell: {
    sideNavigationItems: {
      songs: 'Songs',
    },
  },
} as const;

export const en = { translation } as const;
