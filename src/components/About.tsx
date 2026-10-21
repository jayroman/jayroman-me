export default function About() {
  return (
    <section id="about" className="bg-parchment-100 py-24 border-t border-parchment-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <div className="aspect-square max-w-xs bg-forest-950 rounded-xl flex items-center justify-center">
              <span className="font-display text-7xl text-linen-400">JR</span>
            </div>
          </div>

          <div className="lg:col-span-8 pt-2">
            <h2 className="font-display text-4xl text-cream-900 mb-8 leading-tight">I&apos;m Jay Roman.</h2>
            <div className="space-y-5 text-cream-700 text-lg leading-relaxed">
              <p>
                I live here on the Plateau full-time, and I&apos;ve spent years building software
                for a living. Around here that usually makes you the person friends call when
                the Wi-Fi drops or the TV stops working — so I made it official.
              </p>
              <p>
                For homeowners, that means someone local who picks up the phone, shows up, and
                fixes it — and who&apos;s still here when you&apos;re not. For local businesses, it
                means practical systems that take busywork off your plate, built by someone who
                understands how things actually run up here.
              </p>
              <p>
                Either way, I&apos;ll be straight with you about what&apos;s worth doing, what it
                costs, and what to expect. No jargon, no runaround.
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
