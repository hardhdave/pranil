"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MovingShapes } from "@/components/ui/moving-shapes";
import { X } from "lucide-react";

const galleryItems = [
  { image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80", caption: "Education Counselling", category: "Education" },
  { image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800&q=80", caption: "Study in Canada", category: "Education" },
  { image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80", caption: "Australia Campus", category: "Education" },
  { image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80", caption: "Recruitment Drive", category: "Recruitment" },
  { image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80", caption: "Corporate Training", category: "Recruitment" },
  { image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80", caption: "Interview Preparation", category: "Recruitment" },
  { image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80", caption: "Dubai Tour", category: "Travel" },
  { image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80", caption: "Maldives Getaway", category: "Travel" },
  { image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=80", caption: "Manali Adventure", category: "Travel" },
  { image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80", caption: "Social Media Marketing", category: "Digital Media" },
  { image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80", caption: "Graphic Design", category: "Digital Media" },
  { image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80", caption: "Video Production", category: "Digital Media" },
];

const categories = ["All", "Education", "Recruitment", "Travel", "Digital Media"];

export function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 sm:py-28 relative overflow-hidden">
      <MovingShapes variant="light" />

      <motion.div className="absolute top-[10%] right-[3%] w-40 h-40 rounded-full bg-[var(--teal)]/4 blur-[80px]"
        animate={{ y: [0, -25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />

      <div ref={ref} className="section-shell px-4 relative z-10">
        {/* Section heading */}
        <motion.div className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[var(--teal)] mb-3">OUR MOMENTS</p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.8rem] font-bold text-[var(--navy)] leading-tight">PHOTO GALLERY</h2>
          <motion.div className="h-[3px] rounded-full mx-auto mt-5 bg-gradient-to-r from-[var(--teal)] to-[var(--blue)]"
            animate={{ width: [0, 60, 60] }} transition={{ duration: 1, delay: 0.5 }} />
        </motion.div>

        {/* Filter tabs */}
        <motion.div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[var(--teal)] to-[var(--blue)] text-white shadow-lg scale-105"
                  : "bg-white text-[var(--navy)] border border-[var(--gray-200)] hover:border-[var(--teal)] hover:text-[var(--teal)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filtered.map((item, i) => (
            <motion.div
              key={item.caption}
              layout
              className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[4/3]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              onClick={() => setLightbox(galleryItems.indexOf(item))}
            >
              <Image
                src={item.image}
                alt={item.caption}
                fill
                sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-bold text-sm">{item.caption}</p>
                <p className="text-white/60 text-xs mt-0.5">{item.category}</p>
              </div>
              {/* Shimmer */}
              <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: i * 0.5 }} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setLightbox(null)}
        >
          <motion.button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition z-10"
            onClick={() => setLightbox(null)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="h-5 w-5" />
          </motion.button>
          <motion.div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={galleryItems[lightbox].image}
              alt={galleryItems[lightbox].caption}
              fill
              sizes="90vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-display font-bold text-lg sm:text-xl">{galleryItems[lightbox].caption}</p>
              <p className="text-white/60 text-sm mt-1">{galleryItems[lightbox].category}</p>
            </div>
          </motion.div>
          {/* Navigation arrows */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            <button
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition disabled:opacity-30"
              disabled={lightbox === 0}
              onClick={e => { e.stopPropagation(); setLightbox(Math.max(0, lightbox - 1)); }}
            >
              ←
            </button>
            <span className="flex items-center text-white/60 text-sm font-medium">{lightbox + 1} / {galleryItems.length}</span>
            <button
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition disabled:opacity-30"
              disabled={lightbox === galleryItems.length - 1}
              onClick={e => { e.stopPropagation(); setLightbox(Math.min(galleryItems.length - 1, lightbox + 1)); }}
            >
              →
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
}
