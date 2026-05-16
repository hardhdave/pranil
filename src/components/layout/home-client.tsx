"use client";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { CompaniesSection } from "@/components/sections/companies-section";
import { ValuesSection } from "@/components/sections/values-section";
import { VisionSection } from "@/components/sections/vision-section";
import { NewsSection } from "@/components/sections/news-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";

/*
 * Overlap / stacking scroll layout:
 * - Hero is sticky so it stays pinned while the next section slides over it
 * - Each subsequent section has a higher z-index and rounded top corners
 *   creating a "card stacking" / "overlap scroll" effect
 * - Sections with solid backgrounds slide over the previous one
 */

export function HomeClient() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero pins behind everything — other sections scroll over it */}
        <div className="sticky top-0 z-[1]">
          <HeroSection />
        </div>

        {/* Each section overlaps the previous one with rounded top + shadow */}
        <section
          className="relative z-[2] -mt-8 rounded-t-[2rem] sm:rounded-t-[3rem] bg-[var(--gray-50)] shadow-[0_-8px_40px_rgba(0,0,0,0.1)]"
          style={{ willChange: "transform" }}
        >
          <CompaniesSection />
        </section>

        <section
          className="relative z-[3] -mt-6 rounded-t-[2rem] sm:rounded-t-[3rem] bg-white shadow-[0_-8px_40px_rgba(0,0,0,0.08)]"
          style={{ willChange: "transform" }}
        >
          <ValuesSection />
        </section>

        <section
          className="relative z-[4] -mt-6"
          style={{ willChange: "transform" }}
        >
          <VisionSection />
        </section>

        <section
          className="relative z-[5] -mt-6 rounded-t-[2rem] sm:rounded-t-[3rem] bg-white shadow-[0_-8px_40px_rgba(0,0,0,0.08)]"
          style={{ willChange: "transform" }}
        >
          <NewsSection />
        </section>

        <section
          className="relative z-[6] -mt-6 rounded-t-[2rem] sm:rounded-t-[3rem] bg-white shadow-[0_-6px_30px_rgba(0,0,0,0.06)]"
          style={{ willChange: "transform" }}
        >
          <TestimonialsSection />
        </section>

        <section
          className="relative z-[7] -mt-6 rounded-t-[2rem] sm:rounded-t-[3rem] bg-[var(--gray-50)] shadow-[0_-8px_40px_rgba(0,0,0,0.08)]"
          style={{ willChange: "transform" }}
        >
          <FaqSection />
        </section>

        <section
          className="relative z-[8] -mt-6 rounded-t-[2rem] sm:rounded-t-[3rem] bg-[var(--gray-50)] shadow-[0_-8px_40px_rgba(0,0,0,0.1)]"
          style={{ willChange: "transform" }}
        >
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
