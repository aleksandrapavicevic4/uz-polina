import { practice } from "@/data/practice";

interface ContactCTABannerProps {
  headline?: string;
  phone?: string;
  phoneHref?: string;
  hours?: string;
}

export default function ContactCTABanner({
  headline = "Zakažite pregled danas",
  phone = practice.phone,
  phoneHref = practice.phoneHref,
  hours = `Pon–Pet: ${practice.hours.weekdays} | Sub–Ned: zatvoreno`,
}: ContactCTABannerProps) {
  return (
    <section className="cta-banner">
      <div className="container">
        <h2 className="cta-banner__title">{headline}</h2>
        <a href={phoneHref} className="cta-banner__phone">
          {phone}
        </a>
        <p className="cta-banner__hours">{hours}</p>
      </div>
    </section>
  );
}
