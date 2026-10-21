import Link from "next/link";
import { site, paths, telHref } from "@/lib/site";

export default function Nav({ current }: { current?: "home" | "business" }) {
  const tab = (active: boolean) =>
    `text-sm font-bold px-3 py-1.5 border-2 ${
      active ? "bg-paper text-blue-dark border-paper" : "border-paper/70 hover:border-paper hover:bg-paper/10"
    }`;
  return (
    <nav className="bg-blue text-paper border-b border-paper/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="display-sm text-lg">Jay Roman</Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href={paths.home} className={tab(current === "home")} aria-current={current === "home" ? "page" : undefined}>
            For homes
          </Link>
          <Link href={paths.business} className={tab(current === "business")} aria-current={current === "business" ? "page" : undefined}>
            For businesses
          </Link>
          <a href={telHref(site.phone)} className="hidden sm:inline ml-3 bg-paper hover:bg-blue-light text-blue-dark font-bold text-sm px-4 py-2">
            {site.phone}
          </a>
        </div>
      </div>
    </nav>
  );
}
