import placeholderImgSrc from "./sleepy_girl_placeholder.webp";
import fallbackImgSrc from "./sleepy_girl.webp";
import smallImgSrc from "./sleepy_girl_small.webp";
import mediumImgSrc from "./sleepy_girl_medium.webp";
import largeImgSrc from "./sleepy_girl_large.webp";

export default function Basic() {
  return (
    <div>
      <p>
        Here we have a simple example example using srcset and sizes. I used
        ffmepg to generate the various versions of the image
      </p>
      <pre>
        <code>ffmpeg -i input.jpg -vf scale=200:-1 -q:v 80 output.webp</code>
      </pre>
      <div
        className="max-w-[800px] aspect-[3/4]"
        style={{
          background: `top / contain no-repeat url(${placeholderImgSrc})`,
        }}
      >
        <img
          className="w-full"
          alt="A puppy sleeping on it's back with it's mouth slightly open"
          src={fallbackImgSrc}
          sizes="(min-width: 400px) 800px, 100vw"
          srcSet={`${smallImgSrc} 400w, ${mediumImgSrc} 640w, ${largeImgSrc} 800w`}
        />
      </div>
    </div>
  );
}
