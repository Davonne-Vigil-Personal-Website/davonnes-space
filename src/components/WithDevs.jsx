import Image from "./Image";

export default function WithDevs() {
  const habitQuest = "./images/habitQuest.webp";
  const ourSpace = "./images/ourSpace.png";

  return (
    <section
      className="bg-white rounded-2xl p-4 md:p-8 max-w-xs md:max-w-lg"
      aria-label="Working With Devs Section"
    >
      <div className="flex flex-col gap-4">
        <h2 className="font-grav text-2xl bg-black text-white p-2">
          Working With Devs
        </h2>
        <a
          href="https://habit-quest-collab.vercel.app/"
          aria-label="Visit Habit Quest collaborative project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            image={habitQuest}
            className="max-w-3xs mx-auto md:max-w-md border-black border-4 rounded-3xl"
            alt="Habit Quest collaborative project screenshot"
          />
        </a>

        <a
          href="https://our-space-omega.vercel.app/"
          aria-label="Visit Our Space collaborative project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            image={ourSpace}
            className="max-w-3xs mx-auto md:max-w-md border-black border-4 rounded-3xl"
            alt="Our Space collaborative project screenshot"
          />
        </a>
      </div>
    </section>
  );
}
