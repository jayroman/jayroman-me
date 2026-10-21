import Link from "next/link";
import { paths } from "@/lib/site";

export default function BusinessTeaser() {
  return (
    <section className="bg-ink text-paper py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-8">
          <h2 className="display text-2xl sm:text-4xl">Run a local business?</h2>
          <p className="text-paper/85 text-lg leading-relaxed mt-5 max-w-2xl">
            I also help businesses here stop losing time to busywork. And if you&apos;re paying every
            month for a software platform you only use part of, I can build you a custom tool that
            fits how you work, and that you own.
          </p>
        </div>
        <div className="lg:col-span-4 lg:text-right">
          <Link
            href={paths.business}
            className="inline-block bg-paper hover:bg-blue-light text-blue-dark font-bold text-lg px-8 py-4"
          >
            See business services
          </Link>
        </div>
      </div>
    </section>
  );
}
