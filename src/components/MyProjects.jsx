import Image from "./Image";
import Hobbies from "./Hobbies";

export default function MyProjects() {
  const projects = [
    {
      myProject: "project 1",
      image: "./images/gamePlan.png",
      href: "https://www.youtube.com/@davonne007",
      id: 0,
    },
    {
      myProject: "project 2",
      image: "./images/designToDev.png",
      href: "https://dev-by-design.vercel.app/",
      id: 1,
    },
    {
      myProject: "project 3",
      image: "./images/webDev.png",
      href: "https://road-to-uxe.netlify.app/",
      id: 3,
    },
  ];

  const basketball = "./images/basketball.jpg";

  return (
    <section className="flex flex-col justify-center items-center gap-4 mt-8 md:-mt-88">
      <Image image={basketball} className="max-w-xs rounded-3xl" />
      {projects.map((project) => (
        <a key={project.id} href={project.href}>
          <Image
            image={project.image}
            className="max-w-xs border-4 rounded-3xl border-black"
          />
        </a>
      ))}

      <Hobbies />
    </section>
  );
}
