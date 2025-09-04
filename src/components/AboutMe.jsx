import Technologies from "./Technologies";
import Contact from "./Contact";

export default function AboutMe() {
  return (
    <section className="flex flex-col justify-center items-center gap-4">
      <div className="bg-pink-300 mt-8 rounded-xl p-8 w-68 md:flex flex-col gap-6">
        <div className="flex flex-col gap-4 w-">
          <h1 className="font-grav text-2xl">Davonne Vigil</h1>
          <p className="text-xl">Frontend Web Developer</p>
          <p className="text-xl">UI Developer</p>
          <p className="text-xl">Building. Learning. Growing. Freelancing</p>
        </div>
      </div>

      <Technologies />
      <Contact />
    </section>
  );
}
