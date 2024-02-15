import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Link } from "react-router-dom";
import { images } from "~/images";
import { getGuides } from "~/lib/guides.server";

export async function loader() {
  const guides = await getGuides();
  return json({ guides });
}

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Image Guide" },
    {
      name: "description",
      content: "A guide for working with images in Remix",
    },
  ];
};

export default function Index() {
  const { guides } = useLoaderData<typeof loader>();
  return (
    <div className="p-4">
      <h1 className="text-3xl">
        Checkout these various image loading strategies
      </h1>
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
      <div className="mt-8 gap-4 flex flex-wrap">
        {images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            style={{
              maxWidth: 300,
              height: "100%",
              objectFit: "contain",
              backgroundColor: "peachpuff",
            }}
          />
        ))}
      </div>
    </div>
  );
}
