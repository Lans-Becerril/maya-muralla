import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matriz de Decisión Patrimonial | El Archivo Soberano",
  description:
    "Marco analítico para transformar liquidez ociosa en activos inteligentes. Compara terrenos, departamentos y preventas en la Riviera Maya.",
};

/* ─────────────────────────────────────────────────────────────
   Stitch Design‑System tokens (scoped to this page only).
   We define them as CSS custom properties in a wrapper <div>
   so they never leak into the global Maya Muralla theme.
   ───────────────────────────────────────────────────────────── */
const STITCH_VARS: React.CSSProperties & Record<string, string> = {
  /* Core palette */
  "--st-primary": "#785926",
  "--st-primary-container": "#b9935a",
  "--st-on-surface": "#1a1c1c",
  "--st-secondary": "#575e70",
  "--st-outline": "#807568",
  "--st-outline-variant": "#d2c4b5",
  "--st-surface": "#f9f9f9",
  "--st-surface-low": "#f3f3f3",
  "--st-surface-container": "#eeeeee",
  "--st-surface-container-high": "#e8e8e8",
  "--st-surface-white": "#ffffff",
  "--st-on-primary-container": "#452c00",
  "--st-inverse-surface": "#2f3131",
  "--st-inverse-on-surface": "#f1f1f1",
} as React.CSSProperties & Record<string, string>;

