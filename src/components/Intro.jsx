import MyProjects from "./MyProjects";
import OurImages from "./OurImages";
import DevLife from "./DevLife";

export default function Intro() {
  return (
    <section className="flex flex-col gap-4" aria-label="Intro Section">
      <li className="ml-8 w-20" href="#" aria-label="Home">
        <a
          href="https://dvs-space.vercel.app/"
          className="w-20 h-20 border-2 bg-black text-pink-500 font-grav flex justify-center items-center text-center font- border-pink-400 rounded-full"
        >
          DV
        </a>
      </li>
      <OurImages />
      <div className="bg-pink-400 rounded p-2 text-center w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-none mx-auto">
        <div className="mx-auto">
          <p className="font-mon text-sm md:text-xl">
            Open for freelance projects. Building websites for small business.
            Book a call{" "}
            <a
              href="https://calendly.com/davonnejv/"
              className="text-pink-100 font-bold font-mon underline"
              aria-label="Book a call today on Calendly"
            >
              Today!
            </a>
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:gap-20">
        <DevLife />
        <MyProjects />
      </div>
    </section>
  );
}
