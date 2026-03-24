"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Lock, Globe } from "lucide-react";
import { trackRegistration } from "@/lib/analytics";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function RegisterForm() {
  const params = useSearchParams();
  const intent = params.get("intent");
  const [step, setStep] = useState<"form" | "success">("form");
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    generacion: "",
    profesion: "",
  });

  const intents: Record<string, string> = {
    reconnect: "¡Nos alegra que estés de vuelta!",
    grow: "Tu próxima oportunidad te espera aquí.",
    business: "Conecta con socios de confianza.",
    contribute: "Gracias por querer dar de vuelta.",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackRegistration("complete");
    setStep("success");
  };

  if (step === "success") {
    return (
      <div style={{ textAlign: "center", padding: "2rem 0" }}>
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🎉</div>
        <h2 style={{ fontSize: "1.75rem", fontWeight: 900, marginBottom: "0.75rem" }}>¡Bienvenido de vuelta!</h2>
        <p style={{ color: "var(--color-muted)", marginBottom: "2rem" }}>Tu perfil está listo. Ya eres parte de la red.</p>
        <Link href="/directorio" className="btn-dark" style={{ justifyContent: "center" }}>
          Explorar el directorio <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      {intent && intents[intent] && (
        <div style={{ background: "#EEF4FF", border: "1px solid #C7D7FE", borderRadius: 12, padding: "0.875rem 1.25rem", color: "var(--color-ja-blue)", fontSize: "0.9375rem", fontWeight: 600 }}>
          {intents[intent]}
        </div>
      )}

      <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Nombre completo</label>
          <input className="input-minimal" id="register-nombre" required placeholder="Ana García" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Generación JA</label>
          <input className="input-minimal" id="register-generacion" placeholder="2018" value={form.generacion} onChange={e => setForm({ ...form, generacion: e.target.value })} />
        </div>
      </div>

      <div>
        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Correo electrónico</label>
        <div style={{ position: "relative" }}>
          <Mail size={16} style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "#9CA3AF" }} />
          <input className="input-minimal" id="register-email" type="email" required placeholder="ana@email.com" style={{ paddingLeft: "2.75rem" }} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        </div>
      </div>

      <div>
        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Contraseña</label>
        <div style={{ position: "relative" }}>
          <Lock size={16} style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "#9CA3AF" }} />
          <input className="input-minimal" id="register-password" type="password" required placeholder="Mínimo 8 caracteres" style={{ paddingLeft: "2.75rem" }} value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
        </div>
      </div>

      <div>
        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#374151" }}>Profesión actual</label>
        <input className="input-minimal" id="register-profesion" placeholder="Desarrolladora de software" value={form.profesion} onChange={e => setForm({ ...form, profesion: e.target.value })} />
      </div>

      <button type="submit" id="register-submit-btn" className="btn-dark" style={{ justifyContent: "center", marginTop: "0.5rem" }} onClick={() => trackRegistration("start")}>
        Crear mi cuenta <ArrowRight size={16} />
      </button>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div style={{ flex: 1, height: 1, background: "#E5E7EB" }} />
        <span style={{ fontSize: "0.875rem", color: "#9CA3AF" }}>o</span>
        <div style={{ flex: 1, height: 1, background: "#E5E7EB" }} />
      </div>

      <button
        type="button"
        id="register-google-btn"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.75rem",
          padding: "0.875rem",
          border: "1.5px solid #E5E7EB",
          borderRadius: 12,
          background: "#fff",
          fontSize: "0.9375rem",
          fontWeight: 600,
          cursor: "pointer",
          transition: "all 0.2s",
          color: "#374151",
        }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = "#9CA3AF")}
        onMouseLeave={e => (e.currentTarget.style.borderColor = "#E5E7EB")}
      >
        <Globe size={18} /> Continuar con Google
      </button>

      <p style={{ textAlign: "center", fontSize: "0.875rem", color: "var(--color-muted)" }}>
        ¿Ya tienes cuenta?{" "}
        <Link href="/auth/login" style={{ color: "var(--color-ja-blue)", fontWeight: 600, textDecoration: "none" }}>
          Iniciar sesión
        </Link>
      </p>
    </form>
  );
}

export default function RegisterPage() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--color-surface)", padding: "6rem 1.5rem 4rem" }}>
      <div style={{ background: "#fff", borderRadius: 24, padding: "2.5rem", width: "100%", maxWidth: 520, boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, background: "var(--color-ja-blue)", borderRadius: 14, marginBottom: "1rem" }}>
            <span style={{ color: "#fff", fontWeight: 900, fontSize: 16 }}>JA</span>
          </div>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 900, color: "#0A0A0F" }}>Únete a la Red Alumni</h1>
          <p style={{ color: "var(--color-muted)", marginTop: "0.5rem" }}>Crea tu cuenta y reconéctate con tu generación.</p>
        </div>

        <Suspense fallback={<div>Cargando...</div>}>
          <RegisterForm />
        </Suspense>
      </div>
    </main>
  );
}
