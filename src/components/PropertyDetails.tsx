"use client";

import React, { useState, useEffect, FormEvent } from 'react';
import AnimatedTitle from './AnimatedTitle';
import { supabase } from "@/lib/supabase";

export interface PropertyData {
  id: string;
  title: string;
  location: string;
  price: string;
  projectedRoi: string;
  beds: number | string;
  baths: number | string;
  area: number | string;
  parking: number | string;
  images: string[];
  description: string[];
  amenities: string[];
  landUse?: string;
  financing?: string;
  downPayment?: string;
  externalUrl?: string;
}

const getAmenityIcon = (text: string) => {
  const lowerText = text.toLowerCase();

  if (lowerText.includes('seguridad') || lowerText.includes('acceso')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--color-copper, #B9935A)' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
  if (lowerText.includes('agua')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--color-copper, #B9935A)' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2.25c-2.485 5.556-8.25 8.948-8.25 14.25a8.25 8.25 0 1016.5 0c0-5.302-5.765-8.694-8.25-14.25z" />
      </svg>
    );
  }
  if (lowerText.includes('verde') || lowerText.includes('parque') || lowerText.includes('naturaleza')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--color-copper, #B9935A)' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-6m0 0a4 4 0 00-4-4h-.5a4.5 4.5 0 119 0H16a4 4 0 00-4 4z" />
      </svg>
    );
  }
  if (lowerText.includes('luz') || lowerText.includes('electricidad') || lowerText.includes('iluminación')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--color-copper, #B9935A)' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    );
  }
  if (lowerText.includes('calle') || lowerText.includes('concreto') || lowerText.includes('pavimento')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--color-copper, #B9935A)' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    );
  }
  if (lowerText.includes('título') || lowerText.includes('escritura') || lowerText.includes('legal')) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--color-copper, #B9935A)' }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    );
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--color-copper, #B9935A)' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
};

