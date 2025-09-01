import Image from "./Image";

export default function HisPurpose() {
  const notaryBusiness = "./images/notary.png";

  const goToSite = () => {};
  return (
    <section className="mt-4">
      <button onClick={goToSite}>
        <Image
          image={notaryBusiness}
          className="max-w-xs md:max-w-lg border-black border-4 rounded-3xl"
        />
      </button>
    </section>
  );
}
