import React from "react";
import Image from "./Image";

export default function Technologies() {
  const myTechStack = [
    {
      tech: "JavaScript",
      image: "./images/js.png",
      alt: "JavaScript logo, image by icons8",
    },
    {
      tech: "TypeScript",
      image: "./images/ts.png",
      alt: "TypeScript logo, image by icons8",
    },
    {
      tech: "React.js",
      image: "./images/react.png",
      alt: "React.js logo, image by icons8",
    },

    {
      tech: "Tailwind CSS",
      image: "./images/tailwind.png",
      alt: "Tailwind CSS logo, image by icons8",
    },

    // {
    //   tech: "Node.js/Express",
    //   image: "./images/node.js.png",
    //   alt: "Node.js/Express logo, image by icons8",
    // },
  ];
  return (
    <section className="mt-8 bg-white rounded-2xl p-4 w-68">
      <h1 className="font-grav text-2xl bg-black text-white p-2 w-60">
        Tech Stack
      </h1>
      <div className="flex flex-col gap-4 mt-4">
        {myTechStack.map((techStack, index) => (
          <p
            key={index}
            className="border-2 text-center rounded-2xl border-black p-2 w-60 "
          >
            <Image image={techStack.image} className="w-12 mx-auto" />
            {techStack.tech}
          </p>
        ))}
      </div>
    </section>
  );
}
