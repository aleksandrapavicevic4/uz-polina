import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__grid">
          <div className="fade-in">
            <div className="hero__eyebrow">
              <Sparkles size={14} />
              Pedijatrska ultrazvučna dijagnostika
            </div>
            <h1 className="hero__title">
              Zdravlje vašeg deteta u iskusnim rukama.
            </h1>
            <p className="hero__subtitle">
              Više od 30 godina iskustva u pedijatrskoj radiologiji.
              Svaki pregled obavlja dr. [Ime] lično, sa pažnjom i posvećenošću.
              {/* [PLACEHOLDER] */}
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

          <div className="hero__image-wrap fade-in">
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
              alt="Ultrazvučni aparat u ordinaciji"
              width={800}
              height={600}
              priority
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {/* [PLACEHOLDER] — replace with actual clinic image */}
          </div>
        </div>
      </div>
    </section>
  );
}
