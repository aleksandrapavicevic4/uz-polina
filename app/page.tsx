import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import DoctorIntro from "@/components/sections/DoctorIntro";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import FeaturedServices from "@/components/sections/FeaturedServices";
import FAQSection from "@/components/sections/FAQSection";
import ContactCTABanner from "@/components/ui/ContactCTABanner";
import { practice } from "@/data/practice";

export const metadata: Metadata = {
  title: "Početna",
  description:
    "Pedijatrska ultrazvučna dijagnostika sa više od 30 godina iskustva. Zakažite pregled danas.",
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
        phone={practice.phone}
        phoneHref={practice.phoneHref}
        hours={`Pon–Pet: ${practice.hours.weekdays} | Sub: ${practice.hours.saturday}`}
      />
    </>
  );
}
