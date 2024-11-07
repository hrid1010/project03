import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__assets, "index.html"),
        news: resolve(__assets, "news.html"),
      },
    },
  },
});
