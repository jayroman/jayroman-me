"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-forest-950/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-cream-200 font-bold text-lg">
            Jay Roman <span className="text-linen-400">Consulting</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-cream-400 hover:text-cream-200 transition-colors text-sm font-medium">
              Services
            </a>
            <a href="#about" className="text-cream-400 hover:text-cream-200 transition-colors text-sm font-medium">
              About
            </a>
            <a href="#contact" className="bg-linen-400 hover:bg-linen-500 text-forest-950 px-4 py-2 rounded-md text-sm font-semibold transition-colors">
              Get a Free Consult
            </a>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <a href="#contact" className="bg-linen-400 hover:bg-linen-500 text-forest-950 px-3 py-1.5 rounded-md text-sm font-semibold transition-colors">
              Contact
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-cream-400 hover:text-cream-200 p-1" aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            <a href="#services" onClick={() => setMenuOpen(false)} className="text-cream-400 hover:text-cream-200 text-sm font-medium py-2">
              Services
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-cream-400 hover:text-cream-200 text-sm font-medium py-2">
              About
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
