import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HomeTech from "@/components/HomeTech";
import Business from "@/components/Business";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <HomeTech />
      <Business />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
