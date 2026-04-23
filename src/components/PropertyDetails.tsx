"use client";

import React, { useState, useEffect } from 'react';
import AnimatedTitle from './AnimatedTitle';

export interface PropertyData {
  id: string;
  title: string;
  location: string;
  price: string;
  projectedRoi: string;
  beds: number;
  baths: number;
  area: number;
  parking: number;
  images: string[];
  description: string[];
  amenities: string[];
}

const ImageGallery = ({ images, title }: { images: string[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  // 🛡️ MAGIA AQUI: Interceptamos la tecla ESC antes de que llegue a Arquetipos.tsx
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        e.preventDefault();
        e.stopImmediatePropagation(); // Evita que la página principal escuche el ESC
        setIsFullscreen(false);
      }
    };

    if (isFullscreen) {
      // El "true" final activa la fase de captura (somos los primeros en escuchar la tecla)
      window.addEventListener('keydown', handleEsc, true);
    }
    return () => window.removeEventListener('keydown', handleEsc, true);
  }, [isFullscreen]);

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        {/* Main Image */}
        <div
          className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm relative bg-gray-100 group cursor-pointer"
          onClick={() => setIsFullscreen(true)}
        >
          <img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} - Principal`}
            className="w-full h-full object-cover transition-opacity duration-500 animate-fade-in"
            style={{ animation: 'fadeIn 0.5s ease-in-out' }}
          />

          {/* Main Image Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/30 hover:bg-white/60 backdrop-blur-md text-white hover:text-gray-900 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                aria-label="Anterior imagen"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/30 hover:bg-white/60 backdrop-blur-md text-white hover:text-gray-900 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                aria-label="Siguiente imagen"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Icono de Expandir */}
          <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
          </div>
        </div>

        {/* Thumbnails Carousel */}
        {images.length > 1 && (
          <div className="relative group/thumbs">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className={`w-20 md:w-24 flex-shrink-0 aspect-[4/3] md:aspect-square snap-center rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300 ${currentIndex === idx ? 'border-[var(--color-copper)] shadow-lg opacity-100 scale-100 md:scale-105' : 'border-transparent shadow-sm opacity-50 hover:opacity-100 hover:scale-100'}`}
                  onClick={() => setCurrentIndex(idx)}
                >
                  <img
                    src={img}
                    alt={`${title} - Miniatura ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Thumbnails Arrows */}
            {images.length > 4 && (
              <>
                <button
                  onClick={() => scrollThumbnails('left')}
                  className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-1.5 rounded-full bg-white shadow-md border border-gray-100 text-gray-600 hover:text-black hover:bg-gray-50 transition-all opacity-0 group-hover/thumbs:opacity-100 cursor-pointer z-10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollThumbnails('right')}
                  className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-1.5 rounded-full bg-white shadow-md border border-gray-100 text-gray-600 hover:text-black hover:bg-gray-50 transition-all opacity-0 group-hover/thumbs:opacity-100 cursor-pointer z-10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        )}

        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes fadeIn {
            from { opacity: 0.6; }
            to { opacity: 1; }
          }
          .animate-fade-in {
            animation: fadeIn 0.4s ease-out forwards;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}} />
      </div>

      {/* ── OVERLAY DE PANTALLA COMPLETA ── */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[300] bg-black/75 flex flex-col items-center justify-center animate-fade-in">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-[310] cursor-pointer"
            aria-label="Cerrar imagen completa"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative w-full h-full max-h-screen p-4 flex items-center justify-center">
            <img
              key={`fs-${currentIndex}`}
              src={images[currentIndex]}
              alt={`${title} - Pantalla Completa`}
              className="max-w-full max-h-full object-contain select-none animate-fade-in"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-6 md:left-12 p-3 md:p-4 rounded-full bg-black/50 hover:bg-white/20 backdrop-blur-md text-white transition-all cursor-pointer z-[310]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-6 md:right-12 p-3 md:p-4 rounded-full bg-black/50 hover:bg-white/20 backdrop-blur-md text-white transition-all cursor-pointer z-[310]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>

          <div className="absolute bottom-6 text-white/70 font-body text-sm tracking-widest">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

interface PropertyDetailsProps {
  property: PropertyData;
  onClose: () => void;
}

export default function PropertyDetails({ property, onClose }: PropertyDetailsProps) {
  const [activeTab, setActiveTab] = useState<'description' | 'amenities'>('description');

  return (
    <div
      className="fixed inset-0 z-[150] bg-white overflow-y-auto bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/fondo-prop.webp')" }}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 md:top-8 md:right-8 p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-[160] group border border-transparent hover:border-gray-300 cursor-pointer"
        aria-label="Cerrar detalles"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto p-8 md:p-16 lg:p-24 pt-24">

        {/* 🛡️ MAGIA AQUÍ: Quitamos el "relative z-0" que atrapaba la foto */}
        <div className="w-full">
          <ImageGallery images={property.images} title={property.title} />
        </div>

        {/* 🛡️ MAGIA AQUÍ: Quitamos el "relative z-10" para equilibrar las capas */}
        <div className="w-full">
          <div className="sticky top-12 h-fit flex flex-col gap-8 pb-8">

            {/* Header: Título y Ubicación */}
            <div>
              <AnimatedTitle
                as="h1"
                text={property.title}
                className="text-2xl md:text-3xl font-light text-slate-900 tracking-tight mb-3"
              />
              <div className="flex items-center text-gray-500 gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-copper)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-lg">{property.location}</span>
              </div>
            </div>

            {/* Snapshot Financiero */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">Inversión Estimada</p>
                <p className="text-xl md:text-2xl font-medium text-slate-900">{property.price}</p>
              </div>
              <div className="md:text-right border-l md:border-l-0 md:border-r border-gray-200 pl-4 md:pl-0 md:pr-4 relative before:hidden md:before:block before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:h-8 before:w-px before:bg-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">ROI Proyectado</p>
                <p className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#B9935A] to-[#D4AF37]" style={{ color: 'var(--color-copper, #B9935A)', WebkitTextFillColor: 'var(--color-copper, #B9935A)' }}>
                  {property.projectedRoi}
                </p>
              </div>
            </div>

            {/* Iconos Base */}
            <div className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-between items-center gap-6 border-y border-gray-100 py-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[var(--color-copper)]/10 rounded-lg text-[var(--color-copper)] flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-900">{property.beds}</p>
                  <p className="text-sm text-gray-500">Camas</p>
                </div>
              </div>

              <div className="flex items-center gap-3 lg:border-l lg:border-gray-100 lg:pl-4">
                <div className="p-2 bg-[var(--color-copper)]/10 rounded-lg text-[var(--color-copper)] flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-900">{property.baths}</p>
                  <p className="text-sm text-gray-500">Baños</p>
                </div>
              </div>

              <div className="flex items-center gap-3 lg:border-l lg:border-gray-100 lg:pl-4">
                <div className="p-2 bg-[var(--color-copper)]/10 rounded-lg text-[var(--color-copper)] flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-900">{property.area} m&sup2;</p>
                  <p className="text-sm text-gray-500">Superficie</p>
                </div>
              </div>

              <div className="flex items-center gap-3 lg:border-l lg:border-gray-100 lg:pl-4">
                <div className="p-2 bg-[var(--color-copper)]/10 rounded-lg text-[var(--color-copper)] flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 17V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10m14 0h-4m4 0l-1.5 2M5 17H1m4 0l1.5 2M15 13H9m6-4H9" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-900">{property.parking}</p>
                  <p className="text-sm text-gray-500">Estacionamiento</p>
                </div>
              </div>
            </div>

            {/* Tabs de Información */}
            <div className="flex flex-col w-full">
              <div className="flex justify-center border-b border-gray-200 mb-8 w-full">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`pb-4 px-4 text-lg font-medium transition-colors relative cursor-pointer ${activeTab === 'description' ? 'text-slate-900' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <AnimatedTitle as="span" text="Descripción" />
                  {activeTab === 'description' && (
                    <span className="absolute bottom-[-1px] left-0 w-full h-0.5 bg-[var(--color-copper)] rounded-t-full" style={{ backgroundColor: 'var(--color-copper, #B9935A)' }} />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('amenities')}
                  className={`pb-4 px-4 text-lg font-medium transition-colors relative cursor-pointer ${activeTab === 'amenities' ? 'text-slate-900' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <AnimatedTitle as="span" text="Amenidades" />
                  {activeTab === 'amenities' && (
                    <span className="absolute bottom-[-1px] left-0 w-full h-0.5 bg-[var(--color-copper)] rounded-t-full" style={{ backgroundColor: 'var(--color-copper, #B9935A)' }} />
                  )}
                </button>
              </div>

              {/* Contenido de Tabs */}
              <div className="min-h-[200px] w-full">
                {activeTab === 'description' && (
                  <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base max-w-2xl mx-auto text-center">
                    {property.description.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                )}

                {activeTab === 'amenities' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-y-6 max-w-2xl mx-auto">
                    {property.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-start justify-start sm:justify-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--color-copper, #B9935A)' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-left">{amenity}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 mt-auto flex justify-center">
              <a
                href="https://wa.me/525569080842?text=Hola%20Erick%2C%20vi%20mayamuralla.com%20y%20quiero%20proteger%20el%20futuro%20de%20mi%20familia.%20¿Me%20ayudas%20a%20agendar%20una%20asesoría%20para%20encontrar%20la%20mejor%20inversión%20según%20mi%20presupuesto?"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit px-12 py-4 rounded-xl text-white font-medium text-lg tracking-wide shadow-lg shadow-[#B9935A]/20 hover:shadow-xl hover:shadow-[#B9935A]/30 transition-all hover:-translate-y-1 cursor-pointer block"
                style={{ backgroundColor: 'var(--color-copper, #B9935A)' }}
              >
                Agendar Llamada
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}