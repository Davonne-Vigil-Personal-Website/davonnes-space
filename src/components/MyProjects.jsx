import { projects } from "../data/myProjects";
import Image from "./Image";
import WhatIBring from "./WhatIBring";

export default function MyProjects() {
  const basketball = "./images/basketball.webp";

  return (
    <section
      className="flex flex-col justify-center items-center gap-4 mt-8 lg:mb-20"
      aria-label="My Projects Section"
    >
      <Image
        image={basketball}
        className="max-w-xs rounded-3xl"
        alt="Basketball, image from Go to TJ Dragotta on Unsplash"
      />
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.href}
          aria-label={`View ${project.myProject}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            image={project.image}
            className="max-w-xs border-4 rounded-3xl border-black"
            alt={project.myProject}
          />
        </a>
      ))}
      {/* <Hobbies /> */}
      <div className="mt-8">
        <iframe
          width="350"
          height="350"
          src="https://www.youtube-nocookie.com/embed/11roNijeQiw"
          title="Davonne Vigil YouTube video on her Calm Paws Project about her dog and firework awareness"
          aria-label="Davonne Vigil YouTube video on her Calm Paws Project  about her dog and firework awareness"
          frameBorder="0"
        ></iframe>
      </div>
      <WhatIBring />
    </section>
  );
}
