"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import StoryModal from "@/components/landing/StoryModal";
import { trackCTA } from "@/lib/analytics";
import {
  Users,
  Briefcase,
  Handshake,
  TrendingUp,
  Globe,
  ArrowRight,
  X,
  Code2,
  Sprout,
  Coffee,
  Landmark,
  HeartHandshake,
  Target,
} from "lucide-react";

/* ───── Data ───── */
const valueProps = [
  {
    icon: Users,
    title: "Networking real",
    desc: "Conecta con +10,000 ex-alumnos que ya están construyendo el futuro.",
  },
  {
    icon: Briefcase,
    title: "Oportunidades laborales",
    desc: "Ofertas exclusivas de empresas que conocen el valor de ser JA.",
  },
  {
    icon: Handshake,
    title: "Negocios y colaboraciones",
    desc: "Encuentra socios estratégicos dentro de tu misma red de confianza.",
  },
  {
    icon: TrendingUp,
    title: "Acceso a liderazgo",
    desc: "Programas, eventos y espacios diseñados para líderes en acción.",
  },
];

const stories = [
  {
    id: 1,
    name: "Daniela Flores",
    role: "Programadora Senior",
    company: "Banco Agrícola",
    gen: "Generación 2014",
    preview:
      "De trabajo de limpieza a desarrolladora con salario de $3,000. Su empresa JA cambió todo.",
    full: "Daniela inició en JA El Salvador a los 16 años. Su empresa estudiantil ganó el primer lugar nacional. Hoy lidera un equipo de 12 ingenieros en una de las instituciones financieras más grandes del país, con un salario de $3,000 mensuales. 'JA me enseñó que mi origen no definía mi destino.'",
    icon: Code2,
    color: "#E8F4FD",
    accent: "#004B8D",
  },
  {
    id: 2,
    name: "Rodrigo Mena",
    role: "CEO & Fundador",
    company: "AgroTech SV",
    gen: "Generación 2010",
    preview:
      "Emprendedor desde los 11 años. Su startup de agro-tecnología hoy mueve $2M anuales.",
    full: "Rodrigo fundó su primera empresa en la secundaria como parte del programa JA. Hoy su startup conecta agricultores salvadoreños con compradores internacionales usando IA. Factura más de $2 millones anuales y emplea a 45 personas.",
    icon: Sprout,
    color: "#EAFAF1",
    accent: "#1A7F42",
  },
  {
    id: 3,
    name: "Valeria Santos",
    role: "Directora de Exportaciones",
    company: "Café La Montaña",
    gen: "Generación 2016",
    preview:
      "Exportando café de especialidad a Estados Unidos y Europa desde Chalatenango.",
    full: "Valeria regresó a su comunidad en Chalatenango con la visión de exportar café de especialidad directamente al mercado internacional. Sus conexiones JA le abrieron las puertas a importadores en Nueva York y Berlín. Hoy exporta 40 toneladas por año.",
    icon: Coffee,
    color: "#FEF3E2",
    accent: "#C05621",
  },
  {
    id: 4,
    name: "Ernesto Chávez",
    role: "Director Gremial",
    company: "COEXPORT",
    gen: "Generación 2008",
    preview:
      "Referente del liderazgo gremial. Representa a más de 200 exportadores salvadoreños.",
    full: "Ernesto fue presidente de la empresa JA de su colegio y no se detuvo ahí. Hoy preside uno de los gremios empresariales más influyentes de El Salvador, representando a más de 200 empresas exportadoras. 'Sin JA no hubiera sabido cómo hablar en público el primer día.'",
    icon: Landmark,
    color: "#F3F0FF",
    accent: "#6B46C1",
  },
];

