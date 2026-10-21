const steps = [
  {
    number: "01",
    title: "We talk.",
    description:
      "Thirty minutes. You tell me about your business, I ask a lot of questions. No pitch deck, no canned demo. Just an honest conversation about what's slowing you down.",
  },
  {
    number: "02",
    title: "You get a straight answer.",
    description:
      "Here's what we'd build, what it costs, and what to expect. If it's not worth doing for your business, I'll tell you that too. No pressure, no runaround.",
  },
  {
    number: "03",
    title: "We build it. You run it.",
    description:
      "We handle all the technical work. You get back to running your business — with systems that actually work instead of piles of things you were meaning to get to.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-forest-900 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl text-cream-200 mb-16">How a business project works</h2>

        <div className="space-y-14">
          {steps.map((step, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
              <div className="lg:col-span-1">
                <span className="font-display text-5xl text-linen-400/30 leading-none select-none">
                  {step.number}
                </span>
              </div>
              <div className="lg:col-span-11">
                <h3 className="font-display text-2xl text-cream-200 mb-3">{step.title}</h3>
                <p className="text-cream-400 leading-relaxed max-w-2xl">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-forest-800">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-linen-400 hover:bg-linen-500 text-forest-950 font-bold px-10 py-4 rounded-lg text-base transition-colors"
          >
            Book a Free Call
          </a>
        </div>
      </div>
    </section>
  );
}
