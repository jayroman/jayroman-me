import { site } from "@/lib/site";

const lanes = [
  {
    href: "#home-tech",
    label: "For your home",
    title: "Wi-Fi, TVs, Sonos, smart devices — fixed and working.",
    note: "Full-time and second-home owners",
  },
  {
    href: "#business",
    label: "For your business",
    title: "Stop losing time and money to busywork.",
    note: "Local and small businesses",
  },
];

export default function Hero() {
  return (
    <section className="relative bg-forest-950 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 w-full">
        <p className="text-linen-400 text-sm font-semibold uppercase tracking-wider mb-6">
          {site.area.slice(0, 3).join(" · ")}
        </p>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-cream-200 leading-tight mb-8 max-w-4xl">
          Your year-round tech help on the Plateau.
        </h1>
        <p className="text-cream-400 text-lg leading-relaxed max-w-2xl mb-14">
          I&apos;m a full-time resident with years in software. I keep the tech in mountain homes
          working, and I help local businesses get their time back.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
          {lanes.map((lane) => (
            <a
              key={lane.href}
              href={lane.href}
              className="group block rounded-xl border border-forest-700 bg-forest-900 hover:bg-forest-800 hover:border-linen-500 p-7 transition-colors"
            >
              <span className="text-linen-400 text-xs font-semibold uppercase tracking-wider">{lane.label}</span>
              <p className="font-display text-2xl text-cream-200 mt-3 mb-4 leading-snug">{lane.title}</p>
              <span className="text-cream-600 text-sm">{lane.note}</span>
              <span className="float-right text-linen-400 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
