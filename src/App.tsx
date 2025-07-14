import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="px-5 sm:px-8 py-4 md:py-6 lg:px-20 space-y-20">
        <Hero />
        <Projects />
      </main>
    </>
  );
}
