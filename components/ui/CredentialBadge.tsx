import { ReactNode } from "react";

interface CredentialBadgeProps {
  icon: ReactNode;
  label: string;
}

export default function CredentialBadge({ icon, label }: CredentialBadgeProps) {
  return (
    <span className="credential-badge">
      {icon}
      {label}
    </span>
  );
}
