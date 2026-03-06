import template from './src/shared/libs/svgr/svg-common-template.cjs';

export default {
  outDir: 'src/shared/icons/components',
  filenameCase: 'kebab',
  template,
  index: false,
  ignoreExisting: true,
  typescript: true,
  jsxRuntime: 'automatic',
  prettier: true,

  prettierConfig: {
    parser: 'typescript',
    bracketSpacing: true,
    singleQuote: true,
    arrowParens: 'avoid',
    printWidth: 120,
    bracketSameLine: false,
    trailingComma: 'es5',
    endOfLine: 'auto',
  },
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      'prefixIds',
    ],
  },
};
