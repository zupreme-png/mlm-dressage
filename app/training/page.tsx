import type { Metadata } from "next";
import { Section, SectionHeading } from "../components/Section";
import { ServiceCard } from "../components/ServiceCard";
import { FaqList } from "../components/Faq";
import { CtaBand } from "../components/CtaBand";
import { services, faqs } from "../data/content";

export const metadata: Metadata = {
  title: "Training & Coaching",
  description:
    "Private lessons, full and part training, young horse starting, and competition prep. Classical, horse-first dressage in Greenvale.",
};

export default function TrainingPage() {
  return (
    <>
      <section className="bg-forest">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Training &amp; Coaching
          </p>
          <h1 className="font-serif text-5xl font-semibold text-cream">
            A program for every stage of the journey
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-cream/80">
            Whether you&rsquo;re starting a young horse or chasing your next score, the
            foundation is the same: correct, classical basics built on trust. Every program
            begins with a free session so we can find the right fit together.
          </p>
        </div>
      </section>

      <Section className="bg-cream">
        <SectionHeading
          eyebrow="Choose your path"
          title="Ways to train with us"
          intro="Pricing shown is a starting guide — your free session includes a tailored recommendation."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section className="bg-sand/40">
        <SectionHeading eyebrow="Common questions" title="Is this right for me?" />
        <FaqList items={faqs} />
      </Section>

      <CtaBand heading="Not sure which program fits?" sub="Start with a free session — we'll point you in the right direction, no obligation." />
    </>
  );
}
