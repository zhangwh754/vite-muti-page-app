import { resolve } from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  root: './src/pages',

  build: {
    outDir: resolve(process.cwd(), 'build'), // 指定输出路径（相对于 项目根目录)
    rollupOptions: {
      input: {
        home: resolve(__dirname, './src/pages/home/index.html'),
        banner: resolve(__dirname, './src/pages/banner/index.html'),
      },
      output: {
        esModule: false,
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
  ],
});
