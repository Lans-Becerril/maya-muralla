"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PropertyDetails from "./PropertyDetails";
import AnimatedTitle from "./AnimatedTitle";

const inventory = [
  {
    category: "Departamentos",
    title: "Vista Caribe Suites",
    description: "Departamento boutique diseñado para la más alta rentabilidad en renta vacacional.",
    price: "Desde $4.2M MXN",
    roi: "11% Proyectado",
    location: "Aldea Zamá, Tulum",
    beds: 3,
    baths: 3.5,
    sqft: "185 m²",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
    backImage1: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    backImage2: "https://images.unsplash.com/photo-1502672260266-1c1e5240980c?auto=format&fit=crop&w=800&q=80",
    portfolio: [
      { id: 1, title: 'Suite Panoramic', price: '$5.5M MXN', description: 'Vista inigualable al mar Caribe, diseñado para la máxima ocupación.', beds: 2, baths: 2, sqft: '120 m²', image: 'https://images.unsplash.com/photo-1502672260266-1c1e5240980c?auto=format&fit=crop&w=800&q=80' },
      { id: 2, title: 'Jungle Penthouse', price: '$8.2M MXN', description: 'Inmersión total en la selva con amenidades exclusivas de clase mundial.', beds: 3, baths: 3.5, sqft: '200 m²', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80' },
      { id: 3, title: 'Studio Boho', price: '$3.5M MXN', description: 'Flujo de caja garantizado con alta demanda para nómadas digitales.', beds: 1, baths: 1, sqft: '65 m²', image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80' },
      { id: 13, title: 'Loft Nómada', price: '$4.1M MXN', description: 'Distribución inteligente optimizada para largas y cortas estancias.', beds: 1, baths: 1.5, sqft: '80 m²', image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80' },
      { id: 14, title: 'Residences 5ta', price: '$7.8M MXN', description: 'Ubicación estratégica a unos pasos de la avenida principal, retorno asegurado.', beds: 2, baths: 2.5, sqft: '145 m²', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80' },
      { id: 15, title: 'Depa Cenote', price: '$6.0M MXN', description: 'Interiores con acabados orgánicos y acceso exclusivo a cenote privado.', beds: 2, baths: 2, sqft: '110 m²', image: 'https://images.unsplash.com/photo-1502005097973-ef569edd00aa?auto=format&fit=crop&w=800&q=80' },
    ]
  },
  {
    category: "Casas",
    title: "Villa Kukulcán",
    description: "Residencial de lujo inmersa en la selva, diseñada para la privacidad y el confort.",
    price: "Desde $8.5M MXN",
    roi: "10% Proyectado",
    location: "Región 15, Tulum",
    beds: 4,
    baths: 4.5,
    sqft: "250 m²",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    backImage1: "https://images.unsplash.com/photo-1613490908574-4b539958742b?auto=format&fit=crop&w=800&q=80",
    backImage2: "https://images.unsplash.com/photo-1512699226966-cdbd8ce1ea2c?auto=format&fit=crop&w=800&q=80",
    portfolio: [
      { id: 4, title: 'Villa Siyan', price: '$12.0M MXN', description: 'Arquitectura monumental con privacidad absoluta y alberca infinity.', beds: 5, baths: 5.5, sqft: '450 m²', image: 'https://images.unsplash.com/photo-1613490908574-4b539958742b?auto=format&fit=crop&w=800&q=80' },
      { id: 5, title: 'Casa Copal', price: '$9.5M MXN', description: 'Estilo contemporáneo que fusiona lujo y materiales endémicos.', beds: 4, baths: 4, sqft: '320 m²', image: 'https://images.unsplash.com/photo-1512699226966-cdbd8ce1ea2c?auto=format&fit=crop&w=800&q=80' },
      { id: 6, title: 'Residencia Lumina', price: '$15.2M MXN', description: 'Espacios abiertos de triple altura pensados para turismo de alto poder adquisitivo.', beds: 6, baths: 6.5, sqft: '600 m²', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
      { id: 16, title: 'Casa Jaguar', price: '$8.9M MXN', description: 'Oasis familiar en comunidad cerrada con seguridad 24/7.', beds: 3, baths: 3, sqft: '280 m²', image: 'https://images.unsplash.com/photo-1583608205712-bea72322c546?auto=format&fit=crop&w=800&q=80' },
      { id: 17, title: 'Villa Marea', price: '$14.5M MXN', description: 'Frente de playa excepcional con retorno garantizado en dólares.', beds: 5, baths: 6, sqft: '520 m²', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80' },
      { id: 18, title: 'Casa Coral', price: '$10.2M MXN', description: 'Equilibrio perfecto entre sustentabilidad y domótica de vanguardia.', beds: 4, baths: 4.5, sqft: '350 m²', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80' },
    ]
  },
  {
    category: "Terrenos",
    title: "EcoLotes Mayakoba",
    description: "Lotes residenciales premium rodeados de naturaleza, listos para desarrollo.",
    price: "Desde $2.1M MXN",
    roi: "15% Plusvalía",
    location: "Corredor Norte, Tulum",
    beds: "-",
    baths: "-",
    sqft: "500 m²",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    backImage1: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    backImage2: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80",
    portfolio: [
      { id: 7, title: 'Lote Selva Baja', price: '$2.5M MXN', description: 'Terreno rodeado de naturaleza intacta, ideal para proyectos eco-chic.', beds: '-', baths: '-', sqft: '600 m²', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80' },
      { id: 8, title: 'Lote Premium B', price: '$4.1M MXN', description: 'Alta plusvalía proyectada gracias a la cercanía con el nuevo acceso a playa.', beds: '-', baths: '-', sqft: '1000 m²', image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80' },
      { id: 9, title: 'Lote Esmeralda', price: '$3.8M MXN', description: 'Totalmente urbanizado con servicios subterráneos listos para construir.', beds: '-', baths: '-', sqft: '850 m²', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80' },
      { id: 19, title: 'Reserva Jaguar', price: '$5.5M MXN', description: 'Un santuario de gran extensión ideal para un compound privado familiar.', beds: '-', baths: '-', sqft: '1200 m²', image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80' },
      { id: 20, title: 'Lote Brisas', price: '$2.8M MXN', description: 'Topografía plana y excelente orientación para aprovechar vientos dominantes.', beds: '-', baths: '-', sqft: '650 m²', image: 'https://images.unsplash.com/photo-1455243501062-840bfad8b97d?auto=format&fit=crop&w=800&q=80' },
      { id: 21, title: 'Lote Manglar', price: '$3.2M MXN', description: 'Cercanía a reservas ecológicas, garantizando nulo impacto visual a futuro.', beds: '-', baths: '-', sqft: '720 m²', image: 'https://images.unsplash.com/photo-1418065460487-3e41a6c8e15f?auto=format&fit=crop&w=800&q=80' },
    ]
  },
  {
    category: "Propiedades en Renta",
    title: "Penthouse Blue",
    description: "Exclusivo penthouse con alberca privada y vistas panorámicas.",
    price: "Desde $12K MXN / mes",
    roi: "9% Histórico",
    location: "Playa del Carmen",
    beds: 2,
    baths: 2.5,
    sqft: "160 m²",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    backImage1: "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?auto=format&fit=crop&w=800&q=80",
    backImage2: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80",
    portfolio: [
      { id: 10, title: 'Loft Tropical', price: '$45K MXN / mes', description: 'Un oasis de tranquilidad con decoración de autor, listo para mudarse.', beds: 1, baths: 1.5, sqft: '90 m²', image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80' },
      { id: 11, title: 'Villa Oasis', price: '$80K MXN / mes', description: 'Capacidad amplia con personal de servicio incluido para una experiencia premium.', beds: 4, baths: 4, sqft: '350 m²', image: 'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?auto=format&fit=crop&w=800&q=80' },
      { id: 12, title: 'Depto Centro', price: '$65K MXN / mes', description: 'En el corazón vibrante de la ciudad, acceso caminando a las mejores áreas.', beds: 2, baths: 2, sqft: '140 m²', image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80' },
      { id: 22, title: 'Suite Marina', price: '$55K MXN / mes', description: 'Vistas directas de los yates, ambiente náutico exclusivo e inyectado de luz.', beds: 1, baths: 1, sqft: '100 m²', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=800&q=80' },
      { id: 23, title: 'Casa Arcos', price: '$40K MXN / mes', description: 'La majestuosidad de hacienda antigua renovada con comodidades de resort.', beds: 5, baths: 5, sqft: '420 m²', image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80' },
      { id: 24, title: 'Ático Soleil', price: '$85K MXN / mes', description: 'Rooftop privado con jacuzzi, diseñado para cautivar el estilo de vida cosmopolita.', beds: 2, baths: 2.5, sqft: '180 m²', image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80' },
    ]
  },
];

const validImgIds = [
  "1600596542815-ffad4c1539a9", /* Villa Principal */
  "1512917774080-9991f1c4c750", /* Casa Moderna */
  "1600607687920-4e2a09cf159d", /* Interior Lujo */
  "1600585154340-be6161a56a0c", /* Sala triple altura */
  "1576941089067-2de3c901e126", /* Alberca/Exterior Lujo */
  "1510798831971-661eb04b3739", /* Exteriores cálidos */
];

const getImg = (seed: number) => `https://images.unsplash.com/photo-${validImgIds[seed % validImgIds.length]}?auto=format&fit=crop&w=800&q=80`;

const cleanInventory = inventory.map((cat, i) => {
  const coverImage = getImg(i * 3 + 1);
  return {
    ...cat,
    image: coverImage,
    backImage1: getImg(i * 3 + 2),
    backImage2: getImg(i * 3 + 3),
    portfolio: [
      {
        id: `cover-${i}`,
        title: cat.title,
        price: cat.price,
        description: cat.description,
        beds: cat.beds,
        baths: cat.baths,
        sqft: cat.sqft,
        image: coverImage
      },
      ...cat.portfolio.map((p, j) => ({
        ...p,
        image: getImg(i * 10 + j)
      }))
    ]
  };
});

const presaleInventory = cleanInventory
  .filter((cat) => cat.category !== 'Propiedades en Renta')
  .map((cat, i) => ({
    ...cat,
    title: cat.title + " (Fase 0)",
    price: "Preventa: " + cat.price.replace("Desde ", ""),
    roi: "15% Plusvalía Proy.",
    description: "Nuevos lanzamientos y fases iniciales. Oportunidad de acceder a precios First-List. " + cat.description,
    image: getImg(i * 7 + 4),
    backImage1: getImg(i * 7 + 5),
    backImage2: getImg(i * 7 + 6),
    portfolio: cat.portfolio.map((p, j) => ({
      ...p,
      title: p.title + " (Planos)",
      image: getImg(i * 11 + j + 2)
    }))
  }));

export default function Arquetipos() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("Entrega Inmediata");
  const [activePortfolio, setActivePortfolio] = useState<any>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

  useEffect(() => {
    if (activePortfolio || selectedProperty) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activePortfolio, selectedProperty]);

  useEffect(() => {
    if (activePortfolio && !selectedProperty) {
      setCurrentSlideIndex(0);
    }
  }, [activePortfolio, selectedProperty]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedProperty) {
          setSelectedProperty(null);
        } else if (activePortfolio) {
          setActivePortfolio(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProperty, activePortfolio]);

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

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!e.currentTarget || !activePortfolio) return;
    const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget;
    if (activePortfolio.portfolio.length > 1) {
      const maxScroll = scrollWidth - clientWidth;
      const ratio = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      const index = Math.round(ratio * (activePortfolio.portfolio.length - 1));
      setCurrentSlideIndex(Math.min(Math.max(index, 0), activePortfolio.portfolio.length - 1));
    }
  };

  const handleIndicatorClick = (index: number) => {
    if (!carouselRef.current) return;
    const carousel = carouselRef.current;
    const cards = carousel.children;
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="modelos"
      className="pt-16 md:pt-10 pb-24 md:pb-32 bg-[var(--color-surface-low)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-4">
          <div className="relative w-[95%] max-w-[480px] md:max-w-[975px] h-[110px] md:h-[140px] mx-auto overflow-hidden">
            <div className={`absolute inset-0 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "translate-y-0" : "translate-y-full"}`}>
              <Image
                src="/tit-arque.webp"
                alt="Inventario Seleccionado"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="hidden md:block object-contain object-bottom"
                priority
              />
              <Image
                src="/tit-arque-mov2.webp"
                alt="Inventario Seleccionado"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="block md:hidden object-contain object-bottom"
                priority
              />
            </div>
          </div>
          <p
            className={`mt-6 md:mt-8 font-body text-base md:text-lg text-[var(--color-on-surface-variant)] leading-relaxed transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            Encuentra casas, departamentos y terrenos estratégicos en la Riviera Maya diseñados para ganar valor con el tiempo. Elige tu opción ideal y pon tu inversión en piloto automático con nuestro equipo.
          </p>

          {/* Toggle Button */}
          <div
            className={`mt-8 inline-flex items-center bg-gray-100 p-1 rounded-full transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            {["Entrega Inmediata", "Preventa"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${activeTab === tab
                  ? "bg-white text-[var(--color-copper)] shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                  : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid - 3D Fan Effect */}
        {(() => {
          const displayedInventory = activeTab === "Entrega Inmediata" ? cleanInventory : presaleInventory;
          const gridClasses = displayedInventory.length === 3
            ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto gap-8 mt-12"
            : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-12";

          return (
            <div key={activeTab} className={gridClasses}>
              {displayedInventory.map((item, index) => (
                <div
                  key={item.category}
                  className={`relative z-0 hover:z-30 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-12"}`}
                  style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
                >
                  <AnimatedTitle as="h4" text={item.category} className="text-sm font-bold text-[var(--color-copper)] mb-3 tracking-wide uppercase" />
                  <div className="group relative w-full h-[520px] cursor-pointer" onClick={() => setActivePortfolio(item)}>
                    {/* Back Card 1 */}
                    <div className="absolute inset-0 bg-white border border-gray-200 rounded-2xl shadow-sm transition-all duration-500 origin-bottom group-hover:-rotate-6 group-hover:-translate-x-4 z-10 flex flex-col overflow-hidden">
                      <Image src={item.backImage1} alt="Portafolio 1" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover rounded-2xl" unoptimized />
                      <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
                    </div>

                    {/* Back Card 2 */}
                    <div className="absolute inset-0 bg-white border border-gray-200 rounded-2xl shadow-sm transition-all duration-500 origin-bottom group-hover:rotate-6 group-hover:translate-x-4 z-20 flex flex-col overflow-hidden">
                      <Image src={item.backImage2} alt="Portafolio 2" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover rounded-2xl" unoptimized />
                      <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
                    </div>

                    {/* Front Card */}
                    <div className="absolute inset-0 bg-white rounded-2xl shadow-xl border border-gray-100 z-30 flex flex-col overflow-hidden transition-transform duration-500 group-hover:-translate-y-3">
                      {/* Top Half (Image) */}
                      <div className="h-1/2 relative bg-gray-200">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                          unoptimized
                        />
                        <div className="absolute top-0 right-0 bg-[var(--color-dark-navy)] text-white text-xs font-bold px-3 py-1 rounded-full m-3 shadow-md">
                          {item.roi}
                        </div>
                      </div>

                      {/* Bottom Half (Body) */}
                      <div className="p-6 flex flex-col h-1/2 justify-between bg-white">
                        <div>
                          <AnimatedTitle as="h3" text={item.title} className="text-xl font-headline text-gray-900 font-bold mb-1" />

                          <div className="flex items-center gap-1 text-gray-500">
                            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <span className="text-sm line-clamp-1">{item.location}</span>
                          </div>

                          <p className="text-lg font-bold text-gray-900 mt-2">
                            {item.price}
                          </p>
                        </div>

                        {/* Amenities Row */}
                        <div>
                          <div className="flex gap-4 mt-4 pt-4 border-t border-gray-100">
                            {/* Beds */}
                            <div className="flex items-center gap-1.5 text-gray-600">
                              <div
                                className="w-5 h-5 bg-[var(--color-copper)]"
                                style={{
                                  maskImage: "url('/hotel.png')",
                                  maskSize: "contain",
                                  maskRepeat: "no-repeat",
                                  maskPosition: "center",
                                  WebkitMaskImage: "url('/hotel.png')",
                                  WebkitMaskSize: "contain",
                                  WebkitMaskRepeat: "no-repeat",
                                  WebkitMaskPosition: "center"
                                }}
                              />
                              <span className="text-sm font-medium">{item.beds}</span>
                            </div>
                            {/* Baths */}
                            <div className="flex items-center gap-1.5 text-gray-600">
                              <div
                                className="w-5 h-5 bg-[var(--color-copper)]"
                                style={{
                                  maskImage: "url('/bathroom.png')",
                                  maskSize: "contain",
                                  maskRepeat: "no-repeat",
                                  maskPosition: "center",
                                  WebkitMaskImage: "url('/bathroom.png')",
                                  WebkitMaskSize: "contain",
                                  WebkitMaskRepeat: "no-repeat",
                                  WebkitMaskPosition: "center"
                                }}
                              />
                              <span className="text-sm font-medium">{item.baths}</span>
                            </div>
                            {/* Sqft */}
                            <div className="flex items-center gap-1.5 text-gray-600">
                              <div
                                className="w-5 h-5 bg-[var(--color-copper)]"
                                style={{
                                  maskImage: "url('/surface.png')",
                                  maskSize: "contain",
                                  maskRepeat: "no-repeat",
                                  maskPosition: "center",
                                  WebkitMaskImage: "url('/surface.png')",
                                  WebkitMaskSize: "contain",
                                  WebkitMaskRepeat: "no-repeat",
                                  WebkitMaskPosition: "center"
                                }}
                              />
                              <span className="text-sm font-medium">{item.sqft}</span>
                            </div>
                          </div>

                          <div className="text-[var(--color-copper)] font-semibold text-sm mt-4 flex items-center gap-1 w-max group-hover:translate-x-1 transition-transform">
                            Ver propiedades
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })()}
      </div>

      {/* Portfolio Overlay */}
      {activePortfolio && (
        <div className="fixed inset-0 bg-[var(--color-surface)] z-40 flex flex-col animate-fade-in-up overflow-hidden pt-[6.5rem] md:pt-[5rem] pb-4">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white">
            <button
              onClick={() => setActivePortfolio(null)}
              className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </button>
            <div className="relative w-[200px] md:w-[280px] h-[40px] md:h-[50px]">
              <Image
                src={
                  activePortfolio.category === 'Departamentos' ? '/tip-depa.webp' :
                    activePortfolio.category === 'Casas' ? '/tip-casas.webp' :
                      activePortfolio.category === 'Terrenos' ? '/tip-terr.webp' :
                        '/tip-renta.webp'
                }
                alt={activePortfolio.category}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="w-10"></div> {/* Placeholder to center title */}
          </div>

          {/* Carousel */}
          <div className="flex-1 relative flex flex-col w-full overflow-hidden">
            <div
              ref={carouselRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 p-6 md:p-12 pb-12 h-full items-center scrollbar-hide"
              style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
            >
              {activePortfolio.portfolio.map((prop: any) => (
                <div
                  key={prop.id}
                  className="min-w-[85vw] w-[85vw] md:min-w-[340px] md:max-w-[340px] h-[65vh] md:h-[450px] flex-shrink-0 snap-center bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden relative group cursor-pointer border border-gray-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProperty({
                      id: String(prop.id),
                      title: prop.title,
                      location: prop.location || activePortfolio.location,
                      price: prop.price,
                      projectedRoi: prop.roi || activePortfolio.roi,
                      beds: prop.beds === '-' ? 0 : prop.beds,
                      baths: prop.baths === '-' ? 0 : prop.baths,
                      area: parseInt(prop.sqft) || 0,
                      parking: prop.parking || 2,
                      images: [prop.image, activePortfolio.backImage1, activePortfolio.backImage2, activePortfolio.image],
                      description: [
                        prop.description,
                        "Un espacio diseñado bajo los más altos estándares de calidad, pensado para maximizar la rentabilidad y asegurar un retorno de inversión sólido. Las vistas excepcionales y la distribución inteligente lo convierten en una oportunidad irrepetible en el mercado actual."
                      ],
                      amenities: [
                        "Seguridad 24/7",
                        "Alberca Privada",
                        "Acceso Controlado",
                        "Área de Coworking",
                        "Gimnasio Equipado",
                        "Concierge Personal"
                      ]
                    });
                  }}
                >
                  {/* Top 50% Image */}
                  <div className="h-1/2 relative bg-gray-200">
                    <Image src={prop.image} alt={prop.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
                    <div className="absolute top-0 right-0 bg-[var(--color-dark-navy)] text-white text-xs font-bold px-3 py-1 rounded-full m-3 shadow-md">
                      {prop.roi || activePortfolio.roi}
                    </div>
                  </div>

                  {/* Bottom 50% Content */}
                  <div className="p-6 flex flex-col h-1/2 justify-between bg-white">
                    <div>
                      <AnimatedTitle as="h3" text={prop.title} className="text-xl font-headline text-gray-900 font-bold mb-1" />
                      <div className="flex items-center gap-1 text-gray-500">
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <span className="text-sm line-clamp-1">{prop.location || activePortfolio.location}</span>
                      </div>
                      <p className="text-lg font-bold text-gray-900 mt-2">{prop.price}</p>
                      <p className="text-sm text-gray-500 leading-snug line-clamp-2 mt-2">{prop.description}</p>
                    </div>

                    {/* Amenities Row */}
                    <div>
                      <div className="flex gap-4 mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-1.5 text-gray-600">
                          <div className="w-5 h-5 bg-[var(--color-copper)]" style={{ maskImage: "url('/hotel.png')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/hotel.png')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                          <span className="text-sm font-medium">{prop.beds}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-600">
                          <div className="w-5 h-5 bg-[var(--color-copper)]" style={{ maskImage: "url('/bathroom.png')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/bathroom.png')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                          <span className="text-sm font-medium">{prop.baths}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-600">
                          <div className="w-5 h-5 bg-[var(--color-copper)]" style={{ maskImage: "url('/surface.png')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/surface.png')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                          <span className="text-sm font-medium">{prop.sqft}</span>
                        </div>
                      </div>

                      <div className="text-[var(--color-copper)] font-semibold text-sm mt-4 flex items-center gap-1 w-max group-hover:translate-x-1 transition-transform relative z-10">
                        Ver propiedad completa
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pill Indicators */}
            <div className="absolute bottom-4 md:bottom-6 left-0 right-0 flex justify-center gap-2">
              {activePortfolio.portfolio.map((_: any, idx: number) => (
                <div
                  key={idx}
                  onClick={() => handleIndicatorClick(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentSlideIndex
                    ? "w-12 md:w-16 bg-[var(--color-copper)]"
                    : "w-6 md:w-8 bg-gray-300 hover:bg-gray-400"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Property Details Overlay */}
      {selectedProperty && (
        <PropertyDetails
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </section>
  );
}