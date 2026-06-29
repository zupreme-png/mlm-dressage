import { LinkButton } from "./Button";
import { offer, site } from "../data/site";

type Props = {
  heading?: string;
  sub?: string;
};

export function CtaBand({
  heading = "Ready to feel the difference?",
  sub = offer.scarcity + " — book yours while they last.",
}: Props) {
  return (
    <section className="bg-forest">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
          {offer.short}
        </p>
        <h2 className="font-serif text-4xl font-semibold text-cream">{heading}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-cream/80">{sub}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <LinkButton href="/book">{offer.cta}</LinkButton>
          <a
            href={site.phoneHref}
            className="text-sm font-semibold text-cream/90 underline-offset-4 hover:text-gold hover:underline"
          >
            or call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
