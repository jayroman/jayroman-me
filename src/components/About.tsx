export default function About() {
  return (
    <section className="bg-paper py-12 sm:py-16 border-t-2 border-mist">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        <h2 className="display text-3xl sm:text-4xl lg:col-span-5">I&apos;m Jay Roman.</h2>
        <div className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-ink/85 max-w-2xl">
          <p>
            I live here on the Plateau full-time, and I&apos;ve spent years building software for a
            living. Around here that makes you the person friends call when the Wi-Fi drops or the
            office printer quits, so I made it official.
          </p>
          <p>
            Homes and businesses get the same thing from me: someone local who picks up the phone,
            shows up, fixes it, and is still here when you&apos;re not.
          </p>
          <p>I&apos;ll be straight with you about what&apos;s worth doing and what it costs.</p>
        </div>
      </div>
    </section>
  );
}
