export default function About() {
  return (
    <section id="about" className="bg-mist py-20 sm:py-28 border-t-2 border-ink">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <h2 className="display text-4xl sm:text-5xl lg:col-span-5">I&apos;m Jay Roman.</h2>
        <div className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-ink/85 max-w-2xl">
          <p>
            I live here on the Plateau full-time, and I&apos;ve spent years building software for a
            living. Around here that makes you the person friends call when the Wi-Fi drops or the
            TV stops working, so I made it official.
          </p>
          <p>
            For homeowners, that means someone local who picks up the phone, shows up, and fixes
            it, and who&apos;s still here when you&apos;re not. For businesses, it means practical
            systems built by someone who understands how things run up here.
          </p>
          <p>Either way, I&apos;ll be straight with you about what&apos;s worth doing and what it costs.</p>
        </div>
      </div>
    </section>
  );
}
