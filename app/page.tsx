import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import DoctorIntro from "@/components/sections/DoctorIntro";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import FeaturedServices from "@/components/sections/FeaturedServices";
import FAQSection from "@/components/sections/FAQSection";
import ContactCTABanner from "@/components/ui/ContactCTABanner";

export const metadata: Metadata = {
  title: "Početna",
  description:
    "Ultrazvučna dijagnostika za decu od rođenja do adolescencije i ultrazvuk dojke. Više od 30 godina iskustva u pedijatrskoj radiologiji.",
};

// FUTURE: /roditelji — articles and guides for parents (needs CMS)
// FUTURE: online booking widget (replace /kontakt CTA buttons)

export default function HomePage() {
  return (
    <>
      <Hero />
      <DoctorIntro />
      <WhyChooseUs />
      <HowItWorks />
      <FeaturedServices />
      <FAQSection />
      <ContactCTABanner
        headline="Zakažite pregled danas"
      />
    </>
  );
}
