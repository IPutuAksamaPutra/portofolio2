import Navbar from "@/app/components/layout/Navbar";
import Hero from "@/app/components/sections/Hero";
import About from "@/app/components/sections/About";
import Skills from "@/app/components/sections/Skills";
import Projects from "@/app/components/sections/Projects";
import Experience from "@/app/components/sections/Experience";
import Contact from "@/app/components/sections/Contact";
import Footer from "@/app/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}