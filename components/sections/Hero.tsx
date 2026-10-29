import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__grid">
          <div className="fade-in">
            <p className="hero__eyebrow">Pedijatrska ultrazvučna dijagnostika</p>
            <h1 className="hero__title">
              Zdravlje vašeg deteta u iskusnim rukama.
            </h1>
            <p className="hero__subtitle">
              Ultrazvučna dijagnostika za decu od rođenja do adolescencije, kod iskusnih
              specijalista radiologije.
            </p>
            <div className="hero__actions">
              <Link href="/kontakt" className="btn btn--primary btn--lg">
                Zakažite pregled
              </Link>
              <Link href="/o-nama" className="btn btn--text">
                Saznajte više o ordinaciji →
              </Link>
            </div>
          </div>

          <div className="hero__image-wrap fade-in" aria-hidden="true">
            {/* [PLACEHOLDER] — replace with actual clinic image */}
            <div className="hero__panel" />
          </div>
        </div>
      </div>
    </section>
  );
}
