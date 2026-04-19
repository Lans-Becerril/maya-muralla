"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AnimatedTitle from "./AnimatedTitle";

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
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Problem */}
          <div className="flex flex-col gap-6">
            {/* Section Label */}
            <p
              className={`text-label text-[var(--color-copper)] transition-all duration-700 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
                }`}
            >
              Así es, ¡En piloto automático!
            </p>
            <AnimatedTitle
              as="h2"
              text="No dejes que la inflación devore tu capital ni que la operación a distancia te quite el sueño."
              className="text-headline text-[var(--color-inverse-surface)]"
            />
            <p
              className={`font-body text-base text-justify leading-[1.7] text-[rgba(241,241,241,0.7)] transition-all duration-700 delay-200 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
                }`}
            >
              En un mercado saturado de promesas, Maya Muralla se enfoca en la certeza matemática para que invertir en tu futuro no se sienta como una apuesta. Nuestro modelo combina la adquisición en zonas de alta plusvalía con un sistema de operación impecable que protege y hace crecer tu patrimonio.
            </p>
          </div>

          {/* Right: Solution */}
          <div
            className={`bg-[rgba(255,255,255,0.03)] rounded-sm p-8 lg:p-10 transition-all duration-700 delay-300 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
              }`}
          >
            <p className="text-label text-[var(--color-copper-light)] mb-4">
              Modelo Llave en Mano + Co-hosting
            </p>
            <p className="font-body text-base text-justify leading-[1.7] text-[rgba(241,241,241,0.65)]">
              Imagina despertar cada mes con los dividendos de tu propiedad en el Caribe ya depositados, sabiendo que tu patrimonio crece mientras tú disfruta de lo que realmente importa.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-10">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/icon-roi.webp"
                  alt="ROI Proyectado"
                  width={180}
                  height={180}
                  className="mb-4"
                />
                <p className="text-label text-[rgba(241,241,241,0.5)] mt-1">
                  Solo seleccionamos desarrollos que cumplen esta métrica
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/icon-delegated.webp"
                  alt="Gestión Delegada"
                  width={180}
                  height={180}
                  className="mb-4"
                />
                <p className="text-label text-[rgba(241,241,241,0.5)] mt-1">
                  Nosotros atendemos a los huéspedes, tú solo recibes los depósitos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
