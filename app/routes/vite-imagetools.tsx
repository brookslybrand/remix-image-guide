import sadBoy from "~/assets/images/sad_boy.jpg?w=800&format=webp&quality=80&imagetools";
import sadBoyBlur from "~/assets/images/sad_boy.jpg?w=800&blur=40&quality=30&format=webp&imagetools";
import sadBoyAvifSrcSet from "~/assets/images/sad_boy.jpg?w=500;900;1200&format=avif&as=srcset&imagetools";
import sadBoyWebpSrcSet from "~/assets/images/sad_boy.jpg?w=500;900;1200&format=webp&as=srcset&imagetools";

console.log(sadBoyAvifSrcSet);

export default function ViteImagetools() {
  return (
    <div
      className="max-w-[1200px] aspect-[4/3]"
      style={{
        background: `top / contain no-repeat url(${sadBoyBlur})`,
      }}
    >
      <picture>
        <source srcSet={sadBoyAvifSrcSet} type="image/avif" />
        <source srcSet={sadBoyWebpSrcSet} type="image/webp" />
        <img
          className="w-full"
          src={sadBoy}
          alt="A dog with laying down wearing a crochet sweater and looking very sad"
        />
      </picture>
    </div>
  );
}
