import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";


export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Impact />
      <Skills />
      <Contact />
    </main>
  );
}
