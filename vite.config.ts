import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    ViteImageOptimizer({
      includePublic: true,
      logStats: true,
      cache: true,
      cacheLocation: "node_modules/.cache",

      png: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
    remix(),
  ],
});
