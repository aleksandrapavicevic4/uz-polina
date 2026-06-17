import { UserCheck, Clock, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const reasons = [
  {
    icon: <UserCheck size={24} />,
    title: "Osobni pristup",
    description:
      "Svaki pregled obavlja dr. [Ime] lično. Ne delegiramo preglede asistentima — vaše dete je uvek u rukama iskusnog specijaliste.",
  },
  {
    icon: <Clock size={24} />,
    title: "Iskustvo koje se ne može zameniti",
    description:
      "Više od 30 godina i hiljade pregleda u pedijatrskoj radiologiji. Iskustvo koje se gradi decenijama, a ne godinama.",
  },
  {
    icon: <Star size={24} />,
    title: "Preporuke kolega",
    description:
      "Većina naših pacijenata dolazi po preporuci lekara i zadovoljnih roditelja. To je poverenje koje nam znači više od svake reklame.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section why-choose-us">
      <div className="container">
        <SectionHeading
          title="Zašto nam roditelji veruju"
          align="center"
        />
        <div className="why-choose-us__grid">
          {reasons.map((r) => (
            <div key={r.title} className="fade-in">
              <Card icon={r.icon} title={r.title} description={r.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
