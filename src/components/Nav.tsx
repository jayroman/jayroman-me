import { site, telHref } from "@/lib/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#ways", label: "Pricing" },
  { href: "#projects", label: "Projects" },
];

export default function Nav() {
  return (
    <nav className="bg-blue text-paper border-b border-paper/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#" className="display-sm text-lg">Jay Roman</a>
        <div className="flex items-center gap-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hidden md:inline text-sm text-paper/80 hover:text-paper">
              {l.label}
            </a>
          ))}
          <a href={telHref(site.phone)} className="bg-paper hover:bg-blue-light text-blue-dark font-bold text-sm px-4 py-2">
            {site.phone}
          </a>
        </div>
      </div>
    </nav>
  );
}
