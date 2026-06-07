"use client";

import { Reveal } from "@/components/motion/reveal";

export function CtaBannerSection() {
  return (
    <section className="py-10 sm:py-16">
      <div className="section-shell px-4">
        <Reveal>
          <div className="grid overflow-hidden rounded-xl lg:grid-cols-2">
            {/* Left: image area */}
            <div className="relative bg-[#f0f4fa] flex items-center justify-center py-12 px-8">
              <div className="relative">
                <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full border-2 border-dashed border-[#1a1a6e]/30" />
                <div className="absolute -right-4 -top-4 h-8 w-8 rounded-full bg-[#d42a36]" />
                <div className="text-center">
                  <span className="text-6xl">📱</span>
                  <p className="mt-4 text-sm text-gray-500 font-medium">We&apos;re just a call away</p>
                </div>
              </div>
            </div>
            {/* Right: CTA */}
            <div className="bg-[#1a1a6e] flex flex-col items-center justify-center py-12 px-8 text-center">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Not Sure What You&apos;re Looking for?
              </h3>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 rounded bg-[#d42a36] px-7 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#b8222d] transition"
              >
                CONNECT NOW →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
