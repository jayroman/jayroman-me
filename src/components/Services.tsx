const services = [
  {
    title: "Wi-Fi and networks",
    description:
      "Dead spots, drop-outs, and networks that don't come back after an outage. In the house or across the office.",
  },
  {
    title: "Computers, phones, and printers",
    description:
      "New devices set up, slow ones sorted out, and printers and scanners that finally connect.",
  },
  {
    title: "TVs, speakers, and displays",
    description:
      "Living room setups, streaming, and lobby or conference room screens, all connected and easy to use.",
  },
  {
    title: "Smart devices",
    description:
      "Thermostats, locks, and lighting set up properly and controllable from your phone.",
  },
  {
    title: "Alerts while you're away",
    description:
      "Leak, temperature, and power-loss sensors for second homes, rentals, and offices that sit empty.",
  },
  {
    title: "Email, accounts, and software",
    description:
      "Shared accounts, email that won't sync, and the apps your household or business runs on.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-mist py-12 sm:py-16 scroll-mt-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="display text-3xl sm:text-4xl">What I help with</h2>
        <p className="text-ink/85 text-lg leading-relaxed mt-5 max-w-2xl">
          The same hardware, software, network, and smart device support for homes and businesses.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t-2 border-l-2 border-blue mt-8">
          {services.map((s) => (
            <div key={s.title} className="bg-paper border-r-2 border-b-2 border-blue p-6 sm:p-7">
              <h3 className="display-sm text-lg sm:text-xl text-blue-dark">{s.title}</h3>
              <p className="text-slate leading-relaxed mt-3">{s.description}</p>
            </div>
          ))}
        </div>
        <p className="text-slate text-sm mt-6 max-w-3xl">
          Need new wiring, security cameras, or an alarm system? North Carolina requires a licensed
          low-voltage or alarm contractor for those. I&apos;ll connect you with a good one.
        </p>
      </div>
    </section>
  );
}
