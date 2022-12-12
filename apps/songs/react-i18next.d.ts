// import the original type declarations
import i18next, { i18n as _i18n, TOptions } from 'i18next';
import 'react-i18next';
import { en } from './locales';

type PathsToStringProps<T> = T extends string
  ? []
  : {
      [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>];
    }[Extract<keyof T, string>];

type Join<T extends string[], D extends string> = T extends []
  ? never
  : T extends [infer F]
  ? F
  : T extends [infer F, ...infer R]
  ? F extends string
    ? `${F}${D}${Join<Extract<R, string[]>, D>}`
    : never
  : string;

// react-i18next versions lower than 11.11.0
declare module 'react-i18next' {
  i18next.t = (key: keyof en) => string;
  export type TFunction = (key: keyof en) => string;

  export interface i18n extends _i18n {
    // Expose parameterized t in the i18next interface hierarchy
    t: (
      key: Join<PathsToStringProps<typeof en['translation']>, '.'>,
      opts?: TOptions
    ) => string;
  }
}
