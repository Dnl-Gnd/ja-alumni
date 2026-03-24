"use client";
import { useState } from "react";
import { 
  Search, 
  Filter, 
  Code2, 
  Sprout, 
  Coffee, 
  Landmark, 
  HardHat, 
  Stethoscope, 
  Scale, 
  Utensils 
} from "lucide-react";

const ALUMNI = [
  { id: 1, nombre: "Daniela Flores", profesion: "Programadora Senior", empresa: "Banco Agrícola", generacion: "2014", industria: "Tecnología", icon: Code2, color: "#EEF4FF" },
  { id: 2, nombre: "Rodrigo Mena", profesion: "CEO & Fundador", empresa: "AgroTech SV", generacion: "2010", industria: "Agro", icon: Sprout, color: "#EAFAF1" },
  { id: 3, nombre: "Valeria Santos", profesion: "Directora de Exportaciones", empresa: "Café La Montaña", generacion: "2016", industria: "Exportaciones", icon: Coffee, color: "#FEF3E2" },
  { id: 4, nombre: "Ernesto Chávez", profesion: "Director Gremial", empresa: "COEXPORT", generacion: "2008", industria: "Gremial", icon: Landmark, color: "#F3F0FF" },
  { id: 5, nombre: "Sofía Orellana", profesion: "Arquitecta", empresa: "Studio SV", generacion: "2019", industria: "Construcción", icon: HardHat, color: "#FFF7ED" },
  { id: 6, nombre: "Carlos Herrera", profesion: "Médico Especialista", empresa: "Hospital de Diagnóstico", generacion: "2012", industria: "Salud", icon: Stethoscope, color: "#F0FDF4" },
  { id: 7, nombre: "María Jiménez", profesion: "Abogada", empresa: "Bufete Jiménez & Asociados", generacion: "2015", industria: "Legal", icon: Scale, color: "#FFF1F2" },
  { id: 8, nombre: "David Cruz", profesion: "Chef & Emprendedor", empresa: "Restaurante D'Cruz", generacion: "2017", industria: "Gastronomía", icon: Utensils, color: "#FAF5FF" },
];

const INDUSTRIAS = ["Todas", "Tecnología", "Agro", "Exportaciones", "Gremial", "Construcción", "Salud", "Legal", "Gastronomía"];
const GENERACIONES = ["Todas", "2008", "2010", "2012", "2014", "2015", "2016", "2017", "2019"];

export default function DirectorioPage() {
  const [search, setSearch] = useState("");
  const [industria, setIndustria] = useState("Todas");
  const [generacion, setGeneracion] = useState("Todas");

  const filtered = ALUMNI.filter((a) => {
    const matchSearch = a.nombre.toLowerCase().includes(search.toLowerCase()) || a.profesion.toLowerCase().includes(search.toLowerCase()) || a.empresa.toLowerCase().includes(search.toLowerCase());
    const matchInd = industria === "Todas" || a.industria === industria;
    const matchGen = generacion === "Todas" || a.generacion === generacion;
    return matchSearch && matchInd && matchGen;
  });

  return (
    <main style={{ minHeight: "100vh", background: "var(--color-surface)", padding: "6rem 1.5rem 4rem" }}>
      <div className="container-max">
        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <p style={{ color: "var(--color-ja-blue)", fontWeight: 700, fontSize: "0.8125rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Red Alumni
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 900, marginBottom: "0.75rem" }}>Directorio Alumni</h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--color-muted)" }}>Conecta con egresados JA de todas las industrias y generaciones.</p>
        </div>

        {/* Search + Filters */}
        <div style={{ background: "#fff", borderRadius: 20, padding: "1.5rem", marginBottom: "2rem", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
          <div style={{ flex: "1 1 240px", position: "relative" }}>
            <Search size={16} style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "#9CA3AF" }} />
            <input
              id="directorio-search"
              className="input-minimal"
              placeholder="Buscar por nombre, profesión o empresa..."
              style={{ paddingLeft: "2.75rem" }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Filter size={16} color="#6B7280" />
            <select
              id="directorio-filter-industria"
              className="input-minimal"
              style={{ width: "auto", paddingRight: "2rem" }}
              value={industria}
              onChange={(e) => setIndustria(e.target.value)}
            >
              {INDUSTRIAS.map((i) => <option key={i}>{i}</option>)}
            </select>
          </div>

          <div>
            <select
              id="directorio-filter-generacion"
              className="input-minimal"
              style={{ width: "auto", paddingRight: "2rem" }}
              value={generacion}
              onChange={(e) => setGeneracion(e.target.value)}
            >
              {GENERACIONES.map((g) => <option key={g}>{g}</option>)}
            </select>
          </div>
        </div>

        {/* Results count */}
        <p style={{ fontSize: "0.875rem", color: "var(--color-muted)", marginBottom: "1.5rem" }}>
          {filtered.length} alumni encontrados
        </p>

        {/* Grid */}
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
          {filtered.map((a) => (
            <div
              key={a.id}
              id={`alumni-card-${a.id}`}
              className="card-hover"
              style={{ background: "#fff", border: "1.5px solid #F0F0F5", borderRadius: 20, padding: "1.75rem", cursor: "pointer" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: a.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <a.icon size={24} color="var(--color-ja-blue)" />
                </div>
                <div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#0A0A0F", lineHeight: 1.2 }}>{a.nombre}</h3>
                  <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-ja-blue)", marginTop: "0.125rem" }}>Gen. {a.generacion}</p>
                </div>
              </div>
              <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "#374151", marginBottom: "0.25rem" }}>{a.profesion}</p>
              <p style={{ fontSize: "0.8125rem", color: "var(--color-muted)" }}>{a.empresa}</p>
              <div style={{ marginTop: "1rem" }}>
                <span style={{ background: "#F3F4F6", borderRadius: 100, padding: "0.25rem 0.75rem", fontSize: "0.75rem", fontWeight: 600, color: "#374151" }}>
                  {a.industria}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--color-muted)" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
              <Search size={64} opacity={0.2} />
            </div>
            <p style={{ fontSize: "1.125rem", fontWeight: 600 }}>No se encontraron resultados</p>
            <p style={{ marginTop: "0.5rem" }}>Prueba con otros filtros o términos de búsqueda.</p>
          </div>
        )}
      </div>
    </main>
  );
}
