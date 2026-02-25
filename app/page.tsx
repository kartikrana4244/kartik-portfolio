import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";
import { Services } from "@/components/Services";
import { Favourites } from "@/components/Favourites";
import { Contact } from "@/components/Contact";
import { HireMe } from "@/components/HireMe";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="pb-10">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Services />
      <Favourites />
      <Contact />
      <HireMe />
      <Footer />
    </main>
  );
}

