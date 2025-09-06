import { useState } from "react";

export default function OurImages() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const myImages = [
    {
      image: "./images/maryjane.jpg",

      alt: "dog1, maryjane",
    },
    {
      image: "./images/roxy.png",
      hoverImage: "./images/roxy2.png",
      alt: "dog2, roxy",
    },
    {
      image: "./images/lexy.png",
      hoverImage: "./images/lexy2.png",
      alt: "dog3, lexy",
    },
    {
      image: "./images/coco.png",
      hoverImage: "./images/coco2.png",
      alt: "dog4, coco",
    },
    {
      image: "./images/daisy.png",
      hoverImage: "./images/daisy2.png",
      alt: "dog5, daisy",
    },
    {
      image: "./images/pack.png",
      hoverImage: "./images/pack2.png",
      alt: "pack, dog pack",
    },
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      {myImages.map((image, index) => (
        <div
          className={`${index === 5 ? "block lg:block xl:hidden" : ""}`}
          key={index}
        >
          <img
            src={hoveredIndex === index ? image.hoverImage : image.image}
            alt={image.alt}
            loading="lazy"
            key={image.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="w-40 md:w-60 h-50 border-2 mx-auto rounded-2xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-0"
          />
        </div>
      ))}
    </section>
  );
}
