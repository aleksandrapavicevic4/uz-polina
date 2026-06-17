import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import FadeInProvider from "@/components/FadeInProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ultrazvuk Ordinacija — Pedijatrska dijagnostika",
    template: "%s | Ultrazvuk Ordinacija",
  },
  description:
    "Specijalizovana privatna ordinacija za pedijatrsku ultrazvučnu dijagnostiku. Prof. dr sc. med. sa 30+ godina iskustva. Nalaz istog dana.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <FadeInProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <MobileStickyBar />
        </FadeInProvider>
      </body>
    </html>
  );
}
