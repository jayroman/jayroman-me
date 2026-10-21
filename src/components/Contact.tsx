"use client";
import { useState } from "react";
import { site, telHref } from "@/lib/site";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // No form service configured yet: fall back to the visitor's email app.
    if (!site.formspreeId) {
      const subject = `Website inquiry: ${data.get("topic")}`;
      const body = [
        `Name: ${data.get("name")}`,
        `Email: ${data.get("email")}`,
        `Phone: ${data.get("phone") || "-"}`,
        `Town: ${data.get("town") || "-"}`,
        "",
        String(data.get("message") || ""),
      ].join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setSubmitting(true);
    setError(false);
    try {
      const response = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-parchment-300 bg-parchment-50 text-cream-900 placeholder-cream-600 focus:outline-none focus:ring-2 focus:ring-linen-400 focus:border-transparent";
  const labelClass = "block text-sm font-semibold text-cream-800 mb-2";

  return (
    <section id="contact" className="bg-parchment-50 py-24 border-t border-parchment-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl text-cream-900 mb-4 leading-snug">How can I help?</h2>
            <p className="text-cream-700 leading-relaxed mb-8">
              Tell me what&apos;s going on and I&apos;ll get back to you within one business day.
              Not a bot — me, directly.
            </p>
            <div className="space-y-3">
              {site.phone && (
                <a href={telHref(site.phone)} className="block font-display text-2xl text-cream-900 hover:text-linen-600">
                  {site.phone}
                </a>
              )}
              {site.phone && <p className="text-cream-600 text-sm -mt-2">Call or text</p>}
              {site.email && (
                <a href={`mailto:${site.email}`} className="block text-cream-800 underline underline-offset-4 hover:text-linen-600">
                  {site.email}
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-8">
            {submitted ? (
              <div className="py-12">
                <p className="font-display text-2xl text-cream-900 mb-2">Got it — thanks.</p>
                <p className="text-cream-700">I&apos;ll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className={labelClass}>What do you need help with? *</span>
                  <div className="flex flex-wrap gap-3">
                    {["My home", "My business", "Something else"].map((t, i) => (
                      <label key={t} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-parchment-300 bg-parchment-100 text-cream-800 cursor-pointer has-[:checked]:border-linen-500 has-[:checked]:bg-linen-300/40">
                        <input type="radio" name="topic" value={t} defaultChecked={i === 0} className="accent-linen-600" />
                        {t}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={labelClass}>Your Name *</label>
                    <input type="text" id="name" name="name" required className={inputClass} placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label htmlFor="town" className={labelClass}>Town or Community</label>
                    <input type="text" id="town" name="town" className={inputClass} placeholder="Sapphire, Cashiers, Highlands…" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className={labelClass}>Email *</label>
                    <input type="email" id="email" name="email" required className={inputClass} placeholder="jane@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone</label>
                    <input type="tel" id="phone" name="phone" className={inputClass} placeholder="(828) 000-0000" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>What&apos;s going on? *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="The Wi-Fi keeps dropping upstairs… / We're losing leads because…"
                  />
                </div>

                {error && (
                  <p className="text-red-700 text-sm">
                    Something went wrong sending that.{" "}
                    {site.phone ? `Please call or text ${site.phone}.` : site.email ? `Please email ${site.email}.` : "Please try again."}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-linen-400 hover:bg-linen-500 disabled:bg-linen-300 text-forest-950 font-bold py-4 px-8 rounded-lg text-base transition-colors"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
