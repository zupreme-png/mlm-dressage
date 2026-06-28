import Link from "next/link";
import type { Horse } from "../data/content";

export function HorseCard({ horse }: { horse: Horse }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-sand bg-white/70">
      {/* Photo placeholder */}
      <div className="flex aspect-[4/3] items-center justify-center bg-forest/90">
        <span className="font-serif text-2xl text-cream/80">{horse.name}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between">
          <h3 className="font-serif text-2xl font-semibold text-bark">{horse.name}</h3>
          <span className="text-sm font-semibold text-forest">{horse.price}</span>
        </div>
        <p className="mt-1 text-sm text-bark/60">
          {horse.breed} · {horse.age} · {horse.level}
        </p>
        <p className="mt-4 flex-1 text-sm leading-6 text-bark/80">{horse.blurb}</p>
        <Link
          href="/contact"
          className="mt-5 inline-flex items-center text-sm font-semibold text-gold hover:underline"
        >
          Enquire about {horse.name} →
        </Link>
      </div>
    </article>
  );
}
