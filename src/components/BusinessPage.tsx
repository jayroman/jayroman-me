import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import Business, { BusinessPains } from "@/components/Business";
import SoftwareYouOwn from "@/components/SoftwareYouOwn";
import About from "@/components/About";
import HomeTeaser from "@/components/HomeTeaser";
import Link from "next/link";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { areaText, paths } from "@/lib/site";

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
            Missed calls, late quotes, paperwork that eats your evenings, and software subscriptions
            you only half use. I build practical systems, and custom tools you own. For local
            businesses in {areaText}.
          </>
        }
        messageLabel="Book a free 30-minute call"
        aside={
          <>
            Need tech help at home?{" "}
            <Link href={paths.home} className="font-bold underline underline-offset-4 hover:text-blue-light">
              See home tech help
            </Link>
          </>
        }
      />
      <BusinessPains />
      <SoftwareYouOwn />
      <Business />
      <HomeTeaser />
      <About focus="business" />
      <Contact defaultTopic="My business" />
      <Footer />
    </main>
  );
}
