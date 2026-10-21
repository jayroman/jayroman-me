import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site, paths, telHref, areaText } from "@/lib/site";

export default function SplitLanding() {
  return (
    <main>
      <Nav />
      <header className="bg-blue text-paper">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16">
          <h1 className="display text-[1.85rem] sm:text-5xl lg:text-6xl max-w-4xl">
            Tech help on the Plateau.
          </h1>
          <p className="text-paper/85 text-lg sm:text-xl leading-relaxed max-w-2xl mt-8">
            I&apos;m Jay, a full-time resident with years in software. I fix the tech in mountain
            homes and build systems that save local businesses time. Serving {areaText}.
          </p>
          <a href={telHref(site.phone)} className="inline-block bg-paper hover:bg-blue-light text-ink px-7 py-5 mt-10">
            <span className="block text-sm font-semibold text-slate">Call or text</span>
            <span className="display-sm block text-2xl sm:text-3xl text-blue-dark">{site.phone}</span>
          </a>
        </div>
      </header>

      <section className="bg-mist py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="display text-2xl sm:text-3xl">What can I help with?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Link href={paths.home} className="block bg-paper border-2 border-blue p-8 sm:p-10 hover:bg-blue-light">
              <h3 className="display text-2xl sm:text-3xl text-blue-dark">My home</h3>
              <p className="mt-4 text-lg leading-relaxed text-ink/85">
                Wi-Fi, TVs, speakers, smart devices, and alerts for homes that sit empty. For
                full-time residents and second-home owners.
              </p>
              <span className="inline-block mt-6 font-bold text-blue-dark underline underline-offset-4">
                See home tech help
              </span>
            </Link>
            <Link href={paths.business} className="block bg-paper border-2 border-blue p-8 sm:p-10 hover:bg-blue-light">
              <h3 className="display text-2xl sm:text-3xl text-blue-dark">My business</h3>
              <p className="mt-4 text-lg leading-relaxed text-ink/85">
                Missed calls, late quotes, and paperwork that eats your evenings. Practical systems
                that take busywork off your plate.
              </p>
              <span className="inline-block mt-6 font-bold text-blue-dark underline underline-offset-4">
                See business systems
              </span>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
