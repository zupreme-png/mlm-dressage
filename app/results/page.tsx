import type { Metadata } from "next";
import { Section, SectionHeading } from "../components/Section";
import { Testimonial } from "../components/Testimonial";
import { CtaBand } from "../components/CtaBand";
import { testimonials, results } from "../data/content";

export const metadata: Metadata = {
  title: "Results & Testimonials",
  description:
    "Real progress from real riders — scores, level moves, and confidence wins from the MLM Dressage community.",
};

const stats = [
  { figure: "68%+", label: "Average first-show score for new students" },
  { figure: "47", label: "Five-star reviews from local riders" },
  { figure: "12", label: "Riders moved up a level last season" },
];

export default function ResultsPage() {
  return (
    <>
      <section className="bg-forest">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Results
          </p>
          <h1 className="font-serif text-5xl font-semibold text-cream">
            Progress you can measure
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-cream/80">
            The best proof is a rider who walks down the centerline more confident than they
            ever thought they&rsquo;d be. Here&rsquo;s what that looks like.
          </p>
        </div>
      </section>

      <Section className="bg-cream">
        <div className="grid gap-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-sand bg-white/70 p-8 text-center">
              <p className="font-serif text-5xl font-semibold text-gold">{s.figure}</p>
              <p className="mt-3 text-bark/80">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-sand/40">
        <SectionHeading eyebrow="In their words" title="Rider stories" />
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <Testimonial key={t.name} {...t} />
          ))}
        </div>
      </Section>

      <Section className="bg-cream">
        <SectionHeading eyebrow="Recent wins" title="On the scoreboard" />
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-sand">
          <table className="w-full text-left text-sm">
            <thead className="bg-forest text-cream">
              <tr>
                <th className="px-6 py-4 font-semibold">Rider</th>
                <th className="px-6 py-4 font-semibold">Achievement</th>
                <th className="px-6 py-4 font-semibold">Timeframe</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand bg-white/70">
              {results.map((r) => (
                <tr key={r.rider}>
                  <td className="px-6 py-4 font-medium text-forest">{r.rider}</td>
                  <td className="px-6 py-4 text-bark/80">{r.achievement}</td>
                  <td className="px-6 py-4 text-bark/60">{r.span}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <CtaBand heading="Your name could be next." />
    </>
  );
}
