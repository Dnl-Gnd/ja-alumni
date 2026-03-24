import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-dark">
      <div className="container-max" style={{ paddingTop: "6rem", paddingBottom: "4rem" }}>
        <div
          className="grid gap-16"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
        >
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center rounded-xl font-black text-white"
                style={{
                  width: 48,
                  height: 48,
                  background: "var(--color-ja-blue)",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.2)"
                }}
              >
                JA
              </div>
              <span className="font-black text-white text-2xl" style={{ letterSpacing: "-0.02em" }}>
                Red Alumni
              </span>
            </div>
            <p className="text-base font-medium opacity-50 leading-relaxed max-w-xs">
              La red de egresados más poderosa de El Salvador, transformando la educación en empleo real.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-black mb-8 text-xs tracking-[0.2em] uppercase opacity-40">
              Plataforma
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                { href: "/directorio", label: "Directorio Alumni" },
                { href: "/historias", label: "Historias" },
                { href: "/voluntariado", label: "Voluntariado" },
                { href: "/mentoria", label: "Mentoría" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-base font-bold text-white/40 hover:text-white transition-all hover:translate-x-1 inline-block" style={{ textDecoration: "none" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="text-white font-black mb-8 text-xs tracking-[0.2em] uppercase opacity-40">
              Mi Cuenta
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                { href: "/auth/register", label: "Registrarme" },
                { href: "/auth/login", label: "Iniciar sesión" },
                { href: "/dashboard/profile", label: "Mi Perfil" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-base font-bold text-white/40 hover:text-white transition-all hover:translate-x-1 inline-block" style={{ textDecoration: "none" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h4 className="text-white font-black mb-8 text-xs tracking-[0.2em] uppercase opacity-40">
              Organización
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                { href: "https://jaelsalvador.org", label: "JA El Salvador" },
                { href: "https://jaelactics.org", label: "JA Global" },
                { href: "#", label: "Política de privacidad" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-base font-bold text-white/40 hover:text-white transition-all hover:translate-x-1 inline-block" style={{ textDecoration: "none" }} target={l.href.startsWith("http") ? "_blank" : undefined}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-wrap items-center justify-between gap-8 mt-24 pt-12"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-sm font-medium opacity-30">
            © {year} Junior Achievement El Salvador. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold opacity-20 uppercase tracking-widest">Powering Generations</span>
            <span style={{ color: "var(--color-ja-gold)" }}>✦</span>
            <span className="text-xs font-bold opacity-20 uppercase tracking-widest">El Salvador</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
