import type { Metadata } from "next";
import BlogClient from "./blog-client";

export const metadata: Metadata = {
  title: "Official Blog & Insights | PRANIL Group of Companies",
  description: "Read our featured article: From Ahmedabad to the World: Building Global Careers with Trust and Transparency by Komal Tiwari. Discover expert insights on international careers, study visas, and more.",
  keywords: [
    "PRANIL Group Blog",
    "Pranil Group Insights",
    "Ahmedabad Study Abroad Advice",
    "Overseas Placement Tips",
    "Komal Tiwari Director Pranil"
  ],
  openGraph: {
    title: "Official Blog & Insights | PRANIL Group of Companies",
    description: "Read our latest editorial piece on building transparent international career paths.",
    type: "article",
    url: "https://pranilgroup.com/blog",
  }
};

export default function BlogPage() {
  return <BlogClient />;
}
