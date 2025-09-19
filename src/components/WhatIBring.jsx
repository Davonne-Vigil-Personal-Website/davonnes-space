export default function WhatIBring() {
  const WhatIOffer = [
    { offer: "Responsive Web Design", id: 1 },
    { offer: "Aim to generate business", id: 2 },
    { offer: "Branding and Design", id: 3 },
    { offer: "SEO Best Practices", id: 4 },
    { offer: "Modern UI", id: 5 },
    { offer: "Accessible Websites ", id: 6 },
  ];

  return (
    <section
      className="max-w-xs md:max-w-md bg-white p-4 rounded-3xl mt-8 "
      aria-label="What I Bring Section"
    >
      <h2 className="text-center font-grav text-xl mt-2">
        Let's Build Your Next Website
      </h2>
      <p className="mt-4 text-pink-400 font-grav">
        What I bring to each project:
      </p>
      <ul className="flex flex-col gap-2 ">
        {WhatIOffer.map((myOffer, id) => (
          <li key={id} className="font-semi-bold mt-2 text-xl font-mon">
            {myOffer.offer}
          </li>
        ))}
      </ul>
    </section>
  );
}
