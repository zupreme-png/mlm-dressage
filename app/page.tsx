import Image from "next/image";
import { LinkButton } from "./components/Button";
import { Section, SectionHeading } from "./components/Section";
import { ServiceCard } from "./components/ServiceCard";
import { CtaBand } from "./components/CtaBand";
import { services } from "./data/content";
import { site, offer } from "./data/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/photos/photo1.jpg"
          alt="McKenzie Milburn with her dressage horse"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="-z-10 absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/80 to-forest/40" />
        <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gold">
              Dressage in {site.venue.city}, California
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-tight text-cream sm:text-6xl">
              Finally feel the connection you&rsquo;ve been riding for.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-cream/85">
              Patient, personal training and coaching with {site.rider} — for riders and
              horses of every level, from young horses to Grand Prix. Start with a free
              session and feel the difference before you commit to anything.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <LinkButton href="/book">{offer.cta}</LinkButton>
              <LinkButton href="/training" variant="secondary">
                See Training Programs
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / differentiator with photo */}
      <Section className="bg-cream">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="/photos/photo2.jpg"
              alt="McKenzie Milburn with her dressage horse at the barn"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
              Why riders choose us
            </p>
            <h2 className="font-serif text-3xl leading-snug text-forest sm:text-4xl">
              Real progress, built on trust — not cookie-cutter lessons.
            </h2>
            <p className="mt-5 leading-8 text-bark/80">
              You get a program tailored to you and your horse, honest and encouraging
              feedback, and a trainer who genuinely cares about your partnership. Whether
              you&rsquo;re starting a young horse or chasing your next score, the foundation
              is the same: correct, confident riding.
            </p>
            <div className="mt-8">
              <LinkButton href="/about" variant="ghost">
                Meet McKenzie
              </LinkButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-sand/40" id="services">
        <SectionHeading
          eyebrow="What we offer"
          title="Training built around your goals"
          intro="From private lessons to full training and grooming — find the right fit for you and your horse."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <LinkButton href="/training" variant="ghost">
            Explore all programs
          </LinkButton>
        </div>
      </Section>

      {/* Achievement / photo highlight band */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/photos/photo4.jpg"
          alt="McKenzie Milburn competing at the U.S. Dressage Festival of Champions"
          fill
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="-z-10 absolute inset-0 bg-forest/80" />
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Proven in the ring
          </p>
          <h2 className="font-serif text-4xl font-semibold text-cream">
            Bronze, Silver &amp; Gold medalist
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-cream/85">
            McKenzie has competed through the Grand Prix and at the U.S. Dressage Festival
            of Champions — and brings that same standard to every horse and rider she works
            with.
          </p>
        </div>
      </section>

      {/* Photo gallery */}
      <Section className="bg-cream">
        <SectionHeading eyebrow="In the arena" title="Moments from the journey" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: "/photos/photo5.jpg", alt: "Dressage horse in extended trot at a show" },
            { src: "/photos/photo3.jpg", alt: "Young rider with her dressage horse at a competition" },
            { src: "/photos/photo9.jpg", alt: "Dressage horse in extended trot" },
          ].map((img) => (
            <div key={img.src} className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-sm">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Offer block */}
      <Section className="bg-sand/40">
        <div className="mx-auto max-w-3xl rounded-3xl border border-sand bg-white p-10 text-center shadow-sm">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Your no-risk first step
          </p>
          <h2 className="font-serif text-4xl font-semibold text-forest">{offer.name}</h2>
          <ul className="mx-auto mt-7 max-w-md space-y-3 text-left">
            {offer.includes.map((item) => (
              <li key={item} className="flex gap-3 text-bark/85">
                <span className="text-gold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-bark/70">{offer.risk}</p>
          <div className="mt-8">
            <LinkButton href="/book">{offer.cta}</LinkButton>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
