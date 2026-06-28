import type { Metadata } from "next";
import { Section, SectionHeading } from "../components/Section";
import { HorseCard } from "../components/HorseCard";
import { CtaBand } from "../components/CtaBand";
import { horses } from "../data/content";

export const metadata: Metadata = {
  title: "Horses for Sale",
  description:
    "A small, carefully selected string of sound, well-started dressage prospects and schoolmasters for sale. Trials and vettings welcome.",
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
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-cream/80">
            A small, hand-picked selection of sound, correctly started dressage horses —
            from amateur-friendly prospects to confirmed schoolmasters.
          </p>
        </div>
      </section>

      <Section className="bg-cream">
        <SectionHeading
          eyebrow="Available now"
          title="Currently for sale"
          intro="New horses arrive regularly. Don't see your match? Tell us what you're looking for and we'll keep an eye out."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {horses.map((horse) => (
            <HorseCard key={horse.name} horse={horse} />
          ))}
        </div>
      </Section>

      <Section className="bg-sand/40">
        <SectionHeading eyebrow="Buy with confidence" title="How we sell" />
        <div className="grid gap-8 sm:grid-cols-3">
          {reassurance.map((r) => (
            <div key={r.title} className="rounded-2xl border border-sand bg-white/70 p-7">
              <h3 className="font-serif text-2xl font-semibold text-bark">{r.title}</h3>
              <p className="mt-3 leading-7 text-bark/80">{r.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        heading="Looking for a particular horse?"
        sub="Book a free session or get in touch — we'll help you find the right match."
      />
    </>
  );
}
