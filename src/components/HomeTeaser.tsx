import Link from "next/link";
import { paths } from "@/lib/site";

export default function HomeTeaser() {
  return (
    <section className="bg-ink text-paper py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-8">
          <h2 className="display text-2xl sm:text-4xl">Need tech help at home?</h2>
          <p className="text-paper/85 text-lg leading-relaxed mt-5 max-w-2xl">
            I also keep the tech in Plateau homes working: Wi-Fi, TVs, speakers, smart devices, and
            alerts for houses that sit empty. For full-time residents and second-home owners.
          </p>
        </div>
        <div className="lg:col-span-4 lg:text-right">
          <Link
            href={paths.home}
            className="inline-block bg-paper hover:bg-blue-light text-blue-dark font-bold text-lg px-8 py-4"
          >
            See home tech help
          </Link>
        </div>
      </div>
    </section>
  );
}
