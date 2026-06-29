import type { Metadata } from "next";
import { BookingForm } from "../components/BookingForm";
import { offer, site } from "../data/site";

export const metadata: Metadata = {
  title: "Book Your Free Session",
  description:
    "Claim your free 45-minute dressage session with McKenzie Milburn in Encinitas, California. Ridden assessment and honest feedback — no obligation.",
};

export default function BookPage() {
  return (
    <>
      <section className="bg-forest">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            {offer.short}
          </p>
          <h1 className="font-serif text-5xl font-semibold text-cream">{offer.name}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-cream/85">
            {offer.scarcity}. {offer.risk}
          </p>
        </div>
      </section>

      <div className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2">
          {/* Offer details */}
          <div>
            <h2 className="font-serif text-3xl font-semibold text-forest">
              What you&rsquo;ll walk away with
            </h2>
            <ul className="mt-6 space-y-4">
              {offer.includes.map((item) => (
                <li key={item} className="flex gap-3 text-lg text-bark/85">
                  <span className="mt-0.5 text-gold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-serif text-2xl font-semibold text-forest">
              Who it&rsquo;s for
            </h3>
            <p className="mt-3 leading-8 text-bark/80">{offer.forWho}</p>

            <p className="mt-8 text-bark/70">
              Prefer to talk first? Call{" "}
              <a href={site.phoneHref} className="font-semibold text-forest hover:text-gold">
                {site.phone}
              </a>
              .
            </p>
          </div>

          {/* Form */}
          <div className="lg:pl-4">
            <BookingForm />
          </div>
        </div>
      </div>
    </>
  );
}
