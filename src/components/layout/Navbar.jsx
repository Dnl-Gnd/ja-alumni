"use client";
import React, { useState, useEffect } from "react";
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
      <div className="container-max flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-white" style={{ textDecoration: "none" }}>
          <div
            className="flex items-center justify-center rounded-xl font-black text-lg"
            style={{
              width: 44,
              height: 44,
              background: "var(--color-ja-blue)",
              color: "#fff",
              letterSpacing: "-0.03em",
              boxShadow: scrolled ? "none" : "0 4px 12px rgba(0,0,0,0.1)"
            }}
          >
            JA
          </div>
          <span
            className={`font-black text-xl transition-colors duration-300 ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
            style={{ letterSpacing: "-0.02em" }}
          >
            Red Alumni
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: "/quienes-somos", label: "¿Quiénes somos?" },
            { href: "/campus", label: "Campus" },
            { href: "/comunidad", label: "Comunidad" },
            { href: "/donaciones", label: "Donaciones" },
            { href: "/contactanos", label: "Contáctanos" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm lg:text-base font-bold transition-all duration-200 hover:scale-105 ${
                scrolled
                  ? "text-gray-600 hover:text-ja-blue"
                  : "text-white/90 hover:text-white"
              }`}
              style={{ textDecoration: "none" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/auth/login"
            className={`text-sm font-bold transition-colors ${
              scrolled ? "text-gray-600 hover:text-ja-blue" : "text-white/80 hover:text-white"
            }`}
            style={{ textDecoration: "none" }}
          >
            Iniciar sesión
          </Link>
          <Link href="/auth/register" className="btn-primary" id="nav-register-btn" style={{ padding: "0.75rem 1.75rem", fontSize: "0.9375rem" }}>
            Registrarme
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-6 h-0.5 transition-all duration-300 ${
                menuOpen 
                  ? (i === 0 ? "rotate-45 translate-y-2" : i === 1 ? "opacity-0" : "-rotate-45 -translate-y-2") 
                  : ""
              } ${
                scrolled ? "bg-gray-900" : "bg-white"
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-8 py-10 flex flex-col gap-8 animate-fade-in shadow-2xl">
          {[
            { href: "/quienes-somos", label: "¿Quiénes somos?" },
            { href: "/campus", label: "Campus" },
            { href: "/comunidad", label: "Comunidad" },
            { href: "/donaciones", label: "Donaciones" },
            { href: "/contactanos", label: "Contáctanos" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-900 font-black text-2xl hover:text-ja-blue transition-colors"
              style={{ textDecoration: "none" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-4 pt-6 border-t border-gray-100">
            <Link href="/auth/login" className="text-gray-600 font-bold text-lg" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>Iniciar sesión</Link>
            <Link href="/auth/register" className="btn-primary justify-center text-lg py-4" style={{ padding: "1rem 1.5rem" }} onClick={() => setMenuOpen(false)}>Registrarme</Link>
          </div>
        </div>
      )}
    </header>
  );
}
