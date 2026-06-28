import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
};

export function Section({ children, id, className = "", innerClassName = "" }: Props) {
  return (
    <section id={id} className={className}>
      <div className={`mx-auto w-full max-w-6xl px-6 py-20 ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}

type HeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "dark",
}: HeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = tone === "light" ? "text-cream" : "text-forest";
  const introColor = tone === "light" ? "text-cream/80" : "text-bark/80";
  return (
    <div className={`${alignment} ${align === "center" ? "max-w-2xl" : "max-w-3xl"} mb-12`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif text-4xl font-semibold ${titleColor}`}>{title}</h2>
      {intro && <p className={`mt-5 text-lg leading-8 ${introColor}`}>{intro}</p>}
    </div>
  );
}
