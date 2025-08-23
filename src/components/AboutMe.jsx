import React from "react";
import Technologies from "./Technologies";

export default function AboutMe() {
  return (
    <section className="flex flex-col gap-2">
      <div className="bg-pink-300 mt-8 mr-20 rounded-xl p-4">
        <h1 className="font-grav text-3xl">Davonne Vigil</h1>
        <p className="text-xl">Frontend Developer | UI Developer</p>
        <p className="text-xl">Building. Learning. Growing. Freelancing</p>
      </div>

      <Technologies />
    </section>
  );
}
