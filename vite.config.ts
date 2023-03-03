import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import viteSsl from "@vitejs/plugin-basic-ssl";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), viteSsl()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimizeDeps: {
    force: true,
  },
  // Enhanced loader requires https. Use port 8080
  // to be inline with other examples.
  server: {
    port: 8080,
    strictPort: true,
    https: true,
  },
  // Images cannot be added to Looker projects
  // so inline them
  build: {
    assetsInlineLimit: 1048576,
    rollupOptions: {
      output: {
        format: "iife",
      },
    },
  },
});
