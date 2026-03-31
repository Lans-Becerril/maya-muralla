"use client";

import { useState, useEffect } from "react";

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

  // Lock body scroll when mobile menu is open
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-nav-scrolled" : "glass-nav"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[4.5rem]">
        {/* Logo */}
        <a
          href="#"
          className="font-headline text-lg font-bold tracking-tight"
          style={{ color: scrolled ? "#0D1C32" : "#0D1C32" }}
        >
          <span className="text-[var(--color-copper)]">Maya</span> Muralla
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
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

        {/* Desktop CTA */}
        <a
          href="#contacto"
          className="hidden md:inline-block btn-copper text-sm py-3 px-6"
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
          <span
            className={`block w-6 h-[1.5px] bg-[var(--color-on-surface)] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""
              }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-[var(--color-on-surface)] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-[var(--color-on-surface)] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
              }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[4.5rem] bg-white/98 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col items-center justify-start pt-16 gap-8 ${mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
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
        <a
          href="#contacto"
          onClick={handleNavClick}
          className="btn-copper text-sm mt-4"
        >
          Agendar Consulta
        </a>
      </div>
    </header>
  );
}
