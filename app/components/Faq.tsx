import type { Faq as FaqType } from "../data/content";

export function FaqList({ items }: { items: FaqType[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-sand rounded-2xl border border-sand bg-white/60">
      {items.map((item) => (
        <details key={item.q} className="group px-6 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-forest">
            {item.q}
            <span className="text-gold transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 leading-7 text-bark/80">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
