import Link from "next/link";
import { ArrowRight, Code2, Sprout, Coffee, Landmark } from "lucide-react";

const stories = [
  { id: 1, name: "Daniela Flores", role: "Programadora Senior", company: "Banco Agrícola", gen: "2014", preview: "De trabajo de limpieza a desarrolladora con salario de $3,000.", icon: Code2, color: "#E8F4FD" },
  { id: 2, name: "Rodrigo Mena", role: "CEO & Fundador", company: "AgroTech SV", gen: "2010", preview: "Emprendedor desde los 11 años. Su startup de agro-tecnología hoy mueve $2M anuales.", icon: Sprout, color: "#EAFAF1" },
  { id: 3, name: "Valeria Santos", role: "Directora de Exportaciones", company: "Café La Montaña", gen: "2016", preview: "Exportando café de especialidad a Estados Unidos y Europa desde Chalatenango.", icon: Coffee, color: "#FEF3E2" },
  { id: 4, name: "Ernesto Chávez", role: "Director Gremial", company: "COEXPORT", gen: "2008", preview: "Representa a más de 200 exportadores salvadoreños.", icon: Landmark, color: "#F3F0FF" },
];

export default function HistoriasPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--color-surface)", padding: "6rem 1.5rem 4rem" }}>
      <div className="container-max">
        <div style={{ marginBottom: "3rem" }}>
          <p style={{ color: "var(--color-ja-gold)", fontWeight: 700, fontSize: "0.8125rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            #SoyJA
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 900, marginBottom: "0.75rem" }}>Historias Alumni</h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--color-muted)", maxWidth: 560 }}>
            Personas reales, logros reales. Descubre lo que ex-alumnos JA han construido.
          </p>
        </div>

        <div style={{ background: "var(--color-ja-blue)", borderRadius: 20, padding: "2rem", marginBottom: "2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 900, color: "#fff", marginBottom: "0.5rem" }}>¿Tienes una historia que contar?</h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9375rem" }}>Tu experiencia puede inspirar a la próxima generación de líderes JA.</p>
          </div>
          <Link href="/historias/nueva" className="btn-primary" id="historias-nueva-btn">
            Contar mi historia <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
          {stories.map((s) => (
            <div
              key={s.id}
              id={`historia-card-${s.id}`}
              className="card-hover"
              style={{ background: s.color, borderRadius: 20, padding: "2rem", cursor: "pointer" }}
            >
              <div style={{ marginBottom: "1rem" }}>
                <s.icon size={40} color="var(--color-ja-blue)" />
              </div>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-ja-blue)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Generación {s.gen}
              </p>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 800, marginBottom: "0.25rem" }}>{s.name}</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--color-muted)", marginBottom: "0.75rem" }}>{s.role} · {s.company}</p>
              <p style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.6 }}>{s.preview}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
