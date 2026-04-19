"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "SERVICIOS", href: "#gestion" },
  { label: "PROPIEDADES", href: "#modelos" },
  { label: "CONTACTO", href: "#contacto" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/30 backdrop-blur-md shadow-sm border-b border-white/20" : "bg-transparent backdrop-blur-none"}`}
    >
      {/* Altura dinámica de la barra completa */}
      <nav className={`relative max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ease-in-out ${scrolled ? "h-16" : "h-[5.5rem]"
        }`}>

        {/* Logo - Anclado a la izquierda */}
        <a href="#" className="flex items-center z-10">
          <Image
            src={scrolled ? "/logo-maya-muralla.webp" : "/logo-maya-muralla-grises.webp"}
            alt="Maya Muralla Logo"
            width={240}
            height={60}
            priority
            className={`w-auto transition-all duration-300 ease-in-out ${scrolled ? "h-7" : "h-12"
              }`}
          />
        </a>

        {/* Enlaces - Centrado Absoluto para evitar saltos */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold tracking-wide text-[var(--color-copper)] hover:opacity-70 transition-opacity duration-300"
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
            className={`hidden md:inline-block btn-copper rounded-md transition-all duration-300 ${scrolled ? "text-xs py-2 px-5" : "text-sm py-3 px-6"
              }`}
          >
            Consultoría sin Costo
          </a>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[1.5px] bg-[var(--color-copper)] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""}`} />
            <span className={`block w-6 h-[1.5px] bg-[var(--color-copper)] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[1.5px] bg-[var(--color-copper)] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Altura ajustada dinámicamente al scroll */}
      <div
        className={`fixed inset-0 bg-white/98 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col items-center justify-start pt-24 gap-8 ${scrolled ? "top-16" : "top-[5.5rem]"
          } ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleNavClick}
            className="text-lg font-bold text-[var(--color-copper)] hover:opacity-70 transition-opacity"
          >
            {link.label}
          </a>
        ))}
        <a href="#contacto" onClick={handleNavClick} className="btn-copper rounded-md text-sm mt-4">
          Consultoría sin Costo
        </a>
      </div>
    </header>
  );
}
