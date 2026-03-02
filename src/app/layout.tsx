import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Venta Casa Premium Llico 650, San Miguel | Seguros Rehbein",
  description: "Gran oportunidad de inversión y calidad de vida. Casa de 200m², 3 dormitorios, 2 baños y 3 estacionamientos. A pasos de Metro Lo Vial, excelente conectividad en barrio tranquilo.",
  openGraph: {
    title: "Venta de Casa Premium - San Miguel",
    description: "Amplitud y comodidad. 200m² totales, 3D/2B, ideal para remodelar y vivir en un sector tradicional, tranquilo y bien conectado.",
    images: [{ url: '/images/1.webp', width: 1200, height: 630 }],
    locale: 'es_CL',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
