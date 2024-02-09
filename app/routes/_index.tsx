import type { MetaFunction } from "@remix-run/node";
import { images } from "~/images";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Some beautiful images</h1>
      <div className="gap-4 flex flex-wrap">
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
