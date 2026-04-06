import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const manrope = Manrope({
  variable: "--font-headline",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Maya Muralla | Inversiones Inmobiliarias Riviera Maya",
  description:
    "Adquiere propiedades de alta rentabilidad en la Riviera Maya con gestión llave en mano. ROI proyectado del 12%. Consultoría para patrimonios inteligentes en el Caribe Mexicano.",
  keywords: [
    "inversiones inmobiliarias",
    "riviera maya",
    "tulum",
    "playa del carmen",
    "bienes raíces",
    "airbnb",
    "rendimientos",
  ],
  openGraph: {
    title: "Maya Muralla | Inversiones Inmobiliarias Riviera Maya",
    description:
      "Propiedades optimizadas para rentas vacacionales con alta rentabilidad proyectada.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
