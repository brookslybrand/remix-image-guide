import imgSrc from "./big_ear_for_image_optimizer.jpg";

export default function VitePluginImageOptimizer() {
  return (
    <div>
      <p>
        vite-image-optimizer is nice for passing over all images and optimizing
        them at build. It's useful for small projects and simple blogs, as well
        as dealing with SVGs.
      </p>
      <p>
        Some downsides is that it doesn't convert from one format to another,
        and it applies the same optimization to all images. If you're wanting to
        use srcset and sizes to ship different images to different devices,
        you'll need to use a different tool.
      </p>
      <div className="max-w-[800px] aspect-[3/4]">
        <img
          className="w-full"
          alt="Cute dog with one big ear up and one flopped down"
          src={imgSrc}
        />
      </div>
    </div>
  );
}
