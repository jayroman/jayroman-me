import { site, telHref } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display text-cream-200 text-xl">{site.name}</p>
            <p className="text-cream-600 text-sm mt-1">{site.tagline}</p>
            {(site.phone || site.email) && (
              <p className="text-cream-400 text-sm mt-3 space-x-4">
                {site.phone && <a href={telHref(site.phone)} className="hover:text-cream-200">{site.phone}</a>}
                {site.email && <a href={`mailto:${site.email}`} className="hover:text-cream-200">{site.email}</a>}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <a href="#home-tech" className="text-cream-400 hover:text-cream-200 text-sm transition-colors">For Your Home</a>
            <a href="#business" className="text-cream-400 hover:text-cream-200 text-sm transition-colors">For Your Business</a>
            <a href="#about" className="text-cream-400 hover:text-cream-200 text-sm transition-colors">About</a>
            <a href="#contact" className="text-cream-400 hover:text-cream-200 text-sm transition-colors">Contact</a>
          </div>
        </div>

        <div className="border-t border-forest-800 mt-8 pt-8">
          <p className="text-cream-600 text-sm">
            &copy; {year} {site.name}. Serving {site.area.join(", ")}, NC.
          </p>
        </div>
      </div>
    </footer>
  );
}
