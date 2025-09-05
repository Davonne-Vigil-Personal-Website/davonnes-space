import HisPurpose from "./HisPurpose";
import WithDevs from "./WithDevs";

export default function DevLife() {
  return (
    <div className="flex flex-col justify-center items-center gap-8  w-full">
      <div className="w-full max-w-4xl aspect-[4/3]">
        <iframe
          className="w-full h-full"
          src="https://www.youtube-nocookie.com/embed/ZDQsvckf2b4"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <HisPurpose />
      <WithDevs />
    </div>
  );
}
