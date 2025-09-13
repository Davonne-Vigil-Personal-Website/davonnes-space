export default function WhatIBring() {
  const WhatIOffer = [
    { offer: "Responsive Web Design", id: 1 },
    { offer: "Aim to generate business", id: 2 },
    { offer: "Branding and Design", id: 3 },
    { offer: "SEO Best Practices", id: 4 },
    { offer: "Modern Frontend", id: 5 },
    { offer: "Accessible Websites ", id: 6 },
  ];

  return (
    <section className="bg-white p-4 rounded-3xl mt-8">
      <h1 className="text-center font-grav text-xl mt-2">
        Lets Build Your Next Website
      </h1>

      <ul className="flex flex-col gap-2 ">
        <p className="mt-4 text-pink-400 font-grav">
          What I bring to each project:
        </p>
        {WhatIOffer.map((myOffer) => (
          <li className="font-semi-bold mt-2 text-xl">{myOffer.offer}</li>
        ))}
      </ul>
    </section>
  );
}
