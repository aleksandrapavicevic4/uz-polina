import Link from "next/link";
import { Heart } from "lucide-react";
import { practice } from "@/data/practice";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand-name">
              <Heart size={18} fill="currentColor" style={{ color: "#d946ef" }} />
              Ultrazvuk Ordinacija
            </div>
            <p className="footer__brand-desc">
              Specijalizovana privatna ordinacija za pedijatrsku ultrazvučnu dijagnostiku.
              Više od 30 godina iskustva u službi zdravlja vaše dece. {/* [PLACEHOLDER] */}
            </p>
          </div>

          <div>
            <p className="footer__col-title">Navigacija</p>
            <Link href="/" className="footer__link">Početna</Link>
            <Link href="/o-nama" className="footer__link">O Nama</Link>
            <Link href="/usluge" className="footer__link">Usluge</Link>
            <Link href="/kontakt" className="footer__link">Kontakt</Link>
          </div>

          <div>
            <p className="footer__col-title">Kontakt</p>
            <a href={practice.phoneHref} className="footer__link">{practice.phone}</a>
            <p className="footer__link" style={{ cursor: "default" }}>{practice.address}</p>
            <p className="footer__link" style={{ cursor: "default" }}>
              Pon–Pet: {practice.hours.weekdays}
            </p>
            <p className="footer__link" style={{ cursor: "default" }}>
              Sub: {practice.hours.saturday}
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Ultrazvuk Ordinacija. Sva prava zadržana.</p>
          <p>
            <a href={practice.instagramHref} className="footer__link" style={{ display: "inline" }}>
              {practice.instagram}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
