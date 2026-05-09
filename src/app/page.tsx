import dynamic from "next/dynamic";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
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
    loading: () => <div className="section-shell h-64 rounded-[2rem] bg-white/5" />
  }
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <BrochureServicesSection />
        <DestinationsSection />
        <ProcessSection />
        <RecruitmentSection />
        <TravelSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
