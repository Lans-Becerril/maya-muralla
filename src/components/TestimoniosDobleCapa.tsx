"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────
   Data
   ───────────────────────────────────────────────────────── */
const testimonials = [
  {
    id: 1,
    quote:
      "Había escuchado sobre el boom de Costa Maya y el Tren Maya, pero me daba desconfianza comprar de lejos. Maya Muralla me mostró los datos duros y la realidad del proyecto. Hoy soy dueño de un pedazo del paraíso en Mahahual antes de que los precios se vuelvan inalcanzables.",
    role: "EMPRENDEDOR",
    location: "CDMX",
    avatar: "/avatar-investor-1.png",
    signature: "/signature-1.png",
  },
  {
    id: 2,
    quote:
      "No soy experto en bienes raíces, solo quería poner a trabajar mis ahorros en algo seguro que no fuera el banco. Lo que más me gustó fue que me hablaron claro y me ayudaron a elegir un terreno a mi medida.",
    role: "INGENIERO CIVIL",
    location: "MONTERREY",
    avatar: "/avatar-investor-2.png",
    signature: "/signature-2.png",
  },
  {
    id: 3,
    quote:
      "Buscaba un terreno para construir algo a futuro, quizás para mi retiro o para dejárselo a mis hijos. Ver los datos reales de cómo está creciendo Costa Maya me convenció. Fue un trámite transparente y rápido.",
    role: "DUEÑO DE NEGOCIO",
    location: "GUADALAJARA",
    avatar: "/avatar-investor-3.png",
    signature: "/signature-3.png",
  },
];

/* ─────────────────────────────────────────────────────────
   Single Testimonial Card
   ───────────────────────────────────────────────────────── */
function TestimonialCard({
  testimonial,
  index,
  isVisible,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
  isVisible: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className={`testimonial-card group relative transition-all duration-700 ${isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10"
        }`}
      style={{ transitionDelay: `${index * 150 + 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── LAYER 1 — Editorial Text ──────────────────────── */}
      <div className="testimonial-layer-text">
        {/* Avatar */}
        <div className="testimonial-avatar-wrap">
          <Image
            src={testimonial.avatar}
            alt="Inversor"
            width={64}
            height={64}
            className="testimonial-avatar"
          />
        </div>

        {/* Opening quote mark */}
        <span className="testimonial-quote-mark" aria-hidden="true">
          &ldquo;
        </span>

        {/* Quote */}
        <blockquote className="testimonial-quote">
          {testimonial.quote}
        </blockquote>

        {/* Signature + detail */}
        <div className="testimonial-detail">
          <div className="testimonial-signature-wrap">
            <Image
              src={testimonial.signature}
              alt="Firma"
              width={140}
              height={48}
              className="testimonial-signature"
            />
          </div>
          <div className="testimonial-divider" />
          <p className="testimonial-role">
            {testimonial.role} <span className="testimonial-dot">•</span>{" "}
            {testimonial.location}
          </p>
        </div>
      </div>

      {/* ── LAYER 2 — Video Reveal (Curtain Slice) ────────── */}
      <div
        className="testimonial-layer-video"
        style={{
          clipPath: isHovered
            ? "inset(0 0 0 0)"
            : "inset(0 100% 0 0)",
        }}
      >
        <div className="testimonial-video-inner">
          {/* Dark overlay pattern */}
          <div className="testimonial-video-overlay" />

          {/* Play button */}
          <button
            className="testimonial-play-btn"
            aria-label="Reproducir testimonio en video"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "scale(1)" : "scale(0.7)",
            }}
          >
            <svg
              width="22"
              height="26"
              viewBox="0 0 22 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 1.5L20.5 13L2 24.5V1.5Z"
                fill="var(--color-surface-white)"
                stroke="var(--color-surface-white)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Label */}
          <p
            className="testimonial-video-label"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered
                ? "translateY(0)"
                : "translateY(8px)",
            }}
          >
            Ver testimonio
          </p>
        </div>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────
   Main Component
   ───────────────────────────────────────────────────────── */
export default function TestimoniosDobleCapa() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonios"
      className="testimonios-section"
    >
      <div className="testimonios-container">
        {/* ── Section Header ─────────────────────────────── */}
        <div className="testimonios-header">
          <p
            className={`text-label text-[var(--color-copper)] transition-all duration-700 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
              }`}
          >
            LO QUE DICEN DE NOSOTROS
          </p>
          <h2
            className={`testimonios-title transition-all duration-700 delay-100 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
              }`}
          >
            Personas como tú, que ya aseguraron
            <br />
            <span className="text-[var(--color-copper)]"> su pedacito en el Caribe.</span>
          </h2>
        </div>

        {/* ── Cards Grid ─────────────────────────────────── */}
        <div className="testimonios-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.id}
              testimonial={t}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
