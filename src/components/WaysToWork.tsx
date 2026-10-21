import { site, telHref, rates } from "@/lib/site";

export default function WaysToWork() {
  return (
    <section id="ways" className="bg-paper py-12 sm:py-16 scroll-mt-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="display text-3xl sm:text-4xl">Three ways to work with me</h2>
        <p className="text-ink/85 text-lg leading-relaxed mt-5 max-w-2xl">
          Same rates and same approach whether it&apos;s your home or your business.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 border-t-2 border-l-2 border-blue mt-8">
          {/* Quick fixes */}
          <div className="border-r-2 border-b-2 border-blue p-6 sm:p-7 flex flex-col">
            <h3 className="display-sm text-xl sm:text-2xl text-blue-dark">Quick fixes</h3>
            <p className="text-slate leading-relaxed mt-3">
              Something&apos;s broken or needs setting up. Call or text, and I&apos;ll come fix it.
            </p>
            <dl className="mt-5 border-t-2 border-blue">
              {rates.map((r) => (
                <div key={r.label} className="flex items-baseline justify-between gap-4 border-b-2 border-blue py-3">
                  <dt className="text-sm sm:text-base">{r.label}</dt>
                  <dd className="display text-2xl text-blue-dark">{r.price}</dd>
                </div>
              ))}
            </dl>
            <a href={telHref(site.phone)} className="mt-auto pt-6 font-bold text-blue-dark underline underline-offset-4">
              Call or text {site.phone}
            </a>
          </div>

          {/* Monthly support */}
          <div className="bg-blue text-paper border-r-2 border-b-2 border-blue p-6 sm:p-7 flex flex-col">
            <h3 className="display-sm text-xl sm:text-2xl">Monthly support</h3>
            <p className="text-paper/85 leading-relaxed mt-3">
              One monthly fee and your tech is looked after: priority response when something breaks,
              remote help included, and regular check-ups so problems get caught early.
            </p>
            <p className="text-paper/85 leading-relaxed mt-3">
              Plans for homes, second homes, and small businesses, sized to what you actually have.
            </p>
            <a
              href="#contact"
              className="mt-auto pt-6 font-bold underline underline-offset-4 hover:text-blue-light"
            >
              Ask about a support plan
            </a>
          </div>

          {/* Projects */}
          <div className="border-r-2 border-b-2 border-blue p-6 sm:p-7 flex flex-col">
            <h3 className="display-sm text-xl sm:text-2xl text-blue-dark">Projects</h3>
            <p className="text-slate leading-relaxed mt-3">
              Bigger jobs are quoted at a fixed price, case by case, so you know the total before I
              start. For example:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "A whole-house or office network redo",
                "Away-home monitoring for a second home",
                "Automated scheduling, follow-up, and invoicing",
                "Custom software you own",
                "Getting more out of software you already pay for",
              ].map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-blue" />
                  {p}
                </li>
              ))}
            </ul>
            <a href="#projects" className="mt-auto pt-6 font-bold text-blue-dark underline underline-offset-4">
              More about projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
