import path from 'path'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import autoprefixer from 'autoprefixer'
import legacy from '@vitejs/plugin-legacy'
import AutoImport from 'unplugin-auto-import/vite'
import getInputModule from './src/config/getInputModule'

export default defineConfig(function ({ mode }) {
  return {
    // base: mode === 'production' ? '/vite-muti-page-app/' : '/',
    root: './src/pages',

    build: {
      outDir: path.resolve(process.cwd(), 'build'), // 指定输出路径（相对于 项目根目录)
      rollupOptions: {
        input: getInputModule(),
      },
    },

    css: {
      postcss: {
        plugins: [autoprefixer()],
      },
    },

    plugins: [
      eslint({
        cache: false,
        fix: true,
      }),
      legacy({
        targets: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8'],
      }),
      AutoImport({
        include: [
          /\.[tj]s?$/, // .ts, .js
        ],
        imports: [
          {
            jquery: [
              ['default', '$'], // import { default as $ } from 'axios',
            ],
          },
        ],
        dts: path.resolve(process.cwd(), './auto-imports.d.ts'),

        eslintrc: {
          filepath: path.resolve(process.cwd(), './.eslintrc-auto-import.json'), // Default `./.eslintrc-auto-import.json`
        },
      }),
    ],
  }
})
