"use client";
import { useState } from "react";
import { ArrowRight, CheckCircle, Upload } from "lucide-react";
import { trackCTA } from "@/lib/analytics";

export default function NuevaHistoriaPage() {
  const [step, setStep] = useState<"form" | "success">("form");
  const [form, setForm] = useState({ nombre: "", generacion: "", historia: "", logro: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackCTA("historia-submit");
    setStep("success");
  };

  if (step === "success") {
    return (
      <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--color-surface)", padding: "6rem 1.5rem" }}>
        <div style={{ textAlign: "center", background: "#fff", borderRadius: 24, padding: "3rem 2.5rem", maxWidth: 480, width: "100%", boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
          <CheckCircle size={56} color="#1A7F42" style={{ marginBottom: "1.25rem" }} />
          <h2 style={{ fontSize: "1.75rem", fontWeight: 900, marginBottom: "0.75rem" }}>¡Historia enviada!</h2>
          <p style={{ color: "var(--color-muted)", lineHeight: 1.7 }}>Tu historia será revisada por nuestro equipo y publicada pronto. Gracias por inspirar a otros alumni.</p>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", background: "var(--color-surface)", padding: "6rem 1.5rem 4rem" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <div style={{ background: "#fff", borderRadius: 24, padding: "2.5rem", boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}>
          <div style={{ marginBottom: "2rem" }}>
            <p style={{ color: "var(--color-ja-gold)", fontWeight: 700, fontSize: "0.8125rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              #SoyJA
            </p>
            <h1 style={{ fontSize: "1.75rem", fontWeight: 900 }}>Cuenta tu historia</h1>
            <p style={{ color: "var(--color-muted)", marginTop: "0.5rem" }}>Tu historia puede cambiar la perspectiva de alguien más.</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Nombre completo</label>
                <input id="historia-nombre" className="input-minimal" required placeholder="Tu nombre" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Generación JA</label>
                <input id="historia-generacion" className="input-minimal" placeholder="Ej: 2016" value={form.generacion} onChange={e => setForm({ ...form, generacion: e.target.value })} />
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Tu logro o impacto principal</label>
              <input id="historia-logro" className="input-minimal" required placeholder="Ej: Fundé mi empresa y hoy empleo a 20 personas" value={form.logro} onChange={e => setForm({ ...form, logro: e.target.value })} />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Cuenta tu historia</label>
              <textarea
                id="historia-texto"
                className="input-minimal"
                required
                rows={6}
                placeholder="Cuéntanos cómo JA cambió tu vida y qué has logrado desde entonces..."
                style={{ resize: "vertical", lineHeight: 1.7 }}
                value={form.historia}
                onChange={e => setForm({ ...form, historia: e.target.value })}
              />
            </div>

            {/* File upload */}
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Foto (opcional)</label>
              <label
                id="historia-upload"
                htmlFor="historia-file"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.75rem",
                  padding: "1.5rem",
                  border: "2px dashed #E5E7EB",
                  borderRadius: 12,
                  cursor: "pointer",
                  color: "var(--color-muted)",
                  fontSize: "0.9375rem",
                  transition: "border-color 0.2s",
                }}
              >
                <Upload size={20} />
                <span>Subir imagen</span>
              </label>
              <input id="historia-file" type="file" accept="image/*" style={{ display: "none" }} />
            </div>

            <button type="submit" id="historia-submit-btn" className="btn-dark" style={{ justifyContent: "center" }}>
              Enviar mi historia <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
