"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import AnimatedTitle from "./AnimatedTitle";

export default function LeadForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const router = useRouter();
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

      router.push('/reportes-exclusivos/matriz-decision');
    } catch (error: any) {
      console.error("Error crudo:", error);
      console.error("Mensaje específico:", error?.message || error?.details || error?.hint || "El error está completamente vacío");

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
          {/* Left: GUÍA GRATUITA DE INVERSIÓN Copy */}
          <div>
            <p
              className={`text-label text-[var(--color-copper)] mb-6 transition-all duration-700 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
                }`}
            >
              GUÍA GRATUITA DE INVERSIÓN
            </p>

            <AnimatedTitle
              as="h2"
              text="No inviertas a ciegas. Descubre qué propiedad es exactamente para ti."
              className="text-headline text-[var(--color-inverse-surface)] mb-6"
            />

            <p
              className={`font-body text-base leading-[1.7] text-[rgba(241,241,241,0.6)] mb-10 transition-all duration-700 delay-200 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
                }`}
            >
              Con tantas opciones en el mercado, es fácil sentirse abrumado o cometer un error costoso. Descarga nuestra Matriz de Decisión gratuita para descubrir, en menos de 3 minutos, si tu perfil está hecho para Terrenos, Departamentos o Preventas. Deja de adivinar y comienza a invertir con seguridad.
            </p>

            {/* Trust signals */}
            <div
              className={`flex items-center gap-8 transition-all duration-700 delay-300 ${isVisible
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
                  Protegemos tu información
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

            {/* DIRECT CONTACT & SOCIALS SECTION (SOLO ESCRITORIO) */}
            <div
              className={`hidden lg:block mt-12 pt-10 border-t border-[rgba(255,255,255,0.05)] transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <p className="text-label text-[rgba(241,241,241,0.5)] mb-6">O si lo prefieres, puedes comunicarte directamente con un asesor:</p>

              <div className="flex flex-wrap items-center gap-6">
                {/* Botón Llamar */}
                <a
                  href="tel:+525569080842"
                  className="flex items-center gap-2 bg-[rgba(185,116,52,0.1)] hover:bg-[rgba(185,116,52,0.2)] border border-[var(--color-copper)] text-[var(--color-copper)] px-5 py-2.5 rounded-sm transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.864-1.048l-3.413-.553a2.25 2.25 0 0 0-2.166.94l-1.103 1.32c-3.196-1.55-5.89-4.243-7.44-7.44l1.32-1.103a2.25 2.25 0 0 0 .94-2.166l-.553-3.413a2.25 2.25 0 0 0-1.048-.864H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
                  </svg>
                  <span className="font-body text-sm font-medium">Llamar</span>
                </a>

                {/* Redes Sociales */}
                <div className="flex items-center gap-5">
                  <a href="http://x.com/" target="_blank" rel="noopener noreferrer" className="text-[rgba(241,241,241,0.5)] hover:text-[var(--color-copper)] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-[rgba(241,241,241,0.5)] hover:text-[var(--color-copper)] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.46 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" clipRule="evenodd" /></svg>
                  </a>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-[rgba(241,241,241,0.5)] hover:text-[var(--color-copper)] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible
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
                  placeholder="¿A quién nos dirigimos?"
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
                  placeholder="¿A que correo te podremos contactar?"
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
                  <option value="-3m">Menos de $3M MXN</option>
                  <option value="3m-5m">$3M – $5M MXN</option>
                  <option value="5m-8m">$5M – $8M MXN</option>
                  <option value="8m-15m">$8M – $15M MXN</option>
                  <option value="+15m">Más de $15M MXN</option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-copper w-full text-center text-sm py-4 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Descubrir mi Perfil de Inversión"}
              </button>
              {submitStatus === "error" && (
                <div className="text-center font-body text-sm text-red-500 mt-4 p-4 bg-red-900/10 border border-red-500/20 rounded-sm">
                  Ocurrió un error al enviar tus datos. Por favor, inténtalo de nuevo.
                </div>
              )}

              <p className="font-body text-[0.7rem] text-[rgba(241,241,241,0.3)] text-center leading-relaxed">
                Al enviar, aceptas nuestro{" "}
                <Link href="/privacidad" className="underline hover:text-[var(--color-copper)] transition-colors">
                  Aviso de Privacidad
                </Link>{" "}
                y recibir comunicaciones de Maya Muralla. Puedes darte de baja en cualquier momento.
              </p>
            </form>

            {/* DIRECT CONTACT & SOCIALS SECTION (SOLO MÓVIL) */}
            <div className="lg:hidden mt-12 pt-10 border-t border-[rgba(255,255,255,0.05)]">
              <p className="text-label text-[rgba(241,241,241,0.5)] mb-6">O si lo prefieres, puedes comunicarte directamente con un asesor:</p>

              <div className="flex flex-wrap items-center justify-between gap-6 w-full">
                {/* Botón Llamar */}
                <a
                  href="tel:+525569080842"
                  className="flex items-center gap-2 bg-[rgba(185,116,52,0.1)] hover:bg-[rgba(185,116,52,0.2)] border border-[var(--color-copper)] text-[var(--color-copper)] px-5 py-2.5 rounded-sm transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.864-1.048l-3.413-.553a2.25 2.25 0 0 0-2.166.94l-1.103 1.32c-3.196-1.55-5.89-4.243-7.44-7.44l1.32-1.103a2.25 2.25 0 0 0 .94-2.166l-.553-3.413a2.25 2.25 0 0 0-1.048-.864H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
                  </svg>
                  <span className="font-body text-sm font-medium">Llamar</span>
                </a>

                {/* Redes Sociales */}
                <div className="flex items-center gap-5">
                  <a href="http://x.com/" target="_blank" rel="noopener noreferrer" className="text-[rgba(241,241,241,0.5)] hover:text-[var(--color-copper)] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-[rgba(241,241,241,0.5)] hover:text-[var(--color-copper)] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.46 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" clipRule="evenodd" /></svg>
                  </a>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-[rgba(241,241,241,0.5)] hover:text-[var(--color-copper)] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" /></svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}