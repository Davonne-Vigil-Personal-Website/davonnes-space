export default function OurImages() {
  const myImages = [
    { image: "./images/maryjane.jpg", alt: "dog1" },
    { image: "./images/roxy.png", alt: "dog2" },
    { image: "./images/lexy.png", alt: "dog3" },
    { image: "./images/coco.png", alt: "d" },
    { image: "./images/daisy.png", alt: "" },
  ];
  return (
    <section className="flex gap-2">
      {myImages.map((image) => (
        <img
          src={image.image}
          alt={image.alt}
          key={image.id}
          className="w-50 h-50 border-2 rounded-2xl"
        />
      ))}
    </section>
  );
}
