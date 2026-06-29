import type { Metadata } from "next";
import { BookingForm } from "../components/BookingForm";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with McKenzie Milburn at MLM Dressage, based at Wildflower Equestrian Center in Encinitas, California.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-forest">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Get in touch
          </p>
          <h1 className="font-serif text-5xl font-semibold text-cream">Contact MLM Dressage</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-cream/85">
            Lessons, training enquiries, and sales questions are always welcome. The fastest
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
                  <a href={site.emailHref} className="text-lg font-medium break-all text-forest hover:text-gold">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-gold">Location</dt>
                <dd className="mt-1 leading-7">
                  <a
                    href={site.venue.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-forest hover:text-gold"
                  >
                    {site.venue.name}
                  </a>
                  <br />
                  {site.venue.line1}
                  <br />
                  {site.venue.city}, {site.venue.region} {site.venue.postal}
                  <br />
                  <a
                    href={site.venue.facilities}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-semibold text-gold underline-offset-4 hover:underline"
                  >
                    View Wildflower facilities →
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-gold">Follow along</dt>
                <dd className="mt-1 flex flex-col gap-1">
                  <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="font-medium text-forest hover:text-gold">
                    Instagram · @{site.social.instagramHandle}
                  </a>
                  <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="font-medium text-forest hover:text-gold">
                    Facebook · {site.social.facebookHandle}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:pl-4">
            <BookingForm />
          </div>
        </div>
      </div>
    </>
  );
}
