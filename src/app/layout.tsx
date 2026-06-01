import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "Ruta a tu Beca",
  description: "Guía paso a paso para estudiantes guatemaltecos que quieren obtener su beca de diversificado.",
  openGraph: {
    title: "Ruta a tu Beca",
    description: "Tu guía para conseguir una beca en Guatemala",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main style={{ minHeight: 'calc(100dvh - 62px)' }}>
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
