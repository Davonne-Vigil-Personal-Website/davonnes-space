import Image from "./Image";

export default function HisPurpose() {
  const notaryBusiness = "./images/notary.png";
  const techStyles = "./images/techStyles.png";

  return (
    <section
      className="mt-4 flex flex-col gap-8"
      aria-label="His Purpose Projects"
    >
      <a
        href="https://www.forhispurposenotaryservice.com/"
        aria-label="Visit For His Purpose Notary Service website"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          image={notaryBusiness}
          className="max-w-xs md:max-w-lg border-black border-4 rounded-3xl"
          alt="For His Purpose Notary Service logo"
        />
      </a>

      <a
        href="https://tech-styles.vercel.app/"
        aria-label="Visit Tech Styles website"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          image={techStyles}
          className="max-w-xs md:max-w-lg border-black border-4 rounded-3xl"
          alt="Tech Styles logo"
        />
      </a>
    </section>
  );
}
