"use client";

import emailjs from "@emailjs/browser";
import { Mail, MapPinned, Phone, MessageSquare } from "lucide-react";
import { FormEvent, useState } from "react";
import { Reveal } from "@/components/motion/reveal";
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
    <section id="contact" className="py-16 sm:py-24 bg-[#f0f4fa]">
      <div className="section-shell px-4">
        <div className="grid gap-0 overflow-hidden rounded-xl shadow-lg lg:grid-cols-2">
          {/* Left: About + contact info */}
          <Reveal className="bg-white p-6 sm:p-10 lg:p-12">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#1a1a6e]">
              PRANIL Group
            </h2>
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#1a1a6e] mt-1">
              An <span className="underline decoration-[#d42a36] decoration-2 underline-offset-4">IDEAL PARTNER</span> in Your Journey
            </h3>
            <p className="mt-4 text-sm text-gray-600 leading-7">
              We are Gujarat&apos;s trusted International Education, Recruitment, and Travel Consulting Company.
              Vision, dedication, and transparency are the three pillars of our success.
            </p>
            <p className="mt-3 text-sm text-gray-500 leading-7">
              With a team of experienced professionals, we have counseled thousands of families and helped numerous students and professionals achieve their dreams of going global.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#d42a36] text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">EMAIL US</p>
                  <p className="text-sm font-semibold text-[#1a1a6e]">hr@pranilrecruitment.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#d42a36] text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">SPEAK WITH EXPERT</p>
                  <p className="text-sm font-semibold text-[#1a1a6e]">{companyContacts.map(c => c.phone).join(" / ")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#d42a36] text-white">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">CHAT WITH EXPERT</p>
                  <p className="text-sm font-semibold text-[#1a1a6e]">+91 73839 97679</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#d42a36] text-white">
                  <MapPinned className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">VISIT US</p>
                  <p className="text-sm font-semibold text-[#1a1a6e]">{companyAddress}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal className="bg-[#1a1a6e] p-6 sm:p-10 lg:p-12">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-6">Book a FREE Counselling Session</h3>
            <form onSubmit={handleSubmit} className="grid gap-4">
              {[
                ["name", "Full Name *", "text"],
                ["email", "Email Address *", "email"],
                ["phone", "Phone Number *", "tel"]
              ].map(([name, label, type]) => (
                <input
                  key={name}
                  required
                  name={name}
                  type={type}
                  placeholder={label}
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none transition focus:border-[#f5a623] focus:bg-white/15"
                />
              ))}
              <select
                name="service"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/70 outline-none transition focus:border-[#f5a623]"
              >
                <option value="" className="text-gray-800">Interested in</option>
                <option className="text-gray-800">Study Abroad</option>
                <option className="text-gray-800">Student Visa</option>
                <option className="text-gray-800">Recruitment Services</option>
                <option className="text-gray-800">IELTS / PTE Coaching</option>
                <option className="text-gray-800">Tours &amp; Travels</option>
              </select>
              <textarea
                required
                name="message"
                rows={3}
                placeholder="Your Message *"
                className="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none transition focus:border-[#f5a623]"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-lg bg-[#d42a36] py-3.5 text-sm font-bold text-white shadow-lg hover:bg-[#b8222d] transition disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Submit Enquiry"}
              </button>
              {status === "sent" && (
                <p className="text-sm font-medium text-[#f5a623]">
                  Thank you! Your enquiry has been submitted successfully.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-red-300">
                  Something went wrong. Please try again or contact us directly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
