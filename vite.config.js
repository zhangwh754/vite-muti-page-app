import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./src/pages",

  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "./src/pages/home/index.html"),
        banner: resolve(__dirname, "./src/pages/banner/index.html"),
      },
    },
  },
});
