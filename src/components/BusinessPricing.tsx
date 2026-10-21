import { site, telHref, rates } from "@/lib/site";

const fixes = [
  "Office Wi-Fi that keeps dropping",
  "Printers and scanners that won't connect",
  "New computers, phones, and tablets set up",
  "Lobby TVs and displays",
  "A card reader or register that lost its connection",
  "Email and shared accounts that need sorting out",
];

export default function BusinessPricing() {
  return (
    <section className="bg-mist py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="display text-3xl sm:text-4xl">How pricing works</h2>
        <p className="text-ink/85 text-lg leading-relaxed mt-5 max-w-2xl">
          I price by the kind of work, the same way for everyone.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 border-t-2 border-l-2 border-blue mt-8">
          <div className="bg-paper border-r-2 border-b-2 border-blue p-6 sm:p-8">
            <h3 className="display-sm text-xl sm:text-2xl text-blue-dark">Projects: a fixed price</h3>
            <p className="text-slate leading-relaxed mt-3">
              Automation, follow-up systems, and custom software are quoted at a fixed price up
              front, after a free 30-minute call. You know the total before I start, and if it takes
              me longer than planned, that&apos;s on me.
            </p>
            <a
              href="#contact"
              className="inline-block mt-6 bg-blue hover:bg-blue-dark text-paper font-bold px-6 py-3"
            >
              Book a free 30-minute call
            </a>
          </div>

          <div className="bg-paper border-r-2 border-b-2 border-blue p-6 sm:p-8">
            <h3 className="display-sm text-xl sm:text-2xl text-blue-dark">Quick fixes: hourly</h3>
            <p className="text-slate leading-relaxed mt-3">
              Hands-on fixes use the same rates I charge homeowners. For example:
            </p>
            <ul className="mt-4 space-y-2">
              {fixes.map((f) => (
                <li key={f} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-blue" />
                  {f}
                </li>
              ))}
            </ul>
            <dl className="mt-6 border-t-2 border-blue">
              {rates.map((r) => (
                <div key={r.label} className="flex items-baseline justify-between gap-6 border-b-2 border-blue py-3">
                  <dt>{r.label}</dt>
                  <dd className="display text-2xl text-blue-dark">{r.price}</dd>
                </div>
              ))}
            </dl>
            <a href={telHref(site.phone)} className="inline-block mt-6 font-bold text-blue-dark underline underline-offset-4">
              Call or text {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
