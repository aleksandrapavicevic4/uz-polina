import type { Metadata } from "next";
import { Info, Stethoscope, Baby, Activity, Heart, ScanLine, Layers, Droplets, Waves, HeartPulse } from "lucide-react";
import AccordionItem from "@/components/ui/AccordionItem";
import ContactCTABanner from "@/components/ui/ContactCTABanner";
import { services } from "@/data/services";
import { practice } from "@/data/practice";

export const metadata: Metadata = {
  title: "Usluge",
  description:
    "Sve ultrazvučne usluge za decu sa cenama i uputstvima za pripremu. Nalaz istog dana.",
};

const iconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope size={20} />,
  Baby: <Baby size={20} />,
  Activity: <Activity size={20} />,
  Heart: <Heart size={20} />,
  ScanLine: <ScanLine size={20} />,
  Layers: <Layers size={20} />,
  Droplets: <Droplets size={20} />,
  Waves: <Waves size={20} />,
  HeartPulse: <HeartPulse size={20} />,
};

export default function UsluGePage() {
  return (
    <>
      <div className="page-title-block">
        <div className="container">
          <h1 className="page-title-block__title fade-in">Usluge</h1>
          {/* [PLACEHOLDER] — replace [Ime] with actual doctor name */}
          <p className="page-title-block__subtitle fade-in">
            Svaki pregled obavlja dr. [Ime] lično. Nalaz dobijate istog dana.
          </p>
        </div>
      </div>

      <section className="section services-page">
        <div className="container">
          <div className="info-banner fade-in">
            <Info size={18} />
            <span>
              Za svaki pregled proverite uputstvo za pripremu ili nas pozovite na{" "}
              <a href={practice.phoneHref} style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                {practice.phone} {/* [PLACEHOLDER] */}
              </a>
              .
            </span>
          </div>

          <div>
            {services.map((service) => (
              <div key={service.id} className="service-item fade-in">
                <div className="service-item__header">
                  <h2 className="service-item__name">
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--color-primary)" }}>
                      {iconMap[service.icon] ?? <Stethoscope size={20} />}
                    </span>{" "}
                    {service.name}
                  </h2>
                  <span className="service-item__price">{service.price}</span> {/* [PLACEHOLDER] */}
                </div>
                <p className="service-item__desc">{service.description}</p>
                <AccordionItem
                  question="Uputstvo za pripremu"
                  answer={service.preparation}
                />
              </div>
            ))}
          </div>

          <p className="pricing-disclaimer">
            * Cene su informativne i mogu se razlikovati. Za tačne informacije kontaktirajte ordinaciju. {/* [PLACEHOLDER] */}
          </p>
        </div>
      </section>

      <ContactCTABanner
        headline="Zakažite pregled danas"
        phone={practice.phone}
        phoneHref={practice.phoneHref}
        hours={`Pon–Pet: ${practice.hours.weekdays} | Sub: ${practice.hours.saturday}`}
      />
    </>
  );
}
