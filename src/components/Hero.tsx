import { site, telHref, areaText } from "@/lib/site";

export default function Hero() {
  return (
    <header className="bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-0">
        <h1 className="display text-[1.85rem] sm:text-5xl lg:text-6xl max-w-4xl">
          Tech help for homes and businesses on the Plateau.
        </h1>
        <p className="text-mist/80 text-lg sm:text-xl leading-relaxed max-w-2xl mt-8">
          I&apos;m a full-time resident with years in software. I keep the tech in mountain homes
          working and help local businesses get their time back. Serving {areaText}.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href={telHref(site.phone)}
            className="bg-amber hover:bg-amber-dark text-ink px-7 py-5 border-2 border-amber"
          >
            <span className="block text-sm font-semibold">Call or text</span>
            <span className="display-sm block text-2xl sm:text-3xl">{site.phone}</span>
          </a>
          <a
            href="#contact"
            className="flex items-center px-7 py-5 border-2 border-paper/40 hover:border-paper font-semibold text-lg"
          >
            Send a message
          </a>
        </div>
      </div>

      {/* Two lanes as solid slabs */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <a href="#home-tech" className="block bg-amber text-ink p-8 sm:p-10 hover:bg-amber-dark">
            <h2 className="display text-2xl sm:text-3xl">For your home</h2>
            <p className="mt-4 text-lg leading-relaxed max-w-md">
              Wi-Fi, TVs, speakers, smart devices, and alerts for homes that sit empty. Fixed and
              working, whether you&apos;re here or not.
            </p>
            <span className="inline-block mt-6 font-bold underline underline-offset-4">See home services</span>
          </a>
          <a href="#business" className="block bg-paper text-ink p-8 sm:p-10 hover:bg-mist">
            <h2 className="display text-2xl sm:text-3xl">For your business</h2>
            <p className="mt-4 text-lg leading-relaxed max-w-md">
              Missed calls, late quotes, and paperwork that eats your evenings. Practical systems
              that take busywork off your plate.
            </p>
            <span className="inline-block mt-6 font-bold underline underline-offset-4">See business services</span>
          </a>
        </div>
      </div>
    </header>
  );
}
