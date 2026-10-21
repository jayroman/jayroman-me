const rows = [
  {
    topic: "What you pay",
    rented: "A monthly fee forever, often per user",
    owned: "A one-time build, plus low hosting costs",
  },
  {
    topic: "What it does",
    rented: "Built for every business, so you pay for features you never touch",
    owned: "Built around how your business actually works",
  },
  {
    topic: "Who's in control",
    rented: "Prices and features change when the vendor decides",
    owned: "You own the software and your data",
  },
  {
    topic: "When you need more",
    rented: "Upgrade to the next tier",
    owned: "Add exactly what you need, when you need it",
  },
];

export default function SoftwareYouOwn() {
  return (
    <section id="projects" className="bg-paper py-12 sm:py-16 border-t-2 border-mist scroll-mt-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="display text-3xl sm:text-4xl max-w-4xl">
          Paying for software you only use part of?
        </h2>
        <p className="text-ink/85 text-lg leading-relaxed mt-6 max-w-2xl">
          Worth a look for any business: a lot of companies pay a monthly subscription for a platform built for everyone,
          and use a fraction of it. Often a custom tool built around exactly what you do costs less
          over a few years, does the job better, and belongs to you.
        </p>

        <div className="mt-8 border-2 border-blue bg-paper">
          <div className="hidden md:grid grid-cols-12 bg-blue text-paper">
            <div className="col-span-3 p-5" />
            <div className="col-span-4 p-5 display-sm text-lg">Subscription platform</div>
            <div className="col-span-5 p-5 display-sm text-lg">Custom software you own</div>
          </div>
          {rows.map((r) => (
            <div key={r.topic} className="grid grid-cols-1 md:grid-cols-12 border-t-2 border-blue first:border-t-0 md:first:border-t-2">
              <div className="md:col-span-3 p-5 font-bold bg-blue-light md:bg-transparent">{r.topic}</div>
              <div className="md:col-span-4 p-5 text-slate">
                <span className="md:hidden block text-xs font-bold text-ink mb-1">Subscription platform</span>
                {r.rented}
              </div>
              <div className="md:col-span-5 p-5 md:border-l-2 border-blue">
                <span className="md:hidden block text-xs font-bold text-blue-dark mb-1">Custom software you own</span>
                {r.owned}
              </div>
            </div>
          ))}
        </div>

        <p className="text-slate text-sm mt-6 max-w-2xl">
          Custom isn&apos;t always the right call. Sometimes the subscription is the better deal, and
          I&apos;ll tell you if that&apos;s the case.
        </p>
      </div>
    </section>
  );
}
