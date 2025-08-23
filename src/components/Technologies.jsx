import React from "react";

export default function Technologies() {
  const myTechStack = [
    { tech: "JavaScript" },
    { tech: "TypeScript" },
    { tech: "React.js" },
    { tech: "React.js" },
    { tech: "Node.js/Express" },
  ];
  return (
    <section className="mt-8">
      <h1 className="font-grav text-2xl bg-black text-white p-2 w-60">
        Tech Stack
      </h1>
      <div className="flex flex-col gap-4 mt-4">
        {myTechStack.map((techStack, index) => (
          <button key={index} className="border border-black p-2 w-60 ">
            {techStack.tech}
          </button>
        ))}
      </div>
    </section>
  );
}
