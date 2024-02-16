import type { MetaFunction } from "@remix-run/node";

export function metaFromFrontmatter(
  frontmatter: Record<string, unknown>
): MetaFunction {
  return () => [
    { title: frontmatter.title },
    { description: frontmatter.description },
  ];
}
