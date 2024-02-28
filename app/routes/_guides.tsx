import { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { getGuideFrontmatter } from "~/lib/guides.server";
import type { loader as rootLoader } from "~/root";

export async function loader({ request }: LoaderFunctionArgs) {
  const { pathname } = new URL(request.url);
  const frontmatter = await getGuideFrontmatter(pathname);

  return { frontmatter };
}

export const meta: MetaFunction<typeof loader, { root: typeof rootLoader }> = ({
  location,
  data,
  matches,
}) => {
  const rootData = matches.find(({ id }) => id === "root")?.data;
  if (!data?.frontmatter || !rootData) return [];

  const { title, description, image, imageAlt } = data.frontmatter;
  const { siteUrl } = rootData;

  const socialImageUrl = `${siteUrl}${image}`;
  const url = `${siteUrl}${location.pathname}`;

  return [
    { title: title },
    { name: "description", content: description },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:image", content: socialImageUrl },
    { property: "og:description", content: description },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator:id", content: "@brookslybrand" },
    { name: "twitter:site:id", content: "@brookslybrand" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: socialImageUrl },
    {
      name: "twitter:image:alt",
      content: imageAlt,
    },
  ];
};

export default function GuidesLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
