import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypePrettyCode from "rehype-pretty-code";

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
      cache: true,
      cacheLocation: "node_modules/.cache",
    }),
    imagetools(),
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [rehypePrettyCode],
    }),
    remix(),
  ],
});
