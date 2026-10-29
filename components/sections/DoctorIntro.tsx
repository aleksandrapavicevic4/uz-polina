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
              alt="Prof. dr Polina Pavićević"
              width={400}
              height={400}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {/* [PLACEHOLDER] — replace with actual doctor photo */}
          </div>

          <div className="fade-in">
            <SectionHeading
              label="O Doktoru"
              title="Prof. dr Polina Pavićević"
            />
            <p className="doctor-intro__bio">
              Prof. dr Polina Pavićević je specijalista radiologije sa više od 30 godina
              iskustva u pedijatrskoj radiologiji. Posebno se bavi uro- i abdominalnom
              radiologijom kod dece i ultrazvukom dojke. Autor je velikog broja radova u
              domaćim i stranim časopisima.
            </p>
            <p className="doctor-intro__bio">
              Pored rada u ordinaciji, predaje radiologiju na Medicinskom fakultetu
              Univerziteta u Beogradu. Njen pristup spaja naučnu preciznost sa toplinom
              i razumevanjem prema porodicama koje joj ukazuju poverenje.
            </p>

            <div className="doctor-intro__badges">
              <CredentialBadge icon={<GraduationCap size={16} />} label="Prof. dr" />
              <CredentialBadge icon={<Clock size={16} />} label="30+ godina iskustva" />
              <CredentialBadge icon={<Award size={16} />} label="Medicinski fakultet u Beogradu" />
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
