import type { Metadata } from "next";
import Script from "next/script";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import "./globals.css";

const siteUrl = "https://pranilgroup.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PRANIL Group of Companies | Education, Recruitment & Travel",
    template: "%s | PRANIL Group"
  },
  description:
    "Premium study abroad, student visa, Canada PR, recruitment, IELTS/PTE coaching, tours and travel consulting from PRANIL Group of Companies.",
  keywords: [
    "PRANIL Education Services",
    "student visa consulting",
    "study abroad",
    "Canada PR",
    "IELTS PTE coaching",
    "recruitment services",
    "tours and travels"
  ],
  openGraph: {
    title: "Build Your Global Future With Confidence",
    description: "Visa, careers, education, and travel consulting by PRANIL Group of Companies.",
    url: siteUrl,
    siteName: "PRANIL Group of Companies",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PRANIL Group of Companies"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "PRANIL Group of Companies",
    description: "Education, recruitment, and travel consulting for global futures."
  },
  alternates: {
    canonical: siteUrl
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PRANIL Group of Companies",
    url: siteUrl,
    areaServed: ["India", "Canada", "Australia", "United States", "United Kingdom", "Europe"],
    serviceType: [
      "Study Abroad Consulting",
      "Student Visa Consulting",
      "Recruitment Services",
      "IELTS PTE Coaching",
      "Tours and Travels"
    ]
  };

  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        {children}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
