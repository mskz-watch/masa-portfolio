"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: "rgba(248,250,251,0.85)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* ロゴ */}
            <Link
              href="/"
              className="text-[16px]"
              style={{ fontWeight: 600, letterSpacing: "3px", color: "var(--on-surface)" }}
            >
              Masakazu Hattori
            </Link>

            {/* デスクトップナビ */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-[16px] transition-colors duration-300"
                  style={{ fontWeight: 400, color: "var(--on-surface-variant)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--on-surface-variant)";
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* モバイルハンバーガー */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
              style={{ color: "var(--on-surface)" }}
              aria-label="メニュー"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* モバイルメニュー */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 left-0 right-0 z-40 md:hidden"
          style={{
            backgroundColor: "rgba(248,250,251,0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(172,179,182,0.15)",
          }}
        >
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-[20px]"
                style={{ fontWeight: 400, color: "var(--on-surface-variant)" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
