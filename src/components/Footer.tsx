import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark-navy-deep)] py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-8">
          {/* Branding */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              href="/"
              className="flex items-center"
            >
              <Image
                src="/logo-maya-muralla-grises.webp"
                alt="Maya Muralla Logo"
                width={200}
                height={60}
                className="w-auto h-10 opacity-90"
              />
            </Link>
            <p className="font-body text-sm text-[rgba(241,241,241,0.4)] mt-3 md:mt-2 max-w-sm text-center md:text-left">
              Te guiamos hacia la inversión perfecta para que puedas disfrutar del paraíso Maya.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <Link
              href="/#gestion"
              className="text-label text-[0.65rem] text-[rgba(241,241,241,0.4)] hover:text-[var(--color-copper)] transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="/#modelos"
              className="text-label text-[0.65rem] text-[rgba(241,241,241,0.4)] hover:text-[var(--color-copper)] transition-colors"
            >
              Propiedades
            </Link>
            <Link
              href="/#contacto"
              className="text-label text-[0.65rem] text-[rgba(241,241,241,0.4)] hover:text-[var(--color-copper)] transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>

        {/* Separator — ghost border */}
        <div className="w-full h-px bg-[rgba(197,198,205,0.1)] mt-10 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="font-body text-xs text-[rgba(241,241,241,0.3)]">
              © {new Date().getFullYear()} Maya Muralla. Todos los derechos
              reservados.
            </p>
            <Link
              href="/privacidad"
              className="font-body text-xs text-[rgba(241,241,241,0.3)] hover:text-[var(--color-copper)] transition-colors"
            >
              Aviso de Privacidad
            </Link>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-[rgba(241,241,241,0.3)] hover:text-[var(--color-copper)] transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-[rgba(241,241,241,0.3)] hover:text-[var(--color-copper)] transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
