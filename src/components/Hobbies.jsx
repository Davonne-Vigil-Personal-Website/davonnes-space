export default function Hobbies() {
  return (
    <section className="">
      <video
        width="600"
        autoPlay
        loop
        muted
        playsInline
        onError={(e) => console.error("Video error:", e)}
        onLoadStart={() => console.log("Video loading started")}
        onCanPlay={() => console.log("Video can play")}
        className="mt-8 max-w-sm rounded-3xl shadow-lg shadow-black"
      >
        <source src="./images/cube.mp4" type="video/mp4"></source>
      </video>
    </section>
  );
}
