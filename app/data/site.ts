// Central brand + contact (NAP) config. Placeholder values — swap for real details.

export const site = {
  name: "MLM Dressage",
  tagline: "Classical dressage training, coaching & sport horse sales",
  // NAP — keep consistent everywhere for local SEO/trust
  phone: "(555) 014-2987",
  phoneHref: "tel:+15550142987",
  email: "hello@mlmdressage.com",
  emailHref: "mailto:hello@mlmdressage.com",
  address: {
    line1: "MLM Dressage at Willowmere Farm",
    line2: "1847 Greenvale Road",
    city: "Greenvale",
    region: "CA",
    postal: "94000",
  },
  hours: "Tue–Sat, 8am–6pm · By appointment",
  rating: { stars: 5, count: 47 },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
} as const;

// The single offer the whole funnel drives toward.
export const offer = {
  name: "Free 45-Minute Dressage Breakthrough Session",
  short: "Free Breakthrough Session",
  cta: "Book Your Free Session",
  scarcity: "Limited to a handful of sessions each month",
  includes: [
    "A ridden assessment of you and your horse",
    "One focus fix you'll actually feel that day",
    "A written, personalized next-step training plan",
  ],
  forWho:
    "Adult amateurs and competitive riders who want cleaner, more confident dressage — at any level from training level to FEI.",
  risk: "No cost. No obligation. No pressure to sign up for anything.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/training", label: "Training" },
  { href: "/horses", label: "Horses for Sale" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
