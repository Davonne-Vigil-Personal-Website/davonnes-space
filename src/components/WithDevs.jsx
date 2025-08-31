import Image from "./Image";

export default function HisPurpose() {
  const habitQuest = "./images/habitQuest.png";

  const goToSite = () => {};
  return (
    <section className="mt-4">
      <button onClick={goToSite}>
        <Image
          image={habitQuest}
          className="max-w-sm md:max-w-lg border-black border-4 rounded-3xl"
        />
      </button>
    </section>
  );
}
