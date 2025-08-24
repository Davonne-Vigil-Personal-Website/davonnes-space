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

      <VideoPlayer />
    </div>
  );
}
