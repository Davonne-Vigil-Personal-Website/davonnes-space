import Image from "./Image";

export default function HisPurpose() {
  const habitQuest = "./images/habitQuest.png";
  const ourSpace = "./images/ourSpace.png";

  const goToSite = () => {};
  return (
    <section className="bg-white rounded-2xl p-4 max-w-xs md:max-w-lg">
      <div className="flex flex-col gap-9">
        <h1 className="font-grav text-2xl bg-black text-white p-2">
          Working With Devs
        </h1>
        <button onClick={goToSite}>
          <Image
            image={habitQuest}
            className="max-w-2xs md:max-w-md border-black border-4 rounded-3xl"
          />
        </button>

        <button onClick="">
          <Image
            image={ourSpace}
            className="max-w-2xs md:max-w-md border-black border-4 rounded-3xl"
          />
        </button>
      </div>
    </section>
  );
}
