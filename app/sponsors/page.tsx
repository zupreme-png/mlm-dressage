import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading } from "../components/Section";
import { CtaBand } from "../components/CtaBand";
import { sponsors } from "../data/content";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "MLM Dressage is proudly supported by Aviar Saddles, Horspa, and EQGraze.",
};

export default function SponsorsPage() {
  return (
    <>
      <section className="bg-forest">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Proudly Supported By
          </p>
          <h1 className="font-serif text-5xl font-semibold text-cream">Our Sponsors</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-cream/85">
            We&rsquo;re grateful for the partners who help make our work possible. Their
            quality and care reflect the standard we hold for every horse and rider.
          </p>
        </div>
      </section>

      <Section className="bg-cream">
        <SectionHeading eyebrow="With thanks" title="Partners we're proud of" />
        <div className="grid gap-8 md:grid-cols-3">
          {sponsors.map((sponsor) => (
            <article
              key={sponsor.name}
              className="flex h-full flex-col rounded-2xl border border-sand bg-white p-8 text-center shadow-sm"
            >
              <h3 className="font-serif text-2xl font-semibold text-gold">
                <a
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 transition-colors hover:text-forest hover:underline"
                >
                  {sponsor.name}
                </a>
              </h3>
              <p className="mt-4 leading-7 text-bark/80">{sponsor.blurb}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="relative isolate overflow-hidden">
        <Image
          src="/photos/photo7.jpg"
          alt="Dressage horse and rider in competition"
          fill
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="-z-10 absolute inset-0 bg-forest/75" />
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-serif text-4xl font-semibold text-cream">
            Interested in partnering with us?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-cream/85">
            We love working with brands that share our commitment to quality and horse
            welfare. Reach out to start a conversation.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
