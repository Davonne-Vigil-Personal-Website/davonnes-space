import YouTube from "react-youtube";

export default function VideoPlayer() {
  const opts = {
    height: "375",
    width: "375",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="flex justify-center items-center w-4 mx-auto">
      <YouTube videoId="ZDQsvckf2b4" opts={opts} />
    </div>
  );
}
