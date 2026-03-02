import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://segurosrehbein.cl'),
  title: "Venta Casa Premium San Miguel | Seguros Rehbein",
  description: "Oportunidad única en venta. Casa de 200m² totales, 3 dormitorios, 2 baños y 3 estacionamientos. A pasos de Metro Lo Vial, excelente conectividad en barrio tradicional de San Miguel.",
  keywords: ["Venta Casa San Miguel", "Propiedades San Miguel", "Casa 3 dormitorios San Miguel", "Seguros Rehbein Inmobiliaria", "Bienes Raíces Chile"],
  authors: [{ name: "Seguros Rehbein" }],
  creator: "Marketing Digital Patagonia",
  publisher: "Seguros Rehbein",
  openGraph: {
    title: "Venta de Casa Premium - San Miguel | Seguros Rehbein",
    description: "Amplitud y comodidad. 200m² totales, 3D/2B, ideal para familias. Sector tradicional, tranquilo y bien conectado.",
    url: "/",
    siteName: "Seguros Rehbein",
    images: [{ url: '/images/hero.webp', width: 1200, height: 630, alt: "Casa en Venta San Miguel" }],
    locale: 'es_CL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Venta Casa Premium San Miguel | Seguros Rehbein",
    description: "Gran oportunidad de inversión y calidad de vida. Casa de 200m² con excelente conectividad.",
    images: ["/images/hero.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
