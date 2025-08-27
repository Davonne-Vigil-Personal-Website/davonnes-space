import OurImages from "./OurImages";
import VideoPlayer from "./VideoPlayer";

export default function Intro() {
  return (
    <div className="flex flex-col gap-4">
      <button className="ml-8">
        <img
          src="./images/logo.PNG"
          className="w-20 h-20 border-2 border-pink-400 rounded-full"
        />
      </button>
      <OurImages />
      <div className="bg-pink-400 p-2 rounded max-w-xs mx-auto text-center sm:max-w-md md:max-w-lg lg:max-w-full">
        <p className="font-gra text-sm font-bold md:text-xl">
          Open for freelance projects. Building websites for small business.
          Book a call{" "}
          <a
            href="https://calendly.com/davonnejv/"
            className="text-pink-100 underline"
          >
            Today!
          </a>
        </p>
      </div>

      <VideoPlayer />
    </div>
  );
}
