import React, { useState } from 'react';
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
  images: string[];
  description: string[];
  amenities: string[];
}

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
        className="absolute top-6 right-6 md:top-8 md:right-8 p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-50 group border border-transparent hover:border-gray-300 cursor-pointer"
        aria-label="Cerrar detalles"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto p-8 md:p-16 lg:p-24 pt-24">

        {/* Columna Izquierda: Galería */}
        <div className="flex flex-col gap-4">
          {/* Imagen Principal */}
          {property.images[0] && (
            <div className="w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
              <img
                src={property.images[0]}
                alt={`${property.title} - Principal`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          )}
          {/* Grid secundario */}
          <div className="grid grid-cols-2 gap-4">
            {property.images.slice(1, 5).map((img, index) => (
              <div key={index} className="w-full aspect-square rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={img}
                  alt={`${property.title} - Vista ${index + 2}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Columna Derecha: Sticky Info */}
        <div className="relative">
          <div className="sticky top-12 h-fit flex flex-col gap-8 pb-8">

            {/* Header: Título y Ubicación */}
            <div>
              <AnimatedTitle
                as="h1"
                text={property.title}
                className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-3"
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
                <p className="text-3xl font-medium text-slate-900">{property.price}</p>
              </div>
              <div className="md:text-right border-l md:border-l-0 md:border-r border-gray-200 pl-4 md:pl-0 md:pr-4 relative before:hidden md:before:block before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:h-8 before:w-px before:bg-gray-200">
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">ROI Proyectado</p>
                <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#B9935A] to-[#D4AF37]" style={{ color: 'var(--color-copper, #B9935A)', WebkitTextFillColor: 'var(--color-copper, #B9935A)' }}>
                  {property.projectedRoi}
                </p>
              </div>
            </div>

            {/* Iconos Base */}
            <div className="flex gap-6 border-y border-gray-100 py-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[var(--color-copper)]/10 rounded-lg text-[var(--color-copper)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-900">{property.beds}</p>
                  <p className="text-sm text-gray-500">Camas</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[var(--color-copper)]/10 rounded-lg text-[var(--color-copper)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-900">{property.baths}</p>
                  <p className="text-sm text-gray-500">Baños</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[var(--color-copper)]/10 rounded-lg text-[var(--color-copper)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-900">{property.area} m&sup2;</p>
                  <p className="text-sm text-gray-500">Área Base</p>
                </div>
              </div>
            </div>

            {/* Tabs de Información */}
            <div>
              <div className="flex border-b border-gray-200 mb-6">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`pb-4 px-2 mr-6 text-lg font-medium transition-colors relative ${activeTab === 'description' ? 'text-slate-900' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <AnimatedTitle as="span" text="Descripción" />
                  {activeTab === 'description' && (
                    <span className="absolute bottom-[-1px] left-0 w-full h-0.5 bg-[var(--color-copper)] rounded-t-full" style={{ backgroundColor: 'var(--color-copper, #B9935A)' }} />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('amenities')}
                  className={`pb-4 px-2 text-lg font-medium transition-colors relative ${activeTab === 'amenities' ? 'text-slate-900' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <AnimatedTitle as="span" text="Amenidades" />
                  {activeTab === 'amenities' && (
                    <span className="absolute bottom-[-1px] left-0 w-full h-0.5 bg-[var(--color-copper)] rounded-t-full" style={{ backgroundColor: 'var(--color-copper, #B9935A)' }} />
                  )}
                </button>
              </div>

              {/* Contenido de Tabs */}
              <div className="min-h-[200px]">
                {activeTab === 'description' && (
                  <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
                    {property.description.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                )}

                {activeTab === 'amenities' && (
                  <div className="grid grid-cols-2 gap-4 md:gap-y-6">
                    {property.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--color-copper, #B9935A)' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 mt-auto flex justify-center">
              <button
                className="w-fit px-12 py-4 rounded-xl text-white font-medium text-lg tracking-wide shadow-lg shadow-[#B9935A]/20 hover:shadow-xl hover:shadow-[#B9935A]/30 transition-all hover:-translate-y-1 cursor-pointer"
                style={{ backgroundColor: 'var(--color-copper, #B9935A)' }}
              >
                Agendar Llamada
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
