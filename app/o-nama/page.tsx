import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Baby, MonitorCheck, ShieldCheck, BookOpen, GraduationCap, Award, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import ContactCTABanner from "@/components/ui/ContactCTABanner";
import { practice } from "@/data/practice";

export const metadata: Metadata = {
  title: "O nama",
  description:
    "Saznajte više o našoj ordinaciji i prof. dr Polini Pavićević — specijalisti radiologije sa 30+ godina iskustva u pedijatrskoj radiologiji.",
};

const team = [
  {
    name: "Prim. dr sci med. Biljana Jakovljević",
    title: "Specijalista radiologije, ultrazvuk dojke",
    bio: "Radiolog na Institutu za onkologiju i radiologiju Srbije od 1994. godine, sa posebnim usmerenjem na dijagnostiku bolesti dojke (mamografija, ultrazvuk, MR). Zvanje primarijusa stekla je 2005. godine. Predavač je na Školi ultrazvuka Medicinskog fakulteta u Beogradu i autor radova u domaćim i stranim časopisima. Član je Srpskog lekarskog društva.",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80", // [PLACEHOLDER]
  },
  {
    name: "Prof. dr sci Dragana Ćirović",
    title: "Specijalista fizijatrije",
    bio: "Profesor na Medicinskom fakultetu Univerziteta u Beogradu i načelnik odeljenja Službe za fizikalnu medicinu i rehabilitaciju Univerzitetske dečje klinike. Bavi se rehabilitacijom dece: povredama na rođenju, deformitetima kičme i stopala, praćenjem motoričkog razvoja i urodinamskim ispitivanjima. Autor je više od 200 stručnih radova. Član je Srpskog lekarskog društva, Udruženja pedijatara Srbije i više evropskih stručnih udruženja.",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80", // [PLACEHOLDER]
  },
];

const values = [
  {
    icon: <CalendarDays size={24} />,
    title: "Od 2019. godine",
    description: "Ordinaciju su februara 2019. godine osnovali lekari specijalisti radiologije.",
  },
  {
    icon: <Baby size={24} />,
    title: "Sve na jednom mestu",
    description: "Ultrazvučna dijagnostika svih stanja dečjeg uzrasta, od novorođenačkog perioda do rane adolescencije.",
  },
  {
    icon: <MonitorCheck size={24} />,
    title: "ACUSON Siemens S-3000",
    description: "Aparat premium klase, prvi ovog tipa registrovan u Srbiji, sa linearnom sondom od 12 MHz i konveksnom sondom od 6 MHz.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Bez zračenja",
    description: "Ultrazvuk je neinvazivan, bezbolan i bez zračenja, a dete odmah posle pregleda nastavlja uobičajene aktivnosti.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="page-title-block">
        <div className="container">
          <h1 className="page-title-block__title fade-in">O nama</h1>
          <p className="page-title-block__subtitle fade-in">Specijalistička lekarska ordinacija iz radiologije Polina</p>
        </div>
      </div>

      {/* Practice Story */}
      <section className="section about-story">
        <div className="container">
          <div className="about-story__content fade-in">
            <p>
              Ultrazvučnu ordinaciju Polina osnovali su februara 2019. godine lekari specijalisti
              radiologije sa više od 30 godina iskustva u pedijatrskoj radiologiji i dijagnostici,
              kao i u ultrazvučnoj dijagnostici bolesti dojke kod žena.
            </p>
            <p>
              Naš cilj je da na jednom mestu pružimo vrhunsku ultrazvučnu dijagnostiku svih stanja
              dečjeg uzrasta, od novorođenačkog perioda do rane adolescencije. Pratimo savremena
              dostignuća medicine, a kvalitetnu dijagnostičku opremu smatramo neophodnom. Zato
              preglede radimo na ultrazvučnom aparatu premium klase ACUSON Siemens S-3000, prvom
              aparatu ovog tipa registrovanom u Srbiji.
            </p>
            <p>
              Prof. dr Polina Pavićević savetuje roditeljima da prate razvoj bebe u prvim mesecima
              života, kako bi se eventualne nepravilnosti otkrile na vreme. Ultrazvuk je za to
              idealan: brz, precizan, neinvazivan, bezopasan i bez ikakve traume za dete.
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
                alt="Prof. dr Polina Pavićević"
                width={600}
                height={800}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              {/* [PLACEHOLDER] — replace with actual doctor photo */}
            </div>

            <div className="fade-in">
              <h2 className="doctor-feature__name">
                Prof. dr Polina Pavićević
              </h2>
              <p className="doctor-feature__title-text">
                Specijalista radiologije
              </p>
              <p className="doctor-feature__bio">
                Diplomirala je na Medicinskom fakultetu u Beogradu 1989. godine. Od 1994. godine
                radi na radiologiji Univerzitetske dečje klinike u Beogradu. Specijalizaciju iz
                radiologije završila je 2000. godine, a 2006. odbranila je magistarsku tezu iz
                oblasti ultrazvučne dijagnostike akutnog apendicitisa kod dece. Od 2011. godine
                je deo radiološke katedre Medicinskog fakulteta u Beogradu, gde danas predaje kao
                profesor. Godine 2019. osnovala je Ultrazvučnu ordinaciju Polina.
              </p>

              <div className="doctor-feature__credentials">
                <div className="doctor-feature__credential-item">
                  <GraduationCap size={18} />
                  <span>Profesor radiologije, Medicinski fakultet Univerziteta u Beogradu</span>
                </div>
                <div className="doctor-feature__credential-item">
                  <Award size={18} />
                  <span>Specijalista radiologije, uro- i abdominalna radiologija kod dece</span>
                </div>
                <div className="doctor-feature__credential-item">
                  <Clock size={18} />
                  <span>Više od 30 godina kliničkog iskustva</span>
                </div>
                <div className="doctor-feature__credential-item">
                  <BookOpen size={18} />
                  <span>Autor velikog broja radova u domaćim i stranim časopisima</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section team">
        <div className="container">
          <SectionHeading
            title="Naš tim"
            align="center"
          />
          <div className="team__grid">
            {team.map((member) => (
              <div key={member.name} className="team-card fade-in">
                <div className="team-card__photo-wrap">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={600}
                    height={450}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  {/* [PLACEHOLDER] — replace with actual doctor photo */}
                </div>
                <div className="team-card__body">
                  <h3 className="team-card__name">{member.name}</h3>
                  <p className="team-card__title">{member.title}</p>
                  <p className="team-card__bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Values */}
      <section className="section practice-values">
        <div className="container">
          <SectionHeading
            title="Ukratko o ordinaciji"
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
            {practice.phone}
          </a>
        </div>
      </section>
    </>
  );
}
