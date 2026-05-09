"use client";

import emailjs from "@emailjs/browser";
import { Mail, MapPinned, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { companyAddress, companyContacts } from "@/lib/site-data";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("sent");
      form.reset();
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-4 py-12 sm:py-24">
      <div className="section-shell grid overflow-hidden rounded-[1.5rem] border border-navy/10 bg-white shadow-[0_34px_110px_rgba(6,17,31,0.16)] sm:rounded-[2.75rem] lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="blueprint-gradient relative overflow-hidden p-5 sm:min-h-[34rem] sm:p-8 md:p-12">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-electric/18 blur-3xl" />
          <div className="absolute -bottom-28 right-6 h-80 w-80 rounded-full bg-royal/14 blur-3xl" />
          <div className="relative z-10">
            <p className="inline-flex rounded-full border border-royal/14 bg-white/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-royal shadow-[0_14px_40px_rgba(6,17,31,0.08)] sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.32em]">
              Contact
            </p>
            <h2 className="mt-4 max-w-md font-display text-2xl font-semibold tracking-[-0.04em] text-navy sm:mt-7 sm:text-4xl md:text-6xl">
              Start with a conversation that feels clear.
            </h2>
            <p className="mt-3 max-w-md text-xs leading-5 text-navy/62 sm:mt-6 sm:text-base sm:leading-8">
              Tell us where you want to go. PRANIL will help map the route across education, visa,
              career, and travel needs.
            </p>
            <div className="mt-4 flex gap-2 sm:mt-9 sm:grid sm:max-w-md sm:grid-cols-3 sm:gap-3">
              {["24h reply", "Free call", "Guided file"].map((item) => (
                <div key={item} className="flex-1 rounded-xl border border-navy/8 bg-white/70 p-2 text-center shadow-[0_14px_38px_rgba(6,17,31,0.07)] backdrop-blur sm:rounded-2xl sm:p-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-navy/58 sm:text-xs sm:tracking-[0.14em]">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2 rounded-[1.25rem] border border-navy/8 bg-white/86 p-2 shadow-[0_22px_70px_rgba(6,17,31,0.12)] sm:mt-8 sm:space-y-3 sm:rounded-[2rem] sm:p-4">
              {[
                [Phone, companyContacts.map((item) => item.phone).join(" / ")],
                [Mail, "hr@pranilrecruitment.com"],
                [MapPinned, companyAddress]
              ].map(([Icon, text]) => (
                <p key={String(text)} className="flex items-start gap-2 rounded-[1rem] bg-white px-2.5 py-2 text-xs font-medium leading-5 text-navy/78 shadow-[0_10px_30px_rgba(6,17,31,0.06)] sm:items-center sm:gap-3 sm:rounded-[1.4rem] sm:px-3 sm:py-3 sm:text-sm sm:leading-6">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-royal text-white shadow-[0_10px_24px_rgba(11,87,208,0.28)] sm:h-11 sm:w-11">
                    <Icon className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={2.2} />
                  </span>
                  <span className="min-w-0 break-words">{String(text)}</span>
                </p>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="bg-white p-5 text-navy sm:p-8 md:p-10 lg:p-12">
          <form onSubmit={handleSubmit} className="grid gap-3 sm:gap-5">
            {[
              ["name", "Full name", "text"],
              ["email", "Email address", "email"],
              ["phone", "Phone number", "tel"]
            ].map(([name, label, type]) => (
              <label key={name} className="group relative">
                <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-navy/45 sm:mb-2 sm:text-xs sm:tracking-[0.2em]">{label}</span>
                <input
                  required
                  name={name}
                  type={type}
                  className="w-full rounded-xl border border-navy/10 bg-[#f8fafc] px-3 py-2.5 text-sm text-navy outline-none transition focus:border-royal focus:bg-white focus:shadow-[0_0_0_4px_rgba(11,87,208,0.08)] sm:rounded-2xl sm:px-5 sm:py-4"
                />
              </label>
            ))}
            <label>
              <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-navy/45 sm:mb-2 sm:text-xs sm:tracking-[0.2em]">Interested in</span>
              <select
                name="service"
                className="w-full rounded-xl border border-navy/10 bg-[#f8fafc] px-3 py-2.5 text-sm text-navy outline-none transition focus:border-royal focus:bg-white focus:shadow-[0_0_0_4px_rgba(11,87,208,0.08)] sm:rounded-2xl sm:px-5 sm:py-4"
              >
                <option>Study Abroad</option>
                <option>Student Visa</option>
                <option>Recruitment Services</option>
                <option>IELTS / PTE Coaching</option>
                <option>Tours & Travels</option>
              </select>
            </label>
            <label>
              <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-navy/45 sm:mb-2 sm:text-xs sm:tracking-[0.2em]">Message</span>
              <textarea
                required
                name="message"
                rows={3}
                className="w-full resize-none rounded-xl border border-navy/10 bg-[#f8fafc] px-3 py-2.5 text-sm text-navy outline-none transition focus:border-royal focus:bg-white focus:shadow-[0_0_0_4px_rgba(11,87,208,0.08)] sm:rounded-2xl sm:px-5 sm:py-4"
              />
            </label>
            <Button variant="dark" type="submit" disabled={status === "sending"} className="mt-1 w-full py-3 sm:mt-2 sm:py-4">
              {status === "sending" ? "Sending..." : "Book Free Consultation"}
            </Button>
            {status === "sent" && (
              <p className="text-xs font-medium text-royal sm:text-sm">
                Thank you. Your enquiry is ready for the PRANIL team.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs font-medium text-red-600 sm:text-sm">
                Something blocked the form submission. Please try again or contact us directly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
