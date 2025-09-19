import { useState } from "react";
import { myImages } from "../data/dogImages";

export default function OurImages() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2"
      aria-label="Our Dog Images Gallery"
    >
      {myImages.map((image, index) => (
        <div
          className={`${index === 5 ? "block lg:block xl:hidden" : ""}`}
          key={index}
          tabIndex={0}
          aria-label={image.alt}
          onFocus={() => setHoveredIndex(index)}
          onBlur={() => setHoveredIndex(null)}
        >
          <img
            src={hoveredIndex === index ? image.hoverImage : image.image}
            alt={image.alt}
            loading="lazy"
            role="img"
            aria-label={image.alt}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="w-40 md:w-60 h-50 border-2 mx-auto rounded-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:rotate-0"
          />
        </div>
      ))}
    </section>
  );
}
