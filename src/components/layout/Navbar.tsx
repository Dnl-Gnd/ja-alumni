"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-max flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white" style={{ textDecoration: "none" }}>
          <div
            className="flex items-center justify-center rounded-lg font-black text-sm"
            style={{
              width: 36,
              height: 36,
              background: "var(--color-ja-blue)",
              color: "#fff",
              fontSize: 13,
              letterSpacing: "-0.03em",
            }}
          >
            JA
          </div>
          <span
            className={`font-bold text-base transition-colors duration-300 ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
            style={{ letterSpacing: "-0.02em" }}
          >
            Red Alumni
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {[
            { href: "/directorio", label: "Directorio" },
            { href: "/historias", label: "Historias" },
            { href: "/voluntariado", label: "Voluntariado" },
            { href: "/mentoria", label: "Mentoría" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                scrolled
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-white/80 hover:text-white"
              }`}
              style={{ textDecoration: "none" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/auth/login"
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
            }`}
            style={{ textDecoration: "none" }}
          >
            Iniciar sesión
          </Link>
          <Link href="/auth/register" className="btn-primary" id="nav-register-btn" style={{ padding: "0.6rem 1.4rem", fontSize: "0.875rem" }}>
            Registrarme
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-5 h-0.5 transition-all duration-200 ${
                scrolled ? "bg-gray-900" : "bg-white"
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {[
            { href: "/directorio", label: "Directorio" },
            { href: "/historias", label: "Historias" },
            { href: "/voluntariado", label: "Voluntariado" },
            { href: "/mentoria", label: "Mentoría" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 font-medium"
              style={{ textDecoration: "none" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
            <Link href="/auth/login" className="text-gray-600 font-medium" style={{ textDecoration: "none" }}>Iniciar sesión</Link>
            <Link href="/auth/register" className="btn-primary justify-center" style={{ padding: "0.75rem 1.5rem" }}>Registrarme</Link>
          </div>
        </div>
      )}
    </header>
  );
}
