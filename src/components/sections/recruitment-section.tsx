"use client";

import { motion } from "framer-motion";
import { recruitmentPoints } from "@/lib/site-data";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";

const logos = ["Talent Grid", "NovaWorks", "HireSphere", "BluePeak", "Orbit HR", "SkillForge"];

export function RecruitmentSection() {
  return (
    <section id="recruitment" className="overflow-hidden px-4 py-12 sm:py-24">
      <SectionHeading
        eyebrow="Recruitment Engine"
        title="Career preparation that feels sharp, human, and employer-ready."
        copy="From corporate training to interview confidence, PRANIL helps candidates present the right story for the right opportunity."
      />
      <div className="section-shell grid items-center gap-5 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="paper-card relative overflow-hidden rounded-[1.5rem] p-5 sm:rounded-[2.5rem] sm:p-8 md:p-10">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-electric/16 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-royal/8 to-transparent" />
            <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-4">
              {[
                ["4", "placement pillars"],
                ["100%", "candidate focus"],
                ["0", "placement fees"],
                ["360°", "career grooming"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-[1rem] border border-navy/8 bg-white/72 p-3 shadow-[0_18px_45px_rgba(6,17,31,0.08)] sm:rounded-[1.5rem] sm:p-5">
                  <p className="font-display text-2xl font-semibold text-royal sm:text-4xl">{value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-navy/46 sm:mt-2 sm:text-xs sm:tracking-[0.22em]">{label}</p>
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
                  className="group paper-card rounded-[1.25rem] p-4 sm:rounded-[2rem] sm:p-6"
                  whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                >
                  <Icon className="h-6 w-6 text-royal sm:h-8 sm:w-8" />
                  <h3 className="mt-4 font-display text-sm font-semibold text-navy sm:mt-8 sm:text-2xl">{point.label}</h3>
                  <p className="mt-2 text-xs leading-5 text-navy/55 sm:mt-3 sm:text-sm sm:leading-6">{point.description}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
      <div className="premium-mask section-shell mt-8 overflow-hidden sm:mt-12">
        <div className="flex w-max animate-marquee gap-3 sm:gap-4">
          {[...logos, ...logos].map((logo, index) => (
            <span key={`${logo}-${index}`} className="rounded-full border border-navy/10 bg-white/70 px-5 py-2 text-xs text-navy/55 sm:px-8 sm:py-3 sm:text-sm">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
