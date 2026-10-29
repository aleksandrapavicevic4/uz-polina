import Link from "next/link";
import {
  Stethoscope,
  Baby,
  Heart,
  Droplets,
  HeartPulse,
  Brain,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { services } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope size={24} />,
  Baby: <Baby size={24} />,
  Heart: <Heart size={24} />,
  Droplets: <Droplets size={24} />,
  HeartPulse: <HeartPulse size={24} />,
  Brain: <Brain size={24} />,
};

export default function FeaturedServices() {
  const featured = services.filter((s) => s.featured);

  return (
    <section className="section featured-services">
      <div className="container">
        <SectionHeading
          label="Usluge"
          title="Šta nudimo"
          subtitle="Ultrazvučni pregledi za decu, od novorođenčadi do rane adolescencije, i ultrazvuk dojke."
          align="center"
        />
        <div className="featured-services__grid">
          {featured.map((service) => (
            <div key={service.id} className="fade-in">
              <Card
                icon={iconMap[service.icon] ?? <Stethoscope size={24} />}
                title={service.name}
                price={`${service.price} RSD`}
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
