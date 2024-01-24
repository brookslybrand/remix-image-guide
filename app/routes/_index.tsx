import type { MetaFunction } from "@remix-run/node";
import { isRouteErrorResponse } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const images = [
  {
    src: "images/big_ear.jpg",
    alt: "Cute dog with one big ear up and one flopped down",
    width: 3024,
    height: 4032,
  },
  {
    src: "images/comfy_boy.jpg",
    alt: "Dog sleeping wrapped in a purple blanket",
    width: 3024,
    height: 4032,
  },
  {
    src: "images/good_dogs.jpg",
    alt: "Two dogs, a large one sitting, and a small one laying down, both looking at the camera",
    width: 3024,
    height: 4032,
  },
  {
    src: "images/remix_logo_transparent.png",
    alt: "Remix",
    width: 1200,
    height: 627,
  },
  {
    src: "images/texas_sky.jpg",
    alt: "Texas sky with clouds and a sunset",
    width: 5712,
    height: 4284,
  },
];

export default function Index() {
  isRouteErrorResponse;
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Some beautiful images</h1>
      <div style={{ gap: "1rem", display: "flex", flexWrap: "wrap" }}>
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
