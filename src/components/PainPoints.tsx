const pains = [
  "Calls you miss while you're out on a job",
  "Quotes that go out late — and leads that go cold",
  "Customers who didn't hear back fast enough and went with someone else",
  "Evenings buried in paperwork instead of time with your family",
  "Invoices sitting unpaid because nobody followed up",
];

export default function PainPoints() {
  return (
    <section className="bg-parchment-100 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="font-display text-2xl text-cream-900 leading-snug">
              You&apos;re probably losing money on things that can be fixed.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ul className="space-y-5">
              {pains.map((pain, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-linen-500 mt-0.5 shrink-0 text-lg">→</span>
                  <span className="text-cream-800 text-lg leading-relaxed">{pain}</span>
                </li>
              ))}
            </ul>
            <p className="text-cream-700 mt-8 text-base">
              These aren&apos;t problems you have to live with.{" "}
              <a href="#services" className="text-cream-900 font-semibold underline underline-offset-4 hover:text-linen-600">
                Here&apos;s how we fix them.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
