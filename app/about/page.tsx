import type { Metadata } from "next";
import { Section, SectionHeading } from "../components/Section";
import { CtaBand } from "../components/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet MLM Dressage — classical, horse-first training and coaching in Greenvale, built on patience, correct basics, and trust.",
};

const values = [
  { title: "Horse first, always", body: "Every decision starts with the horse's wellbeing. Sound bodies and willing minds make great dressage." },
  { title: "Classical foundations", body: "We don't chase shortcuts. Correct basics, ridden well, are what hold up under pressure." },
  { title: "Riders who feel it", body: "Our job isn't to talk at you — it's to help you feel the right answer so you can find it again." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-forest">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            About MLM Dressage
          </p>
          <h1 className="font-serif text-5xl font-semibold text-cream">
            Calm, classical, horse-first
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-cream/80">
            A quiet yard in Greenvale where great dressage grows from trust, correct basics,
            and time — never shortcuts.
          </p>
        </div>
      </section>

      <Section className="bg-cream">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-forest/90 p-10 text-center">
            <p className="font-serif text-3xl font-medium leading-relaxed text-cream/90">
              [ Photo of the trainer &amp; facility ]
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-forest">Our story</h2>
            <p className="mt-5 leading-8 text-bark/80">
              MLM Dressage was founded on a simple belief: that the most beautiful, reliable
              dressage comes from horses who genuinely enjoy their work. After years
              competing and developing horses through the levels, our head trainer built a
              program around what actually works — patience, clarity, and putting the horse
              first.
            </p>
            <p className="mt-4 leading-8 text-bark/80">
              Today we coach adult amateurs, ambitious competitors, and young horses alike,
              from quiet first rides through the FEI levels. The throughline is always the
              same: correct basics, ridden with feel.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <dt className="font-serif text-3xl font-semibold text-gold">15+</dt>
                <dd className="text-sm text-bark/70">years developing horses &amp; riders</dd>
              </div>
              <div>
                <dt className="font-serif text-3xl font-semibold text-gold">FEI</dt>
                <dd className="text-sm text-bark/70">experience through the levels</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <Section className="bg-sand/40">
        <SectionHeading eyebrow="What we stand for" title="Our philosophy" />
        <div className="grid gap-8 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-sand bg-white/70 p-7">
              <h3 className="font-serif text-2xl font-semibold text-bark">{v.title}</h3>
              <p className="mt-3 leading-7 text-bark/80">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand heading="Come see it for yourself." sub="Book a free session and experience the MLM Dressage approach first-hand." />
    </>
  );
}
