import { Phone } from "lucide-react";
import { practice } from "@/data/practice";

export default function MobileStickyBar() {
  return (
    <div className="mobile-sticky-bar">
      <a href={practice.phoneHref} className="btn btn--secondary btn--md">
        <Phone size={18} />
        Pozovite
      </a>
      <a href="/kontakt" className="btn btn--primary btn--md">
        Zakažite
      </a>
    </div>
  );
}
