interface ContactCTABannerProps {
  headline?: string;
  phone?: string;
  phoneHref?: string;
  hours?: string;
}

export default function ContactCTABanner({
  headline = "Zakažite pregled danas",
  phone = "060 123 45 67", // [PLACEHOLDER]
  phoneHref = "tel:+38160123456", // [PLACEHOLDER]
  hours = "Pon–Pet: 08–18h | Sub: 08–13h", // [PLACEHOLDER]
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
