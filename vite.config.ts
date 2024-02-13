import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    ViteImageOptimizer({
      logStats: true,
      test: /big_ear_for_image_optimizer\.*/,
      jpg: {
        quality: 80,
      },
    }),
    imagetools(),
    remix(),
  ],
});
