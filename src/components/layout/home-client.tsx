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

const TestimonialsSection = dynamic(
  () => import("@/components/sections/testimonials-section").then((mod) => mod.TestimonialsSection),
  {
    loading: () => <div className="section-shell h-64 rounded-[2rem] bg-white/5" />,
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
        <HeroSection />
        <ServicesSection />
        <BrochureServicesSection />
        <ProcessSection />
        <TestimonialsSection />
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
