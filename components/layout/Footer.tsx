import Link from "next/link";
import { practice } from "@/data/practice";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand-name">
              Ultrazvučna ordinacija Polina
            </div>
            <p className="footer__brand-desc">
              Specijalistička lekarska ordinacija iz radiologije. Ultrazvučna dijagnostika
              za decu od rođenja do adolescencije i ultrazvuk dojke, od 2019. godine.
            </p>
          </div>

          <div>
            <p className="footer__col-title">Navigacija</p>
            <Link href="/" className="footer__link">Početna</Link>
            <Link href="/o-nama" className="footer__link">O nama</Link>
            <Link href="/usluge" className="footer__link">Usluge</Link>
            <Link href="/kontakt" className="footer__link">Kontakt</Link>
          </div>

          <div>
            <p className="footer__col-title">Kontakt</p>
            <a href={practice.phoneHref} className="footer__link">{practice.phone}</a>
            <a href={practice.landlineHref} className="footer__link">{practice.landline}</a>
            <a href={practice.emailHref} className="footer__link">{practice.email}</a>
            <p className="footer__link" style={{ cursor: "default" }}>{practice.address}</p>
            <p className="footer__link" style={{ cursor: "default" }}>
              Pon–Pet: {practice.hours.weekdays}
            </p>
            <p className="footer__link" style={{ cursor: "default" }}>
              Sub–Ned: zatvoreno
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Ultrazvučna ordinacija Polina. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
}
