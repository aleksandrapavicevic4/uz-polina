import { UserCheck, Clock, MonitorCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const reasons = [
  {
    icon: <UserCheck size={24} />,
    title: "Lični pristup",
    description:
      "Preglede obavljaju isključivo lekari specijalisti radiologije sa dugogodišnjim iskustvom. Vaše dete je uvek u sigurnim rukama.",
  },
  {
    icon: <Clock size={24} />,
    title: "Više od 30 godina iskustva",
    description:
      "Iskustvo u pedijatrskoj radiologiji i dijagnostici, kao i u ultrazvučnoj dijagnostici bolesti dojke.",
  },
  {
    icon: <MonitorCheck size={24} />,
    title: "Savremen aparat",
    description:
      "Ultrazvučni aparat premium klase ACUSON Siemens S-3000, prvi aparat ovog tipa registrovan u Srbiji.",
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
