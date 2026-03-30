"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import { supabase } from "@/lib/supabase";

export default function LeadForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [rango, setRango] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const { error } = await supabase
        .from("leads")
        .insert([{ nombre, email, rango }]);

      if (error) throw error;

      setSubmitStatus("success");
      setNombre("");
      setEmail("");
      setRango("");
      
      setTimeout(() => setSubmitStatus("idle"), 6000);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className="section-gap bg-[var(--color-dark-navy)] relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 30% 50%, rgba(185,116,52,0.5) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(185,116,52,0.2) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Lead Magnet Copy */}
          <div>
            <p
              className={`text-label text-[var(--color-copper)] mb-6 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Lead Magnet
            </p>

            <h2
              className={`text-headline text-[var(--color-inverse-surface)] mb-6 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Descarga el Reporte:{" "}
              <span className="text-[var(--color-copper-light)]">
                5 errores que destruyen la rentabilidad
              </span>{" "}
              en la Riviera Maya
            </h2>

            <p
              className={`font-body text-base leading-[1.7] text-[rgba(241,241,241,0.6)] mb-10 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Evita las trampas comunes de los desarrolladores y aprende a
              identificar el verdadero potencial de un activo inmobiliario.
              Recibe el reporte exclusivo directo en tu inbox.
            </p>

            {/* Trust signals */}
            <div
              className={`flex items-center gap-8 transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[var(--color-copper)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
                <span className="font-body text-xs text-[rgba(241,241,241,0.5)]">
                  100% Confidencial
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[var(--color-copper)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <span className="font-body text-xs text-[rgba(241,241,241,0.5)]">
                  Sin spam
                </span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <form
              id="lead-form"
              onSubmit={handleSubmit}
              className="bg-[rgba(255,255,255,0.03)] rounded-sm p-8 lg:p-10 space-y-8"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="nombre"
                  className="text-label text-[rgba(241,241,241,0.5)] text-[0.65rem] mb-2 block"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ej. Carlos Rodríguez"
                  className="input-estate-dark"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-label text-[rgba(241,241,241,0.5)] text-[0.65rem] mb-2 block"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="carlos@ejemplo.com"
                  className="input-estate-dark"
                />
              </div>

              {/* Investment Range Select */}
              <div>
                <label
                  htmlFor="rango"
                  className="text-label text-[rgba(241,241,241,0.5)] text-[0.65rem] mb-2 block"
                >
                  Rango de Inversión
                </label>
                <select
                  id="rango"
                  name="rango"
                  required
                  className="input-estate-dark appearance-none cursor-pointer"
                  value={rango}
                  onChange={(e) => setRango(e.target.value)}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5' stroke='%23B97434' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1rem center",
                  }}
                >
                  <option value="" disabled>
                    Selecciona un rango
                  </option>
                  <option value="3m-5m">$3M – $5M MXN</option>
                  <option value="5m-8m">$5M – $8M MXN</option>
                  <option value="8m-15m">$8M – $15M MXN</option>
                  <option value="15m+">$15M+ MXN</option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-copper w-full text-center text-sm py-4 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                disabled={isSubmitting || submitStatus === "success"}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : submitStatus === "success" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    Enviado Correctamente
                  </span>
                ) : (
                  "Descargar Reporte Gratis"
                )}
              </button>

              {submitStatus === "success" && (
                <div className="text-center font-body text-sm text-[var(--color-copper)] mt-4 p-4 bg-[rgba(185,116,52,0.1)] border border-[rgba(185,116,52,0.2)] rounded-sm">
                  Reporte enviado a tu correo. Nos pondremos en contacto pronto.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="text-center font-body text-sm text-red-500 mt-4 p-4 bg-red-900/10 border border-red-500/20 rounded-sm">
                  Ocurrió un error al enviar tus datos. Por favor, inténtalo de nuevo.
                </div>
              )}

              <p className="font-body text-[0.7rem] text-[rgba(241,241,241,0.3)] text-center leading-relaxed">
                Al enviar, aceptas recibir comunicaciones de Coral Capital.
                Puedes darte de baja en cualquier momento.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
