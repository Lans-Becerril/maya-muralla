"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Tesis de Inversión", href: "#tesis" },
  { label: "Modelos", href: "#modelos" },
  { label: "Gestión", href: "#gestion" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav-scrolled" : "glass-nav"
      }`}
    >
      {/* Altura dinámica de la barra completa */}
      <nav className={`relative max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ease-in-out ${
        scrolled ? "h-16" : "h-[5.5rem]"
      }`}>
        
        {/* Logo - Anclado a la izquierda */}
        <a href="#" className="flex items-center z-10">
          <Image
            src="/logo-maya-muralla.webp"
            alt="Maya Muralla Logo"
            width={240}
            height={60}
            priority
            className={`w-auto transition-all duration-300 ease-in-out ${
              scrolled ? "h-7" : "h-12"
            }`}
          />
        </a>

        {/* Enlaces - Centrado Absoluto para evitar saltos */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-label text-[var(--color-on-surface-variant)] hover:text-[var(--color-copper)] transition-colors duration-300"
            >
              {link.label}
              </a>
          ))}
        </div>

        {/* Contenedor Derecho - Botón y Menú */}
        <div className="flex items-center gap-4 z-10">
          {/* Botón con tamaño dinámico */}
          <a
            href="#contacto"
            className={`hidden md:inline-block btn-copper transition-all duration-300 ${
              scrolled ? "text-xs py-2 px-5" : "text-sm py-3 px-6"
            }`}
          >
            Agendar Consulta
          </a>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[1.5px] bg-[var(--color-on-surface)] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""}`} />
            <span className={`block w-6 h-[1.5px] bg-[var(--color-on-surface)] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[1.5px] bg-[var(--color-on-surface)] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Altura ajustada dinámicamente al scroll */}
      <div
        className={`fixed inset-0 bg-white/98 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col items-center justify-start pt-24 gap-8 ${
          scrolled ? "top-16" : "top-[5.5rem]"
        } ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleNavClick}
            className="text-label text-lg text-[var(--color-on-surface-variant)] hover:text-[var(--color-copper)] transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a href="#contacto" onClick={handleNavClick} className="btn-copper text-sm mt-4">
          Agendar Consulta
        </a>
      </div>
    </header>
  );
}
