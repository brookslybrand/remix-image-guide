import assert from "node:assert/strict";
import { z } from "zod";

export const frontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  imageAlt: z.string(),
  order: z.number().optional(),
});

export async function getGuideFrontmatter(pathname: string) {
  const build = await import("virtual:remix/server-build");
  const routeId = "routes/_guides.basic";

  type RouteMap = Record<string, (typeof build)["routes"][string]>;

  // Create a path to route mapping
  const routeMap = Object.fromEntries(
    Object.entries(build.routes).map(([, route]) => [route.path, route])
  ) as RouteMap;

  // replace any starting slashes
  pathname = pathname.replace(/^\//, "");
  const module = routeMap[pathname]?.module;

  assert.ok(module, "No route found for " + routeId);
  assert.ok("frontmatter" in module, "No frontmatter found for " + routeId);

  return frontmatterSchema.parse(module.frontmatter);
}

export async function getGuides() {
  const modules = import.meta.glob("../routes/_guides.**(/route).mdx", {
    eager: true,
  });

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
