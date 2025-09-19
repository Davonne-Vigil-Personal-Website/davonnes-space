import Image from "./Image";
import { socialLinks } from "../data/socialLinks";

export default function MyLinks() {
  return (
    <section
      className="flex flex-row justify-center items-center gap-4 py-8"
      aria-label="Social Media Links"
    >
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="flex items-center"
          aria-label={`Visit my ${link.alt.split(" ")[0]} profile`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            image={link.image}
            alt={link.alt}
            lazy="loading"
            className="w-10 flex items-center"
          />
        </a>
      ))}
    </section>
  );
}
