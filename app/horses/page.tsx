import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading } from "../components/Section";
import { CtaBand } from "../components/CtaBand";

export const metadata: Metadata = {
  title: "Sales",
  description:
    "Sport horse sales with MLM Dressage. We help match quality dressage horses with the perfect home. Trials and vettings welcome.",
};

const reassurance = [
  { title: "Honestly represented", body: "What you see is what you get — temperament, level, and quirks all disclosed up front." },
  { title: "Vetting welcome", body: "We encourage pre-purchase exams and will work with your vet of choice." },
  { title: "Try before you buy", body: "Arrange a ride and a trial so you know the partnership is right." },
];

export default function HorsesPage() {
  return (
    <>
      <section className="bg-forest">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Sport Horse Sales
          </p>
          <h1 className="font-serif text-5xl font-semibold text-cream">
            Find your next partner
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-cream/85">
            We help match quality dressage horses with the perfect home — from
            amateur-friendly prospects to confirmed partners.
          </p>
        </div>
      </section>

      <Section className="bg-cream">
        <SectionHeading
          eyebrow="Available now"
          title="Currently for sale"
        />
        <div className="mx-auto max-w-2xl rounded-2xl border border-sand bg-white p-12 text-center shadow-sm">
          <p className="font-serif text-3xl font-semibold text-forest">
            None available at this time
          </p>
          <p className="mt-4 leading-8 text-bark/80">
            New horses come and go often. Looking for something specific? Tell us what
            you&rsquo;re after and we&rsquo;ll keep an eye out for the right match.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="text-sm font-semibold text-gold hover:underline"
            >
              Tell us what you&rsquo;re looking for →
            </a>
          </div>
        </div>
      </Section>

      <Section className="bg-sand/40">
        <SectionHeading eyebrow="Buy with confidence" title="How we sell" />
        <div className="grid gap-8 sm:grid-cols-3">
          {reassurance.map((r) => (
            <div key={r.title} className="rounded-2xl border border-sand bg-white p-7 shadow-sm">
              <h3 className="font-serif text-2xl font-semibold text-forest">{r.title}</h3>
              <p className="mt-3 leading-7 text-bark/80">{r.body}</p>
            </div>
          ))}
        </div>
        <div className="relative mx-auto mt-12 aspect-[2/3] max-w-sm overflow-hidden rounded-2xl shadow-sm">
          <Image
            src="/photos/photo6.jpg"
            alt="McKenzie Milburn and her dressage horse competing"
            fill
            sizes="(max-width: 640px) 100vw, 384px"
            className="object-cover object-center"
          />
        </div>
      </Section>

      <CtaBand
        heading="Looking for a particular horse?"
        sub="Get in touch — we'll help you find the right match."
      />
    </>
  );
}
