import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";

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
  title: {
    default: "MLM Dressage — Training, Coaching & Sport Horse Sales",
    template: "%s · MLM Dressage",
  },
  description:
    "Classical dressage training, rider coaching, and sport horse sales in Greenvale. Book your free 45-minute breakthrough session today.",
  openGraph: {
    title: "MLM Dressage — Training, Coaching & Sport Horse Sales",
    description:
      "Classical dressage training, rider coaching, and sport horse sales. Book your free breakthrough session.",
    siteName: "MLM Dressage",
    type: "website",
  },
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
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
