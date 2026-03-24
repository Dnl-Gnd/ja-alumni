import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-dark">
      <div className="container-max" style={{ paddingTop: "4rem", paddingBottom: "3rem" }}>
        <div
          className="grid gap-12"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="flex items-center justify-center rounded-lg font-black"
                style={{
                  width: 40,
                  height: 40,
                  background: "var(--color-ja-blue)",
                  color: "#fff",
                  fontSize: 14,
                }}
              >
                JA
              </div>
              <span className="font-bold text-white text-lg" style={{ letterSpacing: "-0.02em" }}>
                Red Alumni
              </span>
            </div>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: 260 }}>
              La red de egresados más activa de El Salvador, construyendo el país desde adentro.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm" style={{ letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Plataforma
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/directorio", label: "Directorio Alumni" },
                { href: "/historias", label: "Historias" },
                { href: "/voluntariado", label: "Voluntariado" },
                { href: "/mentoria", label: "Mentoría" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm" style={{ letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Mi Cuenta
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/auth/register", label: "Registrarme" },
                { href: "/auth/login", label: "Iniciar sesión" },
                { href: "/dashboard/profile", label: "Mi Perfil" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm" style={{ letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Organización
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: "https://jaelsalvador.org", label: "JA El Salvador" },
                { href: "https://jaelactics.org", label: "JA Global" },
                { href: "#", label: "Política de privacidad" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }} target={l.href.startsWith("http") ? "_blank" : undefined}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-wrap items-center justify-between gap-4 mt-12 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            © {year} Junior Achievement El Salvador. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>Construido con</span>
            <span style={{ color: "var(--color-ja-gold)" }}>♥</span>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>en El Salvador</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
