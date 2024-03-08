import { getGuides } from "~/lib/guides.server";
import { Link, useLoaderData } from "@remix-run/react";

export async function loader() {
  const guides = await getGuides();

  return { guides };
}

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
