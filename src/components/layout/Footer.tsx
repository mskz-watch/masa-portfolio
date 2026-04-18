import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 mt-24"
      style={{
        backgroundColor: "var(--surface-container-low)",
        borderTop: "1px solid rgba(172,179,182,0.15)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center gap-6 mb-8">
          {/* Brand */}
          <div className="text-center">
            <Link href="/">
              <p
                className="text-[18px] mb-1"
                style={{ fontWeight: 600, letterSpacing: "1px", color: "var(--on-surface)" }}
              >
                Masakazu Hattori
              </p>
            </Link>
            <p className="text-[14px]" style={{ color: "var(--on-surface-variant)" }}>
              UI/UX Designer
            </p>
          </div>

          {/* Nav */}
          <nav className="flex items-center gap-8">
            {[
              { href: "/works", label: "Works" },
              { href: "/about", label: "About" },
              { href: "/#contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14px] transition-colors duration-300"
                style={{ color: "var(--on-surface-variant)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div
          className="pt-8"
          style={{ borderTop: "1px solid rgba(172,179,182,0.15)" }}
        >
          <p
            className="text-center text-[13px]"
            style={{ color: "var(--on-surface-variant)" }}
          >
            © {currentYear} Masakazu Hattori. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
