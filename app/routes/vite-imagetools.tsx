import BigEar from "~/assets/images/big_ear.jpg?w=400&format=webp&quality=30";
import BigEarBlur from "~/assets/images/big_ear.jpg?w=800&blur=40&quality=30&format=webp";
import avif from "~/assets/images/big_ear.jpg?w=500;900;1200&format=avif&as=srcset";
import webp from "~/assets/images/big_ear.jpg?w=500;900;1200&format=webp&as=srcset";

export default function ViteImagetools() {
  return (
    <div
      style={{
        width: 800,
        height: 1200,
        background: `url(${BigEarBlur}) no-repeat scroll 0 0`,
      }}
    >
      <picture>
        <source srcSet={avif} type="image/avif" />
        <source srcSet={webp} type="image/webp" />
        <img src={BigEar} alt="" />
      </picture>
    </div>
  );
}
