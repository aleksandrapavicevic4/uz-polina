import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  price?: string;
  href?: string;
}

export default function Card({ icon, title, description, price, href }: CardProps) {
  const content = (
    <>
      {icon && <div className="card__icon">{icon}</div>}
      <h3 className="card__title">{title}</h3>
      {description && <p className="card__description">{description}</p>}
      {price && <p className="card__price">{price}</p>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className="card" style={{ textDecoration: "none" }}>
        {content}
      </Link>
    );
  }

  return <div className="card">{content}</div>;
}
