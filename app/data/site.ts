// Central brand + contact (NAP) config.

export const site = {
  name: "MLM Dressage",
  tagline: "Dressage training, coaching & sport horse sales",
  rider: "McKenzie Milburn",
  // Contact
  phone: "425-422-0796",
  phoneHref: "tel:+14254220796",
  email: "mckenziemilburn13@outlook.com",
  emailHref: "mailto:mckenziemilburn13@outlook.com",
  // Location — Wildflower Equestrian Center
  venue: {
    name: "Wildflower Equestrian Center",
    line1: "3211 Wildflower Valley Drive",
    city: "Encinitas",
    region: "California",
    postal: "92024",
    website: "https://www.wildflowereq.com/",
    facilities: "https://www.wildflowereq.com/facilities",
  },
  social: {
    instagram: "https://www.instagram.com/MLM_Dressage",
    instagramHandle: "MLM_Dressage",
    facebook: "https://www.facebook.com/mckenzie.milburn.9/",
    facebookHandle: "McKenzie Milburn",
  },
  logo: "/photos/clear-logo.png",
} as const;

// The single offer the whole funnel drives toward.
export const offer = {
  name: "Free 45-Minute Session",
  short: "Free Session · Limited Time",
  cta: "Book Your Free Session",
  scarcity: "Free sessions are available for a limited time each month",
  includes: [
    "A ridden assessment of you and your horse",
    "One focus fix you'll actually feel that day",
    "Friendly, honest feedback — no pressure",
  ],
  forWho:
    "Adult amateurs and competitive riders who want cleaner, more confident dressage — at any level from young horses to Grand Prix.",
  risk: "No cost. No obligation. No pressure to sign up for anything.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/training", label: "Training" },
  { href: "/horses", label: "Sales" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