export default function MatrizDecisionPage() {
  return (
    <div style={STITCH_VARS}>


      <style>{`
        /* ── Stitch page‑scoped overrides ─────────────────────── */
        .st-page * { border-radius: 0px !important; }

        .st-page .ambient-shadow {
          box-shadow: 0 20px 80px rgba(17, 24, 39, 0.06);
        }

        .st-page .grid-bg {
          background-image:
            linear-gradient(to right, #d2c4b5 1px, transparent 1px),
            linear-gradient(to bottom, #d2c4b5 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .st-page ::selection {
          background: rgba(120, 89, 38, 0.2);
          color: #1a1c1c;
        }
      `}</style>

      <div className="st-page bg-[#f9f9f9] text-[#1a1c1c] font-body antialiased selection:bg-[#b9935a]/20 selection:text-[#1a1c1c] overflow-x-hidden min-h-screen">

        {/* ═══════ TOP APP BAR ═══════════════════════════════════ */}
        <header className="fixed z-50 bg-[#fafafa]/80 backdrop-blur-md top-0 border-b border-[#d2c4b5]/40 flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto left-0 right-0">
          <div className="font-headline text-lg font-bold text-[#1a1c1c]">
            Matriz de Decisión Patrimonial
          </div>
          <div className="flex items-center gap-8 font-headline uppercase tracking-widest text-sm">
            <button className="text-[#785926] hover:text-[#b9935a] transition-colors duration-200 hover:opacity-80">
              Contactar Asesor
            </button>
          </div>
        </header>

        <main className="pt-32">
          {/* ═══════ 1. HERO ══════════════════════════════════════ */}
          <section className="max-w-screen-2xl mx-auto px-8 py-16 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
              <div className="md:col-span-5 flex flex-col gap-8">
                <h1 className="font-headline text-[3.5rem] md:text-[5rem] leading-[1.1] font-normal text-[#1a1c1c]">
                  Matriz de Decisión Patrimonial
                </h1>
                <p className="font-body text-lg text-[#575e70] leading-relaxed max-w-md">
                  El capital estático es una responsabilidad. Transformar
                  liquidez ociosa en activos inteligentes requiere un marco
                  analítico preciso, despojado de emoción y enfocado en el
                  rendimiento puro.
                </p>
              </div>
              <div className="md:col-span-6 md:col-start-7 relative">
                <div className="aspect-[4/5] w-full relative bg-[#f3f3f3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Arquitectura Moderna"
                    className="w-full h-full object-cover grayscale opacity-90"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgc4eaLIGepJ2_OWlmL6MQ-RQzFPTcF1RRFIiTHegbayfiki7MffsqlnBruvibG9y2E83rKwB2hikW1ukHvSjEq9u_pSPMQxIlUqsbPEpayi8-RLIYxfEbRyT_H1ra6e3DL6B0F6Q4c-dHtZArRYo7HwlcKWcfycJgMVlCrq4iQZ2McMK-8yEhWbwWj5toBwElS3uN_4wiUXA4EVjUDgK5MW8uAATcYSehzDj0NRIAdbRaHEEAnYDDu2EhTougAFg2yhHRqPwhVWAJ"
                  />
                </div>
                {/* Overlapping Card */}
                <div className="absolute -bottom-12 -left-12 bg-white p-8 border border-[#d2c4b5] ambient-shadow w-72 z-10 hidden md:block">
                  <span className="font-label text-[10px] uppercase tracking-[0.15em] text-[#575e70] block mb-4">
                    Métrica Clave
                  </span>
                  <h3 className="font-headline text-2xl text-[#1a1c1c] mb-2">
                    Inflación Anual <br />
                    <span className="text-[#785926] italic">vs.</span> Plusvalía
                  </h3>
                  <div className="h-[1px] w-12 bg-[#785926] mt-6" />
                </div>
              </div>
            </div>
          </section>

          {/* ═══════ 2. MARKET ════════════════════════════════════ */}
          <section className="max-w-screen-2xl mx-auto px-8 py-32 border-t border-[#d2c4b5]/40">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4 flex items-start">
                <span className="font-label text-xs uppercase tracking-[0.1em] text-[#785926]">
                  01 — El Entorno
                </span>
              </div>
              <div className="md:col-span-6 md:col-start-6 flex flex-col gap-6">
                <h2 className="font-headline text-4xl text-[#1a1c1c]">
                  Reestructuración de Capital en la Riviera Maya
                </h2>
                <p className="font-body text-lg text-[#575e70] leading-[1.6]">
                  La dinámica del mercado inmobiliario premium exige un enfoque
                  clínico. Ya no se trata de adquirir propiedades, sino de
                  posicionar capital en vehículos que ofrezcan una asimetría
                  favorable entre riesgo y rentabilidad sostenida a largo plazo.
                </p>
              </div>
            </div>
          </section>

          {/* ═══════ 3. THE PLAN (MATRIX) ═════════════════════════ */}
          <section className="max-w-screen-2xl mx-auto px-8 py-32 bg-white border-y border-[#d2c4b5]/40">
            <div className="mb-16">
              <span className="font-label text-xs uppercase tracking-[0.1em] text-[#785926] block mb-4">
                02 — Anatomía del Activo
              </span>
              <h2 className="font-headline text-4xl text-[#1a1c1c]">
                La Matriz
              </h2>
            </div>
            <div className="overflow-x-auto">
              <div className="min-w-[800px] grid grid-cols-4 border-t border-l border-[#d2c4b5]/40">
                {/* Header Row */}
                <div className="p-6 border-r border-b border-[#d2c4b5]/40 bg-[#f9f9f9]" />
                <div className="p-6 border-r border-b border-[#d2c4b5]/40 bg-[#f9f9f9] text-center">
                  <span className="font-headline text-xl text-[#1a1c1c]">Terrenos</span>
                </div>
                <div className="p-6 border-r border-b border-[#d2c4b5]/40 bg-[#f9f9f9] text-center">
                  <span className="font-headline text-xl text-[#1a1c1c]">Departamentos</span>
                </div>
                <div className="p-6 border-r border-b border-[#d2c4b5]/40 bg-[#f9f9f9] text-center">
                  <span className="font-headline text-xl text-[#1a1c1c]">Preventa</span>
                </div>

                {/* Row 1 — Perfil de Riesgo */}
                <div className="p-6 border-r border-b border-[#d2c4b5]/40 flex items-center">
                  <span className="font-label text-xs uppercase tracking-[0.1em] text-[#575e70]">
                    Perfil de Riesgo
                  </span>
                </div>
                <div className="p-6 border-r border-b border-[#d2c4b5]/40 text-center font-body text-[#1a1c1c]">Muy Bajo</div>
                <div className="p-6 border-r border-b border-[#d2c4b5]/40 text-center font-body text-[#1a1c1c]">Moderado</div>
                <div className="p-6 border-r border-b border-[#d2c4b5]/40 text-center font-body text-[#1a1c1c]">Bajo - Moderado</div>

                {/* Row 2 — Capital Mínimo */}
                <div className="p-6 border-r border-b border-[#d2c4b5]/40 flex items-center">
                  <span className="font-label text-xs uppercase tracking-[0.1em] text-[#575e70]">
                    Capital Mínimo
                  </span>
                </div>
                <div className="p-6 border-r border-b border-[#d2c4b5]/40 text-center font-body text-[#1a1c1c]">$50k USD</div>
                <div className="p-6 border-r border-b border-[#d2c4b5]/40 text-center font-body text-[#1a1c1c]">$150k USD</div>
                <div className="p-6 border-r border-b border-[#d2c4b5]/40 text-center font-body text-[#1a1c1c]">$30k USD (Enganche)</div>

                {/* Row 3 — Horizonte de Liquidez */}
                <div className="p-6 border-r border-b border-[#d2c4b5]/40 flex items-center">
                  <span className="font-label text-xs uppercase tracking-[0.1em] text-[#575e70]">
                    Horizonte de Liquidez
                  </span>
                </div>
                <div className="p-6 border-r border-b border-[#d2c4b5]/40 text-center font-body text-[#1a1c1c]">Largo Plazo (5+ años)</div>
                <div className="p-6 border-r border-b border-[#d2c4b5]/40 text-center font-body text-[#1a1c1c]">Inmediato (Rentas)</div>
                <div className="p-6 border-r border-b border-[#d2c4b5]/40 text-center font-body text-[#1a1c1c]">Mediano Plazo (2-3 años)</div>

                {/* Row 4 — ROI (highlighted) */}
                <div className="p-6 border-r border-b border-[#d2c4b5]/40 flex items-center bg-[#f9f9f9]">
                  <span className="font-label text-xs uppercase tracking-[0.1em] text-[#1a1c1c] font-bold">
                    Rendimiento (ROI)
                  </span>
                </div>
                <div className="p-6 border-r border-b border-[#d2c4b5]/40 text-center bg-[#f9f9f9]">
                  <span className="font-headline text-3xl text-[#785926]">15-25%</span>
                </div>
                <div className="p-6 border-r border-b border-[#d2c4b5]/40 text-center bg-[#f9f9f9]">
                  <span className="font-headline text-3xl text-[#785926]">8-12%</span>
                </div>
                <div className="p-6 border-r border-b border-[#d2c4b5]/40 text-center bg-[#f9f9f9]">
                  <span className="font-headline text-3xl text-[#785926]">13-30%</span>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════ 4. CHART (Abstract Quadrant) ═════════════════ */}
          <section className="max-w-screen-2xl mx-auto px-8 py-32">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
              <div className="md:col-span-4">
                <span className="font-label text-xs uppercase tracking-[0.1em] text-[#785926] block mb-4">
                  03 — Visualización
                </span>
                <h2 className="font-headline text-3xl text-[#1a1c1c] mb-6">
                  Mapeo de Activos: Rendimiento Directo vs. Ancho de Banda
                  Administrativo
                </h2>
                <p className="font-body text-sm text-[#575e70]">
                  Análisis comparativo de esfuerzo operativo requerido frente al
                  potencial de apreciación de capital.
                </p>
              </div>
              <div className="md:col-span-8 aspect-video grid-bg relative border border-[#d2c4b5]/40 opacity-80">
                {/* Y Axis */}
                <div className="absolute left-0 bottom-0 h-full w-[1px] bg-[#807568]" />
                <span className="absolute -left-12 bottom-1/2 -rotate-90 font-label text-[10px] uppercase tracking-widest text-[#575e70]">
                  Rendimiento
                </span>
                {/* X Axis */}
                <div className="absolute left-0 bottom-0 w-full h-[1px] bg-[#807568]" />
                <span className="absolute left-1/2 -bottom-6 -translate-x-1/2 font-label text-[10px] uppercase tracking-widest text-[#575e70]">
                  Carga Administrativa
                </span>
                {/* Data Points */}
                <div className="absolute bottom-[80%] left-[20%] w-6 h-6 bg-[#b9935a] border border-[#1a1c1c] flex items-center justify-center group cursor-pointer transition-transform hover:scale-110">
                  <span className="absolute -top-6 font-label text-[10px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Terrenos
                  </span>
                </div>
                <div className="absolute bottom-[40%] left-[80%] w-6 h-6 bg-[#1a1c1c] border border-[#807568] flex items-center justify-center group cursor-pointer transition-transform hover:scale-110">
                  <span className="absolute -top-6 font-label text-[10px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Departamentos
                  </span>
                </div>
                <div className="absolute bottom-[70%] left-[50%] w-6 h-6 bg-[#785926] border border-[#1a1c1c] flex items-center justify-center group cursor-pointer transition-transform hover:scale-110">
                  <span className="absolute -top-6 font-label text-[10px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Preventa
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════ 5. MIRROR (3 Cards) ══════════════════════════ */}
          <section className="max-w-screen-2xl mx-auto px-8 py-32 bg-[#f3f3f3] border-y border-[#d2c4b5]/40">
            <div className="mb-16 text-center">
              <span className="font-label text-xs uppercase tracking-[0.1em] text-[#785926] block mb-4">
                04 — Alineación
              </span>
              <h2 className="font-headline text-4xl text-[#1a1c1c]">
                Arquitectura de Portafolio
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white border border-[#d2c4b5] p-10 flex flex-col h-full min-h-[400px]">
                <span className="font-headline text-5xl text-[#d2c4b5]/30 mb-auto">
                  I
                </span>
                <h3 className="font-headline text-2xl text-[#1a1c1c] mt-16 mb-4">
                  Conservador
                </h3>
                <div className="h-[0.5px] w-full bg-[#d2c4b5]/40 mb-4" />
                <p className="font-label text-xs uppercase tracking-[0.1em] text-[#785926] mb-4">
                  Preservación
                </p>
                <p className="font-body text-sm text-[#575e70] leading-relaxed">
                  Enfoque en resguardar el capital contra la inflación.
                  Prioridad a terrenos premium en zonas de consolidación
                  inminente.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-white border border-[#d2c4b5] p-10 flex flex-col h-full min-h-[400px]">
                <span className="font-headline text-5xl text-[#d2c4b5]/30 mb-auto">
                  II
                </span>
                <h3 className="font-headline text-2xl text-[#1a1c1c] mt-16 mb-4">
                  Buscador de Ingresos
                </h3>
                <div className="h-[0.5px] w-full bg-[#d2c4b5]/40 mb-4" />
                <p className="font-label text-xs uppercase tracking-[0.1em] text-[#785926] mb-4">
                  Flujo de Caja
                </p>
                <p className="font-body text-sm text-[#575e70] leading-relaxed">
                  Optimización para rentas vacacionales o largo plazo.
                  Departamentos llave en mano con gestión profesional delegada.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-white border border-[#d2c4b5] p-10 flex flex-col h-full min-h-[400px]">
                <span className="font-headline text-5xl text-[#d2c4b5]/30 mb-auto">
                  III
                </span>
                <h3 className="font-headline text-2xl text-[#1a1c1c] mt-16 mb-4">
                  Crecimiento Agresivo
                </h3>
                <div className="h-[0.5px] w-full bg-[#d2c4b5]/40 mb-4" />
                <p className="font-label text-xs uppercase tracking-[0.1em] text-[#785926] mb-4">
                  Plusvalía Acelerada
                </p>
                <p className="font-body text-sm text-[#575e70] leading-relaxed">
                  Apalancamiento estratégico en fases &ldquo;Friends &amp;
                  Family&rdquo; de desarrollos seleccionados para maximizar
                  márgenes de salida.
                </p>
              </div>
            </div>
          </section>

          {/* ═══════ 6. CLOSING ═══════════════════════════════════ */}
          <section className="max-w-screen-xl mx-auto px-8 py-48 text-center flex flex-col items-center justify-center border-b border-[#d2c4b5]/40">
            <span className="font-label text-xs uppercase tracking-[0.1em] text-[#785926] block mb-8">
              05 — Ejecución
            </span>
            <h2 className="font-headline text-5xl md:text-6xl text-[#1a1c1c] mb-8 max-w-3xl leading-tight">
              El piloto automático de tu patrimonio
            </h2>
            <p className="font-body text-lg text-[#575e70] mb-16 max-w-2xl leading-relaxed">
              Nuestra firma no vende propiedades; estructuramos posiciones de
              capital. Permita que nuestro equipo analice su situación actual
              para diseñar una ruta de crecimiento geométrico.
            </p>
            <button className="bg-[#1a1c1c] text-[#f9f9f9] font-label text-sm uppercase tracking-[0.15em] px-12 py-6 hover:bg-[#b9935a] hover:text-[#1a1c1c] transition-colors duration-300">
              Agendar Análisis de Perfil (Sin Costo)
            </button>
          </section>
        </main>

        {/* ═══════ FOOTER ═════════════════════════════════════════ */}
        <footer className="bg-[#fafafa] border-t border-[#d2c4b5]/40 flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 max-w-screen-2xl mx-auto gap-4">
          <div className="font-headline text-xl font-black text-[#1a1c1c]">
            El Archivo Soberano
          </div>
          <div className="flex gap-6">
            <a
              className="font-body uppercase text-[10px] tracking-[0.1em] text-[#9e9e9e] hover:text-[#1a1c1c] transition-all"
              href="#"
            >
              Privacidad
            </a>
            <a
              className="font-body uppercase text-[10px] tracking-[0.1em] text-[#9e9e9e] hover:text-[#1a1c1c] transition-all"
              href="#"
            >
              Términos
            </a>
            <a
              className="font-body uppercase text-[10px] tracking-[0.1em] text-[#9e9e9e] hover:text-[#1a1c1c] transition-all"
              href="#"
            >
              Aviso Legal
            </a>
          </div>
          <div className="font-body uppercase text-[10px] tracking-[0.1em] text-[#785926]">
            © 2024 El Archivo Soberano. Todos los derechos reservados.
          </div>
        </footer>
      </div>
    </div>
  );
}
