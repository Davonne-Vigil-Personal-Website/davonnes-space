export default function OurImages() {
  const myImages = [
    { image: "./images/maryjane.jpg", alt: "dog1, maryjane" },
    { image: "./images/roxy.png", alt: "dog2, roxy" },
    { image: "./images/lexy.png", alt: "dog3, lexy" },
    { image: "./images/coco.png", alt: "dog4, coco" },
    { image: "./images/daisy.png", alt: "dog5, daisy" },
    { image: "./images/pack.png", alt: "pack, dog pack" },
  ];
  return (
    <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-2">
      {myImages.map((image, index) => (
        <div className={`${index === 5 ? "block lg:block xl:hidden" : ""}`}>
          <img
            src={image.image}
            alt={image.alt}
            key={image.id}
            className="w-40 md:w-54 h-50 border-2 mx-auto rounded-2xl"
          />
        </div>
      ))}
    </section>
  );
}
