import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { site } from "./data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "MLM Dressage — Dressage Training in Encinitas & San Diego, CA",
    template: "%s · MLM Dressage",
  },
  description:
    "Dressage training, lessons, and sport horse sales with McKenzie Milburn in Encinitas — serving dressage riders across San Diego County. Book a free trial lesson today.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "dressage",
    "dressage training",
    "dressage trainer",
    "riding lessons",
    "horse training",
    "sport horse sales",
    "McKenzie Milburn",
    "Encinitas",
    "San Diego",
    "Wildflower Equestrian Center",
  ],
  openGraph: {
    title: "MLM Dressage — Training, Coaching & Sport Horse Sales",
    description:
      "Dressage training, rider coaching, and sport horse sales with McKenzie Milburn. Book your free session.",
    url: site.url,
    siteName: "MLM Dressage",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/photos/photo1.jpg",
        width: 1024,
        height: 683,
        alt: "McKenzie Milburn with her dressage horse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MLM Dressage — Training, Coaching & Sport Horse Sales",
    description:
      "Dressage training, rider coaching, and sport horse sales with McKenzie Milburn.",
    images: ["/photos/photo1.jpg"],
  },
};

// LocalBusiness structured data — helps Google understand the business for
// local search and ties into the Google Business Profile.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: site.name,
  description: site.tagline,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}/photos/photo1.jpg`,
  logo: `${site.url}${site.logo}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.venue.line1,
    addressLocality: site.venue.city,
    addressRegion: site.venue.region,
    postalCode: site.venue.postal,
    addressCountry: "US",
  },
  areaServed: "San Diego County, California",
  founder: { "@type": "Person", name: site.rider },
  sameAs: [site.social.instagram, site.social.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
