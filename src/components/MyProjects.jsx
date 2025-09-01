import Image from "./Image";
import Hobbies from "./Hobbies";

export default function MyProjects() {
  const projects = [
    { myProject: "project 1", image: "./images/gamePlan.png", id: 0 },
    { myProject: "project 2", image: "./images/designToDev.png", id: 1 },
    { myProject: "project 3", image: "./images/webDev.png", id: 3 },
  ];

  return (
    <section className="flex flex-col justify-center items-center gap-4">
      {projects.map((project) => (
        <button key={project.id}>
          <Image
            image={project.image}
            className="max-w-xs border-4 rounded-3xl border-black"
          />
        </button>
      ))}

      <Hobbies />
    </section>
  );
}
