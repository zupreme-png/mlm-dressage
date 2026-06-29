// Marketing content for MLM Dressage.

export type Service = {
  slug: string;
  title: string;
  outcome: string;
  bestFor: string;
  includes: string[];
  priceFrom: string;
  showFreeCta: boolean;
};

export const services: Service[] = [
  {
    slug: "private-lessons",
    title: "Private Lessons",
    outcome:
      "Ride with quiet confidence and finally feel the connection you've been chasing — one focused lesson at a time.",
    bestFor: "Riders who want steady, personal progress at any level.",
    includes: [
      "Tailored to you and your horse",
      "Honest, encouraging feedback",
      "Support as you progress through the levels",
    ],
    priceFrom: "$85 / lesson",
    showFreeCta: true,
  },
  {
    slug: "training-packages",
    title: "Training Packages",
    outcome:
      "Full training that builds correct, sustainable movement — so your horse comes back better than you left them.",
    bestFor: "Owners who want their horse developed by a professional.",
    includes: [
      "Full training program",
      "Developed from young horses to Grand Prix",
      "Regular progress updates",
    ],
    priceFrom: "Full training $1,100 / month",
    showFreeCta: false,
  },
  {
    slug: "full-grooming",
    title: "Full Grooming",
    outcome:
      "Immaculate, show-ready turnout and attentive daily care — your horse looking and feeling their absolute best.",
    bestFor: "Owners who want complete, professional grooming care.",
    includes: [
      "Thorough, professional grooming",
      "Show-ready presentation",
      "Attentive, consistent care",
    ],
    priceFrom: "$500",
    showFreeCta: false,
  },
];

export type Sponsor = {
  name: string;
  blurb: string;
};

export const sponsors: Sponsor[] = [
  {
    name: "Aviar Saddles",
    blurb: "Beautifully crafted saddles built for fit, comfort, and performance.",
  },
  {
    name: "Horspa",
    blurb: "Thoughtful equine care and recovery to keep horses feeling their best.",
  },
  {
    name: "EQGraze",
    blurb: "Smart, healthy grazing solutions for happier, well-managed horses.",
  },
];
