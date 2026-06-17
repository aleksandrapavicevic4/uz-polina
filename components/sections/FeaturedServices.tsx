import Link from "next/link";
import {
  Stethoscope,
  Baby,
  Activity,
  Heart,
  ScanLine,
  Layers,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { services } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope size={24} />,
  Baby: <Baby size={24} />,
  Activity: <Activity size={24} />,
  Heart: <Heart size={24} />,
  ScanLine: <ScanLine size={24} />,
  Layers: <Layers size={24} />,
};

export default function FeaturedServices() {
  const featured = services.slice(0, 6);

  return (
    <section className="section featured-services">
      <div className="container">
        <SectionHeading
          label="Usluge"
          title="Šta nudimo"
          subtitle="Specijalizovani ultrazvučni pregledi za decu svih uzrasta."
          align="center"
        />
        <div className="featured-services__grid">
          {featured.map((service) => (
            <div key={service.id} className="fade-in">
              <Card
                icon={iconMap[service.icon] ?? <Stethoscope size={24} />}
                title={service.name}
                price={service.price}
              />
            </div>
          ))}
        </div>
        <div className="featured-services__cta">
          <Link href="/usluge" className="btn btn--secondary btn--md">
            Pogledajte sve usluge i pripremu →
          </Link>
        </div>
      </div>
    </section>
  );
}
