import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Image from "./components/Image";

function App() {
  const davonneAnimated = "./images/animatedDavonne.PNG";
  return (
    <main className="bg-ourPink min-h-screen">
      <div className="flex flex-col min-h-screen justify-center items-center">
        <div className="flex flex-col lg:flex-row gap-10">
          <Image
            image={davonneAnimated}
            className="max-w-xs md:max-w-sm rounded-3xl"
          />
          <Header />
        </div>
        <AboutMe />
      </div>
    </main>
  );
}

export default App;
