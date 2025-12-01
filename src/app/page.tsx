import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { WorkCode } from "@/components/WorkCode";
import { PhysicsMaths } from "@/components/PhysicsMaths";
import { Playground } from "@/components/Playground";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { CompetitiveProgramming } from "@/components/CompetitiveProgramming";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground overflow-x-hidden relative z-10">
      <Navbar />
      <PhysicsMaths />

      <section id="hero">
        <Hero />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <CompetitiveProgramming />

      <section id="workcode">
        <WorkCode />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="playground">
        <Playground />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
