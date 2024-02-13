import sadBoy from "~/assets/images/sad_boy.jpg?w=400&format=webp&quality=30";
import sadBoyBlur from "~/assets/images/sad_boy.jpg?w=800&blur=40&quality=30&format=webp";
import sadBoyAvifSrcSet from "~/assets/images/sad_boy.jpg?w=500;900;1200&format=avif&as=srcset";
import sadBoyWebpSrcSet from "~/assets/images/sad_boy.jpg?w=500;900;1200&format=webp&as=srcset";

export default function ViteImagetools() {
  return (
    <div
      style={{
        width: 800,
        height: 1200,
        background: `url(${sadBoyBlur}) no-repeat scroll 0 0`,
      }}
    >
      <picture>
        <source srcSet={sadBoyAvifSrcSet} type="image/avif" />
        <source srcSet={sadBoyWebpSrcSet} type="image/webp" />
        <img src={sadBoy} alt="" />
      </picture>
    </div>
  );
}
