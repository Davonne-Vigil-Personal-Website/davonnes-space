import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Image from "./components/Image";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const davonneAnimated = "./images/animatedDavonne.PNG";
  return (
    <main className="min-h-screen bg-pink-200">
      <div className="flex flex-col min-h-screen justify-center items-center">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex flex-col mt-8">
            <Image
              image={davonneAnimated}
              className="max-w-xs md:max-w-sm rounded-3xl shadow-lg drop-shadow-2xl"
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
