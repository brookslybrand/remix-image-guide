import imgSrc from "./big_ear_for_image_optimizer.jpg";

export default function VitePluginImageOptimizer() {
  return (
    <div>
      <p>TODO: Write up something here</p>
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
