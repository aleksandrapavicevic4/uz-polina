import type { Metadata } from "next";
import { Jost, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import FadeInProvider from "@/components/FadeInProvider";

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jost",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ultrazvučna ordinacija Polina — Beograd",
    template: "%s | Ultrazvučna ordinacija Polina",
  },
  description:
    "Ultrazvučna dijagnostika za decu od rođenja do adolescencije i ultrazvuk dojke. Specijalisti radiologije sa više od 30 godina iskustva. Smiljanićeva 7, Beograd.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={`${jost.variable} ${inter.variable}`}>
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
