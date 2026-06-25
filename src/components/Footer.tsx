export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display text-cream-200 text-xl">Jay Roman Consulting</p>
            <p className="text-cream-600 text-sm mt-1">AI for local business.</p>
          </div>

          <div className="flex gap-8">
            <a href="#services" className="text-cream-400 hover:text-cream-200 text-sm transition-colors">Services</a>
            <a href="#about" className="text-cream-400 hover:text-cream-200 text-sm transition-colors">About</a>
            <a href="#contact" className="text-cream-400 hover:text-cream-200 text-sm transition-colors">Contact</a>
          </div>
        </div>

        <div className="border-t border-forest-800 mt-8 pt-8">
          <p className="text-cream-600 text-sm">
            &copy; {year} Jay Roman Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
