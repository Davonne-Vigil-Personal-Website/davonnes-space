import Image from "./Image";
import Hobbies from "./Hobbies";

export default function MyProjects() {
  const projects = [
    { myProject: "project 1", image: "./images/gamePlan.png", id: 0 },
    { myProject: "project 2", image: "./images/designToDev.png", id: 1 },
    { myProject: "project 3", image: "./images/webDev.png", id: 3 },
  ];

  const basketball = "./images/basketball.jpg";

  return (
    <section className="flex flex-col justify-center items-center gap-4 mt-8 md:-mt-88">
      <Image image={basketball} className="max-w-xs rounded-3xl" />
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
