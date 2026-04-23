"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedTitle from "./AnimatedTitle";

const steps = [
  {
    numImage: "/uno.webp",
    title: "Trazamos tu Ruta Financiera",
    description: "Analizamos tu capacidad de inversión y filtramos las mejores oportunidades del mercado. Te presentamos el inventario con el mayor potencial de reventa y crecimiento en la Riviera Maya, diseñando una estrategia a tu medida.",
    image: "/plan-1.webp",
    modalTitle: "Análisis de Activos Inmobiliarios",
    modalDesc: "Nos alejamos de las ventas emocionales para centrarnos en los datos duros. A través de un mapeo detallado del crecimiento urbano y los planes de desarrollo en Quintana Roo, identificamos las zonas donde el capital tiene el mayor margen de apreciación.",
    points: [
      "Validación de Constructores",
      "Cálculo de ROI Neto Real",
      "Estrategia de Salida"
    ],
    modalImage: "/ruta.webp",
    hook: "Hacemos el trabajo analítico pesado para que tú solo tomes decisiones respaldadas por la certeza matemática",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
      </svg>
    ),
  },
  {
    numImage: "/dos.webp",
    title: "Ejecutamos una Compra Segura",
    description: "Te llevamos de la mano durante todo el proceso legal, notarial y comercial. Simplificamos el papeleo para que adquieras tu activo incluso a distancia con total transparencia y seguridad.",
    image: "/plan-2.webp",
    modalTitle: "Blindaje Jurídico",
    modalDesc: "La burocracia local y las leyes inmobiliarias pueden ser un laberinto para el inversionista foráneo. Nuestro equipo jurídico asume el control total de la validación documental, asegurando que cada propiedad esté libre de gravámenes, problemas ejidales o promesas sin sustento, permitiéndote firmar desde tu ciudad de origen con absoluta confianza.",
    points: [
      "Due Diligence Exhaustivo",
      "Gestión Notarial",
      "Cierre Remoto Seguro"
    ],
    modalImage: "/ejecucion.webp",
    hook: "Transfiere el riesgo legal a nuestros expertos y disfruta de una adquisición libre de fricciones",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    numImage: "/tres.webp",
    title: "Multiplicamos tu Rentabilidad",
    description: "Mientras tu propiedad gana valor en el mercado con el paso del tiempo, tienes la opción de activar nuestro servicio de co-hosting llave en mano. Olvídate de lidiar con inquilinos, nosotros operamos el negocio para que recibas flujo de efectivo mensual sin mover un dedo.",
    image: "/plan-3.webp",
    modalTitle: "Operación con estandares hoteleros",
    modalDesc: "Transformamos tu propiedad en un negocio de hospitalidad de alto rendimiento. En lugar de que pierdas el tiempo lidiando con plataformas, reparaciones o huéspedes problemáticos, nuestro equipo local ejecuta una operación con estándar hotelero. Protegemos el estado físico de tu activo mientras la tecnología optimiza tu rentabilidad diaria.",
    points: [
      "Posicionamiento Premium",
      "Precios Dinámicos",
      "Mantenimiento Preventivo"
    ],
    modalImage: "/rentabilidad.webp",
    hook: "Tu tiempo es tu activo más valioso, nosotros operamos el inmueble para que tú solo disfrutes de los rendimientos",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
  },
];

export default function Metodologia() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const modalScrollRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

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

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activeModal !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModal]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModal(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Inteligente Auto-Scroll
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (activeModal !== null) {
      if (modalScrollRef.current) {
        modalScrollRef.current.scrollTop = 0; // Reset
      }
      timeoutId = setTimeout(() => {
        scrollIntervalRef.current = setInterval(() => {
          if (modalScrollRef.current) {
            modalScrollRef.current.scrollTop += 1;
          }
        }, 40);
      }, 1500);
    }

    return () => {
      clearTimeout(timeoutId);
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [activeModal]);

  const stopAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

  const activeStep = activeModal !== null ? steps[activeModal] : null;

  return (
    <section ref={sectionRef} id="gestion" className="section-gap bg-[var(--color-surface)] relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <AnimatedTitle
            as="p"
            text="Nuestra hoja de ruta"
            className="text-label text-[var(--color-copper)] mb-4"
          />
          <AnimatedTitle
            as="h2"
            text="Así blindamos tu capital..."
            className="text-2xl md:text-3xl font-headline text-[var(--color-dark-navy)] font-bold mb-2"
          />
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <div
                onClick={() => setActiveModal(i)}
                className="group relative cursor-pointer min-h-[450px] bg-white rounded-xl p-8 lg:p-10 transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-gray-100 flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-8">
                  <Image src={step.numImage} alt={`0${i + 1}`} width={60} height={60} className="object-contain" />
                  <div className="text-[var(--color-copper)]">{step.icon}</div>
                </div>

                <AnimatedTitle
                  as="h3"
                  text={step.title}
                  className="font-headline text-[var(--color-dark-navy)] text-2xl font-semibold mb-4 leading-tight"
                />

                <p className="font-body text-base leading-[1.7] text-gray-600 flex-grow">
                  {step.description}
                </p>

                <p className="mt-6 font-bold text-[var(--color-copper)] transform transition-transform group-hover:translate-x-2">
                  Ver más detalles &rarr;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeModal !== null && activeStep && (
        <div
          className="fixed inset-0 bg-[#0e1c33]/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            ref={modalScrollRef}
            className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full relative flex flex-col md:flex-row overflow-hidden animate-fade-in-up max-h-[90vh] overflow-y-auto transition-all [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={stopAutoScroll}
            onWheel={stopAutoScroll}
            onMouseDown={stopAutoScroll}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900 transition z-50 bg-white/80 rounded-full cursor-pointer"
              aria-label="Cerrar"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Column (Content) */}
            <div className="md:w-3/5 p-8 lg:p-12 flex flex-col justify-center order-1 md:order-1">
              <AnimatedTitle
                as="h3"
                text={activeStep.modalTitle}
                className="text-xl md:text-2xl font-headline font-semibold text-[var(--color-dark-navy)] mb-4"
              />

              <p className="text-gray-600 font-body text-sm md:text-base leading-relaxed mb-6 text-justify">
                {activeStep.modalDesc}
              </p>

              <ul className="space-y-3">
                {activeStep.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <svg className="w-5 h-5 mt-1 text-[var(--color-copper)] flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="font-body text-gray-800 font-medium text-base">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 w-full text-center">
                <Link
                  href="/#contacto"
                  onClick={() => setActiveModal(null)}
                  className="inline-block px-8 py-3 bg-[var(--color-copper)] text-white text-center font-bold rounded-sm shadow-md hover:bg-[#a3652c] hover:shadow-lg transition-all"
                >
                  Asesoría personalizada
                </Link>
              </div>
            </div>

            {/* Right Column (Image & Hook) */}
            <div className="md:w-2/5 bg-[var(--color-surface)] relative flex flex-col order-2 md:order-2">
              <div className="h-64 relative w-full p-4">
                <Image
                  src={activeStep.modalImage}
                  alt={activeStep.modalTitle}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-8 flex-grow flex items-center justify-center bg-gray-50">
                <p className="text-[var(--color-copper)] font-medium text-center italic text-lg leading-relaxed">
                  "{activeStep.hook}"
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}