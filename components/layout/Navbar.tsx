"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Phone } from "lucide-react";
import { practice } from "@/data/practice";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container">
        <nav className="navbar__inner">
          <Link href="/" className="navbar__logo">
            <Heart size={22} className="navbar__logo-icon" fill="currentColor" />
            Ultrazvuk Ordinacija
          </Link>

          <ul className="navbar__links">
            <li>
              <Link href="/o-nama" className="navbar__link">
                O Nama
              </Link>
            </li>
            <li>
              <Link href="/usluge" className="navbar__link">
                Usluge
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="navbar__link">
                Kontakt
              </Link>
            </li>
          </ul>

          <div className="navbar__right">
            <a href={practice.phoneHref} className="navbar__phone-icon" aria-label="Pozovite nas">
              <Phone size={22} />
            </a>
            <Link href="/kontakt" className="btn btn--primary btn--sm">
              Zakažite pregled
            </Link>
            <button
              className="navbar__hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Otvori meni"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </div>

      <div className={`navbar__mobile-menu${menuOpen ? " open" : ""}`}>
        <Link href="/o-nama" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>
          O Nama
        </Link>
        <Link href="/usluge" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>
          Usluge
        </Link>
        <Link href="/kontakt" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>
          Kontakt
        </Link>
        <Link
          href="/kontakt"
          className="btn btn--primary btn--md navbar__mobile-cta"
          onClick={() => setMenuOpen(false)}
        >
          Zakažite pregled
        </Link>
      </div>
    </header>
  );
}
