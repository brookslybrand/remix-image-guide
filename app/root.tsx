import { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "~/tailwind.css";
import { getGuideFrontmatter } from "~/lib/guides.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const { pathname, host } = new URL(request.url);
  const siteUrl =
    (process.env.NODE_ENV === "production" ? "https:" : "http:") + "//" + host;

  const routeId = `routes${pathname === "/" ? "/_index" : pathname}`;

  const frontmatter = await getGuideFrontmatter(routeId);

  return { siteUrl, frontmatter };
}

export const meta: MetaFunction<typeof loader> = ({ location, data }) => {
  if (!data) return [];
  const { siteUrl, frontmatter } = data;

  const { title, description, image, imageAlt } = frontmatter;

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

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <nav className="px-2 py-4 border border-b-gray-200">
          <Link className="text-blue-700 hover:underline text-lg" to="/">
            Home
          </Link>
          {/* TODO: Add dropdown for guide links */}
        </nav>
        {children}
        <Scripts />
        <ScrollRestoration />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="prose mx-auto py-10 px-10 md:px-0">
      <Outlet />
    </div>
  );
}
