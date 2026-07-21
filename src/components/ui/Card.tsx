import { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <section className="rounded-2xl border border-s-slate-800 bg-[var(--surface)] p-6 shadow-lg">
      <h2 className="mb-5 text-lg font-semibold">{title}</h2>

      {children}
    </section>
  );
}
