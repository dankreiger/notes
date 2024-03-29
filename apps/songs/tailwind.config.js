// @ts-check
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(
      __dirname,
      '/**/!(*.stories|*.spec).{ts,tsx}'
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
