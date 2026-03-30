"use client";

import { useEffect, useRef, useState } from "react";
import InvestmentCard from "./InvestmentCard";

const listings = [
  {
    image: "/images/card-studio.png",
    title: "Estudio Premium Alta Rotación",
    location: "Tulum · Región 15",
    ticket: "$3.2M MXN",
    roi: "12%",
    profile: "Nómada Digital",
    alt: "Estudio premium estilo Tulum con acabados de concreto y madera",
  },
  {
    image: "/images/card-penthouse.png",
    title: "Penthouse Plusvalía",
    location: "Playa del Carmen · Diamond Zone",
    ticket: "$5.8M MXN",
    roi: "8.5%",
    profile: "Luxury Traveler",
    alt: "Penthouse con terraza y alberca infinita vista al mar Caribe",
  },
  {
    image: "/images/card-villa.png",
    title: "Villa Boutique Selva",
    location: "Tulum · Aldea Zamá",
    ticket: "$7.5M MXN",
    roi: "9.2%",
    profile: "Familia Premium",
    alt: "Villa boutique con doble altura y jardín tropical en Tulum",
  },
];

export default function Arquetipos() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="modelos"
      className="section-gap bg-[var(--color-surface-low)]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-24">
          <p
            className={`text-label text-[var(--color-copper)] mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Arquetipos de Inversión
          </p>
          <h2
            className={`text-headline text-[var(--color-on-surface)] mb-4 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Listings Ciegos — Propiedades Pre-filtradas
          </h2>
          <p
            className={`font-body text-base text-[var(--color-on-surface-variant)] leading-relaxed transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Cada arquetipo ha sido cuidadosamente seleccionado para maximizar
            la relación entre plusvalía y flujo de caja operativo.
          </p>
        </div>

        {/* Cards Grid — Perspective layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {listings.map((listing, i) => (
            <div
              key={listing.title}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${300 + i * 150}ms`,
                marginTop: i === 1 ? "2rem" : "0",
              }}
            >
              <InvestmentCard {...listing} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
