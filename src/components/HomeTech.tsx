import { site } from "@/lib/site";

const problems = [
  "Wi-Fi that won't reach the back bedroom — or quits after every storm",
  "A TV, Sonos, or streaming setup that stopped working and nobody knows why",
  "Smart thermostats and locks that are acting up or were never set up right",
  "A house that sits empty for weeks with no idea if it stayed warm and dry",
];

const services = [
  {
    label: "Wi-Fi & Networks",
    title: "Coverage in every room, and a network that comes back on its own.",
    description:
      "Mesh Wi-Fi, router setup, and fixes for the dead spots and drop-outs that mountain homes are known for. Set up so it recovers after outages without anyone on site.",
  },
  {
    label: "TV, Audio & Devices",
    title: "Everything working together, with one remote you understand.",
    description:
      "TVs, streaming boxes, Sonos, printers, and the pile of devices that came with the house. Troubleshooting, setup, and a quick walkthrough so it stays easy.",
  },
  {
    label: "Smart Home",
    title: "Thermostats, locks, and lighting that do what you expect.",
    description:
      "Setup and fixes for smart thermostats, locks, lighting, and hubs — configured so you can check on things from wherever you are.",
  },
  {
    label: "Away-Home Monitoring",
    title: "Know about a leak or a freeze before it becomes a disaster.",
    description:
      "Leak, temperature, and power-loss sensors that alert you while you're away, plus a pre-arrival check so the Wi-Fi, TV, and thermostat are ready when you get here.",
  },
];

export default function HomeTech() {
  return (
    <>
      <section id="home-tech" className="bg-parchment-100 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-linen-500 text-sm font-semibold uppercase tracking-wider">For your home</span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-4">
            <div className="lg:col-span-4">
              <h2 className="font-display text-3xl text-cream-900 leading-snug">
                Home tech that just works — whether you&apos;re here or not.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <ul className="space-y-5">
                {problems.map((p, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-linen-500 mt-0.5 shrink-0 text-lg">→</span>
                    <span className="text-cream-800 text-lg leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="divide-y divide-parchment-300 mt-16 border-t border-parchment-300">
            {services.map((s, i) => (
              <div key={i} className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-3">
                  <span className="text-linen-500 text-sm font-semibold uppercase tracking-wider">{s.label}</span>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="font-display text-xl text-cream-900 mb-3 leading-snug">{s.title}</h3>
                  <p className="text-cream-700 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-900 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl text-cream-200 mb-4">Simple, upfront rates.</h2>
              <p className="text-cream-400 leading-relaxed">
                No contracts, no surprise fees. I&apos;ll tell you what I think it&apos;ll take before
                I start. Serving {site.area.join(", ")}.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { price: "$125", unit: "first hour on-site", note: "Most visits are done in an hour" },
                { price: "$95", unit: "each hour after", note: "Billed in half-hour steps" },
                { price: "$75", unit: "per hour remote", note: "Phone or screen-share help" },
              ].map((r) => (
                <div key={r.unit} className="rounded-xl border border-forest-700 bg-forest-950 p-6">
                  <p className="font-display text-4xl text-cream-200">{r.price}</p>
                  <p className="text-linen-400 text-sm font-semibold mt-1">{r.unit}</p>
                  <p className="text-cream-600 text-sm mt-3">{r.note}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-cream-600 text-sm mt-10 max-w-3xl">
            Need new wiring, security cameras, or an alarm system? Those require a licensed
            low-voltage or alarm contractor in North Carolina — I&apos;ll connect you with a good one.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-linen-400 hover:bg-linen-500 text-forest-950 font-bold px-10 py-4 rounded-lg text-base transition-colors mt-10"
          >
            Book a Visit
          </a>
        </div>
      </section>
    </>
  );
}
