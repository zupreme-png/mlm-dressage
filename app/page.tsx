import { LinkButton } from "./components/Button";
import { Section, SectionHeading } from "./components/Section";
import { ServiceCard } from "./components/ServiceCard";
import { Testimonial, Stars } from "./components/Testimonial";
import { FaqList } from "./components/Faq";
import { CtaBand } from "./components/CtaBand";
import { services, testimonials, faqs } from "./data/content";
import { site, offer } from "./data/site";

const steps = [
  {
    n: "1",
    title: "Book your free session",
    body: "Tell us about you and your horse. Pick a time that works — it takes two minutes.",
  },
  {
    n: "2",
    title: "Ride & get your plan",
    body: "We assess, fix one thing you'll feel that day, and hand you a written next-step plan.",
  },
  {
    n: "3",
    title: "Progress with confidence",
    body: "Continue with the program that fits your goals — or don't. Zero pressure, ever.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 15%, rgba(176,137,72,0.35), transparent 55%), radial-gradient(circle at 85% 80%, rgba(90,107,84,0.55), transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center sm:py-32">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Classical Dressage in {site.address.city}
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-tight text-cream sm:text-6xl">
            Finally feel the connection you&rsquo;ve been riding for.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-cream/80">
            Patient, classical training and coaching for adult amateurs and competitive
            riders. Start with a free 45-minute breakthrough session — and feel the
            difference before you commit to anything.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <LinkButton href="/book">{offer.cta}</LinkButton>
            <LinkButton href="/training" variant="secondary">
              See Training Programs
            </LinkButton>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-cream/80">
            <Stars count={site.rating.stars} />
            <span>
              Rated {site.rating.stars}.0 by {site.rating.count} local riders
            </span>
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Why riders choose us
          </p>
          <p className="font-serif text-3xl leading-relaxed text-forest sm:text-4xl">
            Unlike trainers who rush through cookie-cutter lessons, you get a customized
            plan, honest feedback, and unlimited text support between rides — so you keep
            improving even when you&rsquo;re not in the saddle.
          </p>
        </div>
      </Section>

      {/* Services teasers */}
      <Section className="bg-sand/40" id="services">
        <SectionHeading
          eyebrow="What we offer"
          title="Training built around your goals"
          intro="Every path starts the same way — with a free session — then continues with the program that fits where you want to go."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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

      {/* How it works */}
      <Section className="bg-cream">
        <SectionHeading
          eyebrow="How it works"
          title="Three simple steps to better riding"
        />
        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.n} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest font-serif text-2xl font-semibold text-cream">
                {step.n}
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-forest">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-bark/80">{step.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Social proof */}
      <Section className="bg-sand/40">
        <SectionHeading
          eyebrow="Real riders, real results"
          title="Don't take our word for it"
        />
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <Testimonial key={t.name} {...t} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <LinkButton href="/results" variant="ghost">
            See more results
          </LinkButton>
        </div>
      </Section>

      {/* Offer block */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-3xl rounded-3xl border border-sand bg-white/70 p-10 text-center">
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

      {/* FAQ */}
      <Section className="bg-sand/40">
        <SectionHeading eyebrow="Good to know" title="Questions, answered" />
        <FaqList items={faqs} />
      </Section>

      <CtaBand />
    </>
  );
}
