import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/hero-bg.png"
        alt="Penthouse de lujo en la Riviera Maya con vista al mar Caribe"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={90}
      />

      {/* Dark Overlay — gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(13,28,50,0.75)] via-[rgba(13,28,50,0.60)] to-[rgba(13,28,50,0.85)]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Label */}
        <p className="text-label text-[var(--color-copper-light)] mb-6 animate-fade-in-up opacity-0">
          Inversiones Inmobiliarias · Riviera Maya
        </p>

        {/* H1 */}
        <h1 className="text-display text-white mb-6 animate-fade-in-up opacity-0 animation-delay-100">
          Inversiones inmobiliarias con{" "}
          <span className="text-[var(--color-copper-light)]">
            alta rentabilidad
          </span>{" "}
          proyectada.
        </h1>

        {/* H2 */}
        <p className="font-body text-lg md:text-xl text-[rgba(241,241,241,0.8)] max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0 animation-delay-200">
          Adquiere una propiedad optimizada para rentas vacacionales y recibe
          tus ganancias mientras nosotros operamos todo.
        </p>

        {/* CTA */}
        <div className="animate-fade-in-up opacity-0 animation-delay-300">
          <a href="#contacto" className="btn-copper text-base inline-block">
            Solicitar Información
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-surface)] to-transparent" />
    </section>
  );
}
