"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-navy/5 py-4" : "py-8"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-navy text-xl tracking-widest font-light">
          Y.H
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-noto text-xs tracking-widest text-navy/60 hover:text-gold transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span
            className={`block w-6 h-px bg-navy transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-navy transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-navy transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navItems.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="font-serif text-4xl text-navy my-4 tracking-widest"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
