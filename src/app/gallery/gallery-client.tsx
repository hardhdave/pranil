"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MovingShapes } from "@/components/ui/moving-shapes";
import { 
  galleryItems, 
  galleryCategories, 
  GalleryItem 
} from "@/lib/gallery-data";
import { 
  X, 
  Play, 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2,
  Video
} from "lucide-react";
import Link from "next/link";

function getYouTubeId(url: string) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

const ITEMS_PER_PAGE = 12;

export default function GalleryClient() {
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Filter items based on active category
  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  // Reset pagination count when category changes
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [activeCategory]);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = filteredItems.length > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + ITEMS_PER_PAGE, filteredItems.length));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  return (
    <div className="min-h-screen bg-[var(--gray-50)] text-[var(--navy)] flex flex-col">
      <Navbar />

      {/* ─── Hero Section ─── */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 gradient-navy text-white overflow-hidden">
        <MovingShapes variant="dark" />

        {/* Decorative light glows */}
        <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-[var(--teal)]/10 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 rounded-full bg-[var(--blue)]/10 blur-[120px]" />

        <div className="section-shell px-4 relative z-10 text-center">
          {/* Back to Home Button */}
          <div className="mb-6 flex justify-center">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-semibold uppercase tracking-wider transition-all duration-300"
            >
              <ArrowLeft className="h-3.5 w-3.5 text-[var(--teal-light)]" />
              Back to Home
            </Link>
          </div>

          <motion.p 
            className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[var(--teal-light)] mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Moments & Memories
          </motion.p>
          
          <motion.h1 
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Photo & Video Gallery
          </motion.h1>

          <motion.div 
            className="h-[3px] w-20 rounded-full mx-auto bg-gradient-to-r from-[var(--teal)] to-[var(--blue-light)] mb-6"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <motion.p 
            className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Explore our educational counseling seminars, global recruitment drives, premium travel experiences, and special corporate milestones that define who we are.
          </motion.p>
        </div>
      </section>

      {/* ─── Main Gallery Body ─── */}
      <main className="flex-1 py-16 sm:py-24 relative z-20 -mt-8 rounded-t-[2.5rem] bg-[var(--gray-50)] shadow-[0_-12px_40px_rgba(0,0,0,0.06)]">
        <div className="section-shell px-4">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[var(--teal)] to-[var(--blue)] text-white shadow-lg scale-105"
                    : "bg-white text-[var(--navy)] border border-[var(--gray-200)] hover:border-[var(--teal)] hover:text-[var(--teal)] hover:shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Media Count Indicator */}
          <div className="mb-6 flex justify-between items-center border-b border-[var(--gray-200)] pb-4 text-xs font-semibold text-[var(--gray-500)] uppercase tracking-wider">
            <span>Showing {visibleItems.length} of {filteredItems.length} media files</span>
            <span>Category: {activeCategory}</span>
          </div>

          {/* Media Grid */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-[var(--gray-200)] shadow-sm">
              <p className="text-[var(--gray-500)] font-medium">No media found in this category.</p>
            </div>
          ) : (
            <motion.div 
              layout 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
            >
              <AnimatePresence mode="popLayout">
                {visibleItems.map((item, index) => {
                  const globalIndex = galleryItems.indexOf(item);
                  return (
                    <motion.div
                      key={`${item.src}-${index}`}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => setLightboxIndex(index)}
                      className="relative rounded-xl overflow-hidden group cursor-pointer bg-white border border-[var(--gray-200)] shadow-sm aspect-[4/3] flex flex-col justify-between"
                    >
                      {/* Image or Video Thumbnail / Cover */}
                      <div className="relative w-full h-full overflow-hidden bg-black">
                        {item.type === "video" ? (
                          <div className="relative w-full h-full">
                            <img
                              src={getYouTubeId(item.src) ? `https://img.youtube.com/vi/${getYouTubeId(item.src)}/hqdefault.jpg` : "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"}
                              alt={item.caption}
                              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                          </div>
                        ) : (
                          <Image
                            src={brokenImages[item.src] ? "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" : item.src}
                            alt={item.caption}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            onError={() => {
                              setBrokenImages(prev => ({ ...prev, [item.src]: true }));
                            }}
                          />
                        )}

                        {/* Video type overlay (icon indicator) */}
                        {item.type === "video" && (
                          <div className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                            <Video className="h-4.5 w-4.5 text-[var(--accent)]" />
                          </div>
                        )}

                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                          <div className="flex justify-between items-end">
                            <div className="text-white">
                              <span className="inline-block text-[10px] uppercase font-bold tracking-widest bg-[var(--teal)]/80 text-white px-2 py-0.5 rounded-full mb-1">
                                {item.category}
                              </span>
                              <p className="font-bold text-sm leading-snug">{item.caption}</p>
                            </div>
                            
                            {/* Action Icon overlay */}
                            <div className="w-8 h-8 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm flex items-center justify-center text-white shrink-0 ml-2 group-hover:scale-110 transition-transform">
                              {item.type === "video" ? (
                                <Play className="h-4.5 w-4.5 fill-current text-white" />
                              ) : (
                                <Maximize2 className="h-4 w-4" />
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Subtle type-specific border shine */}
                        <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 transition-all pointer-events-none rounded-xl" />
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Load More Button */}
          {hasMore && (
            <div className="mt-16 text-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleLoadMore}
                className="px-8 py-3.5 rounded-xl bg-white hover:bg-[var(--gray-100)] text-[var(--navy)] border border-[var(--gray-300)] font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                Load More Media
              </motion.button>
            </div>
          )}

        </div>
      </main>

      {/* ─── Interactive Lightbox Slideshow ─── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-black/95 backdrop-blur-md p-4 sm:p-6"
          >
            {/* Header controls inside lightbox */}
            <div className="w-full max-w-5xl flex items-center justify-between z-50 py-2">
              <span className="text-white/60 text-xs font-semibold tracking-wider uppercase">
                {filteredItems[lightboxIndex].category} • {lightboxIndex + 1} / {filteredItems.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 transition active:scale-95"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Media Area (Image or Video) */}
            <div className="w-full max-w-5xl flex-1 flex items-center justify-center relative my-4">
              
              {/* Previous Arrow (desktop/tablet) */}
              <button
                onClick={handlePrev}
                className="absolute left-0 sm:left-4 z-50 w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 transition active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <motion.div
                key={lightboxIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl aspect-[16/9] max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10 flex items-center justify-center"
              >
                {filteredItems[lightboxIndex].type === "video" ? (
                  <div className="w-full h-full">
                    {getYouTubeId(filteredItems[lightboxIndex].src) ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${getYouTubeId(filteredItems[lightboxIndex].src)}?autoplay=1&rel=0`}
                        title={filteredItems[lightboxIndex].caption}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        ref={videoRef}
                        src={filteredItems[lightboxIndex].src}
                        controls
                        autoPlay
                        playsInline
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={brokenImages[filteredItems[lightboxIndex].src] ? "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" : filteredItems[lightboxIndex].src}
                      alt={filteredItems[lightboxIndex].caption}
                      fill
                      sizes="90vw"
                      className="object-contain"
                      priority
                      onError={() => {
                        setBrokenImages(prev => ({ ...prev, [filteredItems[lightboxIndex].src]: true }));
                      }}
                    />
                  </div>
                )}
              </motion.div>

              {/* Next Arrow (desktop/tablet) */}
              <button
                onClick={handleNext}
                className="absolute right-0 sm:right-4 z-50 w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 transition active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Caption Area at the bottom */}
            <div className="w-full max-w-3xl text-center pb-4 z-50" onClick={(e) => e.stopPropagation()}>
              <motion.h3 
                key={`caption-${lightboxIndex}`}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-white font-display font-semibold text-lg sm:text-xl md:text-2xl"
              >
                {filteredItems[lightboxIndex].caption}
              </motion.h3>
              
              {/* Mobile touch indicators / swipe suggestion helper */}
              <p className="text-white/40 text-[10px] tracking-wider uppercase mt-2 font-bold hidden sm:block">
                Use Left / Right arrow keys or drag to browse
              </p>

              {/* Mobile only controls */}
              <div className="flex sm:hidden justify-center gap-4 mt-4">
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-xs font-bold"
                >
                  Prev
                </button>
                <button
                  onClick={handleNext}
                  className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-xs font-bold"
                >
                  Next
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
