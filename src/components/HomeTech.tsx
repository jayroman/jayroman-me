import { site, telHref } from "@/lib/site";

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

const rates = [
  { price: "$125", label: "First hour on-site" },
  { price: "$95", label: "Each additional hour" },
  { price: "$75", label: "Per hour, remote help" },
];

export default function HomeTech() {
  return (
    <section id="home-tech" className="bg-mist py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="display text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
          Home tech that works whether you&apos;re here or not.
        </h2>
        <p className="text-slate text-lg leading-relaxed max-w-2xl mt-6">
          For full-time residents and second-home owners. I come to you, fix it, and make sure it
          stays fixed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-l-2 border-ink mt-14">
          {services.map((s) => (
            <div key={s.title} className="bg-paper border-r-2 border-b-2 border-ink p-8">
              <h3 className="display-sm text-2xl">{s.title}</h3>
              <p className="text-slate leading-relaxed mt-3">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="display text-3xl sm:text-4xl">Simple rates</h3>
          <p className="text-slate leading-relaxed mt-3 max-w-xl">
            No contracts, no surprise fees. I&apos;ll tell you what I think it will take before I start.
          </p>
          <dl className="mt-8 border-t-2 border-ink">
            {rates.map((r) => (
              <div key={r.label} className="flex items-baseline justify-between gap-6 border-b-2 border-ink py-5">
                <dt className="text-lg">{r.label}</dt>
                <dd className="display text-3xl sm:text-4xl">{r.price}</dd>
              </div>
            ))}
          </dl>
          <p className="text-slate text-sm mt-6 max-w-2xl">
            Need new wiring, security cameras, or an alarm system? North Carolina requires a licensed
            low-voltage or alarm contractor for those. I&apos;ll connect you with a good one.
          </p>
          <a
            href={telHref(site.phone)}
            className="inline-block mt-10 bg-ink hover:bg-ink-2 text-paper font-bold text-lg px-8 py-4"
          >
            Book a visit: {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
