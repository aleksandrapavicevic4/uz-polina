"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { practice } from "@/data/practice";

const links = [
  { href: "/", label: "Početna" },
  { href: "/o-nama", label: "O nama" },
  { href: "/usluge", label: "Usluge" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="navbar">
      <div className="container">
        <nav className="navbar__inner">
          <Link href="/" className="navbar__logo" aria-label="Ultrazvučna ordinacija Polina, početna">
            <Image
              src="/logo.png"
              alt="Ultrazvučna ordinacija Polina"
              width={151}
              height={99}
              priority
              className="navbar__logo-img"
            />
          </Link>

          <ul className="navbar__links">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`navbar__link${pathname === link.href ? " navbar__link--active" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
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
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
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
