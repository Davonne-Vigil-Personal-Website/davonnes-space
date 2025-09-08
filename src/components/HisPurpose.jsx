import Image from "./Image";

export default function HisPurpose() {
  const notaryBusiness = "./images/notary.png";
  const techStyles = "./images/techStyles.png";

  return (
    <section className="mt-4 flex flex-col gap-8">
      <a href="https://www.forhispurposenotaryservice.com/">
        <Image
          image={notaryBusiness}
          className="max-w-xs md:max-w-lg border-black border-4 rounded-3xl"
        />
      </a>

      <a href="https://tech-styles.vercel.app/">
        <Image
          image={techStyles}
          className="max-w-xs md:max-w-lg border-black border-4 rounded-3xl"
        />
      </a>
    </section>
  );
}
