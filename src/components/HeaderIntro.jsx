import VideoPlayer from "./VideoPlayer";

export default function HeaderIntro() {
  return (
    <div className="flex flex-col gap-8">
      <button>
        <img
          src="./images/logo.png"
          className="w-20 border-2 border-pink-400 rounded-full"
        />
      </button>
      <p className="bg-pink-400 w-96 md:w-96 lg:w-full p-1 font-grav rounded">
        Open for freelance projects. Building websites for small business. Book
        a call{" "}
        <a
          href="https://calendly.com/davonnejv/"
          className="text-pink-100 underline"
        >
          Today!
        </a>
      </p>

      <VideoPlayer />
    </div>
  );
}
