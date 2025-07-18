import Lenis from "lenis";
import { useEffect } from "react";
import Experience from "./components/experience";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Stack from "./components/stack";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Navbar />
      <main className="px-4 sm:px-8 py-4 md:py-6 lg:px-20 space-y-20">
        <Hero />
        <Projects />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <Footer />
      {/* TODO FOOTER */}
    </>
  );
}
