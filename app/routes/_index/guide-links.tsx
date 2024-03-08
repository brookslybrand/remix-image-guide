import { Link, useLoaderData } from "@remix-run/react";
import type { loader } from "./loader";

export function GuideLinks() {
  const { guides } = useLoaderData<typeof loader>();

  return (
    <ul className="mt-4">
      {guides.map((guide) => (
        <li key={guide.slug}>
          <Link
            className="text-blue-600 text-xl hover:underline"
            to={guide.slug}
          >
            {guide.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
