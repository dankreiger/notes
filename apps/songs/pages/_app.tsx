import {
  ButtonGroup,
  Select,
  Shell,
  ThemeVariant,
  ThemeVariantList,
} from '@hear/shared/ui';
import { songsAppTrpcClient } from '@hear/songs/trpc-client';
import { MusicalNoteIcon } from '@heroicons/react/24/outline';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ChangeEvent, useCallback, useState } from 'react';
import 'react-h5-audio-player/lib/styles.css';
import { i18n, SupportedLocale } from '../i18n';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const {
    pathname,
    asPath,
    query,
    locale: _locale,
    locales = [],
    defaultLocale = 'en',
  } = useRouter();
  const localesList = locales.filter((l) => l !== 'default');
  const locale = (_locale || defaultLocale) as SupportedLocale;

  const [i18nOpts, setI18nOpts] = useState({
    lng: locale,
  });

  const handleLocaleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const lng = e.target.value as SupportedLocale;
      setI18nOpts({ lng }); // update optimistically
      // update i18n URL
      router.push({ pathname, query }, asPath, {
        locale: lng,
      });
    },
    [router, pathname, query, asPath]
  );

  const [themeVariant, setThemeVariant] = useState(ThemeVariant.sky);

  return (
    <>
      <Head>
        <title>{i18n.t('document.title', i18nOpts)}</title>
      </Head>
      <Shell
        logoAlt="Logo"
        logoSrc="./logo.svg"
        sidebarNavigationItems={[
          {
            name: i18n.t('shell.sideNavigationItems.songs', i18nOpts),
            href: '#',
            icon: MusicalNoteIcon,
            current: true,
          },
        ]}
        primaryColumn={<Component {...pageProps} themeVariant={themeVariant} />}
        headerRight={[
          <ButtonGroup
            key="theme-selector"
            activeWhen={(val) => val === themeVariant}
            list={ThemeVariantList}
            onClick={(val: ThemeVariant) => setThemeVariant(val)}
            xfLabel={(val: ThemeVariant) =>
              i18n.t(`themeVariant.${val}`, i18nOpts)
            }
            variant={themeVariant}
          />,

          localesList?.length && (
            <Select
              key="locales-select"
              value={i18nOpts.lng}
              variant={themeVariant}
              list={localesList}
              xfLabel={(val: SupportedLocale) =>
                i18n.t(`locale.${val}`, i18nOpts)
              }
              onChange={handleLocaleChange}
            />
          ),
        ]}
        variant={themeVariant}
      />
    </>
  );
}

export default songsAppTrpcClient.withTRPC(CustomApp);
