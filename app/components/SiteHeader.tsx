"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site, offer } from "../data/site";
import { LinkButton } from "./Button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-bark/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-2xl font-semibold tracking-wide text-forest">
          MLM Dressage
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-bark lg:flex">
          {nav.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-gold">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={site.phoneHref} className="text-sm font-semibold text-forest hover:text-gold">
            {site.phone}
          </a>
          <LinkButton href="/book">{offer.cta}</LinkButton>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-bark/15 text-forest lg:hidden"
        >
          <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-bark/10 bg-cream lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 text-bark">
            {nav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 font-medium hover:bg-sand/60"
              >
                {item.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="px-2 py-3 font-semibold text-forest">
              Call {site.phone}
            </a>
            <LinkButton href="/book" className="mt-2 w-full" onClick={() => setOpen(false)}>
              {offer.cta}
            </LinkButton>
          </nav>
        </div>
      )}
    </header>
  );
}
