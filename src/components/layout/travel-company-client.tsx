"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowLeft, Phone, Mail, Check, Play, Star, ChevronDown, ChevronUp,
  MapPin, Clock, Calendar, MessageSquare, ShieldCheck, Heart, Sparkles,
  HelpCircle, UserCheck, Compass, Send, ThumbsUp, Globe2, Twitter, Facebook, Instagram,
  Plane, Train, Bus, Hotel, Shield, FileText, Map, Camera, Car, ArrowRight,
  ChevronRight, Users, Award, Headphones, Youtube, Search, Info, Menu, X
} from "lucide-react";
import type { CompanyPageData } from "@/lib/company-pages-data";

/* ═══════════════════════════════════════════════════════════════════════════
   PRANIL TOURS & TRAVEL — Modern Unique Travel Company Page Redesign
   ═══════════════════════════════════════════════════════════════════════════ */

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export function TravelCompanyClient({ data }: { data: CompanyPageData }) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", destination: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"domestic" | "international">("domestic");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Search state
  const [searchDest, setSearchDest] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [searchGuests, setSearchGuests] = useState("2 Persons");

  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSendError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.destination || "Travel Inquiry",
          message: formData.message,
          company: "pranil-travel",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", destination: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setSendError(true);
      }
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  const handleInquiry = (destination: string) => {
    setFormData((prev) => ({ ...prev, destination }));
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* ── Data ── */
  const services = [
    { num: "01", title: "Air Ticketing", desc: "Domestic & international flight bookings at the best rates.", icon: Plane, img: "photo-1436491865332-7a61a109cc05" },
    { num: "02", title: "Train Booking", desc: "Seamless railway reservations across India's rail network.", icon: Train, img: "photo-1474487548417-781cb71495f3" },
    { num: "03", title: "Tourist Visa", desc: "Complete visa processing for 30+ countries worldwide.", icon: FileText, img: "photo-1544016768-982d1554f0b9" },
    { num: "04", title: "Domestic Tour", desc: "Curated packages across India's most stunning destinations.", icon: Map, img: "photo-1500530855697-b586d89ba3ee" },
    { num: "05", title: "Hotel Booking", desc: "Handpicked stays from budget-friendly to 5-star luxury.", icon: Hotel, img: "photo-1566073771259-6a8506099945" },
    { num: "06", title: "Bus Booking", desc: "Comfortable bus travel with premium operator partnerships.", icon: Bus, img: "photo-1544620347-c4fd4a3d5957" },
    { num: "07", title: "Insurance", desc: "Comprehensive travel insurance for worry-free adventures.", icon: Shield, img: "photo-1507525428034-b723cf961d3e" },
    { num: "08", title: "International Tour", desc: "World-class international holiday packages tailored for you.", icon: Globe2, img: "photo-1488646953014-85cb44e25828" },
  ];

  const domesticDestinations = [
    { name: "Kashmir", img: "https://wallpaperbat.com/img/11550872-dal-lake-in-srinagar-jammu-and-kashmir.jpg", tag: "Paradise on Earth", price: "₹24,999" },
    { name: "Manali", img: "photo-1626621331169-5f34be280ed9", tag: "Mountain Magic", price: "₹18,500" },
    { name: "Goa", img: "photo-1512343879784-a960bf40e7f2", tag: "Beach Bliss", price: "₹14,999" },
    { name: "Kerala", img: "photo-1602216056096-3b40cc0c9944", tag: "God's Own Country", price: "₹21,000" },
    { name: "Rajasthan", img: "photo-1477587458883-47145ed94245", tag: "Royal Heritage", price: "₹19,800" },
    { name: "Andaman", img: "photo-1507525428034-b723cf961d3e", tag: "Island Paradise", price: "₹29,999" },
    { name: "Ayodhya", img: "https://wallpaperaccess.com/full/4815103.jpg", tag: "Spiritual Journey", price: "₹12,500" },
    { name: "Char Dhaam", img: "https://vygrnews.com/uploader/Book-Your-Char-Dham-Yatra_1750615000.webp", tag: "Sacred Pilgrimage", price: "₹34,500" },
    { name: "Spiti Valley", img: "https://tse4.mm.bing.net/th/id/OIP.u77-o6zsZqZWbGQkLCgMkwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3", tag: "Cold Desert", price: "₹22,000" },
  ];

  const internationalDestinations = [
    { name: "Dubai", img: "photo-1512453979798-5ea266f8880c", tag: "City of Gold", price: "₹45,999" },
    { name: "Singapore", img: "photo-1525625293386-3f8f99389edd", tag: "Lion City", price: "₹59,999" },
    { name: "Thailand", img: "photo-1528181304800-259b08848526", tag: "Land of Smiles", price: "₹32,500" },
    { name: "Bali", img: "photo-1537996194471-e657df975ab4", tag: "Island of Gods", price: "₹39,999" },
    { name: "Malaysia", img: "photo-1596422846543-75c6fc197f07", tag: "Truly Asia", price: "₹36,800" },
    { name: "Maldives", img: "photo-1514282401047-d79a71a590e8", tag: "Tropical Paradise", price: "₹89,999" },
    { name: "Paris", img: "photo-1502602898657-3e91760cbb34", tag: "City of Love", price: "₹95,000" },
    { name: "Vietnam", img: "photo-1528127269322-539801943592", tag: "Hidden Charm", price: "₹38,500" },
  ];

  const weProvide = [
    { title: "Custom Tours", desc: "Tailored holidays built around your preferences.", icon: Compass },
    { title: "Tourist Visa", desc: "Swift & hassle-free documentation.", icon: FileText },
    { title: "Premium Hotels", desc: "Stays vetted for location and luxury.", icon: Hotel },
    { title: "Sightseeing", desc: "Experience destinations like a local.", icon: Camera },
  ];

  const whyChooseUs = [
    { num: "01", title: "Personalized Tours", desc: "Every trip is uniquely crafted to match your preferences, interests, and budget." },
    { num: "02", title: "Expert Guides", desc: "Our experienced travel professionals ensure you discover the best each destination offers." },
    { num: "03", title: "Affordable Packages", desc: "Premium travel experiences at competitive prices without compromising on quality." },
    { num: "04", title: "Hassle-Free Booking", desc: "Simple, seamless booking process with 24/7 support from inquiry to return." },
    { num: "05", title: "Tailored Itineraries", desc: "Flexible schedules designed around your pace, ensuring a stress-free journey." },
  ];

  const testimonials = [
    {
      quote: "An incredible Dubai trip with breathtaking architecture, luxurious experiences, and exceptional hospitality. Pranil made it effortless.",
      name: "Jay Nayak",
      role: "Business Owner",
      img: "photo-1507003211169-0a1dd7228f2d"
    },
    {
      quote: "Pranil Tour and Travels made my Manali trip unforgettable with excellent service, stunning itinerary, and seamless experience.",
      name: "Kashyap Patel",
      role: "Corporate Executive",
      img: "photo-1500648767791-00dcc994a43e"
    },
    {
      quote: "Pranil Tours and Travels made our Himachal Pradesh trip unforgettable with impeccable service and local expertise.",
      name: "Manish Patel",
      role: "Family Traveler",
      img: "photo-1472099645785-5658abf4ff4e"
    }
  ];

  const faqItems = [
    { q: "How can I book a customized tour package?", a: "Fill out our contact form or call us directly. Our travel consultants will craft a tailored package matching your exact requirements, dates, and budget." },
    { q: "Do you assist with Tourist Visas?", a: "Yes! We specialize in tourist visa processing for Dubai, Schengen countries, UK, USA, Canada, Singapore, Bali, and many other destinations." },
    { q: "What is included in international packages?", a: "Flights, hotels, airport transfers, sightseeing tours, travel insurance, and 24/7 concierge support during your stay." },
    { q: "Can I customize my itinerary?", a: "Absolutely! All our packages are fully customizable. Tell us what you want and we'll make it happen." },
  ];

  return (
    <div className="bg-[#FAFBFD] text-slate-700 min-h-screen font-sans antialiased overflow-x-hidden relative selection:bg-[#00A6D6] selection:text-white">
      
      {/* Background grids and abstract vector decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[50%] h-[800px] bg-gradient-to-b from-[#0ea5e9]/[0.03] to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-[1200px] left-[-20%] w-[60%] h-[1000px] bg-gradient-to-tr from-[#13c4b5]/[0.02] to-transparent blur-[150px] rounded-full" />
        <div className="absolute bottom-[800px] right-[-10%] w-[45%] h-[800px] bg-gradient-to-l from-[#0B4F8A]/[0.02] to-transparent blur-[120px] rounded-full" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  1. NAVBAR                                                        */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFBFD]/80 backdrop-blur-xl border-b border-slate-100/50 shadow-[0_2px_30px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <div className="flex items-center gap-6">
            <Link href="/" className="group text-[10px] font-black text-slate-400 hover:text-[#00A6D6] transition-all flex items-center gap-1.5 uppercase tracking-wider">
              <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" /> Home
            </Link>
            <span className="text-slate-200">|</span>
            <span className="text-xl font-black text-[#0B4F8A] tracking-tight flex items-center gap-2">
              <Image src="/logos/travel-logo.png" alt="PRANIL Tours" width={36} height={36} className="w-9 h-9 rounded-xl object-contain" />
              PRANIL <span className="text-[#00A6D6] font-semibold">Tours</span>
            </span>
          </div>
          
          <div className="hidden lg:flex items-center gap-9">
            {["Home", "Categories", "Destinations", "Offer", "Why Us", "Contact"].map((item) => (
              <a 
                key={item} 
                href={item === "Home" ? "#" : `#${item.toLowerCase().replace(/ /g, "-")}`} 
                className="text-[11px] font-bold text-slate-500 uppercase tracking-widest hover:text-[#00A6D6] transition relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00A6D6] hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden sm:inline-block relative group overflow-hidden bg-gradient-to-r from-[#0B4F8A] to-[#00A6D6] text-white text-[11px] font-black uppercase tracking-widest px-6 py-3 rounded-xl hover:shadow-[0_8px_25px_rgba(0,166,214,0.25)] transition-all">
              <span className="relative z-10">Inquire Now</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-[#00A6D6] to-[#13C4B5] transition-transform duration-500" />
            </a>

            {/* Mobile hamburger menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 text-[#0B4F8A] hover:bg-slate-200 transition cursor-pointer"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 bg-white border-b border-slate-100 shadow-xl z-40 lg:hidden p-6 space-y-4"
          >
            <div className="flex flex-col gap-4">
              {["Home", "Categories", "Destinations", "Offer", "Why Us", "Contact"].map((item) => (
                <a 
                  key={item} 
                  href={item === "Home" ? "#" : `#${item.toLowerCase().replace(/ /g, "-")}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-black text-slate-500 uppercase tracking-widest hover:text-[#00A6D6] transition py-2 border-b border-slate-50"
                >
                  {item}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-gradient-to-r from-[#0B4F8A] to-[#00A6D6] text-white text-center text-xs font-black uppercase tracking-widest py-3.5 rounded-xl block mt-2"
              >
                Inquire Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  2. HERO — Split Content & Capsule Image collage                   */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 max-w-7xl mx-auto z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-8 text-left relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00A6D6]/10 text-[#0B4F8A] border border-[#00A6D6]/10"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#00A6D6]" />
              <span className="text-[10px] font-black uppercase tracking-widest">Plan Your Perfect Escape</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[2.8rem] sm:text-[4rem] lg:text-[4.8rem] font-black text-[#0B4F8A] leading-[1.08] tracking-tight"
            >
              Visit The Most <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00A6D6] via-[#13C4B5] to-[#0B4F8A] font-extrabold pr-2">
                Beautiful Places
                <svg className="absolute left-0 -bottom-2.5 w-full h-3 text-[#f59e0b] fill-none stroke-current" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2,7 Q45,2 98,6" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span> <br />
              In The World
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 text-sm sm:text-base max-w-lg leading-relaxed font-medium"
            >
              Every journey is an experience, a memory in the making. Let us craft your perfect adventure across India&apos;s breathtaking landscapes and the world&apos;s most iconic destinations.
            </motion.p>

            {/* Hand-drawn decorative arrow pointing to search */}
            <div className="absolute -bottom-6 left-1/3 w-16 h-16 text-[#f59e0b] hidden lg:block opacity-70 pointer-events-none">
              <svg viewBox="0 0 50 50" fill="none" className="w-full h-full stroke-current" strokeWidth="2.5">
                <path d="M10,10 Q25,40 35,20" strokeLinecap="round" />
                <path d="M35,20 L30,22 M35,20 L32,15" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Hero Right Collage — Rounded Capsule Layout */}
          <div className="lg:col-span-6 relative h-[420px] sm:h-[500px] w-full flex items-center justify-center">
            
            <div className="relative w-full h-full grid grid-cols-3 gap-3 sm:gap-4 max-w-[480px]">
              
              {/* Capsule 1 (Left column, offset down) */}
              <div className="flex flex-col justify-end h-full pb-8">
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full h-[80%] rounded-full overflow-hidden border-4 border-white shadow-xl group cursor-pointer relative"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=400&q=80" 
                    alt="Collage 1" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B4F8A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all" />
                </motion.div>
              </div>

              {/* Capsule 2 (Middle column, tall, centered) */}
              <div className="flex flex-col justify-center h-full">
                <motion.div 
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="w-full h-[95%] rounded-full overflow-hidden border-4 border-white shadow-2xl group cursor-pointer relative"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=400&q=80" 
                    alt="Collage 2" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B4F8A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all" />
                </motion.div>
              </div>

              {/* Capsule 3 (Right column, offset up) */}
              <div className="flex flex-col justify-start h-full pt-8">
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="w-full h-[80%] rounded-full overflow-hidden border-4 border-white shadow-xl group cursor-pointer relative"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80" 
                    alt="Collage 3" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B4F8A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all" />
                </motion.div>
              </div>

            </div>
          </div>
        </div>

        {/* ─── Horizontal Search/Inquiry Box ─── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-white rounded-[2rem] border border-slate-100 p-6 sm:p-8 shadow-[0_15px_50px_rgba(11,79,138,0.05)] max-w-5xl mx-auto relative z-20"
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
            
            <div className="space-y-2 text-left">
              <label className="text-[10px] font-black text-[#0B4F8A] uppercase tracking-widest block">Where to?</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#00A6D6]" />
                <input 
                  type="text" 
                  placeholder="Kashmir, Dubai, Bali..."
                  value={searchDest}
                  onChange={(e) => setSearchDest(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3.5 pl-10 pr-4 text-xs font-bold text-[#0B4F8A] placeholder:text-slate-400 focus:outline-none focus:border-[#00A6D6] focus:bg-white transition"
                />
              </div>
            </div>

            <div className="space-y-2 text-left">
              <label className="text-[10px] font-black text-[#0B4F8A] uppercase tracking-widest block">When?</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#00A6D6]" />
                <input 
                  type="text" 
                  placeholder="Select Date"
                  value={searchDate}
                  onChange={(e) => setSearchDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3.5 pl-10 pr-4 text-xs font-bold text-[#0B4F8A] placeholder:text-slate-400 focus:outline-none focus:border-[#00A6D6] focus:bg-white transition"
                />
              </div>
            </div>

            <div className="space-y-2 text-left">
              <label className="text-[10px] font-black text-[#0B4F8A] uppercase tracking-widest block">Guests</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#00A6D6]" />
                <select 
                  value={searchGuests}
                  onChange={(e) => setSearchGuests(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3.5 pl-10 pr-4 text-xs font-bold text-[#0B4F8A] focus:outline-none focus:border-[#00A6D6] focus:bg-white transition appearance-none"
                >
                  <option>1 Person</option>
                  <option>2 Persons</option>
                  <option>3-4 Persons</option>
                  <option>Family (5+)</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <button 
              type="submit" 
              className="bg-gradient-to-r from-[#0B4F8A] to-[#00A6D6] text-white text-[11px] font-black uppercase tracking-widest py-4 rounded-xl hover:shadow-[0_8px_25px_rgba(0,166,214,0.3)] transition-all flex items-center justify-center gap-2 group cursor-pointer w-full"
            >
              <Search className="h-4 w-4 group-hover:scale-110 transition-transform" />
              Search Tours
            </button>

          </form>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  3. CATEGORIES / SERVICES — Capsule Oval Cards                    */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="categories" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 max-w-lg mx-auto">
            <span className="text-[#00A6D6] text-[10px] font-extrabold uppercase tracking-[0.3em] block mb-3">Categories</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B4F8A] leading-tight">
              Services of Pranil <br /> Tours & Travels
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#00A6D6] to-[#13C4B5] mx-auto rounded-full mt-4" />
          </div>

          {/* Oval Capsule Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex flex-col items-center"
                >
                  <div className="group w-full aspect-[1/2.2] max-w-[140px] rounded-full overflow-hidden border border-slate-100 shadow-md relative cursor-pointer bg-slate-50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,166,214,0.15)]">
                    
                    {/* Background image zoom */}
                    <img 
                      src={`https://images.unsplash.com/${s.img}?auto=format&fit=crop&w=300&q=80`} 
                      alt={s.title}
                      className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-120 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />

                    {/* Dark/color overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B4F8A]/95 via-[#0B4F8A]/35 to-transparent transition-all duration-300" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-between p-4 z-10 text-white">
                      
                      {/* Top icon indicator */}
                      <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mx-auto transition-transform group-hover:rotate-12">
                        <Icon className="h-4.5 w-4.5 text-white" />
                      </div>

                      {/* Bottom title */}
                      <div className="text-center">
                        <span className="text-[8px] font-black text-[#00A6D6] tracking-wider block mb-1 uppercase">{s.num}</span>
                        <h3 className="text-[10px] font-black leading-tight uppercase tracking-wider mb-2">{s.title}</h3>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  4. POPULAR DESTINATIONS — Slider/Grid with tab switches          */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="destinations" className="py-24 bg-gradient-to-b from-white to-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="text-left">
              <span className="text-[#00A6D6] text-[10px] font-extrabold uppercase tracking-[0.3em] block mb-3">Popular Destinations</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B4F8A] tracking-tight">Our Curated Travel Packages</h2>
            </div>

            {/* Tab switch controls */}
            <div className="flex w-full sm:w-auto bg-slate-100 rounded-2xl p-1 border border-slate-200/50 max-w-xs mx-auto sm:mx-0">
              {(["domestic", "international"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 sm:flex-initial text-center px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeTab === tab
                      ? "bg-white text-[#0B4F8A] shadow-md"
                      : "text-slate-400 hover:text-[#00A6D6]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {(activeTab === "domestic" ? domesticDestinations : internationalDestinations).map((d, i) => (
                <motion.div
                  key={d.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(11,79,138,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Card Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={d.img.startsWith('http') || d.img.startsWith('/') ? d.img : `https://images.unsplash.com/${d.img}?auto=format&fit=crop&w=400&q=80`}
                      alt={d.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#00A6D6] text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                      {d.tag}
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div className="mb-4">
                      <div className="flex items-center gap-1 text-amber-500 mb-2">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="h-3.5 w-3.5 fill-current" />
                        ))}
                      </div>
                      <h3 className="text-lg font-black text-[#0B4F8A] mb-1">{d.name}</h3>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">All-Inclusive Tour Package</p>
                    </div>

                    <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                      <div>
                        <span className="text-[9px] text-slate-400 font-black uppercase tracking-wider block">Starts from</span>
                        <span className="text-base font-black text-[#0B4F8A]">{d.price}</span>
                      </div>
                      <button
                        onClick={() => handleInquiry(d.name)}
                        className="bg-[#00A6D6]/10 text-[#0B4F8A] hover:bg-gradient-to-r hover:from-[#0B4F8A] hover:to-[#00A6D6] hover:text-white text-[9px] font-black uppercase tracking-widest px-4 py-2.5 rounded-xl transition-all shadow-sm cursor-pointer"
                      >
                        Inquiry
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  5. EXPLORE MORE — Split details and premium visual               */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="offer" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content (Blue Cards) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="text-left mb-8">
                <span className="text-[#00A6D6] text-[10px] font-extrabold uppercase tracking-[0.3em] block mb-3">Our Core Highlights</span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0B4F8A]">What We Provide</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-[#00A6D6] to-[#13C4B5] rounded-full mt-4" />
              </div>

              {/* Grid of 2 major promo cards */}
              <div className="space-y-4">
                
                {/* Promo Card 1 */}
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="bg-[#0B4F8A]/5 border border-[#0B4F8A]/10 rounded-[2rem] p-6 sm:p-8 text-left relative overflow-hidden group cursor-pointer"
                >
                  <div className="absolute right-[-10px] bottom-[-10px] w-28 h-28 bg-[#0B4F8A]/10 rounded-full blur-xl pointer-events-none" />
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B4F8A] text-white flex items-center justify-center">
                      <Plane className="h-6 w-6 -rotate-45" />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-[#0B4F8A] uppercase tracking-wide">Custom Tours & Packages</h3>
                      <p className="text-[10px] text-[#00A6D6] font-extrabold uppercase tracking-wider">Flight, Hotel & Sightseeing</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium mb-4">
                    Get best-in-class air ticketing deals, hotel reservations, and custom sightseeing configurations, fully arranged by our experts.
                  </p>
                  <a href="#contact" className="inline-flex items-center gap-1.5 text-[#00A6D6] text-[10px] font-black uppercase tracking-widest group-hover:translate-x-1.5 transition-transform">
                    Explore more <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </motion.div>

                {/* Promo Card 2 */}
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="bg-[#00A6D6]/5 border border-[#00A6D6]/10 rounded-[2rem] p-6 sm:p-8 text-left relative overflow-hidden group cursor-pointer"
                >
                  <div className="absolute right-[-10px] bottom-[-10px] w-28 h-28 bg-[#00A6D6]/10 rounded-full blur-xl pointer-events-none" />
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#00A6D6] text-white flex items-center justify-center">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-[#0B4F8A] uppercase tracking-wide">Tourist Visas & Insurance</h3>
                      <p className="text-[10px] text-[#13C4B5] font-extrabold uppercase tracking-wider">Hassle-Free Processing</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium mb-4">
                    Complete visa file support for over 30+ major travel destinations including Schengen areas, Dubai, USA, Bali, UK, and Europe work permit advisory.
                  </p>
                  <a href="#contact" className="inline-flex items-center gap-1.5 text-[#00A6D6] text-[10px] font-black uppercase tracking-widest group-hover:translate-x-1.5 transition-transform">
                    Explore more <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </motion.div>

              </div>

            </div>

            {/* Right Content (Landscape Terrace) */}
            <div className="lg:col-span-6 relative flex justify-center">
              
              {/* Hand-drawn underline design stroke */}
              <div className="absolute top-[-20px] right-[-20px] w-24 h-24 border-r-4 border-t-4 border-[#f59e0b]/30 rounded-tr-[3rem] pointer-events-none hidden lg:block" />

              <div className="relative w-full aspect-[4/3] max-w-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-50 group">
                <img 
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" 
                  alt="Terrace View" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlaid visual tag */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-slate-100/50 flex items-center justify-between shadow-lg">
                  <div>
                    <span className="text-[9px] text-[#00A6D6] font-black uppercase tracking-wider block">Signature Vacation</span>
                    <span className="text-sm font-black text-[#0B4F8A]">Luxury Dubai Stays</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#0B4F8A] text-white flex items-center justify-center shadow-md">
                    <Compass className="h-5 w-5 animate-spin-slow" />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  6. WHY CHOOSE US — Numbers Grid & Landmarks Sketch                */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="why-us" className="py-24 bg-[#FAFBFD] relative overflow-hidden">
        
        {/* Background Sketch Shapes */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#00A6D6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Why Choose Us Data */}
            <div className="lg:col-span-7 space-y-10">
              
              <div className="text-left">
                <span className="text-[#00A6D6] text-[10px] font-extrabold uppercase tracking-[0.3em] block mb-3">Why Choose Us</span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0B4F8A]">Why Choose Pranil <br /> Tours & Travels?</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-[#00A6D6] to-[#13C4B5] rounded-full mt-4" />
              </div>

              <div className="space-y-4 max-w-xl">
                {whyChooseUs.map((w, idx) => (
                  <motion.div 
                    key={w.num}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:border-[#00A6D6]/30 transition"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#00A6D6]/10 text-[#00A6D6] flex items-center justify-center shrink-0 text-xs font-black">
                      {w.num}
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-[#0B4F8A] mb-1 uppercase tracking-wider">{w.title}</h3>
                      <p className="text-[11px] text-slate-400 font-medium leading-relaxed">{w.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

            {/* Right Column: Traveler Suitcase / Sketch Collage */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              
              {/* Floating outlines representing landmarks / travel motifs */}
              <div className="absolute top-[10%] left-[-20px] text-amber-500/20 w-16 h-16 animate-bounce pointer-events-none">
                <Globe2 className="w-full h-full stroke-1" />
              </div>
              <div className="absolute bottom-[20%] right-[-10px] text-[#00A6D6]/20 w-20 h-20 animate-pulse pointer-events-none">
                <Compass className="w-full h-full stroke-1" />
              </div>

              {/* Central Collage Frame */}
              <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-50 group">
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80" 
                  alt="Traveler Experience" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B4F8A]/80 via-[#0B4F8A]/10 to-transparent" />
                
                {/* Highlight Stats badge on card */}
                <div className="absolute top-6 right-6 bg-gradient-to-br from-[#0B4F8A] to-[#00A6D6] text-white p-4 rounded-2xl shadow-lg border border-white/10 text-center min-w-[100px]">
                  <div className="text-lg font-black tracking-tight leading-none">15+</div>
                  <div className="text-[8px] font-black uppercase tracking-wider mt-1">Years</div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <span className="text-[8px] text-[#00A6D6] font-black uppercase tracking-widest block mb-1">Make It Memorable</span>
                  <h4 className="text-base font-black uppercase tracking-wider leading-tight">We Create The Trips You Love.</h4>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  7. MARQUEE — Infinite Scrolling Ribbon                            */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="py-8 bg-white border-y border-slate-100 overflow-hidden relative z-10">
        <div className="flex animate-marquee-nonstop whitespace-nowrap gap-0 w-max">
          {Array.from({ length: 3 }).map((_, r) =>
            [...domesticDestinations, ...internationalDestinations].map((d, i) => (
              <span key={`${r}-${i}`} className="text-[#0B4F8A]/15 text-xs font-black uppercase tracking-[0.3em] px-8 flex items-center gap-4 hover:text-[#00A6D6]/40 transition-colors cursor-default select-none">
                {d.name} <span className="text-[#00A6D6] text-base">✦</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  8. TESTIMONIALS — Dashed Circle Traveler collage                 */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Traveler Image with Dashed Circle */}
            <div className="lg:col-span-5 relative flex justify-center">
              
              {/* Dashed outer spinning border */}
              <div className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full border-2 border-dashed border-[#00A6D6]/30 animate-spin-slow pointer-events-none" />
              
              {/* Inner floating highlight circles */}
              <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-amber-500 animate-pulse pointer-events-none" />
              <div className="absolute bottom-10 right-4 w-10 h-10 rounded-full bg-[#00A6D6]/10 animate-bounce pointer-events-none" />

              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden border-8 border-slate-50 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80" 
                  alt="Travel Testimonial" 
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            {/* Right Column: Quotes Grid */}
            <div className="lg:col-span-7 space-y-10 text-left">
              
              <div>
                <span className="text-[#00A6D6] text-[10px] font-extrabold uppercase tracking-[0.3em] block mb-3">Client Reviews</span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0B4F8A]">What Our Client Says</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-[#00A6D6] to-[#13C4B5] rounded-full mt-4" />
              </div>

              {/* Grid Layout of testimonials */}
              <div className="grid sm:grid-cols-3 gap-5">
                {testimonials.map((t, idx) => (
                  <motion.div 
                    key={t.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-slate-50/50 rounded-3xl p-5 border border-slate-100 flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Quote mark icon */}
                      <span className="text-[2.5rem] font-serif font-black text-[#00A6D6]/20 leading-none block h-6">&ldquo;</span>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-medium mb-4 pr-1">
                        {t.quote}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                      <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                        <img 
                          src={`https://images.unsplash.com/${t.img}?auto=format&fit=crop&w=100&q=80`} 
                          alt={t.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black text-[#0B4F8A] uppercase tracking-wider">{t.name}</h4>
                        <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">{t.role}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  9. FAQ & ACCORDION                                               */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#FAFBFD]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <span className="text-[#00A6D6] text-[10px] font-extrabold uppercase tracking-[0.3em] block mb-3">FAQ</span>
            <h2 className="text-3xl font-black text-[#0B4F8A]">Frequently Asked Questions</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#00A6D6] to-[#13C4B5] mx-auto rounded-full mt-4" />
          </div>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <motion.div 
                key={i} 
                className="border border-slate-200/50 bg-white rounded-3xl overflow-hidden hover:border-[#00A6D6]/20 transition"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-xs sm:text-sm font-black text-[#0B4F8A] pr-4 uppercase tracking-wider">{item.q}</span>
                  {activeFaq === i ? <ChevronUp className="h-4.5 w-4.5 text-[#00A6D6] shrink-0" /> : <ChevronDown className="h-4.5 w-4.5 text-slate-300 shrink-0" />}
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }} 
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-xs text-slate-400 leading-relaxed border-t border-slate-50 pt-4 font-medium">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  10. CONTACT SECTION                                              */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
            
            {/* Contact Info (Details) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              
              <div className="text-left space-y-4">
                <span className="text-[#00A6D6] text-[10px] font-extrabold uppercase tracking-[0.3em] block mb-3">Get In Touch</span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0B4F8A] leading-tight">Start Planning <br /> Your Adventure</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-[#00A6D6] to-[#13C4B5] rounded-full mt-4" />
                <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed pr-6 pt-3">
                  Contact us now and our travel experts will craft the perfect customized itinerary for you.
                </p>
              </div>

              {/* Coordinates Grid */}
              <div className="space-y-4">
                {[
                  { icon: Phone, label: "Call Us", val: "+91 73833 69769", val2: "+91 63538 18174" },
                  { icon: Mail, label: "Email Support", val: "info@praniltours.com" },
                  { icon: MapPin, label: "Visit Us", val: "525, SV Square, Opp. Nishan Pride,", val2: "New Ranip, Ahmedabad - 382470" },
                ].map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <div 
                      key={i} 
                      className="bg-slate-50 rounded-[1.5rem] p-5 border border-slate-100 flex items-start gap-4 hover:border-[#00A6D6]/20 transition"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 text-[#00A6D6] flex items-center justify-center shrink-0 shadow-sm">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">{c.label}</div>
                        <div className="text-xs font-black text-[#0B4F8A]">{c.val}</div>
                        {c.val2 && <div className="text-xs font-black text-[#0B4F8A]">{c.val2}</div>}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 bg-[#FAFBFD] rounded-[2.5rem] p-8 sm:p-10 border border-slate-200/50 shadow-sm flex flex-col justify-center">
              
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#00A6D6]/10 flex items-center justify-center mb-4">
                    <Check className="h-8 w-8 text-[#00A6D6]" />
                  </div>
                  <h3 className="text-xl font-black text-[#0B4F8A] mb-2">Thank You!</h3>
                  <p className="text-slate-400 text-xs font-medium">Our travel experts will contact you shortly to plan your itinerary.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2 text-left">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.name} 
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-xs font-bold text-[#0B4F8A] placeholder:text-slate-400 focus:outline-none focus:border-[#00A6D6] transition" 
                        placeholder="Your Name" 
                      />
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        value={formData.phone} 
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-xs font-bold text-[#0B4F8A] placeholder:text-slate-400 focus:outline-none focus:border-[#00A6D6] transition" 
                        placeholder="+91 XXXXX XXXXX" 
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2 text-left">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        value={formData.email} 
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-xs font-bold text-[#0B4F8A] placeholder:text-slate-400 focus:outline-none focus:border-[#00A6D6] transition" 
                        placeholder="you@email.com" 
                      />
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Destination</label>
                      <input 
                        type="text" 
                        value={formData.destination} 
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-xs font-bold text-[#0B4F8A] placeholder:text-slate-400 focus:outline-none focus:border-[#00A6D6] transition" 
                        placeholder="Where do you want to go?" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2 text-left">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Your Message</label>
                    <textarea 
                      rows={4} 
                      value={formData.message} 
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-xs font-bold text-[#0B4F8A] placeholder:text-slate-400 focus:outline-none focus:border-[#00A6D6] transition resize-none" 
                      placeholder="Tell us about your travel plans, dates, and package choice..." 
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#0B4F8A] to-[#00A6D6] text-white text-[11px] font-black uppercase tracking-widest py-4 rounded-xl hover:shadow-[0_8px_25px_rgba(0,166,214,0.25)] transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    Send Tour Inquiry <Send className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </button>

                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  11. FOOTER                                                       */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <footer className="bg-[#0B4F8A] text-white/60 pt-20 pb-10 relative overflow-hidden">
        
        {/* Abstract background shape inside footer */}
        <div className="absolute right-[-10%] bottom-[-10%] w-[400px] h-[400px] rounded-full bg-[#00A6D6]/10 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            
            {/* Column 1: Brand Info */}
            <div className="space-y-6">
              <div className="text-xl font-black text-white flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FAFBFD] to-[#00A6D6] flex items-center justify-center shadow-lg shadow-white/5">
                  <Plane className="h-4.5 w-4.5 text-[#0B4F8A] -rotate-45" />
                </div>
                PRANIL <span className="text-[#00A6D6]">Tours</span>
              </div>
              <p className="text-[11px] text-white/40 leading-relaxed font-medium">
                Your trusted travel partner for domestic & international vacations. Creating unforgettable memories since 2009.
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, href: "https://www.facebook.com/share/1L9KZqZKbS/" },
                  { Icon: Instagram, href: "https://www.instagram.com/pranil_tours_and_travels?igsh=cXU4N2k4OG1pdnQw" },
                  { Icon: Twitter, href: "#" },
                  { Icon: Youtube, href: "#" },
                ].map((item, i) => (
                  <a key={i} href={item.href} target={item.href !== "#" ? "_blank" : undefined} rel={item.href !== "#" ? "noopener noreferrer" : undefined} className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/50 hover:bg-[#00A6D6] hover:text-white hover:border-transparent transition">
                    <item.Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-widest mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["Home", "Categories", "Destinations", "Offer", "Why Us", "Contact"].map((l) => (
                  <li key={l}>
                    <a 
                      href={l === "Home" ? "#" : `#${l.toLowerCase().replace(/ /g, "-")}`}
                      className="text-[11px] text-white/40 hover:text-[#00A6D6] transition font-bold uppercase tracking-wider"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Top destinations */}
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-widest mb-6">Top Choices</h4>
              <ul className="space-y-3">
                {["Kashmir Package", "Goa Beach Tour", "Dubai Sightseeing", "Bali Custom Holiday", "Singapore Highlights", "Kerala Backwaters"].map((d) => (
                  <li key={d} className="text-[11px] text-white/40 font-bold uppercase tracking-wider cursor-pointer hover:text-[#00A6D6] transition">
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-widest mb-6">Contact Coordinates</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-4.5 w-4.5 text-[#00A6D6] shrink-0 mt-0.5" />
                  <div className="text-[11px] font-bold text-white/50">
                    <div>+91 73833 69769</div>
                    <div>+91 63538 18174</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-4.5 w-4.5 text-[#00A6D6] shrink-0 mt-0.5" />
                  <span className="text-[11px] font-bold text-white/50">info@praniltours.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4.5 w-4.5 text-[#00A6D6] shrink-0 mt-0.5" />
                  <span className="text-[11px] font-bold text-white/50 leading-relaxed">
                    525, SV Square, Opp. Nishan Pride, New Ranip, Ahmedabad - 382470
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Copyright Bottom Bar */}
          <div className="border-t border-white/5 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] tracking-wider uppercase font-bold text-white/20">
            <p>© {new Date().getFullYear()} PRANIL Tours & Travel. All Rights Reserved.</p>
            <p>A Pranil Group Company</p>
          </div>

        </div>
      </footer>

      {/* ─── WhatsApp Floating Button ─── */}
      <motion.div
        className="fixed z-50"
        style={{ bottom: 'max(1.5rem, calc(env(safe-area-inset-bottom, 0px) + 1.5rem))', right: '1.5rem' }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <a
          href="https://wa.me/917383369769"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="h-7 w-7" />
          <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" />
        </a>
      </motion.div>

    </div>
  );
}
