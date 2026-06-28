import type { Metadata } from "next";
import { BookingForm } from "../components/BookingForm";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with MLM Dressage in Greenvale. Lessons, training enquiries, and sales viewings by appointment.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-forest">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Get in touch
          </p>
          <h1 className="font-serif text-5xl font-semibold text-cream">Visit MLM Dressage</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-cream/80">
            Lessons, training enquiries, and sales viewings are by appointment. The fastest
            way to get started is to book your free session below.
          </p>
        </div>
      </section>

      <div className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-forest">Details</h2>
            <dl className="mt-6 space-y-6 text-bark/85">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-gold">Phone</dt>
                <dd className="mt-1">
                  <a href={site.phoneHref} className="text-lg font-medium text-forest hover:text-gold">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-gold">Email</dt>
                <dd className="mt-1">
                  <a href={site.emailHref} className="text-lg font-medium text-forest hover:text-gold">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-gold">Location</dt>
                <dd className="mt-1 leading-7">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.city}, {site.address.region} {site.address.postal}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-gold">Hours</dt>
                <dd className="mt-1">{site.hours}</dd>
              </div>
            </dl>

            <div className="mt-8 flex aspect-[16/9] items-center justify-center rounded-2xl border border-sand bg-sand/50 text-bark/50">
              [ Map embed placeholder ]
            </div>
          </div>

          <div className="lg:pl-4">
            <BookingForm />
          </div>
        </div>
      </div>
    </>
  );
}
