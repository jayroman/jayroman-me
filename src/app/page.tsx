import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HomeTech from "@/components/HomeTech";
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <HomeTech />
      <PainPoints />
      <Services />
      <HowItWorks />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
