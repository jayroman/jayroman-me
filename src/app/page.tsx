import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import WaysToWork from "@/components/WaysToWork";
import SoftwareYouOwn from "@/components/SoftwareYouOwn";
import Steps from "@/components/Steps";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { areaText } from "@/lib/site";

export default function Page() {
  return (
    <main>
      <Nav />
      <PageHero
        title="Local tech support for homes and businesses."
        intro={
          <>
            Networks, computers, smart devices, and the software you run on. Quick fixes, monthly
            support, and bigger projects from a full-time resident. Serving {areaText}.
          </>
        }
      />
      <Services />
      <WaysToWork />
      <SoftwareYouOwn />
      <Steps />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
