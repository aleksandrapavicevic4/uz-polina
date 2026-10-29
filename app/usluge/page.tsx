import type { Metadata } from "next";
import { Info, Stethoscope, Baby, Activity, Heart, ScanLine, Layers, Droplets, Waves, HeartPulse, Brain, Bone } from "lucide-react";
import AccordionItem from "@/components/ui/AccordionItem";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactCTABanner from "@/components/ui/ContactCTABanner";
import { services, combinedServices, otherServices, pricesValidFrom } from "@/data/services";
import { practice } from "@/data/practice";

export const metadata: Metadata = {
  title: "Usluge",
  description:
    "Ultrazvučni pregledi za decu i odrasle sa cenama i uputstvima za pripremu. Nalaz odmah po završetku pregleda.",
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
  Brain: <Brain size={20} />,
  Bone: <Bone size={20} />,
};

type PriceRow = { name: string; price: string; insurancePrice: string };

function PriceTable({ rows }: { rows: PriceRow[] }) {
  return (
    <div className="price-table-wrap fade-in">
      <table className="price-table">
        <thead>
          <tr>
            <th>Usluga</th>
            <th>Cena</th>
            <th>Sa osiguranjem</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td className="price-table__price">{row.price}</td>
              <td className="price-table__price price-table__price--insurance">{row.insurancePrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function UsluGePage() {
  return (
    <>
      <div className="page-title-block">
        <div className="container">
          <h1 className="page-title-block__title fade-in">Usluge</h1>
          <p className="page-title-block__subtitle fade-in">
            Sve preglede obavljaju iskusni specijalisti radiologije. Nalaz dobijate odmah po završetku pregleda.
          </p>
        </div>
      </div>

      <section className="section services-page">
        <div className="container">
          <div className="info-banner fade-in">
            <Info size={18} />
            <span>
              Uz preglede za koje je potrebna priprema naveli smo uputstvo. Za sva pitanja pozovite nas na{" "}
              <a href={practice.phoneHref} style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                {practice.phone}
              </a>
              .
            </span>
          </div>

          <SectionHeading title="Pregledi" />
          <div>
            {services.map((service) => (
              <div key={service.id} className="service-item fade-in">
                <div className="service-item__header">
                  <h3 className="service-item__name">
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--color-primary)" }}>
                      {iconMap[service.icon] ?? <Stethoscope size={20} />}
                    </span>{" "}
                    {service.name}
                  </h3>
                  <div className="service-item__prices">
                    <span className="service-item__price">{service.price} RSD</span>
                    <span className="service-item__price-insurance">
                      sa osiguranjem {service.insurancePrice} RSD
                    </span>
                  </div>
                </div>
                {service.description && (
                  <p className="service-item__desc">{service.description}</p>
                )}
                {service.preparation && (
                  <AccordionItem
                    question="Uputstvo za pripremu"
                    answer={service.preparation}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="services-page__group">
            <SectionHeading title="Kombinovani pregledi" />
            <PriceTable rows={combinedServices} />
          </div>

          <div className="services-page__group">
            <SectionHeading title="Ostale usluge" />
            <PriceTable rows={otherServices} />
          </div>

          <p className="pricing-disclaimer">
            Sve cene su u dinarima. Cene sa osiguranjem važe za imaoce privatnog zdravstvenog
            osiguranja (popust 10%). Cenovnik važi od {pricesValidFrom}
          </p>
        </div>
      </section>

      <ContactCTABanner
        headline="Zakažite pregled danas"
      />
    </>
  );
}
