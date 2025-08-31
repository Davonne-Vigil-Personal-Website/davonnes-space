import YouTube from "react-youtube";
import HisPurpose from "./HisPurpose";
import WithDevs from "./WithDevs";

export default function DevLife() {
  const opts = {
    height: "400",
    width: "400",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <YouTube videoId="ZDQsvckf2b4" opts={opts} />
      <HisPurpose />
      <WithDevs />
    </div>
  );
}
