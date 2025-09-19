import { myTechStack } from "../data/techStack";
import Image from "./Image";

export default function Technologies() {
  return (
    <section
      className="mt-8 bg-white rounded-2xl p-8 w-68"
      aria-label="Technology Stack"
    >
      <h2 className="font-grav text-2xl text-center mx-auto bg-black text-white p-2">
        Tech Stack
      </h2>
      <ul
        className="flex flex-col justify-center items-center gap-4 mt-4"
        aria-label="List of technologies used"
      >
        {myTechStack.map((techStack, index) => (
          <li
            key={index}
            className="border-2 font-bold text-center rounded-2xl border-black p-2 w-60 "
          >
            <Image
              image={techStack.image}
              className="w-12 mx-auto"
              alt={techStack.alt}
            />
            <span>{techStack.tech}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
