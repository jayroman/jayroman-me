import { site, telHref, areaText } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-mist/70 border-t-2 border-ink-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm">
        <p>
          &copy; {year} {site.name}. Serving {areaText} in Western North Carolina.
        </p>
        <p className="flex gap-6">
          <a href={telHref(site.phone)} className="hover:text-paper">{site.phone}</a>
          <a href={`mailto:${site.email}`} className="hover:text-paper">{site.email}</a>
        </p>
      </div>
    </footer>
  );
}
