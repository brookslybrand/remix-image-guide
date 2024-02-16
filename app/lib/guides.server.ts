/* eslint-disable import/no-unresolved */
export type Frontmatter = {
  title: string;
  description: string;
  order?: number;
};

export type PostMeta = {
  slug: string;
  frontmatter: Frontmatter;
};

export async function getGuides(): Promise<PostMeta[]> {
  const modules = import.meta.glob<{ frontmatter: Frontmatter }>(
    "../routes/_guides.**(/route).mdx",
    { eager: true }
  );

  // @ts-expect-error - this is a dynamic import
  const build = await import("virtual:remix/server-build");

  const guides = Object.entries(modules).map(([file, guide]) => {
    const id = file.replace("../", "").replace(/(\/route\.mdx|\.mdx)$/, "");
    const slug = build.routes[id].path;
    if (slug === undefined) throw new Error(`No route for ${id}`);

    return {
      slug,
      frontmatter: guide.frontmatter,
    };
  });

  guides.sort((a, b) => {
    if (a.frontmatter.order === undefined) return 1;
    if (b.frontmatter.order === undefined) return -1;
    return a.frontmatter.order - b.frontmatter.order;
  });

  return guides;
}
