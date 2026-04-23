"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "SERVICIOS", href: "/#gestion" },
  { name: "PROPIEDADES", href: "/#modelos" },
  { name: "CONTACTO", href: "/#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${mobileOpen
        ? "bg-white shadow-md"
        : scrolled
          ? "bg-white/30 backdrop-blur-md shadow-sm border-b border-white/20"
          : "bg-transparent"
        }`}
    >
      <nav
        className={`relative z-50 max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-[4.5rem] md:h-16" : "h-[5.5rem]"
          }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src={
              scrolled || mobileOpen
                ? "/logo-maya-muralla.webp"
                : "/logo-maya-muralla-grises.webp"
            }
            alt="Maya Muralla Logo"
            width={240}
            height={60}
            priority
            className={`w-auto transition-all duration-300 ${scrolled || mobileOpen ? "h-7" : "h-12"
              }`}
          />
        </Link>

        {/* Desktop Links (Centered) */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold tracking-wide text-[var(--color-copper)] hover:opacity-70 transition-opacity duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link href="/#contacto" className="hidden md:inline-block btn-copper rounded-md transition-all duration-300 text-sm font-bold py-3 px-6">
            Consultoría sin Costo
          </Link>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[1.5px] bg-[var(--color-copper)] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""
                }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-[var(--color-copper)] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-[var(--color-copper)] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
                }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-xl overflow-hidden transition-all duration-300 ease-in-out md:hidden flex flex-col items-center ${mobileOpen
          ? "max-h-[400px] py-8 opacity-100 border-t border-gray-100"
          : "max-h-0 py-0 opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center gap-8 w-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base text-2xl text-[var(--color-dark-navy)] hover:text-[var(--color-copper)] transition-colors text-center"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#contacto"
            onClick={() => setMobileOpen(false)}
            className="mt-4 btn-copper py-4 px-10 text-sm font-bold rounded-md"
          >
            Consultoría sin Costo
          </Link>
        </div>
      </div>
    </header>
  );
}