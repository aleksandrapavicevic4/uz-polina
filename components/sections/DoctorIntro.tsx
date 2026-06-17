import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Award, Stethoscope, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CredentialBadge from "@/components/ui/CredentialBadge";

export default function DoctorIntro() {
  return (
    <section className="section doctor-intro">
      <div className="container">
        <div className="doctor-intro__grid">
          <div className="doctor-intro__photo-wrap fade-in">
            <Image
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
              alt="Dr. [Ime Prezime] — [PLACEHOLDER]"
              width={400}
              height={400}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {/* [PLACEHOLDER] — replace with actual doctor photo */}
          </div>

          <div className="fade-in">
            <SectionHeading
              label="O Doktoru"
              title="Prof. dr sc. med. [Ime Prezime]"
            />
            {/* [PLACEHOLDER] — replace with actual biography */}
            <p className="doctor-intro__bio">
              Dr. [Ime Prezime] je specijalista pedijatrske radiologije sa više od 30 godina
              kliničkog iskustva. Tokom svoje karijere obavila je hiljade ultrazvučnih pregleda
              dece svih uzrasta, od novorođenčadi do adolescenata.
            </p>
            <p className="doctor-intro__bio">
              Paralelno sa radom u privatnoj ordinaciji, angažovana je kao profesor na
              [Naziv univerziteta — PLACEHOLDER], gde prenosi svoje znanje i iskustvo
              budućim generacijama lekara. Njen pristup kombinuje naučnu preciznost
              sa toplinom i razumevanjem prema porodicama koje joj ukazuju poverenje.
            </p>

            <div className="doctor-intro__badges">
              <CredentialBadge icon={<GraduationCap size={16} />} label="Prof. dr sc. med." />
              <CredentialBadge icon={<Clock size={16} />} label="30+ godina iskustva" />
              <CredentialBadge icon={<Award size={16} />} label="[Univerzitet — PLACEHOLDER]" />
              <CredentialBadge icon={<Stethoscope size={16} />} label="Pedijatrska radiologija" />
            </div>

            <Link href="/o-nama" className="btn btn--text">
              Saznajte više o ordinaciji →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
