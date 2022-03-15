import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    legacy({
      targets: ["defaults", "last 1 version", "IE >= 10", "chrome >= 63"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      modernPolyfills: [
        'es.string.replace-all',
      ]
    }),
  ],
});
