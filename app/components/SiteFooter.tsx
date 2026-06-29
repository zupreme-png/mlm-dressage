import Link from "next/link";
import Image from "next/image";
import { nav, site } from "../data/site";

export function SiteFooter() {
  return (
    <footer className="bg-forest text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
              <Image
                src={site.logo}
                alt="MLM Dressage"
                width={48}
                height={48}
                className="h-11 w-11 object-contain"
              />
            </span>
            <span className="font-serif text-2xl font-semibold text-cream">MLM Dressage</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6">{site.tagline}.</p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Explore</p>
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Visit</p>
          <address className="space-y-1 text-sm not-italic leading-6">
            <p>
              <a
                href={site.venue.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-cream hover:text-gold"
              >
                {site.venue.name}
              </a>
            </p>
            <p>{site.venue.line1}</p>
            <p>
              {site.venue.city}, {site.venue.region} {site.venue.postal}
            </p>
            <p className="pt-2">
              <a
                href={site.venue.facilities}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-gold hover:underline"
              >
                View facilities →
              </a>
            </p>
          </address>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={site.phoneHref} className="hover:text-cream">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="break-all hover:text-cream">
                {site.email}
              </a>
            </li>
          </ul>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-cream">
              Instagram · @{site.social.instagramHandle}
            </a>
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-cream">
              Facebook · {site.social.facebookHandle}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-xs text-cream/60">
          © {new Date().getFullYear()} MLM Dressage. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
