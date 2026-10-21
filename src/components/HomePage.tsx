import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import HomeTech from "@/components/HomeTech";
import About from "@/components/About";
import BusinessTeaser from "@/components/BusinessTeaser";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";
import { areaText, paths } from "@/lib/site";

export const homeMetadata = {
  title: "Jay Roman | Home Tech Help | Cashiers, Sapphire, Highlands NC",
  description:
    "Year-round, local tech help for mountain homes: Wi-Fi, TVs, speakers, smart devices, and alerts while you're away. Serving Cashiers, Sapphire, Highlands, and surrounding areas.",
};

export default function HomePage() {
  return (
    <main>
      <Nav current="home" />
      <PageHero
        title="Home tech help on the Plateau."
        intro={
          <>
            Wi-Fi that drops, a TV that won&apos;t cooperate, or a house that sits empty for weeks.
            I&apos;m a full-time resident who comes to you and fixes it. Serving {areaText}.
          </>
        }
        aside={
          <>
            Run a local business?{" "}
            <Link href={paths.business} className="font-bold underline underline-offset-4 hover:text-blue-light">
              See business services
            </Link>
          </>
        }
      />
      <HomeTech />
      <BusinessTeaser />
      <About focus="home" />
      <Contact defaultTopic="My home" />
      <Footer />
    </main>
  );
}
