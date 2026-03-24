"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function EditProfilePage() {
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    nombre: "Ana García",
    generacion: "2018",
    profesion: "Desarrolladora Full Stack",
    empresa: "Grupo Sivar Tech",
    bio: "Egresada de JA 2018. Apasionada de la tecnología y el impacto social.",
    intereses: "Tecnología, Emprendimiento, Sostenibilidad",
    mentoria: true,
    voluntariado: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <main style={{ minHeight: "100vh", background: "var(--color-surface)", padding: "6rem 1.5rem 4rem" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <h1 style={{ fontSize: "1.75rem", fontWeight: 900 }}>Editar perfil</h1>
            <p style={{ color: "var(--color-muted)", marginTop: "0.25rem" }}>Mantén tu información actualizada.</p>
          </div>
          <Link href="/dashboard/profile" style={{ color: "var(--color-ja-blue)", fontWeight: 600, textDecoration: "none", fontSize: "0.9375rem" }}>
            ← Volver al perfil
          </Link>
        </div>

        <div style={{ background: "#fff", borderRadius: 24, padding: "2.5rem", boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}>
          {saved && (
            <div style={{ background: "#EAFAF1", border: "1px solid #A7F3D0", borderRadius: 12, padding: "0.875rem 1.25rem", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem", color: "#065F46", fontWeight: 600 }}>
              <CheckCircle size={18} /> Cambios guardados correctamente
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Nombre completo</label>
                <input id="edit-nombre" className="input-minimal" required value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Generación JA</label>
                <input id="edit-generacion" className="input-minimal" value={form.generacion} onChange={e => setForm({ ...form, generacion: e.target.value })} />
              </div>
            </div>

            <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Profesión</label>
                <input id="edit-profesion" className="input-minimal" value={form.profesion} onChange={e => setForm({ ...form, profesion: e.target.value })} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Empresa</label>
                <input id="edit-empresa" className="input-minimal" value={form.empresa} onChange={e => setForm({ ...form, empresa: e.target.value })} />
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Biografía</label>
              <textarea id="edit-bio" className="input-minimal" rows={3} style={{ resize: "vertical", lineHeight: 1.7 }} value={form.bio} onChange={e => setForm({ ...form, bio: e.target.value })} />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Intereses (separados por coma)</label>
              <input id="edit-intereses" className="input-minimal" placeholder="Tecnología, Emprendimiento" value={form.intereses} onChange={e => setForm({ ...form, intereses: e.target.value })} />
            </div>

            {/* Toggles */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#374151" }}>Participación</p>
              {[
                { key: "mentoria", label: "Disponible como mentor" },
                { key: "voluntariado", label: "Disponible como voluntario" },
              ].map((opt) => (
                <label key={opt.key} style={{ display: "flex", alignItems: "center", gap: "0.75rem", cursor: "pointer" }}>
                  <input
                    id={`edit-${opt.key}`}
                    type="checkbox"
                    checked={form[opt.key as "mentoria" | "voluntariado"]}
                    onChange={e => setForm({ ...form, [opt.key]: e.target.checked })}
                    style={{ width: 18, height: 18, accentColor: "var(--color-ja-blue)" }}
                  />
                  <span style={{ fontSize: "0.9375rem", color: "#374151" }}>{opt.label}</span>
                </label>
              ))}
            </div>

            <button type="submit" id="edit-save-btn" className="btn-dark" style={{ justifyContent: "center", marginTop: "0.5rem" }}>
              Guardar cambios <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
