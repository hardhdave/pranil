"use client";

import { motion } from "framer-motion";
import { recruitmentPoints } from "@/lib/site-data";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";

const logos = ["Talent Grid", "NovaWorks", "HireSphere", "BluePeak", "Orbit HR", "SkillForge"];

export function RecruitmentSection() {
  return (
    <section id="recruitment" className="overflow-hidden px-4 py-12 sm:py-24 bg-[#F4F7FC]">
      <SectionHeading
        eyebrow="Recruitment Engine"
        title="Career preparation that feels sharp, human, and employer-ready."
        copy="From corporate training to interview confidence, PRANIL helps candidates present the right story for the right opportunity."
      />
      <div className="section-shell grid items-center gap-5 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white p-5 shadow-card sm:rounded-2xl sm:p-8 md:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-crimson/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-navy/3 to-transparent" />
            <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-4">
              {[
                ["4", "placement pillars"],
                ["100%", "candidate focus"],
                ["0", "placement fees"],
                ["360°", "career grooming"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-xl border border-gray-100 bg-[#F4F7FC] p-3 sm:rounded-2xl sm:p-5 transition hover:bg-white hover:shadow-card">
                  <p className="font-display text-2xl font-bold text-crimson sm:text-4xl">{value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-gray-400 font-medium sm:mt-2 sm:text-xs sm:tracking-[0.18em]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {recruitmentPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.label} delay={index * 0.05}>
                <motion.div
                  className="group rounded-xl border border-gray-100 bg-white p-4 shadow-card sm:rounded-2xl sm:p-6 transition hover:shadow-cardHover"
                  whileHover={{ x: index % 2 === 0 ? 6 : -6 }}
                >
                  <Icon className="h-6 w-6 text-crimson sm:h-8 sm:w-8" />
                  <h3 className="mt-4 font-display text-sm font-bold text-navy sm:mt-6 sm:text-xl">{point.label}</h3>
                  <p className="mt-2 text-xs leading-5 text-gray-500 sm:mt-3 sm:text-sm sm:leading-6">{point.description}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
      <div className="premium-mask section-shell mt-8 overflow-hidden sm:mt-12">
        <div className="flex w-max animate-marquee gap-3 sm:gap-4">
          {[...logos, ...logos].map((logo, index) => (
            <span key={`${logo}-${index}`} className="rounded-lg border border-gray-200 bg-white px-5 py-2 text-xs text-gray-400 font-medium sm:px-8 sm:py-3 sm:text-sm">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
