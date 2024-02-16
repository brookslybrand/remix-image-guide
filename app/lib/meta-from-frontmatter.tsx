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

    const socialImageUrl = `${siteUrl}${location.pathname}`;
    const url = `${siteUrl}${image}`;

    return [
      { title: title },
      { name: "description", content: description },
      { property: "og:url", content: url },
      { property: "og:title", content: title },
      { property: "og:image", content: socialImageUrl },
      { property: "og:description", content: description },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:creator", content: "@brookslybrand" },
      { name: "twitter:site", content: "@brookslybrand" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: socialImageUrl },
      {
        name: "twitter:image:alt",
        content: imageAlt,
      },
    ];
  };
}
