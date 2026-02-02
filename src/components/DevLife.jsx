import HisPurpose from "./HisPurpose";
import WithDevs from "./WithDevs";

export default function DevLife() {
  return (
    <section
      className="flex flex-col justify-center items-center gap-8 w-full"
      aria-label="Dev Life Section"
    >
      <h2 className="sr-only">Dev Life</h2>
      <div className="w-full max-w-4xl aspect-[4/3]">
        <iframe
          className="w-full h-full"
          src="https://www.youtube-nocookie.com/embed/Q-aCKjL0_TM"
          title="DevLife: YouTube video about developer life"
          aria-label="DevLife: YouTube video about developer life"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <HisPurpose />
      <WithDevs />
    </section>
  );
}
