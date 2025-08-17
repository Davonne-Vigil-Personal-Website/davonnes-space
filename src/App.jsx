import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Image from "./components/Image";

function App() {
  // const davonneAnimated = "./images/animatedDavonne.PNG";
  return (
    <main className="bg-ourPink h-screen ">
      <Image image="/images/animatedDavonne.PNG" className="max-w-sm" />
      <Header />
      <AboutMe />
    </main>
  );
}

export default App;
