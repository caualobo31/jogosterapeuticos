import type { Metadata } from "next";
import { Poppins, Inter, Fraunces } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "+50 Jogos Terapêuticos Imprimíveis | Material clínico para psicopedagogas",
  description:
    "50 jogos terapêuticos imprimíveis para dislexia, discalculia, TDAH, disgrafia e disortografia. Imprima, recorte e aplique na sessão, sem improviso.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${inter.variable} ${fraunces.variable} font-body antialiased bg-cream text-graphite`}
      >
        {children}
      </body>
    </html>
  );
}
