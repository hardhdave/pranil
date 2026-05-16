"use client";

import emailjs from "@emailjs/browser";
import { Mail, MapPinned, Phone, MessageSquare, Send } from "lucide-react";
import { FormEvent, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { companyAddress, companyContacts } from "@/lib/site-data";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section id="contact" className="py-20 sm:py-28 bg-[var(--gray-50)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[var(--teal)]/5 blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[var(--blue)]/5 blur-[120px]" />

      <div ref={ref} className="section-shell px-4 relative z-10">
        {/* Section heading */}
        <motion.div
          className="text-center mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[var(--teal)] mb-3">
            REACH OUT TO US
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.8rem] font-bold text-[var(--navy)] leading-tight">
            CONTACT US
          </h2>
          <div className="line-separator mx-auto mt-5" />
        </motion.div>

        <div className="grid gap-0 overflow-hidden rounded-2xl shadow-xl lg:grid-cols-2">
          {/* Left: About + contact info */}
          <motion.div
            className="bg-white p-6 sm:p-10 lg:p-12"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--navy)]">
              PRANIL Group
            </h3>
            <h4 className="font-display text-base sm:text-lg font-semibold text-[var(--teal)] mt-1">
              An Ideal Partner in Your Journey
            </h4>
            <p className="mt-4 text-sm text-[var(--text-muted)] leading-7">
              We are Gujarat&apos;s trusted International Education, Recruitment, and Travel Consulting Company.
              Vision, dedication, and transparency are the three pillars of our success.
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  icon: Mail,
                  label: "EMAIL US",
                  value: "hr@pranilrecruitment.com",
                  href: "mailto:hr@pranilrecruitment.com"
                },
                {
                  icon: Phone,
                  label: "SPEAK WITH EXPERT",
                  value: companyContacts.map(c => c.phone).join(" / "),
                  href: `tel:${companyContacts[0].phone.replace(/[^+\d]/g, "")}`
                },
                {
                  icon: MessageSquare,
                  label: "CHAT WITH EXPERT",
                  value: "+91 73839 97679",
                  href: "https://wa.me/917383997679"
                },
                {
                  icon: MapPinned,
                  label: "VISIT US",
                  value: companyAddress,
                  href: null
                }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[var(--teal)] to-[var(--blue)] text-white shadow-sm group-hover:shadow-md transition">
                    <item.icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--gray-400)]">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-semibold text-[var(--navy)] hover:text-[var(--teal)] transition"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-[var(--navy)]">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="gradient-teal p-6 sm:p-10 lg:p-12"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
              Book a FREE Counselling Session
            </h3>
            <p className="text-sm text-white/60 mb-6">Fill in your details and we&apos;ll get back to you shortly.</p>

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
                  className="w-full rounded-lg border border-white/15 bg-white/8 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-[var(--accent)] focus:bg-white/12 hover:border-white/25"
                />
              ))}
              <select
                name="service"
                className="w-full rounded-lg border border-white/15 bg-white/8 px-4 py-3 text-sm text-white/60 outline-none transition focus:border-[var(--accent)]"
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
                className="w-full resize-none rounded-lg border border-white/15 bg-white/8 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-[var(--accent)] hover:border-white/25"
              />
              <motion.button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-lg bg-white py-3.5 text-sm font-bold text-[var(--navy)] shadow-lg hover:bg-white/95 transition disabled:opacity-50 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <Send className="h-4 w-4" />
                {status === "sending" ? "Sending..." : "Submit Enquiry"}
              </motion.button>
              {status === "sent" && (
                <motion.p
                  className="text-sm font-medium text-[var(--accent)]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you! Your enquiry has been submitted successfully.
                </motion.p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-red-300">
                  Something went wrong. Please try again or contact us directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
