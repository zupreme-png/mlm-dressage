const services = [
  {
    title: "Horse Training",
    description:
      "Classical, progressive training from backing young horses through the FEI levels — always at the pace the horse is ready for.",
  },
  {
    title: "Rider Coaching",
    description:
      "Private and clinic lessons for riders at every level, building correct position, feel, and a true partnership in the saddle.",
  },
  {
    title: "Sport Horse Sales",
    description:
      "A small, carefully selected string of sound, well-started dressage prospects and competition horses for sale.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-cream text-foreground font-sans">
      {/* Header */}
      <header className="absolute top-0 z-10 w-full">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <span className="font-serif text-2xl font-semibold tracking-wide text-cream">
            Willowmere Dressage
          </span>
          <div className="hidden gap-8 text-sm font-medium text-cream/90 sm:flex">
            <a href="#services" className="transition-colors hover:text-gold">
              Services
            </a>
            <a href="#about" className="transition-colors hover:text-gold">
              About
            </a>
            <a href="#contact" className="transition-colors hover:text-gold">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[34rem] items-center justify-center overflow-hidden bg-forest px-6 py-32 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, rgba(176,137,72,0.35), transparent 55%), radial-gradient(circle at 80% 80%, rgba(90,107,84,0.5), transparent 50%)",
          }}
        />
        <div className="relative max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Classical Dressage
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-tight text-cream sm:text-6xl">
            Where horse and rider find harmony.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-cream/80">
            Thoughtful training, coaching, and sales rooted in patience,
            classical principles, and putting the horse first.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="flex h-12 items-center justify-center rounded-full bg-gold px-8 text-sm font-semibold text-forest transition-colors hover:bg-cream"
            >
              Book a Lesson
            </a>
            <a
              href="#services"
              className="flex h-12 items-center justify-center rounded-full border border-cream/40 px-8 text-sm font-semibold text-cream transition-colors hover:border-cream"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl font-semibold text-forest">
            Services
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-sand bg-white/60 p-8 transition-shadow hover:shadow-lg"
            >
              <h3 className="font-serif text-2xl font-semibold text-bark">
                {service.title}
              </h3>
              <p className="mt-4 leading-7 text-bark/80">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-sand/50">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 sm:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
              Our Yard
            </p>
            <h2 className="font-serif text-4xl font-semibold text-forest">
              A calm, horse-first home for dressage
            </h2>
            <p className="mt-6 leading-8 text-bark/80">
              Set on quiet pasture with all-weather arenas and unhurried
              turnout, Willowmere is built around the wellbeing of every horse
              in our care. We believe great dressage grows from trust,
              correct basics, and time — never shortcuts.
            </p>
            <p className="mt-4 leading-8 text-bark/80">
              Whether you are starting your first horse or chasing your next
              competition goal, you will find a supportive, attentive home for
              your partnership here.
            </p>
          </div>
          <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-forest/90 p-10 text-center">
            <p className="font-serif text-3xl font-medium leading-relaxed text-cream/90">
              &ldquo;Patience and clarity, ride after ride.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="bg-forest px-6 py-24 text-center">
        <div className="mx-auto max-w-xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Get In Touch
          </p>
          <h2 className="font-serif text-4xl font-semibold text-cream">
            Visit Willowmere
          </h2>
          <p className="mt-6 leading-8 text-cream/80">
            Lessons, training enquiries, and sales viewings are by appointment.
            We would love to hear from you.
          </p>
          <div className="mt-8 space-y-2 text-cream/90">
            <p>
              <a
                href="mailto:hello@willowmeredressage.com"
                className="font-medium underline-offset-4 transition-colors hover:text-gold hover:underline"
              >
                hello@willowmeredressage.com
              </a>
            </p>
            <p>(555) 014-2987</p>
            <p className="text-cream/70">Willowmere Farm · Greenvale</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bark px-6 py-8 text-center text-sm text-cream/70">
        <p>
          © {new Date().getFullYear()} Willowmere Dressage. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
