import assert from "node:assert/strict";
import { z } from "zod";

export const frontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  imageAlt: z.string(),
  order: z.number().optional(),
});

export async function getGuideFrontmatter(routeId: string) {
  const build = await import("virtual:remix/server-build");

  const module = build.routes[routeId]?.module;

  assert.ok(module, "No route found for " + routeId);
  assert.ok("frontmatter" in module, "No frontmatter found for " + routeId);

  return frontmatterSchema.parse(module.frontmatter);
}

export async function getGuides() {
  const modules = import.meta.glob("../routes/**(/route).mdx", {
    eager: true,
  });

  // TODO: Fix this hack and actually ignore the _index route with regex like a real programmer
  delete modules["../routes/_index/route.mdx"];

  const build = await import("virtual:remix/server-build");

  const guides = Object.entries(modules).map(([file, guide]) => {
    const id = file.replace("../", "").replace(/(\/route\.mdx|\.mdx)$/, "");
    const slug = build.routes[id].path;
    if (slug === undefined) throw new Error(`No route for ${id}`);

    assert.ok(
      typeof guide === "object" && guide && "frontmatter" in guide,
      "No frontmatter found for " + id
    );

    const frontmatter = guide.frontmatter as z.infer<typeof frontmatterSchema>; // frontmatterSchema.parse(guide.frontmatter);

    return { slug, frontmatter };
  });

  guides.sort((a, b) => {
    if (a.frontmatter.order === undefined) return 1;
    if (b.frontmatter.order === undefined) return -1;
    return a.frontmatter.order - b.frontmatter.order;
  });

  return guides;
}
