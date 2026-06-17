import SectionHeading from "@/components/ui/SectionHeading";
import AccordionItem from "@/components/ui/AccordionItem";
import { faqs } from "@/data/faq";
import { practice } from "@/data/practice";

export default function FAQSection() {
  return (
    <section className="section faq">
      <div className="container">
        <SectionHeading
          title="Često postavljana pitanja"
          align="center"
        />
        <div className="faq__list">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <div className="faq__footer">
          <p>
            Imate još pitanja? Slobodno nas pozovite.{" "}
            <a href={practice.phoneHref}>{practice.phone}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
