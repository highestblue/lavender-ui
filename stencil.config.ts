import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export const config: Config = {
  namespace: 'lavender-ui',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [{ src: '../tailwind.config.js' }],
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    postcss({
      plugins: [autoprefixer(), tailwindcss()],
    }),
  ],
};
