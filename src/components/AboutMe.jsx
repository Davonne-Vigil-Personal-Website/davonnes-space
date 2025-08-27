import React from "react";
import Technologies from "./Technologies";

export default function AboutMe() {
  return (
    <section className="flex flex-col justify-center items-center gap-4">
      <div className="bg-pink-300 mt-8 rounded-xl p-4 w-68 md: flex flex-col gap-4">
        <h1 className="font-grav text-2xl">Davonne Vigil</h1>
        <p className="text-xl">Frontend Web Developer | UI Developer</p>
        <p className="text-xl">Building. Learning. Growing. Freelancing</p>
      </div>

      <Technologies />
    </section>
  );
}
