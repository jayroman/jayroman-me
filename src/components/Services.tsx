const services = [
  {
    label: "Efficiency Consulting",
    title: "We find the waste before we touch anything.",
    description:
      "Every engagement starts the same way: we learn how you actually work, not how you think you work. We map where time and money are leaking out, then tell you straight what's worth fixing and in what order. You get a clear plan — not a list of things to buy.",
  },
  {
    label: "Process Automation",
    title: "The tasks you do on repeat shouldn't require a human.",
    description:
      "Scheduling, follow-ups, invoicing, reminders, data entry — the stuff that fills your evenings. We automate it using the right tools for the job, which often means AI, sometimes means a simpler fix. Either way, you get the time back.",
  },
  {
    label: "Customer Communications",
    title: "Never let a lead fall through the cracks again.",
    description:
      "Customers go with whoever responds first. We set up systems that follow up automatically, answer common questions, collect leads, and manage your reputation — so you stay in the running even when you're on a job site.",
  },
  {
    label: "Custom Tools",
    title: "Sometimes you need something built for how you actually work.",
    description:
      "Off-the-shelf software is built for the average business. If your operation doesn't fit the mold, we build something that does — using modern tools including AI where it makes the most sense, simpler solutions where it doesn't.",
  },
];

export default function Services() {
  return (
    <section id="business-services" className="bg-parchment-50 py-24 border-t border-parchment-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl text-cream-900 mb-2">How I help businesses</h2>
        <p className="text-cream-700 mb-12">Four things. Done well.</p>

        <div className="divide-y divide-parchment-300">
          {services.map((service, i) => (
            <div key={i} className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-3">
                <span className="text-linen-500 text-sm font-semibold uppercase tracking-wider">
                  {service.label}
                </span>
              </div>
              <div className="lg:col-span-9">
                <h3 className="font-display text-xl text-cream-900 mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-cream-700 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
