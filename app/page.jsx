import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}
