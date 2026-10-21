import Link from "next/link";
import { site, paths, telHref, areaText } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-paper/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row md:items-start justify-between gap-6 text-sm">
        <div className="max-w-md">
          <p className="display-sm text-paper text-base">{site.name}</p>
          <p className="mt-2">Serving {areaText} in Western North Carolina.</p>
          <p className="mt-4">&copy; {year} {site.name}</p>
        </div>
        <div className="flex flex-col gap-2">
          <Link href={paths.home} className="hover:text-paper">Home tech help</Link>
          <Link href={paths.business} className="hover:text-paper">Small business systems</Link>
          <a href={telHref(site.phone)} className="hover:text-paper">{site.phone}</a>
          <a href={`mailto:${site.email}`} className="hover:text-paper">{site.email}</a>
        </div>
      </div>
    </footer>
  );
}
