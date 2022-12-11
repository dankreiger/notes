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
  nx: {
    svgr: true,
  },
});
