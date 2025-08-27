import Image from "./Image";

export default function MyProjects() {
  const projects = [
    { myProject: "project 1", image: "./images/devToDesign.png", id: 0 },
    { myProject: "project 2", image: "./images/gamePlan.png", id: 1 },
    { myProject: "project 3", image: "./images/webDev.png", id: 3 },
  ];
  return (
    <div className="border-2 max-w-md">
      {projects.map((project) => (
        <button>
          <Image image={project.image} className="max-w-md" />
          {project.myProject}
        </button>
      ))}
    </div>
  );
}
