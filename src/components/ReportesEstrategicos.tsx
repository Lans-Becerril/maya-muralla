"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedTitle from "@/components/AnimatedTitle";

/* ─────────────────────────────────────────────────────────
   Data
   ───────────────────────────────────────────────────────── */
const reports = [
  {
    id: 1,
    title: "5 Errores que destruyen tu rentabilidad en la Riviera Maya",
    description:
      "Lo que los desarrolladores prefieren ocultar sobre el mercado inmobiliario actual y cómo proteger tu inversión.",
    date: "Abril 2026",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    href: "/reportes-exclusivos/5-errores-rentabilidad",
  },
  {
    id: 2,
    title: "Proyecciones de Absorción 2026",
    description:
      "Análisis cuantitativo de la demanda real y velocidad de absorción en los corredores de mayor crecimiento del Caribe Mexicano.",
    date: "Próximamente",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    href: "#",
  },
  {
    id: 3,
    title: "Departamentos vs. Land Banking",
    description:
      "Comparativa institucional de dos estrategias patrimoniales: flujo de efectivo inmediato contra apreciación a largo plazo.",
    date: "Próximamente",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&q=80&w=800",
    href: "#",
  },
];

/* ─────────────────────────────────────────────────────────
   Main Component
   ───────────────────────────────────────────────────────── */
export default function ReportesEstrategicos() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = 350 + 24; // width + gap
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = 350 + 24; // width + gap
      carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const cardWidth = 350 + 24;
      const index = Math.round(scrollPosition / cardWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section id="reportes" className="py-24 md:py-32 bg-[#FAFAF8] px-6 overflow-hidden">
      <div className="max-w-[78rem] mx-auto">
        
        {/* ── Section Header (Layout: Izquierda / Derecha) ── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          
          {/* Izquierda: Título y Subtítulo */}
          <div className="max-w-xl">
            <AnimatedTitle 
              text="Inteligencia de Mercado" 
              className="font-serif text-3xl md:text-5xl text-[var(--color-dark-navy)] font-medium leading-tight mb-4" 
            />
            <p className="font-sans text-gray-500 text-sm md:text-base leading-relaxed">
              Análisis cuantitativo y proyecciones del mercado inmobiliario en la Riviera Maya.
            </p>
          </div>

          {/* Derecha: Controles del Carrusel */}
          <div className="flex items-center gap-6">
            {/* Paginación */}
            <div className="hidden md:flex items-center gap-2">
              {reports.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex 
                      ? "w-8 bg-[var(--color-copper)]" 
                      : "w-2 bg-gray-300"
                  }`} 
                />
              ))}
            </div>

            {/* Flechas */}
            <div className="flex items-center gap-3">
              <button 
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-md transition-all duration-300"
                aria-label="Anterior"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button 
                onClick={scrollRight}
                className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-md transition-all duration-300"
                aria-label="Siguiente"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── Carrusel Horizontal ─────────────────────────── */}
        <div className="relative -mx-6 px-6 md:mx-0 md:px-0">
          <div 
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {reports.map((report, i) => {
              const isComingSoon = report.href === "#";

              return (
                <article 
                  key={report.id}
                  className="w-[310px] md:w-[380px] shrink-0 snap-center flex flex-col bg-white/90 backdrop-blur-sm border border-black/5 rounded-[1.25rem] shadow-sm hover:shadow-[0_12px_40px_rgba(13,28,50,0.06)] transition-all duration-500 overflow-hidden group"
                >
                  {/* Mitad Superior: Imagen */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={report.image}
                      alt={report.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradiente Oscuro y Fecha */}
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                      <span className="text-white text-[11px] font-sans tracking-[0.15em] uppercase font-medium">
                        {report.date}
                      </span>
                    </div>
                  </div>

                  {/* Mitad Inferior: Texto */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="font-serif text-[var(--color-dark-navy)] text-[1.15rem] md:text-xl font-medium leading-[1.3] mb-3">
                      {report.title}
                    </h3>
                    <p className="font-sans text-gray-500 text-[13px] md:text-sm leading-[1.65] mb-8 flex-grow opacity-90">
                      {report.description}
                    </p>

                    {isComingSoon ? (
                      <span className="font-sans text-xs uppercase tracking-widest text-[var(--color-copper)]/50 font-medium">
                        Próximamente
                      </span>
                    ) : (
                      <Link
                        href={report.href}
                        className="font-sans text-[13px] font-medium text-[var(--color-copper)] hover:text-[#8C4F10] transition-colors inline-flex items-center gap-2 group-hover:gap-3"
                      >
                        Leer reporte completo <span>&rarr;</span>
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
            
            {/* Espacio extra al final para scroll natural */}
            <div className="w-[1px] shrink-0 md:hidden" />
          </div>
        </div>

      </div>
    </section>
  );
}
