import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "1",
    title: "Zakažite pregled",
    description: "Pozovite nas ili pošaljite poruku putem kontakt forme. Trudimo se da odgovorimo u roku od 24 sata.",
  },
  {
    number: "2",
    title: "Dođite na pregled",
    description: "Priprema zavisi od vrste pregleda. Uputstvo za pripremu dobijate pri zakazivanju.",
  },
  {
    number: "3",
    title: "Dobijete nalaz",
    description: "Pisani nalaz sa detaljnim opisom dobijate istog dana, odmah po završetku pregleda.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section how-it-works">
      <div className="container">
        <SectionHeading
          title="Kako izgleda pregled"
          align="center"
        />
        <div className="how-it-works__steps">
          {steps.map((step) => (
            <div key={step.number} className="step fade-in">
              <div className="step__number">{step.number}</div>
              <div>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="how-it-works__note">
          Roditelji su uvek prisutni tokom pregleda.
        </p>
      </div>
    </section>
  );
}
