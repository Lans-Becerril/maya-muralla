"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AnimatedTitle from "./AnimatedTitle";

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
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <article
      className={`testimonial-card aspect-[9/16] overflow-hidden flex flex-col group relative transition-all duration-700 ${isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10"
        }`}
      style={{ transitionDelay: `${index * 150 + 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── LAYER 1 — Editorial Text ──────────────────────── */}
      <div className="testimonial-layer-text h-full flex flex-col justify-between">
        <div className="flex items-center justify-between w-full mb-4 relative z-10">
          {/* Avatar */}
          <div className="testimonial-avatar-wrap m-0">
            <Image
              src={testimonial.avatar}
              alt="Inversor"
              width={64}
              height={64}
              className="testimonial-avatar"
            />
          </div>

          {/* Mobile "Ver Video" Button */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setIsVideoOpen(true); }}
            onTouchEnd={(e) => { e.preventDefault(); e.stopPropagation(); setIsVideoOpen(true); }}
            className="md:hidden flex items-center gap-2 px-3 py-1.5 text-xs rounded-full border border-[var(--color-copper)] text-[var(--color-copper)] cursor-pointer hover:bg-[var(--color-copper)]/10 transition-colors shrink-0"
          >
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            <span>Ver Video</span>
          </button>
        </div>

        {/* Opening quote mark */}
        <span className="testimonial-quote-mark" aria-hidden="true">
          &ldquo;
        </span>

        {/* Quote */}
        <blockquote 
          className="testimonial-quote italic flex-1 overflow-y-auto pr-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" 
          style={{ fontStyle: 'italic' }}
        >
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
              className="testimonial-signature mix-blend-multiply"
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
        className={`testimonial-layer-video absolute inset-0 z-40 transition-all duration-700 ${(!isVideoOpen && !isHovered) ? 'pointer-events-none' : 'cursor-pointer'}`}
        onClick={() => !isVideoOpen && setIsVideoOpen(true)}
        style={{
          clipPath: isVideoOpen
            ? "inset(0 0 0 0)"
            : isHovered
            ? "inset(0 0 0 75%)"
            : "inset(0 0 0 100%)",
        }}
      >
        <div className="testimonial-video-inner w-full h-full relative">
          
          {/* Close Video Layer Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsVideoOpen(false);
            }}
            className={`absolute top-6 right-6 z-50 bg-black/40 hover:bg-black/80 text-white rounded-full p-2.5 backdrop-blur-md transition-all duration-500 cursor-pointer ${isVideoOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}
            aria-label="Volver al texto"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Peek Indicator (Visible when hovered but not full open) */}
          <div 
            className={`absolute right-[8%] top-1/2 -translate-y-1/2 text-white/90 transition-all duration-500 flex flex-col items-center gap-3 ${(!isVideoOpen && isHovered) ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          >
            <svg className="w-6 h-6 animate-pulse text-[var(--color-copper)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-headline text-[11px] tracking-[0.2em] font-semibold uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>Video</span>
          </div>

          {/* Dark overlay pattern */}
          <div className="testimonial-video-overlay" />

          {/* Play button */}
          <button
            className="testimonial-play-btn cursor-pointer"
            aria-label="Reproducir testimonio en video"
            onClick={(e) => e.stopPropagation()}
            style={{
              opacity: isVideoOpen ? 1 : 0,
              transform: isVideoOpen ? "scale(1)" : "scale(0.7)",
              pointerEvents: isVideoOpen ? "auto" : "none"
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
            className="testimonial-video-label pointer-events-none"
            style={{
              opacity: isVideoOpen ? 1 : 0,
              transform: isVideoOpen
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
            className={`text-label text-[var(--color-copper)] mb-8 md:mb-10 transition-all duration-700 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
              }`}
          >
            LO QUE DICEN DE NOSOTROS
          </p>
          <AnimatedTitle
            text="Personas como tú, que ya aseguraron"
            className="text-2xl md:text-3xl font-headline text-[var(--color-dark-navy)] font-bold mb-2"
          />
          <AnimatedTitle
            text="su pedacito en el Caribe."
            className="text-2xl md:text-3xl font-headline text-[var(--color-copper)] font-bold"
          />
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
