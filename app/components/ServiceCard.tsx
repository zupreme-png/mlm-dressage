import Link from "next/link";
import type { Service } from "../data/content";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-sand bg-white p-8 shadow-sm transition-shadow hover:shadow-lg">
      <h3 className="font-serif text-2xl font-semibold text-forest">{service.title}</h3>
      <p className="mt-3 leading-7 text-bark/80">{service.outcome}</p>

      <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-gold">Best for</p>
      <p className="mt-1 text-sm text-bark/70">{service.bestFor}</p>

      <ul className="mt-5 space-y-2 text-sm text-bark/80">
        {service.includes.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-gold">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between border-t border-sand pt-5">
        <span className="text-sm font-semibold text-forest">{service.priceFrom}</span>
        {service.showFreeCta && (
          <Link href="/book" className="text-sm font-semibold text-gold hover:underline">
            Start free →
          </Link>
        )}
      </div>
    </article>
  );
}
