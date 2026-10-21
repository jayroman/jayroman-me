export default function About({ focus }: { focus: "home" | "business" }) {
  return (
    <section className="bg-paper py-20 sm:py-24 border-t-2 border-mist">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <h2 className="display text-3xl sm:text-4xl lg:col-span-5">I&apos;m Jay Roman.</h2>
        <div className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-ink/85 max-w-2xl">
          {focus === "home" ? (
            <>
              <p>
                I live here on the Plateau full-time, and I&apos;ve spent years building software
                for a living. Around here that makes you the person friends call when the Wi-Fi
                drops or the TV stops working, so I made it official.
              </p>
              <p>
                You get someone local who picks up the phone, shows up, and fixes it, and who&apos;s
                still here when you&apos;re not.
              </p>
            </>
          ) : (
            <>
              <p>
                I live here on the Plateau full-time, and I&apos;ve spent years building software
                for a living. I started this because local businesses deserve practical tools at a
                price that makes sense.
              </p>
              <p>
                The businesses I work with are good at what they do. They just have too much going
                on and not enough systems to handle it. I find where the real problems are and fix
                them, with software, process changes, or both.
              </p>
            </>
          )}
          <p>I&apos;ll be straight with you about what&apos;s worth doing and what it costs.</p>
        </div>
      </div>
    </section>
  );
}