const ImageGallery = ({ images, title }: { images: string[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        e.preventDefault();
        e.stopImmediatePropagation();
        setIsFullscreen(false);
      }
    };
    if (isFullscreen) {
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

          <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
          </div>
        </div>

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
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 z-[300] bg-black/75 flex flex-col items-center justify-center animate-fade-in">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-[310] cursor-pointer"
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

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [comprarPara, setComprarPara] = useState('');
  const [presupuesto, setPresupuesto] = useState('');
  const [tiempoConstruccion, setTiempoConstruccion] = useState('');
  const [canalContacto, setCanalContacto] = useState('');
  const [horario, setHorario] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const { error } = await supabase
        .from('property_leads')
        .insert([{
          property_name: property.title,
          name: nombre,
          phone: telefono,
          purchase_purpose: comprarPara,
          budget: presupuesto,
          timeframe: tiempoConstruccion,
          contact_channel: canalContacto,
          preferred_time: horario
        }]);

      if (error) throw error;
      setSubmitStatus("success");

    } catch (error: any) {
      console.error("Error al enviar lead:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 1️⃣ ENCAMPULAMOS EL FORMULARIO EN UNA VARIABLE PARA REUTILIZARLO
  const formContent = (
    <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
      <h3 className="text-xl md:text-2xl font-light text-slate-900 mb-6 font-headline tracking-tight">Solicita información personalizada</h3>

      {submitStatus === "success" ? (
        <div className="bg-green-50 border border-green-100 rounded-xl p-6 text-center animate-fade-in flex flex-col items-center">
          <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h4 className="text-lg font-medium text-slate-900 mb-2">¡Gracias por tu interés!</h4>
          <p className="text-gray-600 mb-6">Hemos recibido tus datos correctamente. Un asesor se pondrá en contacto contigo pronto.</p>
          {property.externalUrl && (
            <a
              href={property.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-xl text-white font-medium tracking-wide shadow-lg hover:-translate-y-0.5 transition-all w-full md:w-auto text-center"
              style={{ backgroundColor: 'var(--color-copper, #B9935A)' }}
            >
              Ver más información del desarrollo
            </a>
          )}
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
              <input
                required
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#B9935A] focus:ring-1 focus:ring-[#B9935A] outline-none transition-colors"
                placeholder="Tu nombre completo"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
              <input
                required
                type="tel"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#B9935A] focus:ring-1 focus:ring-[#B9935A] outline-none transition-colors"
                placeholder="Tu teléfono"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Comprar para</label>
            <select
              required
              value={comprarPara}
              onChange={(e) => setComprarPara(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#B9935A] focus:ring-1 focus:ring-[#B9935A] outline-none transition-colors bg-white cursor-pointer"
            >
              <option value="">Selecciona una opción</option>
              <option value="inversion">Inversión / Renta vacacional</option>
              <option value="personal">Uso personal / Residencial</option>
              <option value="ambas">Ambas</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Presupuesto estimado</label>
              <select
                required
                value={presupuesto}
                onChange={(e) => setPresupuesto(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#B9935A] focus:ring-1 focus:ring-[#B9935A] outline-none transition-colors bg-white cursor-pointer"
              >
                <option value="">Selecciona una opción</option>
                <option value="450-500">$450,000 - $500,000 MXN</option>
                <option value="500-550">$500,000 - $550,000 MXN</option>
                <option value="550+">$550,000 MXN o más</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tiempo de construcción</label>
              <select
                required
                value={tiempoConstruccion}
                onChange={(e) => setTiempoConstruccion(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#B9935A] focus:ring-1 focus:ring-[#B9935A] outline-none transition-colors bg-white cursor-pointer"
              >
                <option value="">Selecciona una opción</option>
                <option value="1">1 año</option>
                <option value="2">2 años</option>
                <option value="3+">3 años o más</option>
                <option value="no-decidido">Aún no decido</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Canal de contacto</label>
              <select
                required
                value={canalContacto}
                onChange={(e) => setCanalContacto(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#B9935A] focus:ring-1 focus:ring-[#B9935A] outline-none transition-colors bg-white cursor-pointer"
              >
                <option value="">Selecciona una opción</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="llamada">Llamada telefónica</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Horario preferido</label>
              <select
                required
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#B9935A] focus:ring-1 focus:ring-[#B9935A] outline-none transition-colors bg-white cursor-pointer"
              >
                <option value="">Selecciona una opción</option>
                <option value="manana">Mañana (9am - 12pm)</option>
                <option value="tarde">Tarde (12pm - 6pm)</option>
                <option value="noche">Noche (6pm - 8pm)</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-6 px-6 py-3.5 rounded-xl text-white font-medium text-lg tracking-wide shadow-lg transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 cursor-pointer"
            style={{ backgroundColor: 'var(--color-copper, #B9935A)' }}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar solicitud de información'}
          </button>

          {submitStatus === "error" && (
            <div className="text-center text-sm text-red-500 mt-2 p-3 bg-red-50 border border-red-200 rounded-lg">
              Ocurrió un error. Por favor, inténtalo de nuevo.
            </div>
          )}
        </form>
      )}
    </div>
  );

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

        {/* COLUMNA IZQUIERDA */}
        <div className="w-full">
          <ImageGallery images={property.images} title={property.title} />

          {/* 2️⃣ DIBUJAMOS EL FORMULARIO AQUÍ SÓLO EN ESCRITORIO */}
          <div className="hidden lg:block mt-12">
            {formContent}
          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="w-full">
          <div className="sticky top-12 h-fit flex flex-col gap-8 pb-8">

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

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="min-w-0 flex-1">
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">Inversión Estimada</p>
                <p className="text-base md:text-lg font-medium text-slate-900 truncate">{property.price}</p>
              </div>
              <div className="min-w-0 flex-1 md:text-right border-l md:border-l-0 md:border-r border-gray-200 pl-4 md:pl-0 md:pr-4 relative before:hidden md:before:block before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:h-8 before:w-px before:bg-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">ROI Proyectado</p>
                <p className="text-base md:text-lg font-bold truncate bg-clip-text text-transparent bg-gradient-to-r from-[#B9935A] to-[#D4AF37]" style={{ color: 'var(--color-copper, #B9935A)', WebkitTextFillColor: 'var(--color-copper, #B9935A)' }}>
                  {property.projectedRoi}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 items-start md:items-center gap-6 border-y border-gray-100 py-6">
              {property.beds === 0 || property.beds === "-" ? (
                <>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[var(--color-copper)]/10 rounded-lg text-[var(--color-copper)] flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-slate-900 truncate">{property.area} m&sup2;</p>
                      <p className="text-sm text-gray-500 truncate">Superficie</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 md:border-l lg:border-l-0 xl:border-l md:border-gray-100 md:pl-4 lg:pl-0 xl:pl-4">
                    <div className="p-2 bg-[var(--color-copper)]/10 rounded-lg text-[var(--color-copper)] flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-slate-900 truncate">{property.landUse || "-"}</p>
                      <p className="text-sm text-gray-500 truncate">Uso de Suelo</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 md:border-l lg:border-l-0 xl:border-l md:border-gray-100 md:pl-4 lg:pl-0 xl:pl-4">
                    <div className="p-2 bg-[var(--color-copper)]/10 rounded-lg text-[var(--color-copper)] flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-slate-900 truncate">{property.financing || "-"}</p>
                      <p className="text-sm text-gray-500 truncate">Plazo</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 md:border-l lg:border-l-0 xl:border-l md:border-gray-100 md:pl-4 lg:pl-0 xl:pl-4">
                    <div className="p-2 bg-[var(--color-copper)]/10 rounded-lg text-[var(--color-copper)] flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-slate-900 truncate">{property.downPayment || "-"}</p>
                      <p className="text-sm text-gray-500 truncate">Enganche</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[var(--color-copper)]/10 rounded-lg text-[var(--color-copper)] flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-slate-900 truncate">{property.beds}</p>
                      <p className="text-sm text-gray-500 truncate">Camas</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 md:border-l lg:border-l-0 xl:border-l md:border-gray-100 md:pl-4 lg:pl-0 xl:pl-4">
                    <div className="p-2 bg-[var(--color-copper)]/10 rounded-lg text-[var(--color-copper)] flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-slate-900 truncate">{property.baths}</p>
                      <p className="text-sm text-gray-500 truncate">Baños</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 md:border-l lg:border-l-0 xl:border-l md:border-gray-100 md:pl-4 lg:pl-0 xl:pl-4">
                    <div className="p-2 bg-[var(--color-copper)]/10 rounded-lg text-[var(--color-copper)] flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-slate-900 truncate">{property.area} m&sup2;</p>
                      <p className="text-sm text-gray-500 truncate">Superficie</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 md:border-l lg:border-l-0 xl:border-l md:border-gray-100 md:pl-4 lg:pl-0 xl:pl-4">
                    <div className="p-2 bg-[var(--color-copper)]/10 rounded-lg text-[var(--color-copper)] flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 17V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10m14 0h-4m4 0l-1.5 2M5 17H1m4 0l1.5 2M15 13H9m6-4H9" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-slate-900 truncate">{property.parking}</p>
                      <p className="text-sm text-gray-500 truncate">Estacionamiento</p>
                    </div>
                  </div>
                </>
              )}
            </div>

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

              <div className="min-h-[200px] w-full">
                {activeTab === 'description' && (
                  <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
                    {property.description.map((paragraph, idx) => (
                      <p key={idx} className="text-justify">{paragraph}</p>
                    ))}
                  </div>
                )}

                {activeTab === 'amenities' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-y-6 max-w-2xl mx-auto">
                    {property.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-start justify-start gap-3">
                        {getAmenityIcon(amenity)}
                        <span className="text-gray-700 text-left">{amenity}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 3️⃣ DIBUJAMOS EL FORMULARIO AQUÍ SÓLO EN MÓVIL AL FINAL */}
            <div className="block lg:hidden w-full mt-4 pb-10">
              {formContent}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}