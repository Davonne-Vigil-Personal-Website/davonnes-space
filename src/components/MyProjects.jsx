import Image from "./Image";

export default function MyProjects() {
  const projects = [
    { myProject: "project 1", image: "./images/gamePlan.png", id: 0 },
    { myProject: "project 2", image: "./images/designToDev.png", id: 1 },
    { myProject: "project 3", image: "./images/webDev.png", id: 3 },
  ];
  return (
    <div className="w-10 h-10">
      {projects.map((project) => (
        <button key={project.id}>
          <Image
            image={project.image}
            className="max-w-xs md:max-w-sm border-4 border-black"
          />
        </button>
      ))}
    </div>
  );
}
