// Placeholder marketing content. Outcome-focused copy designed to convert.

export type Service = {
  slug: string;
  title: string;
  outcome: string;
  bestFor: string;
  includes: string[];
  priceFrom: string;
};

export const services: Service[] = [
  {
    slug: "private-lessons",
    title: "Private Lessons",
    outcome:
      "Ride with quiet confidence and finally feel the connection you've been chasing — one focused lesson at a time.",
    bestFor: "Riders who want steady, personal progress without the rush.",
    includes: [
      "Customized plan for you and your horse",
      "Video review of key moments",
      "Unlimited text support between sessions",
    ],
    priceFrom: "from $95 / lesson",
  },
  {
    slug: "training-packages",
    title: "Training Packages",
    outcome:
      "Full or part training that builds correct, sustainable movement — so your horse comes back better than you left them.",
    bestFor: "Owners who want their horse developed by a professional.",
    includes: [
      "Structured monthly training schedule",
      "Monthly progress report with video",
      "Owner ride-along days",
    ],
    priceFrom: "from $1,250 / month",
  },
  {
    slug: "young-horse-backing",
    title: "Young Horse Starting",
    outcome:
      "A calm, unrushed foundation that sets your young horse up to love their work for life.",
    bestFor: "Young or green horses ready to start under saddle.",
    includes: [
      "Groundwork and confidence building",
      "Careful, stage-by-stage backing",
      "Honest readiness assessment",
    ],
    priceFrom: "from $1,400 / month",
  },
  {
    slug: "competition-prep",
    title: "Competition Prep",
    outcome:
      "Walk down the centerline knowing your test cold — and ride it like you practiced it.",
    bestFor: "Riders aiming for their next score or level.",
    includes: [
      "Test-specific coaching",
      "Show-day game plan and warm-up strategy",
      "Score review and next-test goals",
    ],
    priceFrom: "from $120 / session",
  },
];

export type Horse = {
  name: string;
  age: string;
  breed: string;
  level: string;
  price: string;
  blurb: string;
};

export const horses: Horse[] = [
  {
    name: "Valentino",
    age: "7 yrs",
    breed: "Hanoverian gelding",
    level: "Schooling 2nd Level",
    price: "Price on enquiry",
    blurb:
      "An amateur's dream — three correct, rhythmic gaits and a brain that wants to please. Brave, sound, and ready to collect ribbons.",
  },
  {
    name: "Lumière",
    age: "5 yrs",
    breed: "Oldenburg mare",
    level: "Training Level",
    price: "$45,000",
    blurb:
      "Elegant, modern type with a swinging back and natural balance. A future small-tour prospect for an ambitious rider.",
  },
  {
    name: "Cassius",
    age: "9 yrs",
    breed: "Dutch Warmblood gelding",
    level: "Confirmed 3rd Level",
    price: "$68,000",
    blurb:
      "A confidence-giving schoolmaster with flying changes installed. Perfect for the rider moving up the levels.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "In three months I went from dreading my canter transitions to scoring 68% at my first recognized show. I finally understand what 'on the aids' feels like.",
    name: "Sarah M.",
    detail: "Adult amateur · Training Level",
  },
  {
    quote:
      "They started my young mare with so much patience. She's confident, soft, and genuinely happy in her work. Worth every mile of the trailer ride.",
    name: "Dana R.",
    detail: "Owner · Young horse owner",
  },
  {
    quote:
      "The free session sold me — no pressure, just real, useful coaching from minute one. I booked my package the same week.",
    name: "Priya K.",
    detail: "Returning rider · 1st Level",
  },
];

export type Result = {
  rider: string;
  achievement: string;
  span: string;
};

export const results: Result[] = [
  { rider: "Sarah M.", achievement: "Training Level debut at 68.2%", span: "3 months" },
  { rider: "Tom & Cassius", achievement: "Moved up to 3rd Level", span: "1 season" },
  { rider: "Greenvale Pony Club", achievement: "5 riders qualified for regionals", span: "1 year" },
  { rider: "Lumière (young horse)", achievement: "Champion, 5-yr-old materiale", span: "2 shows" },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What exactly happens in the free session?",
    a: "You'll ride (or we'll assess your horse), we'll find one thing to improve that you can feel immediately, and you'll leave with a written plan. It takes about 45 minutes and there's zero obligation to book anything afterward.",
  },
  {
    q: "I'm a nervous adult re-rider. Is this for me?",
    a: "Absolutely — a large part of who we coach are adult amateurs returning to the saddle. We meet you exactly where you are and build confidence first.",
  },
  {
    q: "Do I need my own horse?",
    a: "Not necessarily. We have suitable schoolmasters available for lessons. Just mention it when you book and we'll sort the right match.",
  },
  {
    q: "What levels do you train?",
    a: "From first rides on green horses through the FEI levels. Whether you're starting out or chasing a medal, the foundation is the same: correct, classical basics.",
  },
  {
    q: "How far in advance should I book?",
    a: "Free sessions are limited to a handful each month, so they tend to fill up. The sooner you reach out, the sooner we can find a time that works.",
  },
];
