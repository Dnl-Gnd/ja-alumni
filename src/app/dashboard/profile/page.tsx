"use client";
import { useState } from "react";
import Link from "next/link";
import { User, Briefcase, Building2, Tag, Edit2, CheckCircle } from "lucide-react";

const mockUser = {
  nombre: "Ana García",
  generacion: "2018",
  profesion: "Desarrolladora Full Stack",
  empresa: "Grupo Sivar Tech",
  intereses: ["Tecnología", "Emprendimiento", "Sostenibilidad"],
  mentoria: true,
  voluntariado: false,
  bio: "Egresada de JA 2018. Apasionada de la tecnología y el impacto social. Actualmente construyendo productos digitales que cambian vidas en Centroamérica.",
};

export default function ProfilePage() {
  const [user] = useState(mockUser);

  return (
    <main style={{ minHeight: "100vh", background: "var(--color-surface)", padding: "6rem 1.5rem 4rem" }}>
      <div className="container-max" style={{ maxWidth: 900 }}>
        {/* Header card */}
        <div
          style={{
            background: "#fff",
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            marginBottom: "1.5rem",
          }}
        >
          {/* Banner */}
          <div style={{ height: 120, background: "linear-gradient(135deg, var(--color-ja-blue), #003568)", position: "relative" }}>
            <Link
              href="/dashboard/profile/edit"
              id="profile-edit-btn"
              className="btn-outline"
              style={{ position: "absolute", top: "1rem", right: "1rem", padding: "0.5rem 1.25rem", fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <Edit2 size={14} /> Editar perfil
            </Link>
          </div>

          {/* Avatar + Info */}
          <div style={{ padding: "0 2rem 2rem" }}>
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "var(--color-ja-gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.75rem",
                fontWeight: 900,
                color: "#0A0A0F",
                border: "4px solid #fff",
                marginTop: -40,
                marginBottom: "1.25rem",
              }}
            >
              {user.nombre.charAt(0)}
            </div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "0.25rem" }}>{user.nombre}</h1>
            <p style={{ fontSize: "0.9375rem", color: "var(--color-muted)", marginBottom: "0.75rem" }}>
              <span style={{ color: "var(--color-ja-blue)", fontWeight: 700 }}>Generación {user.generacion}</span>
            </p>
            <p style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.7, maxWidth: 560 }}>{user.bio}</p>
          </div>
        </div>

        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {/* Details */}
          <div style={{ background: "#fff", borderRadius: 20, padding: "1.75rem", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
            <h2 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "1.25rem", color: "#0A0A0F" }}>Datos profesionales</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: User, label: "Nombre", value: user.nombre },
                { icon: Briefcase, label: "Profesión", value: user.profesion },
                { icon: Building2, label: "Empresa", value: user.empresa },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: "#F0F4FA", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={16} color="var(--color-ja-blue)" />
                    </div>
                    <div>
                      <p style={{ fontSize: "0.75rem", color: "var(--color-muted)", fontWeight: 600, marginBottom: "0.125rem" }}>{item.label}</p>
                      <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#0A0A0F" }}>{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interests & roles */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: "#fff", borderRadius: 20, padding: "1.75rem", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem", alignItems: "center" }}>
                <Tag size={16} color="var(--color-ja-blue)" />
                <h2 style={{ fontSize: "1rem", fontWeight: 800, color: "#0A0A0F" }}>Intereses</h2>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {user.intereses.map((int) => (
                  <span key={int} style={{ background: "#EEF4FF", border: "1px solid #C7D7FE", borderRadius: 100, padding: "0.375rem 1rem", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-ja-blue)" }}>
                    {int}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ background: "#fff", borderRadius: 20, padding: "1.75rem", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
              <h2 style={{ fontSize: "1rem", fontWeight: 800, color: "#0A0A0F", marginBottom: "1rem" }}>Participación</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { label: "Disponible como mentor", active: user.mentoria },
                  { label: "Disponible como voluntario", active: user.voluntariado },
                ].map((r) => (
                  <div key={r.label} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <CheckCircle size={18} color={r.active ? "#1A7F42" : "#D1D5DB"} />
                    <span style={{ fontSize: "0.9375rem", color: r.active ? "#0A0A0F" : "#9CA3AF", fontWeight: r.active ? 600 : 400 }}>
                      {r.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
