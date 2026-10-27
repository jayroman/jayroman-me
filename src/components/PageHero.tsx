import { site, telHref } from "@/lib/site";

export default function PageHero({
  title,
  intro,
  messageLabel = "Send a message",
  aside,
}: {
  title: string;
  intro: React.ReactNode;
  messageLabel?: string;
  aside?: React.ReactNode;
}) {
  return (
    <header className="bg-navy text-paper">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <h1 className="display text-[1.85rem] sm:text-5xl lg:text-6xl max-w-4xl">{title}</h1>
        <p className="text-paper/85 text-lg sm:text-xl leading-relaxed max-w-2xl mt-5">{intro}</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a href={telHref(site.phone)} className="bg-paper hover:bg-tint text-ink px-7 py-5">
            <span className="block text-sm font-semibold text-slate">Call or text</span>
            <span className="display-sm block text-2xl sm:text-3xl text-navy">{site.phone}</span>
          </a>
          <a
            href="#contact"
            className="flex items-center px-7 py-5 border-2 border-paper/50 hover:border-paper font-semibold text-lg"
          >
            {messageLabel}
          </a>
        </div>
        {aside && <p className="mt-6 text-paper/90 text-lg">{aside}</p>}
      </div>
    </header>
  );
}
