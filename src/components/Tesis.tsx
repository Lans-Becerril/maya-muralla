"use client";

import { useEffect, useRef, useState } from "react";

export default function Tesis() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tesis"
      className="section-gap bg-[var(--color-dark-navy)] relative overflow-hidden"
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(185,116,52,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(185,116,52,0.15) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <p
          className={`text-label text-[var(--color-copper)] mb-6 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          Tesis de Inversión
        </p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Problem */}
          <div>
            <h2
              className={`text-headline text-[var(--color-inverse-surface)] mb-8 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              No dejes que la inflación devore tu capital ni que la operación
              a distancia te quite el sueño.
            </h2>
            <p
              className={`font-body text-base leading-[1.7] text-[rgba(241,241,241,0.7)] transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              En un mercado saturado de promesas, Coral Capital se enfoca en
              la certeza matemática. Nuestra tesis combina la adquisición en
              zonas de alta plusvalía con un sistema operativo impecable que
              protege y hace crecer tu patrimonio.
            </p>
          </div>

          {/* Right: Solution */}
          <div
            className={`bg-[rgba(255,255,255,0.03)] rounded-sm p-8 lg:p-10 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-label text-[var(--color-copper-light)] mb-4">
              Modelo Llave en Mano + Co-hosting
            </p>
            <p className="font-body text-base leading-[1.7] text-[rgba(241,241,241,0.65)]">
              Tú eres el dueño legal del activo; nosotros somos los expertos
              que garantizan que el activo produzca flujo de caja constante
              sin que tengas que atender una sola llamada de huéspedes.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-10">
              <div>
                <p className="font-headline text-3xl font-bold text-[var(--color-copper-light)]">
                  12%
                </p>
                <p className="text-label text-[rgba(241,241,241,0.5)] mt-1">
                  ROI Proyectado
                </p>
              </div>
              <div>
                <p className="font-headline text-3xl font-bold text-[var(--color-copper-light)]">
                  100%
                </p>
                <p className="text-label text-[rgba(241,241,241,0.5)] mt-1">
                  Gestión Delegada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
