import type { Metadata } from "next";
import GalleryClient from "./gallery-client";

export const metadata: Metadata = {
  title: "Photo & Video Gallery | PRANIL Group of Companies",
  description: "Explore the high-quality photos and highlight videos from PRANIL Group. View our educational counseling sessions, recruitment drives, international tours, and digital media milestones.",
  keywords: [
    "PRANIL Group Gallery",
    "Pranil Group Photos",
    "Pranil Group Videos",
    "Overseas Education Counselling Ahmedabad Gallery",
    "Study Abroad Seminar Photos",
    "Corporate Training Videos",
    "Pranil Tours and Travel Photos"
  ],
  openGraph: {
    title: "Photo & Video Gallery | PRANIL Group of Companies",
    description: "View moments, milestones, and corporate highlight reels from PRANIL Group's diversified divisions.",
    type: "website",
    url: "https://pranilgroup.com/gallery",
  }
};

export default function GalleryPage() {
  return <GalleryClient />;
}
