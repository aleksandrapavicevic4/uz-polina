import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { practice } from "@/data/practice";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Zakažite pregled telefonom ili pošaljite poruku. Radno vreme i adresa ordinacije.",
};

export default function KontaktPage() {
  return (
    <>
      <div className="page-title-block">
        <div className="container">
          <h1 className="page-title-block__title fade-in">Kontakt</h1>
          <p className="page-title-block__subtitle fade-in">
            Zakažite pregled telefonom ili nam pošaljite poruku.
          </p>
        </div>
      </div>

      <section className="section contact-page">
        <div className="container">
          <div className="contact-page__grid">
            {/* LEFT — Contact info */}
            <div className="fade-in">
              <a href={practice.phoneHref} className="contact-info__phone">
                {practice.phone} {/* [PLACEHOLDER] */}
              </a>

              <div className="contact-info__block">
                <p className="contact-info__label">Adresa</p>
                <p className="contact-info__value">
                  {practice.address}{" "} {/* [PLACEHOLDER] */}
                  <br />
                  <a href={practice.mapLink} target="_blank" rel="noopener noreferrer">
                    Otvori u Google Maps →
                  </a>
                </p>
              </div>

              <div className="contact-info__block">
                <p className="contact-info__label">Radno vreme</p>
                <table className="hours-table">
                  <tbody>
                    <tr>
                      <td>Ponedeljak – Petak</td>
                      <td>{practice.hours.weekdays} {/* [PLACEHOLDER] */}</td>
                    </tr>
                    <tr>
                      <td>Subota</td>
                      <td>{practice.hours.saturday} {/* [PLACEHOLDER] */}</td>
                    </tr>
                    <tr className="closed">
                      <td>Nedelja</td>
                      <td>{practice.hours.sunday}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="contact-info__block">
                <p className="contact-info__label">Instagram</p>
                <p className="contact-info__value">
                  <a href={practice.instagramHref} target="_blank" rel="noopener noreferrer">
                    {practice.instagram} {/* [PLACEHOLDER] */}
                  </a>
                </p>
              </div>
            </div>

            {/* RIGHT — Contact form */}
            <div className="fade-in">
              {/* [PLACEHOLDER] — replace Formspree endpoint */}
              <form action={practice.formspreeEndpoint} method="POST">
                <div className="contact-form__field">
                  <label htmlFor="name" className="contact-form__label">
                    Ime i prezime
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="contact-form__input"
                    placeholder="Marija Marković"
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="phone" className="contact-form__label">
                    Broj telefona
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="contact-form__input"
                    placeholder="060 123 45 67"
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="message" className="contact-form__label">
                    Poruka (opciono)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    autoComplete="off"
                    className="contact-form__textarea"
                    placeholder="Napišite nam ako imate pitanje ili poseban zahtev..."
                  />
                </div>

                <button type="submit" className="btn btn--primary btn--lg" style={{ width: "100%" }}>
                  Pošaljite poruku
                </button>
                <p className="contact-form__note">Odgovaramo u roku od 24 sata.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="section--sm map-section">
        <div className="container">
          <div className="map-section__embed">
            {/* [PLACEHOLDER] — replace with actual Google Maps embed URL */}
            <iframe
              src={practice.mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokacija ordinacije"
            />
          </div>
          <a
            href={practice.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="map-section__link"
          >
            <MapPin size={16} />
            Otvori u Google Maps →
          </a>
        </div>
      </section>
    </>
  );
}
