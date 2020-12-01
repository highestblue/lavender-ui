import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import postcssFunctions from 'postcss-functions';
import postcssVariables from 'postcss-css-variables';
import cssnano from 'cssnano';

function changeLightness(value, perc) {
  const hsl = value.split(', ');
  const result = `${hsl[0]}, ${hsl[1]}, ${perc})`;
  console.log(result);
  return result;
}

const isProd: boolean = process.env.NODE_ENV === 'production';
const postcssPlugins: any[] = [
  postcssImport,
  postcssVariables,
  postcssPresetEnv({ stage: 1 }),
  postcssFunctions({
    functions: { changeLightness },
  }),
];

if (isProd) {
  const cssnanoConfig = cssnano({
    preset: [
      'default',
      {
        discardComments: {
          removeAll: true,
        },
      },
    ],
  });
  postcssPlugins.push(cssnanoConfig);
}

export const config: Config = {
  namespace: 'lavender-ui',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
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
      plugins: postcssPlugins,
    }),
  ],
};
