import Link from "next/link";
import { nav, site } from "../data/site";

export function SiteFooter() {
  return (
    <footer className="bg-bark text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-serif text-2xl font-semibold text-cream">MLM Dressage</p>
          <p className="mt-3 max-w-xs text-sm leading-6">{site.tagline}.</p>
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
            <p>{site.address.line1}</p>
            <p>{site.address.line2}</p>
            <p>
              {site.address.city}, {site.address.region} {site.address.postal}
            </p>
            <p className="pt-2">{site.hours}</p>
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
              <a href={site.emailHref} className="hover:text-cream">
                {site.email}
              </a>
            </li>
          </ul>
          <div className="mt-4 flex gap-4 text-sm">
            <a href={site.social.instagram} className="hover:text-cream">Instagram</a>
            <a href={site.social.facebook} className="hover:text-cream">Facebook</a>
            <a href={site.social.youtube} className="hover:text-cream">YouTube</a>
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
