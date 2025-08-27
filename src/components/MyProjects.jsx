export default function MyProjects() {
  const projects = [
    { myProject: "project 1", image: "", id: 0 },
    { myProject: "project 2", image: "", id: 1 },
    { myProject: "project 3", image: "", id: 3 },
  ];
  return (
    <div>
      {projects.map((project) => (
        <button>
          <Image image={project.image} />
          {project.myProject}
        </button>
      ))}
    </div>
  );
}
