import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cotizador Instantáneo | Noweb",
  description: "Obtén tu presupuesto digital en segundos. Soluciones de IA, Web y E-commerce.",
  openGraph: {
    title: "Cotizador Instantáneo | Noweb",
    description: "Obtén tu presupuesto digital en segundos. Soluciones de IA, Web y E-commerce.",
    type: "website",
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#05050b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
