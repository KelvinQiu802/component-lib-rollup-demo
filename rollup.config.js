import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import cssnano from 'cssnano';
import terser from '@rollup/plugin-terser';
import packageJson from './package.json' assert { type: 'json' };

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        extensions: ['.css'],
        extract: true,
        plugins: [postcssImport(), tailwindcss(), cssnano()],
      }),
      terser(),
    ],
    external: ['react'],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'esm',
      },
    ],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
