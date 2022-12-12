import { Head, Html, Main, NextScript } from 'next/document';
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#050404" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
