export default function About() {
  return (
    <section id="about" className="bg-parchment-50 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Photo */}
          <div className="aspect-square bg-parchment-200 rounded-xl overflow-hidden flex flex-col items-center justify-center">
            <div className="w-36 h-36 bg-parchment-300 rounded-full mb-4" />
            <p className="text-cream-600 text-sm">Your photo here</p>
          </div>

          {/* Bio */}
          <div className="pt-2">
            <h2 className="font-display text-4xl text-cream-900 mb-8 leading-tight">
              I&apos;m Jay Roman.
            </h2>
            <div className="space-y-5 text-cream-700 text-lg leading-relaxed">
              <p>
                I built this company because I was tired of watching local businesses get
                left behind — not because they weren&apos;t working hard enough, but because
                nobody was making the right tools available to them at a price that made
                sense.
              </p>
              <p>
                The businesses I work with are good at what they do. They just have too
                much going on and not enough systems to handle it. I come in, figure out
                where the real problems are, and build practical solutions — sometimes that
                means software, sometimes process changes, sometimes both.
              </p>
              <p>
                I&apos;ll be straight with you about what&apos;s worth doing, what it costs, and
                what you can expect. No jargon, no runaround.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-forest-950 hover:bg-forest-800 text-cream-200 font-bold px-8 py-4 rounded-lg transition-colors"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
