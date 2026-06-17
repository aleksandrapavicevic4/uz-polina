"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

export default function FadeInProvider({ children }: { children: React.ReactNode }) {
  useFadeIn();
  return <>{children}</>;
}
