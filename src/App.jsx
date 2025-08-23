import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Image from "./components/Image";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const davonneAnimated = "./images/animatedDavonne.PNG";
  return (
    <main className="min-h-screen bg-pink-200">
      <div className="flex flex-col  justify-center items-center w-full">
        <div className="flex flex-col lg:flex-row gap-4 mt-10 ">
          <div className="flex flex-col gap-4">
            <Image
              image={davonneAnimated}
              className="w-68 rounded-3xl shadow-lg drop-shadow-2xl"
            />
            <AboutMe />
          </div>
          <Header />

          <VideoPlayer />
        </div>
      </div>
    </main>
  );
}

export default App;
