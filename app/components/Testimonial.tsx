import type { Testimonial as TestimonialType } from "../data/content";

export function Stars({ count = 5, className = "" }: { count?: number; className?: string }) {
  return (
    <span className={`text-gold ${className}`} aria-label={`${count} out of 5 stars`}>
      {"★".repeat(count)}
    </span>
  );
}

export function Testimonial({ quote, name, detail }: TestimonialType) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-sand bg-white/70 p-7">
      <Stars className="text-sm" />
      <blockquote className="mt-4 flex-1 leading-7 text-bark/90">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 text-sm">
        <span className="font-semibold text-forest">{name}</span>
        <span className="block text-bark/60">{detail}</span>
      </figcaption>
    </figure>
  );
}
