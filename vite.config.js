import { resolve } from 'path'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import autoprefixer from 'autoprefixer'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  root: './src/pages',

  build: {
    outDir: resolve(process.cwd(), 'build'), // 指定输出路径（相对于 项目根目录)
    rollupOptions: {
      input: {
        home: resolve(__dirname, './src/pages/home/index.html'),
        banner: resolve(__dirname, './src/pages/banner/index.html'),
      },
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
  ],
})
