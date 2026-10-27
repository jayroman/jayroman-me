const steps = [
  {
    title: "We talk",
    description:
      "Thirty minutes, free. You tell me what's going on and I ask a lot of questions. No pitch, no canned demo.",
  },
  {
    title: "You get a straight answer",
    description:
      "What I'd do, the fixed price, and what to expect. If it's not worth doing, I'll tell you that too.",
  },
  {
    title: "I build it, you use it",
    description:
      "I handle the technical work and show you how it runs. Add a support plan if you want me to keep it running.",
  },
];

export default function Steps() {
  return (
    <section className="bg-mist py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="display text-3xl sm:text-4xl">How a project works</h2>
        <ol className="grid grid-cols-1 md:grid-cols-3 mt-8 bg-navy text-paper">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="p-6 sm:p-7 border-paper/20 border-t-2 first:border-t-0 md:border-t-0 md:border-l-2 md:first:border-l-0"
            >
              <span className="display text-5xl text-accent">{i + 1}</span>
              <h3 className="display-sm text-xl mt-4">{s.title}</h3>
              <p className="text-paper/85 leading-relaxed mt-3">{s.description}</p>
            </li>
          ))}
        </ol>
        <a href="#contact" className="inline-block mt-8 bg-navy hover:bg-navy-2 text-paper font-bold text-lg px-8 py-4">
          Book a free 30-minute call
        </a>
      </div>
    </section>
  );
}
