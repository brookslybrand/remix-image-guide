import type { MetaFunction } from "@remix-run/node";
import type { loader as rootLoader } from "~/root";

export function metaFromFrontmatter(
  frontmatter: Record<string, unknown>
): MetaFunction {
  const { title, description, image, imageAlt } = frontmatter;

  return ({ location, matches }) => {
    const rootData = matches.find(({ id }) => id === "root");
    if (!rootData) throw new Error("No root data");

    const { siteUrl } = rootData.data as ReturnType<typeof rootLoader>;

    const url = `${siteUrl}${location.pathname}`;

    return [
      { title: title + " | Remix" },
      { name: "description", content: description },
      { property: "og:url", content: url },
      { property: "og:title", content: title },
      { property: "og:image", content: image },
      { property: "og:description", content: description },
      { name: "twitter:card", content: "@brookslybrand" },
      { name: "twitter:creator", content: "@brookslybrand" },
      { name: "twitter:site", content: "@remix_run" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      {
        name: "twitter:image:alt",
        content: imageAlt,
      },
    ];
  };
}
