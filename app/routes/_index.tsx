import type { MetaFunction } from "@remix-run/node";
import { Link } from "react-router-dom";
import { images } from "~/images";

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
  return (
    <div className="p-4">
      <h1 className="text-3xl">
        Checkout these various image loading strategies
      </h1>
      <ul className="mt-4">
        {[
          "basic",
          "vite-plugin-image-optimizer",
          "vite-imagetools",
          "sharp",
          "unpic",
        ].map((route) => (
          <li key={route}>
            <Link
              className="text-blue-600 text-xl hover:underline"
              to={`/${route}`}
            >
              {route}
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
