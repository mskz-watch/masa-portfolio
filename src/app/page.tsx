import Hero from "@/components/sections/Hero";
import Works from "@/components/sections/Works";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <Works />
      <About />
      <Contact />
    </main>
  );
}
