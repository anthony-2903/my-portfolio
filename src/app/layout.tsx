import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anthony Janampa | Ingeniero de Sistemas & Frontend Developer",
  description:
    "Portafolio profesional de Anthony Janampa, Ingeniero de Sistemas especializado en desarrollo frontend, diseño UI e infraestructura tecnológica.",
  keywords: [
    "Anthony Janampa",
    "Frontend Developer",
    "React",
    "Next.js",
    "Ingeniero de Sistemas",
    "Lima Perú",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
