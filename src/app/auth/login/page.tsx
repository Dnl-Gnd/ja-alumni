"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Lock, Globe } from "lucide-react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to real auth provider
    window.location.href = "/dashboard/profile";
  };

  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--color-surface)", padding: "6rem 1.5rem 4rem" }}>
      <div style={{ background: "#fff", borderRadius: 24, padding: "2.5rem", width: "100%", maxWidth: 440, boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, background: "var(--color-ja-blue)", borderRadius: 14, marginBottom: "1rem" }}>
            <span style={{ color: "#fff", fontWeight: 900, fontSize: 16 }}>JA</span>
          </div>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 900, color: "#0A0A0F" }}>Bienvenido de vuelta</h1>
          <p style={{ color: "var(--color-muted)", marginTop: "0.5rem" }}>Inicia sesión en tu cuenta Alumni.</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Correo electrónico</label>
            <div style={{ position: "relative" }}>
              <Mail size={16} style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "#9CA3AF" }} />
              <input className="input-minimal" id="login-email" type="email" required placeholder="tu@email.com" style={{ paddingLeft: "2.75rem" }} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            </div>
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <label style={{ fontSize: "0.875rem", fontWeight: 600, color: "#374151" }}>Contraseña</label>
              <a href="#" style={{ fontSize: "0.875rem", color: "var(--color-ja-blue)", textDecoration: "none" }}>¿Olvidaste tu contraseña?</a>
            </div>
            <div style={{ position: "relative" }}>
              <Lock size={16} style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "#9CA3AF" }} />
              <input className="input-minimal" id="login-password" type="password" required placeholder="Tu contraseña" style={{ paddingLeft: "2.75rem" }} value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
            </div>
          </div>

          <button type="submit" id="login-submit-btn" className="btn-dark" style={{ justifyContent: "center" }}>
            Iniciar sesión <ArrowRight size={16} />
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ flex: 1, height: 1, background: "#E5E7EB" }} />
            <span style={{ fontSize: "0.875rem", color: "#9CA3AF" }}>o</span>
            <div style={{ flex: 1, height: 1, background: "#E5E7EB" }} />
          </div>

          <button
            type="button"
            id="login-google-btn"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", padding: "0.875rem", border: "1.5px solid #E5E7EB", borderRadius: 12, background: "#fff", fontSize: "0.9375rem", fontWeight: 600, cursor: "pointer", color: "#374151", transition: "all 0.2s" }}
          >
            <Globe size={18} /> Continuar con Google
          </button>

          <p style={{ textAlign: "center", fontSize: "0.875rem", color: "var(--color-muted)" }}>
            ¿No tienes cuenta?{" "}
            <Link href="/auth/register" style={{ color: "var(--color-ja-blue)", fontWeight: 600, textDecoration: "none" }}>
              Registrarme
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
