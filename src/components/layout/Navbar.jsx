"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? "navbar-glass shadow-xl py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container-max flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-50 group" style={{ textDecoration: "none" }}>
            <div
              className="flex items-center justify-center rounded-xl font-black text-lg transition-transform group-hover:scale-110"
              style={{
                width: 44,
                height: 44,
                background: "var(--color-ja-blue)",
                color: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
              }}
            >
              JA
            </div>
            <span
              className={`font-black text-xl tracking-tighter transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Red Alumni
            </span>
          </Link>

          {/* Desktop Nav - Explicitly hidden on small screens */}
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
                className={`text-sm lg:text-base font-bold transition-all duration-200 hover:text-ja-gold ${
                  scrolled ? "text-gray-600" : "text-white/90"
                }`}
                style={{ textDecoration: "none" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/auth/login"
              className={`text-sm font-bold ${
                scrolled ? "text-gray-600 hover:text-ja-blue" : "text-white/80 hover:text-white"
              }`}
              style={{ textDecoration: "none" }}
            >
              Iniciar sesión
            </Link>
            <Link href="/auth/register" className="btn-primary" style={{ padding: "0.75rem 1.75rem" }}>
              Registrarme
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""} ${scrolled ? "text-gray-900" : "text-white"}`} />
            <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""} ${scrolled ? "text-gray-900" : "text-white"}`} />
            <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""} ${scrolled ? "text-gray-900" : "text-white"}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[90] transition-transform duration-500 md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col p-10 pt-32 gap-8 h-full">
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
              className="text-3xl font-black text-gray-900 no-underline"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-auto flex flex-col gap-4">
            <Link href="/auth/login" className="text-xl font-bold text-gray-500 no-underline" onClick={() => setMenuOpen(false)}>Iniciar sesión</Link>
            <Link href="/auth/register" className="btn-primary justify-center text-xl py-5" onClick={() => setMenuOpen(false)}>Registrarme</Link>
          </div>
        </div>
      </div>
    </>
  );
}
