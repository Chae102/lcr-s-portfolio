import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Nav } from "../components/Nav";
import { Projects } from "../components/Projects";
import { TechnicalSkills } from "../components/TechnicalSkills";

export function PortfolioPage() {
  return (
    <>
      <main>
        <Hero />
        <Nav />
        <Experience />
        <Projects />
        <TechnicalSkills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
