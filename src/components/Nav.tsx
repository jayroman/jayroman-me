import Link from "next/link";
import { site, paths, telHref } from "@/lib/site";

export default function Nav({ current }: { current?: "home" | "business" }) {
  const link = (active: boolean) =>
    `text-sm ${active ? "text-paper underline underline-offset-8 decoration-2" : "text-paper/75 hover:text-paper"}`;
  return (
    <nav className="bg-blue text-paper border-b border-paper/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="display-sm text-lg">Jay Roman</Link>
        <div className="flex items-center gap-5 sm:gap-6">
          <Link href={paths.home} className={link(current === "home")}>
            Home tech
          </Link>
          <Link href={paths.business} className={link(current === "business")}>
            Business
          </Link>
          <a href={telHref(site.phone)} className="hidden sm:inline bg-paper hover:bg-blue-light text-blue-dark font-bold text-sm px-4 py-2">
            {site.phone}
          </a>
        </div>
      </div>
    </nav>
  );
}
