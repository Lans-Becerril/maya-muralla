"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Perfilamiento Financiero",
    description:
      "Analizamos tu capacidad de inversión y objetivos de liquidez para diseñar una estrategia a tu medida.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-.573.097a9.59 9.59 0 0 1-3.124 0l-.573-.097c-1.717-.293-2.3-2.379-1.067-3.61L16 15.3"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Selección de Propiedad",
    description:
      "Filtramos desarrollos con alta plusvalía y ubicación estratégica cerca de puntos de interés turístico.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Piloto Automático",
    description:
      "Nuestro equipo administra el perfil de Airbnb, limpieza y mantenimiento. Tú solo recibes los depósitos.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
        />
      </svg>
    ),
  },
];

export default function Metodologia() {
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
      id="gestion"
      className="section-gap bg-[var(--color-surface)]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <p
            className={`text-label text-[var(--color-copper)] mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Metodología
          </p>
          <h2
            className={`text-headline text-[var(--color-on-surface)] transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            El camino hacia la libertad patrimonial
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative group transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              {/* Step card */}
              <div className="bg-[var(--color-surface-white)] rounded-sm p-8 lg:p-10 h-full transition-all duration-400 group-hover:shadow-[var(--shadow-elevated)] group-hover:-translate-y-1">
                {/* Number + Icon */}
                <div className="flex items-start justify-between mb-8">
                  <span className="font-headline text-5xl font-bold text-[var(--color-surface-container)]">
                    {step.number}
                  </span>
                  <div className="text-[var(--color-copper)]">{step.icon}</div>
                </div>

                {/* Title */}
                <h3 className="font-headline text-xl font-semibold text-[var(--color-on-surface)] mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-body text-base leading-[1.7] text-[var(--color-on-surface-variant)]">
                  {step.description}
                </p>
              </div>

              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-6 w-8 lg:w-12 h-[1px] bg-[var(--color-outline-variant)] opacity-30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
