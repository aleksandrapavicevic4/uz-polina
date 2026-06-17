import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Target, Heart, Shield, BookOpen, GraduationCap, Award, Stethoscope, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import ContactCTABanner from "@/components/ui/ContactCTABanner";
import { practice } from "@/data/practice";

export const metadata: Metadata = {
  title: "O Nama",
  description:
    "Saznajte više o našoj ordinaciji i dr. [Ime] — specijalistkinja pedijatrske radiologije sa 30+ godina iskustva.",
};

// FUTURE: /o-nama team section (when additional doctors are added)

const values = [
  {
    icon: <Target size={24} />,
    title: "Preciznost",
    description: "Svaki nalaz je rezultat pažljivog i detaljnog pregleda.",
  },
  {
    icon: <Heart size={24} />,
    title: "Toplina",
    description: "Razumemo koliko je ovo važan trenutak za vas i vaše dete.",
  },
  {
    icon: <Shield size={24} />,
    title: "Poverenje",
    description: "Gradimo odnos sa porodicama koje nam se vraćaju godinama.",
  },
  {
    icon: <BookOpen size={24} />,
    title: "Posvećenost",
    description: "Stalno usavršavanje i praćenje najnovijih metoda.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="page-title-block">
        <div className="container">
          <h1 className="page-title-block__title fade-in">O Nama</h1>
          <p className="page-title-block__subtitle fade-in">Mala ordinacija. Veliko iskustvo.</p>
        </div>
      </div>

      {/* Practice Story */}
      <section className="section about-story">
        <div className="container">
          <div className="about-story__content fade-in">
            {/* [PLACEHOLDER] — replace with actual practice story */}
            <p>
              Naša ordinacija je osnovana sa jednom jasnom misijom: pružiti roditeljima i deci
              najviši standard ultrazvučne dijagnostike u toplom i prijatnom okruženju. Verujemo
              da svako dete zaslužuje pažljiv i strpljiv pregled, bez žurbe i bez straha.
            </p>
            <p>
              Specijalizovani isključivo za ultrazvučnu dijagnostiku, možemo posvetiti svo vreme
              i pažnju svakom pregledu. Naš pristup je personalizovan — ne postoje dva ista
              deteta, niti dva ista pregleda.
            </p>
            <p>
              Godinama rada izgradili smo odnos poverenja sa roditeljima koji nam se vraćaju
              sa svojom decom, a potom i sa decom svojih prijatelja. Taj krug poverenja je
              naša najveća nagrada i motivacija za stalno usavršavanje. {/* [PLACEHOLDER] */}
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Feature Block */}
      <section className="section doctor-feature">
        <div className="container">
          <div className="doctor-feature__grid">
            <div className="doctor-feature__photo-wrap fade-in">
              <Image
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80"
                alt="Prof. dr sc. med. [Ime Prezime] — [PLACEHOLDER]"
                width={600}
                height={800}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              {/* [PLACEHOLDER] — replace with actual doctor photo */}
            </div>

            <div className="fade-in">
              <h2 className="doctor-feature__name">
                Prof. dr sc. med. [Ime Prezime] {/* [PLACEHOLDER] */}
              </h2>
              <p className="doctor-feature__title-text">
                Specijalista pedijatrske radiologije {/* [PLACEHOLDER] */}
              </p>
              {/* [PLACEHOLDER] — replace with actual biography */}
              <p className="doctor-feature__bio">
                Dr. [Ime Prezime] je posvetila celu svoju karijeru zdravlju dece. Nakon
                specijalizacije iz radiologije, dodatno se usavršavala u oblasti pedijatrske
                ultrazvučne dijagnostike u zemlji i inostranstvu. Osnovala je ovu ordinaciju
                sa željom da roditeljima pruži dostupan i kvalitetan dijagnostički pregled
                bez dugih čekanja i komplikovanih procedura.
              </p>

              <div className="doctor-feature__credentials">
                <div className="doctor-feature__credential-item">
                  <GraduationCap size={18} />
                  <span>Prof. dr sc. med. — [Naziv univerziteta — PLACEHOLDER]</span>
                </div>
                <div className="doctor-feature__credential-item">
                  <Award size={18} />
                  <span>Specijalista radiologije, subspecijalista pedijatrske ultrasonografije</span> {/* [PLACEHOLDER] */}
                </div>
                <div className="doctor-feature__credential-item">
                  <Clock size={18} />
                  <span>Više od 30 godina kliničkog iskustva</span>
                </div>
                <div className="doctor-feature__credential-item">
                  <Stethoscope size={18} />
                  <span>Član [Stručnih udruženja — PLACEHOLDER]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Values */}
      <section className="section practice-values">
        <div className="container">
          <SectionHeading
            title="Naši principi"
            align="center"
          />
          <div className="practice-values__grid">
            {values.map((v) => (
              <div key={v.title} className="fade-in">
                <Card icon={v.icon} title={v.title} description={v.description} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="section--sm about-cta">
        <div className="container">
          <Link href="/kontakt" className="btn btn--primary btn--lg">
            Zakažite pregled
          </Link>
          <a href={practice.phoneHref} className="about-cta__phone">
            {practice.phone} {/* [PLACEHOLDER] */}
          </a>
        </div>
      </section>
    </>
  );
}
