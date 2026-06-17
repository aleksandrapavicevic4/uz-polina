"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export default function AccordionItem({ question, answer }: AccordionItemProps) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <div className="accordion-item">
      <button
        className="accordion-item__trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {question}
        <ChevronDown
          size={20}
          className={`accordion-item__chevron${open ? " accordion-item__chevron--open" : ""}`}
        />
      </button>
      <div
        ref={bodyRef}
        className={`accordion-item__body${open ? " accordion-item__body--open" : ""}`}
        style={{
          maxHeight: open ? `${bodyRef.current?.scrollHeight ?? 500}px` : "0",
        }}
      >
        <p className="accordion-item__content">{answer}</p>
      </div>
    </div>
  );
}
