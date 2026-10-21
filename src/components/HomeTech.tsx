import { site, telHref, rates } from "@/lib/site";

const services = [
  {
    title: "Wi-Fi and networks",
    description:
      "Coverage in every room and a network that comes back on its own after an outage. Dead spots and drop-outs fixed for good.",
  },
  {
    title: "TVs, speakers, and streaming",
    description:
      "Everything connected and working together, plus a quick walkthrough so it stays easy for you and your guests.",
  },
  {
    title: "Thermostats, locks, and lighting",
    description:
      "Smart devices set up properly and controllable from your phone, so you can check on things from wherever you are.",
  },
  {
    title: "Alerts while you're away",
    description:
      "Leak, temperature, and power-loss sensors that warn you before a small problem becomes a big one, plus a tech check before you arrive.",
  },
];

export default function HomeTech() {
  return (
    <>
      <section className="bg-mist py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="display text-3xl sm:text-4xl">What I help with</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-l-2 border-blue mt-8">
            {services.map((s) => (
              <div key={s.title} className="bg-paper border-r-2 border-b-2 border-blue p-6 sm:p-7">
                <h3 className="display-sm text-xl sm:text-2xl text-blue-dark">{s.title}</h3>
                <p className="text-slate leading-relaxed mt-3">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          <div className="lg:col-span-5">
            <h2 className="display text-3xl sm:text-4xl">Simple rates</h2>
            <p className="text-slate leading-relaxed mt-4">
              No contracts, no surprise fees. I&apos;ll tell you what I think it will take before I
              start. Outside the Plateau? Ask. I travel to surrounding areas too.
            </p>
          </div>
          <div className="lg:col-span-7">
            <dl className="border-t-2 border-blue">
              {rates.map((r) => (
                <div key={r.label} className="flex items-baseline justify-between gap-6 border-b-2 border-blue py-5">
                  <dt className="text-lg">{r.label}</dt>
                  <dd className="display text-3xl sm:text-4xl text-blue-dark">{r.price}</dd>
                </div>
              ))}
            </dl>
            <p className="text-slate text-sm mt-6">
              Need new wiring, security cameras, or an alarm system? North Carolina requires a
              licensed low-voltage or alarm contractor for those. I&apos;ll connect you with a good one.
            </p>
            <a
              href={telHref(site.phone)}
              className="inline-block mt-8 bg-blue hover:bg-blue-dark text-paper font-bold text-lg px-8 py-4"
            >
              Book a visit: {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
