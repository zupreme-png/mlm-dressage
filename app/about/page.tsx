import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "../components/Section";
import { CtaBand } from "../components/CtaBand";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "About McKenzie Milburn",
  description:
    "Meet McKenzie Milburn — USDF Bronze, Silver & Gold medalist, Grand Prix competitor, and trainer of horses and riders of all levels in Encinitas, California.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-forest">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            About MLM Dressage
          </p>
          <h1 className="font-serif text-5xl font-semibold text-cream">McKenzie Milburn</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-cream/85">
            Bronze, Silver &amp; Gold medalist · Grand Prix competitor · Trainer of horses
            and riders of all levels.
          </p>
        </div>
      </section>

      {/* Intro with photo 3 */}
      <Section className="bg-cream">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="/photos/photo3.jpg"
              alt="McKenzie Milburn with her dressage horse at a competition"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-forest">
              A lifelong love of horses
            </h2>
            <div className="mt-5 space-y-4 leading-8 text-bark/80">
              <p>
                McKenzie&rsquo;s journey with horses began in the Western world before she
                found her passion for dressage. Her love of horses came from her amazing and
                supportive parents, who have made all of this possible — and she counts
                herself beyond blessed to have had some incredible horses alongside her every
                step of the way.
              </p>
              <p>
                Today, McKenzie teaches clients and horses of all levels, from young horses
                taking their first steps under saddle to seasoned partners competing at Grand
                Prix. Her approach is patient, personal, and built on developing genuine
                confidence in both horse and rider.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Achievements with photo 4 */}
      <Section className="bg-sand/40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
              Competition record
            </p>
            <h2 className="font-serif text-3xl font-semibold text-forest">
              Proven through the Grand Prix
            </h2>
            <div className="mt-5 space-y-4 leading-8 text-bark/80">
              <p>
                A USDF Bronze, Silver, and Gold medalist, McKenzie has earned scores of up to
                69% in the Grand Prix aboard a horse she trained herself. She has contested
                the U25 Grand Prix CDIs and numerous regional championships across several
                different horses, and has competed at the U.S. Dressage Festival of Champions.
              </p>
              <p>
                She has ridden at Festival of Champions twice, and most recently coached her
                young rider there to a reserve championship with a score of 76% in the FEI
                Children&rsquo;s division — a result she&rsquo;s especially proud of.
              </p>
            </div>
          </div>
          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl shadow-sm lg:order-2">
            <Image
              src="/photos/photo4.jpg"
              alt="McKenzie Milburn competing at the U.S. Dressage Festival of Champions"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Sale horses */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Finding the perfect match
          </p>
          <h2 className="font-serif text-3xl font-semibold text-forest">
            A passion for placing sale horses
          </h2>
          <p className="mt-5 leading-8 text-bark/80">
            McKenzie has a real passion for finding sale horses the perfect home. Having
            worked at several large sale barns as a rider, she has helped facilitate the sale
            of many horses — and brings that experience and care to every match she makes.
          </p>
        </div>
      </Section>

      <CtaBand
        heading="Come ride with McKenzie."
        sub={`Book a free session at ${site.venue.name} and experience the MLM Dressage approach first-hand.`}
      />
    </>
  );
}
