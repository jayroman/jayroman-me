export default function Hero() {
  return (
    <section className="relative bg-forest-950 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 w-full">
        <div className="max-w-4xl">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-cream-200 leading-tight mb-8">
            I find where your business is losing time and money — and fix it.
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-linen-400 hover:bg-linen-500 text-forest-950 font-bold px-8 py-4 rounded-lg text-base transition-colors shrink-0"
            >
              Let&apos;s Talk
            </a>
            <p className="text-cream-400 text-lg leading-relaxed max-w-xl">
              For most local businesses, the biggest gains aren&apos;t complicated.
              They&apos;re just things nobody&apos;s gotten around to fixing yet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
