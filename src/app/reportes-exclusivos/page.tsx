import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reportes Exclusivos | Maya Muralla — Inteligencia de Mercado",
  description:
    "Accede a reportes premium de inteligencia inmobiliaria. Análisis cuantitativo, marcos de decisión y estrategias para inversionistas de alto valor en la Riviera Maya.",
};

/* ── Article catalogue (add new entries here) ─────────────── */
const ARTICLES = [
  {
    href: "/reportes-exclusivos/5-errores-rentabilidad",
    tag: "Reporte Institucional",
    title: "5 Errores que destruyen tu rentabilidad en la Riviera Maya",
    description:
      "Aprende a identificar el verdadero potencial de un activo inmobiliario y evita las trampas comunes.",
    readTime: "12 min",
  },
  {
    href: "/reportes-exclusivos/matriz-decision",
    tag: "Herramienta de Análisis",
    title: "Matriz de Decisión Patrimonial",
    description:
      "Un marco analítico preciso para comparar terrenos, departamentos y preventas según tu perfil de inversión.",
    readTime: "8 min",
  },
];

export default function ReportesExclusivosPage() {
  return (
    <div className="min-h-screen bg-[#111827] text-white selection:bg-[var(--color-copper)]/20 selection:text-white">
      {/* ── Google Fonts ──────────────────────────────────────── */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <header className="relative overflow-hidden border-b border-white/[0.06]">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 0%, rgba(185,116,52,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 100%, rgba(185,116,52,0.04) 0%, transparent 50%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-40 pb-24">
          <span className="inline-block px-4 py-1.5 border border-[#B97434]/30 text-[#B97434] text-[0.65rem] tracking-[0.25em] uppercase font-medium mb-8">
            Sala de Inteligencia
          </span>
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white/95 max-w-4xl mb-6">
            Reportes Exclusivos e Inteligencia de Mercado
          </h1>
          <p className="font-body text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed">
            Análisis cuantitativo, marcos de decisión y estrategias reservadas
            para inversionistas que operan con datos, no con intuición.
          </p>
        </div>
      </header>

      {/* ── Article Grid ──────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTICLES.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group relative bg-white/[0.03] border border-white/[0.06] p-10 flex flex-col justify-between min-h-[320px] transition-all duration-500 hover:bg-white/[0.06] hover:border-[#B97434]/20 hover:shadow-[0_0_60px_rgba(185,116,52,0.06)]"
            >
              {/* Tag */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#B97434] font-medium">
                  {article.tag}
                </span>
                <span className="text-[0.6rem] tracking-[0.15em] uppercase text-white/30 font-medium">
                  {article.readTime}
                </span>
              </div>

              {/* Content */}
              <div className="mt-auto">
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-white/90 leading-snug mb-4 group-hover:text-[#B97434] transition-colors duration-300">
                  {article.title}
                </h2>
                <p className="font-body text-sm text-white/40 leading-relaxed mb-8">
                  {article.description}
                </p>

                {/* CTA arrow */}
                <div className="flex items-center gap-3 text-[#B97434] opacity-60 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs tracking-[0.15em] uppercase font-medium">
                    Leer Reporte
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.06] py-16 text-center">
        <p className="font-body text-xs text-white/20 tracking-[0.15em] uppercase">
          © 2026 Maya Muralla · Institutional Real Estate Intelligence
        </p>
      </footer>
    </div>
  );
}
