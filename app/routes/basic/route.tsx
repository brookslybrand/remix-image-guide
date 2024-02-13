import fallbackImgSrc from "./sleepy_girl.webp";
import smallImgSrc from "./sleepy_girl_small.webp";
import mediumImgSrc from "./sleepy_girl_medium.webp";
import largeImgSrc from "./sleepy_girl_large.webp";

// You can create the images using a tool like ffmpeg
// ffmpeg -i ./app/routes/basic/sleepy_girl.jpg -vf scale=200:-1 -q:v 80 ./app/routes/basic/sleepy_girl_small.webp

export default function Basic() {
  return (
    <img
      style={{ maxWidth: 800 }}
      alt="A puppy sleeping on it's back with it's mouth slightly open"
      src={fallbackImgSrc}
      sizes="(min-width: 400px) 800px, 100vw"
      srcSet={`${smallImgSrc} 400w, ${mediumImgSrc} 640w, ${largeImgSrc} 800w`}
    />
  );
}
