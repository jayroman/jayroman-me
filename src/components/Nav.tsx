import { site, telHref } from "@/lib/site";

export default function Nav() {
  return (
    <nav className="bg-ink text-paper border-b-2 border-ink-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#" className="display-sm text-lg">Jay Roman</a>
        <div className="flex items-center gap-6">
          <a href="#home-tech" className="hidden md:inline text-sm text-mist/80 hover:text-paper">For your home</a>
          <a href="#business" className="hidden md:inline text-sm text-mist/80 hover:text-paper">For your business</a>
          <a href={telHref(site.phone)} className="bg-amber hover:bg-amber-dark text-ink font-bold text-sm px-4 py-2">
            {site.phone}
          </a>
        </div>
      </div>
    </nav>
  );
}
