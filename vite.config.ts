import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import vercel from 'vite-plugin-vercel';

// https://vitejs.dev/config/
export default defineConfig(async () => {
  return {
    plugins: [vue(), AutoImport(), Components(), UnoCSS(), vercel()],
    server: {
      port: 3000,
      open: true,
    },
    build: {
      target: ["chrome53", "safari12"],
      // outDir: '../server/app/public',
      emptyOutDir: true,
      manifest: true,
    },
    vercel: {
      expiration: 25,
      additionalEndpoints: [
        {
          source: 'endpoints/edge.ts',
          destination: `edge`,
          edge: true,
          addRoute: true,
        },
      ],
    }
  }
});