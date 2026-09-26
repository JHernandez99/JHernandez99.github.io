import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About"
import BackgroundOrbits from "@/components/BackgroundOrbits"; "../components/BackgroundOrbits"


export default function Home() {
  return (
    <main className=" relative bg-[#07090D] text-white min-h-screen px-6 md:px-16">


      {/*<BackgroundOrbits />*/}
      <Navbar />
      <Hero />
      <Projects />
      <About />

    </main>
  );
}

