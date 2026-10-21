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
    title: "Software you own",
    description:
      "When a subscription platform doesn't fit, or costs too much for what you use, I build a tool around how you work. It's yours.",
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

export function BusinessPains() {
  return (
      <section className="bg-paper py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="display text-3xl sm:text-4xl">Sound familiar?</h2>
          <ul className="mt-8 max-w-3xl">
            {pains.map((p) => (
              <li key={p} className="border-b-2 border-mist py-4 text-lg flex gap-4">
                <span aria-hidden className="mt-2.5 h-2.5 w-2.5 shrink-0 bg-blue" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>
  );
}

export default function Business() {
  return (
      <section className="bg-paper py-12 sm:py-16 border-t-2 border-mist">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="display text-3xl sm:text-4xl">How I help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-l-2 border-blue mt-8">
            {services.map((s) => (
              <div key={s.title} className="bg-paper border-r-2 border-b-2 border-blue p-6 sm:p-7">
                <h3 className="display-sm text-xl sm:text-2xl text-blue-dark">{s.title}</h3>
                <p className="text-slate leading-relaxed mt-3">{s.description}</p>
              </div>
            ))}
          </div>

          <h2 className="display text-3xl sm:text-4xl mt-12">How a project works</h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 mt-8 bg-blue text-paper">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="p-6 sm:p-7 border-paper/20 border-t-2 first:border-t-0 md:border-t-0 md:border-l-2 md:first:border-l-0"
              >
                <span className="display text-5xl text-blue-light">{i + 1}</span>
                <h3 className="display-sm text-xl mt-4">{s.title}</h3>
                <p className="text-paper/85 leading-relaxed mt-3">{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
  );
}
