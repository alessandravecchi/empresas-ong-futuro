// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Patrocine â€” Cuidatoria",
  description: "ONG do Futuro para empresas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      {/* FORÃ‡A tema claro no site inteiro */}
      <body className="min-h-screen bg-white text-brand-ink antialiased">
        {children}
      </body>
    </html>
  );
}


