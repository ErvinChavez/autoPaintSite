import Hero from "@/components/Hero";
import StickyCTA from "@/components/StickyCTA";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="pb-24">
      <Hero />
      <Services />
      <Gallery />
      <Contact />
      <StickyCTA />

    </main>
  );
}