import Image from "./Image";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/davonnevigiål/",
    image: "images/linkedin.png",
    alt: "LinkedIn logo, by Icons8",
  },
  {
    href: "https://github.com/Davonne007-TX",
    image: "images/github.png",
    alt: "Github logo, by Icons8",
  },
  {
    href: "https://x.com/Davonne007",
    image: "images/twitter.png",
    alt: "X logo, by Icons8",
  },

  {
    href: "https://www.youtube.com/@davonne007",
    image: "images/youtube.png",
    alt: "Youtube logo, by Icons8",
  },
];

export default function MyLinks() {
  return (
    <section className="flex flex-row justify-center items-center gap-4 py-8">
      {socialLinks.map((link, index) => (
        <a key={index} href={link.href} className="flex items-center">
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
