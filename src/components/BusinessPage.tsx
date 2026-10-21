import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import Business from "@/components/Business";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { areaText } from "@/lib/site";

export const businessMetadata = {
  title: "Jay Roman | Small Business Systems | Cashiers, Sapphire, Highlands NC",
  description:
    "Practical systems that save local businesses time and money: automated follow-up, scheduling, invoicing, and custom tools. Serving Cashiers, Sapphire, Highlands, and surrounding areas.",
};

export default function BusinessPage() {
  return (
    <main>
      <Nav current="business" />
      <PageHero
        title="Stop losing time and money to busywork."
        intro={
          <>
            Missed calls, late quotes, and paperwork that eats your evenings. I build practical
            systems that take it off your plate. For local businesses in {areaText}.
          </>
        }
        messageLabel="Book a free 30-minute call"
      />
      <Business />
      <About focus="business" />
      <Contact defaultTopic="My business" />
      <Footer />
    </main>
  );
}
