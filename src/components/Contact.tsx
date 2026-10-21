"use client";
import { useState } from "react";
import { site, telHref } from "@/lib/site";

export default function Contact({ defaultTopic = "My home" }: { defaultTopic?: "My home" | "My business" }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // No form service configured yet: open the visitor's email app instead.
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
    "w-full px-4 py-3 border-2 border-rule bg-paper text-ink placeholder-slate/70 focus:outline-none focus:border-blue";
  const labelClass = "block text-sm font-bold mb-2";

  return (
    <section id="contact" className="bg-blue text-paper py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <h2 className="display text-3xl sm:text-4xl">How can I help?</h2>
          <p className="text-paper/85 text-lg leading-relaxed mt-6">
            Calling or texting is fastest. Or send a message and I&apos;ll get back to you within one
            business day.
          </p>
          <a href={telHref(site.phone)} className="display block text-3xl sm:text-4xl hover:text-blue-light mt-10">
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="block text-lg underline underline-offset-4 hover:text-blue-light mt-4">
            {site.email}
          </a>
        </div>

        <div className="lg:col-span-7 bg-paper text-ink p-6 sm:p-10">
          {submitted ? (
            <div className="py-10">
              <p className="display-sm text-2xl">Message sent.</p>
              <p className="text-slate mt-2">I&apos;ll get back to you within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <fieldset>
                <legend className={labelClass}>What do you need help with?</legend>
                <div className="flex flex-wrap gap-3">
                  {["My home", "My business", "Something else"].map((t) => (
                    <label
                      key={t}
                      className="flex items-center gap-2 px-4 py-2 border-2 border-rule cursor-pointer has-[:checked]:bg-blue has-[:checked]:text-paper has-[:checked]:border-blue"
                    >
                      <input type="radio" name="topic" value={t} defaultChecked={t === defaultTopic} className="accent-blue-dark" />
                      {t}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={labelClass}>Name</label>
                  <input type="text" id="name" name="name" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="town" className={labelClass}>Town or community <span className="font-normal text-slate">(optional)</span></label>
                  <input type="text" id="town" name="town" className={inputClass} placeholder="Sapphire, Cashiers, Highlands…" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className={labelClass}>Email</label>
                  <input type="email" id="email" name="email" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone <span className="font-normal text-slate">(optional)</span></label>
                  <input type="tel" id="phone" name="phone" className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>What&apos;s going on?</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="The Wi-Fi keeps dropping upstairs…"
                />
              </div>

              {error && (
                <p className="text-red-700 text-sm font-semibold">
                  That message didn&apos;t send. Call or text {site.phone}, or email {site.email}.
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="bg-blue hover:bg-blue-dark disabled:opacity-60 text-paper font-bold py-4 px-8 text-lg"
              >
                {submitting ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
