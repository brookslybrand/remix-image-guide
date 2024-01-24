const images = import.meta.glob("../assets/images/*.(png|jpg|jpeg)", {
  as: "url",
  eager: true,
});

export default function VitePluginImageOptimizer() {
  return (
    <div>
      <h1>Some beautiful images</h1>
      <div className="gap-4 flex flex-wrap">
        {Object.values(images).map((src) => (
          <img
            key={src}
            src={src}
            alt=""
            // width={image.width}
            // height={image.height}
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
