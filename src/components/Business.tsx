const pains = [
  "Calls you miss while you're out on a job",
  "Quotes that go out late, and leads that go cold",
  "Customers who didn't hear back fast enough and went with someone else",
  "Evenings buried in paperwork instead of time with your family",
  "Invoices sitting unpaid because nobody followed up",
];

const services = [
  {
    title: "Find the waste first",
    description:
      "I learn how you actually work, map where time and money are leaking out, and tell you straight what's worth fixing and in what order.",
  },
  {
    title: "Automate the repeat work",
    description:
      "Scheduling, follow-ups, invoicing, reminders, and data entry handled automatically, using AI where it helps and simpler fixes where it doesn't.",
  },
  {
    title: "Never drop a lead",
    description:
      "Automatic follow-up, answers to common questions, and lead capture, so you stay in the running even when you're on a job site.",
  },
  {
    title: "Tools built for how you work",
    description:
      "When off-the-shelf software doesn't fit your operation, I build something that does.",
  },
];

const steps = [
  {
    title: "We talk",
    description:
      "Thirty minutes. You tell me about your business and I ask a lot of questions. No pitch, no canned demo.",
  },
  {
    title: "You get a straight answer",
    description:
      "What I'd build, what it costs, and what to expect. If it's not worth doing, I'll tell you that too.",
  },
  {
    title: "I build it, you run it",
    description:
      "I handle the technical work. You get back to running your business with systems that actually work.",
  },
];

export default function Business() {
  return (
    <section id="business" className="bg-paper py-20 sm:py-28 border-t-2 border-ink">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="display text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
          Stop losing time and money to busywork.
        </h2>
        <p className="text-slate text-lg leading-relaxed max-w-2xl mt-6">
          For local and small businesses. The biggest gains usually aren&apos;t complicated, just
          things nobody&apos;s gotten around to fixing.
        </p>

        <ul className="mt-12 max-w-3xl">
          {pains.map((p) => (
            <li key={p} className="border-b-2 border-mist py-4 text-lg flex gap-4">
              <span aria-hidden className="mt-2.5 h-2.5 w-2.5 shrink-0 bg-amber" />
              {p}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-l-2 border-ink mt-16">
          {services.map((s) => (
            <div key={s.title} className="border-r-2 border-b-2 border-ink p-8">
              <h3 className="display-sm text-2xl">{s.title}</h3>
              <p className="text-slate leading-relaxed mt-3">{s.description}</p>
            </div>
          ))}
        </div>

        <h3 className="display text-3xl sm:text-4xl mt-20">How a project works</h3>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-8 bg-ink text-paper">
          {steps.map((s, i) => (
            <li key={s.title} className="p-8 border-ink-2 md:border-l-2 first:border-l-0 border-t-2 md:border-t-0 first:border-t-0">
              <span className="display text-5xl text-amber">{i + 1}</span>
              <h4 className="display-sm text-xl mt-4">{s.title}</h4>
              <p className="text-mist/80 leading-relaxed mt-3">{s.description}</p>
            </li>
          ))}
        </ol>

        <a href="#contact" className="inline-block mt-10 bg-amber hover:bg-amber-dark text-ink font-bold text-lg px-8 py-4">
          Book a free 30-minute call
        </a>
      </div>
    </section>
  );
}
