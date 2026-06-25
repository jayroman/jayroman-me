"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Sign up at https://formspree.io (free) and replace YOUR_FORM_ID below
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setSubmitting(false);

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-parchment-300 bg-parchment-50 text-cream-900 placeholder-cream-600 focus:outline-none focus:ring-2 focus:ring-linen-400 focus:border-transparent";

  return (
    <section id="contact" className="bg-parchment-100 py-24 border-t border-parchment-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl text-cream-900 mb-4 leading-snug">
              Let&apos;s talk about your business.
            </h2>
            <p className="text-cream-700 leading-relaxed">
              Fill this out and I&apos;ll get back to you within one business day. Not
              a bot — me, directly.
            </p>
          </div>

          <div className="lg:col-span-8">
            {submitted ? (
              <div className="py-12">
                <p className="font-display text-2xl text-cream-900 mb-2">Got it — thanks.</p>
                <p className="text-cream-700">I&apos;ll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-cream-800 mb-2">
                      Your Name *
                    </label>
                    <input type="text" id="name" name="name" required className={inputClass} placeholder="John Smith" />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-sm font-semibold text-cream-800 mb-2">
                      Business Name *
                    </label>
                    <input type="text" id="business" name="business" required className={inputClass} placeholder="Smith Plumbing LLC" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-cream-800 mb-2">
                      Email *
                    </label>
                    <input type="email" id="email" name="email" required className={inputClass} placeholder="john@smithplumbing.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-cream-800 mb-2">
                      Phone
                    </label>
                    <input type="tel" id="phone" name="phone" className={inputClass} placeholder="(555) 000-0000" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-cream-800 mb-2">
                    What&apos;s slowing your business down? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell me what's eating your time or costing you customers..."
                  />
                </div>

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
