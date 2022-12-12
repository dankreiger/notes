//@ts-check
const { withNx } = require('@nrwl/next/plugins/with-nx');
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});
const plugins = [withPWA, withNx];

module.exports = plugins.reduce((acc, next) => next(acc), {
  i18n: {
    locales: ['default', 'en', 'de'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  nx: {
    svgr: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dz2l6nhikl0ua.cloudfront.net',
        pathname: '/assets/cover_image/**',
      },
    ],
  },
});
