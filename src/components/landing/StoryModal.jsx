"use client";
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function StoryModal({ story, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose} id={`story-modal-${story.id}`}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: 24,
          padding: "2.5rem",
          maxWidth: 520,
          width: "100%",
          position: "relative",
          animation: "fadeInUp 0.25s ease",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            background: "#F3F4F6",
            border: "none",
            borderRadius: "50%",
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
        >
          <X size={16} color="#374151" />
        </button>

        {/* Card accent banner */}
        <div
          style={{
            background: story.color,
            borderRadius: 14,
            padding: "1.5rem",
            marginBottom: "1.75rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <story.icon size={48} color={story.accent} />
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, color: story.accent, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              {story.gen}
            </p>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 900, color: "#0A0A0F", lineHeight: 1.2 }}>{story.name}</h3>
            <p style={{ fontSize: "0.875rem", color: "var(--color-muted)" }}>{story.role} · {story.company}</p>
          </div>
        </div>

        <p style={{ fontSize: "1rem", color: "#374151", lineHeight: 1.75, marginBottom: "2rem" }}>
          {story.full}
        </p>

        <Link
          href="/historias/nueva"
          className="btn-dark"
          style={{ width: "100%", justifyContent: "center" }}
          id={`story-modal-cta-${story.id}`}
        >
          Cuenta tu historia <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
