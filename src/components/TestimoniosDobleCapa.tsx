"use client";

import { useEffect, useRef, useState, useCallback } from "react";
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
   Hook: Synthetic Scrollbar
   ───────────────────────────────────────────────────────── */
function useSyntheticScrollbar() {
  const contentRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const thumbRatioRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartYRef = useRef(0);
  const dragStartScrollRef = useRef(0);

  const updateThumb = useCallback(() => {
    const content = contentRef.current;
    const thumb = thumbRef.current;
    const track = trackRef.current;
    if (!content || !thumb || !track) return;

    const { scrollTop, scrollHeight, clientHeight } = content;
    const trackHeight = track.clientHeight;

    const ratio = clientHeight / scrollHeight;
    thumbRatioRef.current = ratio;
    const thumbHeight = Math.max(ratio * trackHeight, 20);

    const maxScrollTop = scrollHeight - clientHeight;
    const maxThumbTop = trackHeight - thumbHeight;
    const thumbTop = maxScrollTop > 0 ? (scrollTop / maxScrollTop) * maxThumbTop : 0;

    thumb.style.height = `${thumbHeight}px`;
    thumb.style.transform = `translateY(${thumbTop}px)`;
    thumb.style.opacity = ratio >= 1 ? "0" : "1";
  }, []);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    updateThumb();
    const ro = new ResizeObserver(updateThumb);
    ro.observe(content);
    content.addEventListener("scroll", updateThumb, { passive: true });

    return () => {
      ro.disconnect();
      content.removeEventListener("scroll", updateThumb);
    };
  }, [updateThumb]);

  const onThumbPointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const content = contentRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!content || !track || !thumb) return;

    isDraggingRef.current = true;
    dragStartYRef.current = e.clientY;
    dragStartScrollRef.current = content.scrollTop;
    thumb.setPointerCapture(e.pointerId);
  }, []);

  const onThumbPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const content = contentRef.current;
    const track = trackRef.current;
    if (!content || !track) return;

    const deltaY = e.clientY - dragStartYRef.current;
    const trackHeight = track.clientHeight;
    const { scrollHeight, clientHeight } = content;

    const thumbHeight = Math.max(thumbRatioRef.current * trackHeight, 20);
    const scrollRatio = (scrollHeight - clientHeight) / (trackHeight - thumbHeight);
    content.scrollTop = dragStartScrollRef.current + deltaY * scrollRatio;
  }, []);

  const onThumbPointerUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  const onTrackClick = useCallback((e: React.MouseEvent) => {
    const content = contentRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!content || !track || !thumb) return;

    const trackRect = track.getBoundingClientRect();
    const thumbRect = thumb.getBoundingClientRect();

    if (e.clientY >= thumbRect.top && e.clientY <= thumbRect.bottom) return;

    const clickRatio = (e.clientY - trackRect.top) / trackRect.height;
    const { scrollHeight, clientHeight } = content;
    content.scrollTop = clickRatio * (scrollHeight - clientHeight);
  }, []);

  return {
    contentRef,
    trackRef,
    thumbRef,
    thumbHandlers: {
      onPointerDown: onThumbPointerDown,
      onPointerMove: onThumbPointerMove,
      onPointerUp: onThumbPointerUp,
    },
    onTrackClick,
  };
}

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

  const { contentRef, trackRef, thumbRef, thumbHandlers, onTrackClick } =
    useSyntheticScrollbar();

  return (
    <article
      className={`testimonial-card aspect-[9/16] overflow-hidden flex flex-col group relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      style={{ transitionDelay: `${index * 150 + 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── LAYER 1 — Editorial Text ──────────────────────── */}
      <div className="testimonial-layer-text h-full flex flex-col justify-between">
        <div className="flex items-center justify-between w-full mb-4 relative z-10">
          <div className="testimonial-avatar-wrap m-0">
            <Image
              src={testimonial.avatar}
              alt="Inversor"
              width={64}
              height={64}
              className="testimonial-avatar"
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsVideoOpen(true);
            }}
            className="md:hidden flex items-center gap-2 px-3 py-1.5 text-xs rounded-full border border-[var(--color-copper)] text-[var(--color-copper)] cursor-pointer hover:bg-[var(--color-copper)]/10 transition-colors shrink-0"
          >
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>Ver Video</span>
          </button>
        </div>

        <span className="testimonial-quote-mark" aria-hidden="true">
          &ldquo;
        </span>

        {/* CONTENEDOR PRINCIPAL DEL SCROLL SINTÉTICO */}
        <div
          className="flex-1 relative overflow-hidden"
          style={{ minHeight: 0 }}
        >
          {/* Track (Fondo de la barra) */}
          <div
            ref={trackRef}
            onClick={onTrackClick}
            className="absolute left-0 top-0 bottom-0 z-10 cursor-pointer"
            style={{
              width: "4px",
              borderRadius: "9999px",
              backgroundColor: "rgba(185, 116, 52, 0.12)",
            }}
          >
            {/* Thumb (El indicador Cobre) */}
            <div
              ref={thumbRef}
              {...thumbHandlers}
              className="absolute left-0 w-full cursor-grab active:cursor-grabbing"
              style={{
                top: 0,
                borderRadius: "9999px",
                backgroundColor: "#B97434",
                touchAction: "none",
                userSelect: "none",
                WebkitUserSelect: "none",
              }}
            />
          </div>

          {/* Contenido (Barra nativa escondida con margen negativo) */}
          <div
            ref={contentRef}
            className="h-full"
            style={{
              overflowY: "scroll",
              overflowX: "hidden",
              paddingLeft: "12px",
              paddingRight: "8px",
              marginRight: "-20px",
              boxSizing: "border-box",
            } as React.CSSProperties}
          >
            <blockquote
              className="testimonial-quote italic m-0 p-0 text-left"
            >
              {testimonial.quote}
            </blockquote>
          </div>
        </div>

        <div className="testimonial-detail mt-4">
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

      {/* ── LAYER 2A — ESCRITORIO ────────── */}
      <div
        className={`hidden md:block absolute inset-0 z-40 transition-all duration-700 cursor-pointer ${!isVideoOpen && !isHovered ? "pointer-events-none" : "pointer-events-auto"
          }`}
        onClick={() => !isVideoOpen && setIsVideoOpen(true)}
        style={{
          clipPath: isVideoOpen
            ? "inset(0 0 0 0)"
            : isHovered
              ? "inset(0 0 0 75%)"
              : "inset(0 0 0 100%)",
          WebkitClipPath: isVideoOpen
            ? "inset(0 0 0 0)"
            : isHovered
              ? "inset(0 0 0 75%)"
              : "inset(0 0 0 100%)",
        }}
      >
        <div className="testimonial-video-inner w-full h-full relative bg-[#0B1526]">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsVideoOpen(false);
            }}
            className={`absolute top-6 right-6 z-50 bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 transition-all duration-500 cursor-pointer ${isVideoOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className={`absolute right-[8%] top-1/2 -translate-y-1/2 text-white/90 transition-opacity duration-500 flex flex-col items-center gap-3 ${!isVideoOpen && isHovered ? "opacity-100" : "opacity-0"
              }`}
          >
            <svg
              className="w-6 h-6 animate-pulse text-[var(--color-copper)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span
              className="font-headline text-[11px] tracking-[0.2em] font-semibold uppercase rotate-180"
              style={{ writingMode: "vertical-rl" }}
            >
              Video
            </span>
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-60" />

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <button className="testimonial-play-btn cursor-pointer">
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
            <p className="mt-4 text-white font-medium text-sm">Ver testimonio</p>
          </div>
        </div>
      </div>

      {/* ── LAYER 2B — MÓVIL ────────── */}
      <div
        className={`md:hidden absolute inset-0 z-40 transition-opacity duration-500 bg-[#0B1526] ${isVideoOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="w-full h-full relative flex flex-col items-center justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsVideoOpen(false);
            }}
            className={`absolute top-6 right-6 z-50 bg-white/10 text-white rounded-full p-2.5 transition-all duration-500 ${isVideoOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <button className="testimonial-play-btn">
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
          <p className="mt-4 text-white font-medium text-sm">Ver testimonio</p>
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
    <section ref={sectionRef} id="testimonios" className="testimonios-section">
      <div className="testimonios-container">
        <div className="testimonios-header">
          <p
            className={`text-label text-[var(--color-copper)] mb-8 md:mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
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