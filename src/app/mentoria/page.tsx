"use client";
import { useState } from "react";
import { ArrowRight, CheckCircle, Target } from "lucide-react";
import { trackCTA } from "@/lib/analytics";

export default function MentoriaPage() {
  const [step, setStep] = useState<"form" | "success">("form");
  const [form, setForm] = useState({ nombre: "", email: "", generacion: "", profesion: "", empresa: "", areas: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackCTA("mentoria-apply");
    setStep("success");
  };

  if (step === "success") {
    return (
      <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--color-surface)", padding: "6rem 1.5rem" }}>
        <div style={{ textAlign: "center", background: "#fff", borderRadius: 24, padding: "3rem 2.5rem", maxWidth: 480, width: "100%", boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
          <CheckCircle size={56} color="#1A7F42" style={{ marginBottom: "1.25rem" }} />
          <h2 style={{ fontSize: "1.75rem", fontWeight: 900, marginBottom: "0.75rem" }}>¡Postulación enviada!</h2>
          <p style={{ color: "var(--color-muted)", lineHeight: 1.7 }}>Tu postulación como mentor fue recibida. Pronto te contactaremos para los siguientes pasos. Gracias por dar de vuelta.</p>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", background: "var(--color-surface)", padding: "6rem 1.5rem 4rem" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        {/* Hero banner */}
        <div style={{ background: "var(--color-dark)", borderRadius: 24, padding: "2.5rem", marginBottom: "1.5rem", color: "#fff" }}>
          <div style={{ marginBottom: "1.25rem" }}>
            <Target size={48} color="#fff" />
          </div>
          <h1 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "0.75rem" }}>Postularme como mentor</h1>
          <p style={{ opacity: 0.85, lineHeight: 1.7 }}>Forma a la próxima generación de líderes. Tu experiencia vale más de lo que imaginas.</p>
        </div>

        <div style={{ background: "#fff", borderRadius: 24, padding: "2.5rem", boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Nombre completo</label>
                <input id="mentoria-nombre" className="input-minimal" required placeholder="Tu nombre" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Generación JA</label>
                <input id="mentoria-generacion" className="input-minimal" placeholder="Ej: 2012" value={form.generacion} onChange={e => setForm({ ...form, generacion: e.target.value })} />
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Correo electrónico</label>
              <input id="mentoria-email" className="input-minimal" type="email" required placeholder="tu@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            </div>

            <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Profesión</label>
                <input id="mentoria-profesion" className="input-minimal" required placeholder="Tu rol actual" value={form.profesion} onChange={e => setForm({ ...form, profesion: e.target.value })} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Empresa</label>
                <input id="mentoria-empresa" className="input-minimal" placeholder="Donde trabajas" value={form.empresa} onChange={e => setForm({ ...form, empresa: e.target.value })} />
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Áreas en las que puedes mentorear</label>
              <select id="mentoria-areas" className="input-minimal" required value={form.areas} onChange={e => setForm({ ...form, areas: e.target.value })}>
                <option value="">Selecciona un área...</option>
                <option>Emprendimiento</option>
                <option>Tecnología</option>
                <option>Finanzas</option>
                <option>Marketing</option>
                <option>Liderazgo</option>
                <option>Exportaciones</option>
                <option>Recursos Humanos</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>¿Qué quieres aportarle a la próxima generación?</label>
              <textarea
                id="mentoria-mensaje"
                className="input-minimal"
                required
                rows={4}
                placeholder="Tu mensaje para los futuros mentoreados..."
                style={{ resize: "vertical", lineHeight: 1.7 }}
                value={form.mensaje}
                onChange={e => setForm({ ...form, mensaje: e.target.value })}
              />
            </div>

            <button type="submit" id="mentoria-submit-btn" className="btn-dark" style={{ justifyContent: "center" }}>
              Enviar postulación <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
