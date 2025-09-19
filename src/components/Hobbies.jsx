export default function Hobbies() {
  return (
    <section className="mt-4" aria-label="Hobbies Video Section">
      <video
        width="600"
        autoPlay
        loop
        muted
        playsInline
        title="Cube animation video showing hobby"
        aria-label="Cube animation video showing hobby"
        onError={(e) => console.error("Video error:", e)}
        onLoadStart={() => console.log("Video loading started")}
        onCanPlay={() => console.log("Video can play")}
        className=" max-w-xs rounded-3xl shadow-lg shadow-black"
      >
        <source src="./images/cube.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
