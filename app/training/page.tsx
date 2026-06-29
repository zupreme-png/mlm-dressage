import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading } from "../components/Section";
import { ServiceCard } from "../components/ServiceCard";
import { CtaBand } from "../components/CtaBand";
import { services } from "../data/content";

export const metadata: Metadata = {
  title: "Training & Coaching",
  description:
    "Private lessons, full training, and full grooming with McKenzie Milburn. Dressage for horses and riders of every level in Encinitas, California.",
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
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-cream/85">
            Whether you&rsquo;re starting a young horse or chasing your next score, the
            foundation is the same: correct, confident riding built on trust — for horses and
            riders of all levels, from young horses to Grand Prix.
          </p>
        </div>
      </section>

      <Section className="bg-cream">
        <SectionHeading
          eyebrow="Choose your path"
          title="Ways to train with us"
        />
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      {/* Photo banner */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/photos/photo8.jpg"
          alt="McKenzie Milburn riding at a HITS dressage competition"
          fill
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="-z-10 absolute inset-0 bg-forest/75" />
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-serif text-4xl font-semibold text-cream">
            Developed with patience and care
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-cream/85">
            Every horse and rider progresses at their own pace — with a plan tailored to
            where you are and where you want to go.
          </p>
        </div>
      </section>

      <CtaBand
        heading="Not sure which program fits?"
        sub="Start with a free session — we'll point you in the right direction, no obligation."
      />
    </>
  );
}