const segmentOptions = [
  {
    id: "reconectar",
    label: "Quiero reconectarme",
    desc: "Encuentra a tus compañeros y retoma el hilo",
    href: "/auth/register?intent=reconnect",
    bg: "var(--color-ja-blue)",
  },
  {
    id: "crecer",
    label: "Quiero crecer profesionalmente",
    desc: "Accede a oportunidades laborales y mentores",
    href: "/auth/register?intent=grow",
    bg: "#1A7F42",
  },
  {
    id: "negocios",
    label: "Quiero hacer negocios",
    desc: "Conecta con socios de confianza en tu red",
    href: "/auth/register?intent=business",
    bg: "#C05621",
  },
  {
    id: "aportar",
    label: "Quiero aportar",
    desc: "Sé mentor, voluntario o patrocinador",
    href: "/auth/register?intent=contribute",
    bg: "#6B46C1",
  },
];

/* ───── Page ───── */
export default function Home() {
  const [activeStory, setActiveStory] = useState(null);

  return (
    <main>
      {/* ── SECTION 1: HERO ── */}
      <section
        id="hero"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <Image
          src="/hero.png"
          alt="Alumni JA El Salvador"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.8) 100%)",
          }}
        />

        {/* Content */}
        <div
          className="container-max"
          style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "8rem 1.5rem 6rem" }}
        >
          {/* Badge */}
          <div
            className="animate-fade-in"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(255,179,0,0.15)",
              border: "1px solid rgba(255,179,0,0.4)",
              borderRadius: "100px",
              padding: "0.375rem 1rem",
              marginBottom: "2rem",
            }}
          >
            <span style={{ color: "var(--color-ja-gold)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Junior Achievement El Salvador
            </span>
          </div>

          <h1
            className="animate-fade-in-up delay-100"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem",
            }}
          >
            Fuiste JA.{" "}
            <span className="text-gradient">Sigues siendo JA.</span>
          </h1>

          <p
            className="animate-fade-in-up delay-200"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.65,
              maxWidth: 660,
              margin: "0 auto 2.5rem",
            }}
          >
            Formas parte de una red de más de 1 millón de personas que están
            construyendo el país. La pregunta es: ¿vas a seguir desconectado o
            vas a volver?
          </p>

          <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4 justify-center">
            <Link
              href="/auth/register"
              className="btn-primary"
              id="hero-cta-primary"
              onClick={() => trackCTA("hero-reconectarme")}
              style={{ fontSize: "1rem", padding: "1rem 2.25rem" }}
            >
              Quiero reconectarme <ArrowRight size={18} />
            </Link>
            <a
              href="#valor"
              className="btn-outline"
              id="hero-cta-secondary"
              style={{ fontSize: "1rem", padding: "1rem 2.25rem" }}
            >
              Conocer más
            </a>
          </div>

          {/* Stats */}
          <div
            className="animate-fade-in-up delay-500"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2.5rem",
              justifyContent: "center",
              marginTop: "5rem",
            }}
          >
            {[
              { num: "1M+", label: "Alumni en el mundo" },
              { num: "10K+", label: "Egresados en SV" },
              { num: "25+", label: "Años de historia" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: 900, color: "var(--color-ja-gold)", letterSpacing: "-0.03em" }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", marginTop: "0.25rem", letterSpacing: "0.02em" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            animation: "bounce 2s infinite",
          }}
        >
          <div style={{ width: 1, height: 48, background: "rgba(255,255,255,0.3)" }} />
        </div>
      </section>

      {/* ── SECTION 2: VALUE PROPOSITION ── */}
      <section id="valor" className="section-padding" style={{ background: "#fff" }}>
        <div className="container-max">
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ color: "var(--color-ja-blue)", fontWeight: 700, fontSize: "0.8125rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              ¿Por qué estar aquí?
            </p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#0A0A0F", marginBottom: "1rem" }}>
              No es solo una red.
            </h2>
            <p style={{ fontSize: "1.125rem", color: "var(--color-muted)", maxWidth: 560, margin: "0 auto" }}>
              Es donde pasan oportunidades que no vas a ver en otros lados.
            </p>
          </div>

          {/* Grid */}
          <div
            className="grid gap-8"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
          >
            {valueProps.map((vp, i) => {
              const Icon = vp.icon;
              return (
                <div
                  key={vp.title}
                  className="card-hover"
                  style={{
                    background: i % 2 === 0 ? "var(--color-surface)" : "#fff",
                    border: "1.5px solid #F0F0F5",
                    borderRadius: 20,
                    padding: "2rem",
                    cursor: "default",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: "var(--color-ja-blue)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <Icon size={24} color="#fff" />
                  </div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0A0A0F", marginBottom: "0.625rem" }}>
                    {vp.title}
                  </h3>
                  <p style={{ fontSize: "0.9375rem", color: "var(--color-muted)", lineHeight: 1.65 }}>
                    {vp.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link
              href="/auth/register"
              className="btn-dark"
              id="valor-cta"
              onClick={() => trackCTA("valor-actualizar")}
            >
              Actualizar mis datos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SOY JA ── */}
      <section id="soy-ja" className="section-padding" style={{ background: "var(--color-surface)" }}>
        <div className="container-max">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ color: "var(--color-ja-gold)", fontWeight: 700, fontSize: "0.8125rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              #SoyJA
            </p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#0A0A0F", marginBottom: "1rem" }}>
              Historias que inspiran
            </h2>
            <p style={{ fontSize: "1.125rem", color: "var(--color-muted)", maxWidth: 520, margin: "0 auto" }}>
              Alumni que demuestran que ser JA no es un pasado, es una mentalidad.
            </p>
          </div>

          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
          >
            {stories.map((s) => (
              <div
                key={s.id}
                className="card-hover"
                onClick={() => { setActiveStory(s); trackCTA(`soy-ja-card-${s.id}`); }}
                style={{
                  background: s.color,
                  border: `1.5px solid ${s.accent}22`,
                  borderRadius: 20,
                  padding: "2rem",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ marginBottom: "1rem" }}>
                  <s.icon size={40} color={s.accent} />
                </div>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, color: s.accent, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  {s.gen}
                </p>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#0A0A0F", marginBottom: "0.25rem" }}>
                  {s.name}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--color-muted)", marginBottom: "1rem" }}>
                  {s.role} · {s.company}
                </p>
                <p style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.6 }}>
                  {s.preview}
                </p>
                <div style={{ marginTop: "1.25rem", display: "flex", alignItems: "center", gap: "0.375rem", color: s.accent, fontSize: "0.875rem", fontWeight: 600 }}>
                  Leer historia <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link
              href="/historias/nueva"
              className="btn-dark"
              id="soyja-cta"
              onClick={() => trackCTA("soy-ja-cuenta-historia")}
            >
              Cuenta tu historia <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Story Modal */}
      {activeStory && (
        <StoryModal story={activeStory} onClose={() => setActiveStory(null)} />
      )}

      {/* ── SECTION 4: PARTICIPATION ── */}
      <section id="participa" className="section-padding" style={{ background: "#fff" }}>
        <div className="container-max">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ color: "var(--color-ja-blue)", fontWeight: 700, fontSize: "0.8125rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              Actívate
            </p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#0A0A0F" }}>
              El impacto que solo tú puedes dar
            </h2>
          </div>

          <div
            className="grid gap-8"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
          >
            {/* Voluntariado */}
            <div
              style={{
                background: "var(--color-ja-blue)",
                borderRadius: 24,
                padding: "3rem",
                color: "#fff",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ marginBottom: "1.5rem" }}>
                <HeartHandshake size={48} color="#fff" />
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "1rem" }}>
                Voluntariado
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, opacity: 0.85, marginBottom: "2rem" }}>
                Impacta directamente a jóvenes que están donde tú estuviste.
                Una hora de tu tiempo puede cambiar una vida.
              </p>
              <Link
                href="/voluntariado"
                className="btn-primary"
                id="voluntariado-cta"
                onClick={() => trackCTA("participacion-voluntariado")}
              >
                Quiero ser voluntario <ArrowRight size={16} />
              </Link>
            </div>

            {/* Mentoría */}
            <div
              style={{
                background: "var(--color-dark)",
                borderRadius: 24,
                padding: "3rem",
                color: "#fff",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ marginBottom: "1.5rem" }}>
                <Target size={48} color="#fff" />
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "1rem" }}>
                Mentoría
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, opacity: 0.85, marginBottom: "2rem" }}>
                Forma a la próxima generación de líderes. Tu experiencia es
                exactamente lo que necesitan para crecer.
              </p>
              <Link
                href="/mentoria"
                className="btn-primary"
                id="mentoria-cta"
                onClick={() => trackCTA("participacion-mentoria")}
              >
                Postularme como mentor <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: GLOBAL PLATFORM ── */}
      <section
        id="global"
        className="section-padding"
        style={{
          background: "var(--color-dark)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative globe gradient */}
        <div
          style={{
            position: "absolute",
            right: "-10%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,75,141,0.5) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container-max" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 640 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <Globe size={16} color="var(--color-ja-gold)" />
              <span style={{ color: "var(--color-ja-gold)", fontWeight: 700, fontSize: "0.8125rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                JA Worldwide Gather
              </span>
            </div>

            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#fff", marginBottom: "1.5rem" }}>
              El Salvador es solo el
              comienzo.
            </h2>

            <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
              {[
                "Conecta con líderes globales de 100+ países",
                "Accede a oportunidades laborales internacionales",
                "Participa en intercambios, cumbres y programas globales",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "rgba(255,255,255,0.8)", fontSize: "1.0625rem", lineHeight: 1.6 }}>
                  <span style={{ color: "var(--color-ja-gold)", marginTop: "0.1rem", flexShrink: 0 }}>✦</span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="https://jaelsalvador.org"
              target="_blank"
              className="btn-primary"
              id="global-cta"
              onClick={() => trackCTA("global-explorar")}
              style={{ fontSize: "1rem", padding: "1rem 2rem" }}
            >
              Explorar oportunidades globales <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: SMART SEGMENTATION ── */}
      <section id="segmentacion" className="section-padding" style={{ background: "var(--color-surface)" }}>
        <div className="container-max">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#0A0A0F", marginBottom: "1rem" }}>
              ¿Qué quieres hacer hoy?
            </h2>
            <p style={{ fontSize: "1.125rem", color: "var(--color-muted)" }}>
              Elige tu camino y te llevamos directo ahí.
            </p>
          </div>

          <div
            className="grid gap-5"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
          >
            {segmentOptions.map((opt) => (
              <Link
                key={opt.id}
                href={opt.href}
                id={`segment-${opt.id}`}
                onClick={() => trackCTA(`segment-${opt.id}`)}
                style={{
                  display: "block",
                  background: "#fff",
                  border: "1.5px solid #F0F0F5",
                  borderRadius: 20,
                  padding: "2rem",
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                className="card-hover group"
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: opt.bg,
                    marginBottom: "1.25rem",
                  }}
                />
                <h3 style={{ fontSize: "1.0625rem", fontWeight: 800, color: "#0A0A0F", marginBottom: "0.5rem" }}>
                  {opt.label}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.6 }}>
                  {opt.desc}
                </p>
                <div style={{ marginTop: "1.25rem", display: "flex", alignItems: "center", gap: "0.375rem", color: opt.bg, fontWeight: 700, fontSize: "0.875rem" }}>
                  Empezar <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FINAL CTA ── */}
      <section
        id="final-cta"
        style={{
          background: "var(--color-ja-blue)",
          textAlign: "center",
          padding: "7rem 1.5rem",
        }}
      >
        <div className="container-max">
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Ya eres parte
          </p>
          <h2
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: 700,
              margin: "0 auto 1.5rem",
              cursor: "default"
            }}
          >
            Tu red ya existe.{" "}
            <span style={{ color: "var(--color-ja-gold)" }}>
              Solo falta que entres.
            </span>
          </h2>
          <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.75)", maxWidth: 500, margin: "0 auto 3rem", lineHeight: 1.65 }}>
            Miles de alumni ya están dentro. Conexiones, oportunidades y
            colaboraciones te esperan.
          </p>
          <Link
            href="/auth/register"
            className="btn-primary"
            id="final-cta-btn"
            onClick={() => trackCTA("final-unirme")}
            style={{ fontSize: "1.0625rem", padding: "1.125rem 2.5rem" }}
          >
            Unirme a la Red Alumni <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
