"use client";

import dynamic from "next/dynamic";
import { useState, useCallback, useEffect } from "react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SectionOverlay } from "@/components/layout/section-overlay";
import { ContactSection } from "@/components/sections/contact-section";
import { BrochureServicesSection } from "@/components/sections/brochure-services-section";
import { DestinationsSection } from "@/components/sections/destinations-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { RecruitmentSection } from "@/components/sections/recruitment-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TravelSection } from "@/components/sections/travel-section";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { FaqSection } from "@/components/sections/faq-section";

const TestimonialsSection = dynamic(
  () => import("@/components/sections/testimonials-section").then((mod) => mod.TestimonialsSection),
  {
    loading: () => <div className="section-shell h-64 rounded-xl bg-gray-50" />,
  }
);

type OverlaySection = "destinations" | "recruitment" | "travel" | null;

export function HomeClient() {
  const [activeOverlay, setActiveOverlay] = useState<OverlaySection>(null);

  const openOverlay = useCallback((section: OverlaySection) => {
    setActiveOverlay(section);
  }, []);

  const closeOverlay = useCallback(() => {
    setActiveOverlay(null);
  }, []);

  // Listen for custom events from the navbar
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as OverlaySection;
      openOverlay(detail);
    };
    window.addEventListener("open-section-overlay", handler);
    return () => window.removeEventListener("open-section-overlay", handler);
  }, [openOverlay]);

  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero slider */}
        <HeroSection />
        {/* 2. Why Choose Us + Stats */}
        <WhyChooseSection />
        {/* 3. Destinations globe */}
        <DestinationsSection />
        {/* 4. Services / In-Demand Programs */}
        <ServicesSection />
        {/* 5. CTA Banner */}
        <CtaBannerSection />
        {/* 6. Testimonials / Success Stories */}
        <TestimonialsSection />
        {/* 7. FAQ */}
        <FaqSection />
        {/* 8. Brochure Services (coaching + visa) */}
        <BrochureServicesSection />
        {/* 9. Process steps */}
        <ProcessSection />
        {/* 10. Contact / About partner */}
        <ContactSection />
      </main>
      <Footer />

      {/* Overlay sections - accessible via navbar only */}
      <SectionOverlay
        isOpen={activeOverlay === "destinations"}
        onClose={closeOverlay}
        title="Destinations"
      >
        <DestinationsSection />
      </SectionOverlay>

      <SectionOverlay
        isOpen={activeOverlay === "recruitment"}
        onClose={closeOverlay}
        title="Recruitment"
      >
        <RecruitmentSection />
      </SectionOverlay>

      <SectionOverlay
        isOpen={activeOverlay === "travel"}
        onClose={closeOverlay}
        title="Travel"
      >
        <TravelSection />
      </SectionOverlay>
    </>
  );
}
