"use client";
import { useState } from "react";
import { ArrowRight, CheckCircle, HeartHandshake } from "lucide-react";
import { trackCTA } from "@/lib/analytics";

export default function VoluntariadoPage() {
  const [step, setStep] = useState<"form" | "success">("form");
  const [form, setForm] = useState({ nombre: "", email: "", generacion: "", disponibilidad: "", motivacion: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackCTA("voluntariado-apply");
    setStep("success");
  };

  if (step === "success") {
    return (
      <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--color-surface)", padding: "6rem 1.5rem" }}>
        <div style={{ textAlign: "center", background: "#fff", borderRadius: 24, padding: "3rem 2.5rem", maxWidth: 480, width: "100%", boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
          <CheckCircle size={56} color="#1A7F42" style={{ marginBottom: "1.25rem" }} />
          <h2 style={{ fontSize: "1.75rem", fontWeight: 900, marginBottom: "0.75rem" }}>¡Aplicación recibida!</h2>
          <p style={{ color: "var(--color-muted)", lineHeight: 1.7 }}>El equipo de JA se comunicará contigo pronto. Tu tiempo impacta directamente en la vida de jóvenes estudiantes.</p>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", background: "var(--color-surface)", padding: "6rem 1.5rem 4rem" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        {/* Hero banner */}
        <div style={{ background: "var(--color-ja-blue)", borderRadius: 24, padding: "2.5rem", marginBottom: "1.5rem", color: "#fff" }}>
          <div style={{ marginBottom: "1.25rem" }}>
            <HeartHandshake size={48} color="#fff" />
          </div>
          <h1 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "0.75rem" }}>Quiero ser voluntario</h1>
          <p style={{ opacity: 0.85, lineHeight: 1.7 }}>Impacta directamente a jóvenes que están donde tú estuviste. Una hora de tu tiempo puede cambiar una vida.</p>
        </div>

        <div style={{ background: "#fff", borderRadius: 24, padding: "2.5rem", boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Nombre completo</label>
                <input id="voluntariado-nombre" className="input-minimal" required placeholder="Tu nombre" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Generación JA</label>
                <input id="voluntariado-generacion" className="input-minimal" placeholder="Ej: 2015" value={form.generacion} onChange={e => setForm({ ...form, generacion: e.target.value })} />
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Correo electrónico</label>
              <input id="voluntariado-email" className="input-minimal" type="email" required placeholder="tu@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Disponibilidad de tiempo</label>
              <select id="voluntariado-disponibilidad" className="input-minimal" required value={form.disponibilidad} onChange={e => setForm({ ...form, disponibilidad: e.target.value })}>
                <option value="">Selecciona...</option>
                <option>1-2 horas por semana</option>
                <option>3-5 horas por semana</option>
                <option>Más de 5 horas por semana</option>
                <option>Solo fines de semana</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>¿Por qué quieres ser voluntario?</label>
              <textarea
                id="voluntariado-motivacion"
                className="input-minimal"
                required
                rows={4}
                placeholder="Cuéntanos qué te motiva a volver a JA..."
                style={{ resize: "vertical", lineHeight: 1.7 }}
                value={form.motivacion}
                onChange={e => setForm({ ...form, motivacion: e.target.value })}
              />
            </div>

            <button type="submit" id="voluntariado-submit-btn" className="btn-primary" style={{ justifyContent: "center", background: "var(--color-ja-blue)", color: "#fff" }}>
              Enviar aplicación <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
