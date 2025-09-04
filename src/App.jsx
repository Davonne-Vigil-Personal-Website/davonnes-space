import "./App.css";
import AboutMe from "./components/AboutMe";
import Intro from "./components/Intro";
import Image from "./components/Image";
import Footer from "./components/Footer";

function App() {
  const davonneAnimated = "./images/animatedDavonne.PNG";
  return (
    <main className="min-h-screen bg-pink-200">
      <div className="flex flex-col justify-center items-center p-4">
        <div className=" max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-10 mt-10 ">
            <div className="flex flex-col gap-4">
              <Image
                image={davonneAnimated}
                className="w-68 rounded-3xl mx-auto shadow-lg drop-shadow-2xl"
              />
              <AboutMe />
            </div>
            <Intro />
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
