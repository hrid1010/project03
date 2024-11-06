import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(dirname, "index.html"),
        news: resolve(dirname, "news.html"),
      },
    },
  },
});