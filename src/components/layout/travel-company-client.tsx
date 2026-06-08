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
  ChevronRight, Users, Award, Headphones, Youtube, Search, Info, Menu, X, CreditCard, Wallet, MapPinIcon
} from "lucide-react";
import type { CompanyPageData } from "@/lib/company-pages-data";

/* ═══════════════════════════════════════════════════════════════════════════
   PRANIL TOURS & TRAVEL — Modern Unique Travel Company Page Redesign
   Reference: https://dribbble.com/shots/26932835-Modern-Travel-Tour-Booking-Landing-Page
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
  const [searchTheme, setSearchTheme] = useState("Adventure Trip");

  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  // Local destinations filter tab state
  const [destFilter, setDestFilter] = useState("all");

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
          service: `Travel Inquiry: ${formData.destination || searchDest}`,
          message: formData.message || `Guests: ${searchGuests}, Theme: ${searchTheme}`,
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

  const handleSearchInquiry = () => {
    setFormData((prev) => ({
      ...prev,
      destination: searchDest,
      message: `Theme Preference: ${searchTheme}\nNumber of Travelers: ${searchGuests}`
    }));
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookTour = (destName: string, duration: string, price: string) => {
    setFormData((prev) => ({
      ...prev,
      destination: `${destName}`,
      message: `I would like to book the tour package for ${destName} (${duration}) starting from ${price}. Please contact me with further details.`
    }));
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* ── Local FAQ Data (Fixes the undefined runtime crash) ── */
  const travelFaq = [
    {
      question: "Are your tour packages customizable?",
      answer: "Yes, all our domestic and international packages are 100% customizable according to your budget, travel dates, and preferred destination choices."
    },
    {
      question: "Do you provide visa assistance for international travel?",
      answer: "Absolutely! We provide complete tourist visa support, including document checks, submission coaching, and application filing for over 30+ countries."
    },
    {
      question: "What is typically included in a tour package?",
      answer: "Our standard holiday packages include air or train ticketing, handpicked hotel stays, daily breakfast, dedicated local sightseeing transfers, and optional travel insurance."
    },
    {
      question: "How do I request a custom travel itinerary and quote?",
      answer: "Simply submit your details through our contact inquiry form, or speak directly to our travel desk at +91 88499 48279, and we will send you a personalized plan."
    },
    {
      question: "Do you offer on-trip support in case of emergencies?",
      answer: "Yes, we provide 24/7 helpline and on-road support for all our clients to guarantee a safe, seamless, and stress-free travel experience."
    }
  ];

  /* ── Core Service Data ── */
  const services = [
    { num: "01", title: "Air Ticketing", desc: "Domestic & international flight bookings at the best competitive rates.", icon: Plane },
    { num: "02", title: "Train Booking", desc: "Seamless railway reservations across India's extensive network.", icon: Train },
    { num: "03", title: "Tourist Visa", desc: "Complete tourist visa processing and documentation for 30+ countries.", icon: FileText },
    { num: "04", title: "Domestic Tour", desc: "Curated packages across India's most stunning local destinations.", icon: Map },
    { num: "05", title: "Hotel Booking", desc: "Handpicked stays ranging from budget-friendly to luxury 5-star hotels.", icon: Hotel },
    { num: "06", title: "Bus Booking", desc: "Comfortable bus travel with premium operator partnerships nationwide.", icon: Bus },
    { num: "07", title: "Travel Insurance", desc: "Comprehensive insurance coverage for worry-free global adventures.", icon: Shield },
    { num: "08", title: "International Tour", desc: "World-class holiday packages customized for global destinations.", icon: Globe2 },
  ];

  const domesticDestinations = [
    { name: "Kashmir", img: "https://wallpaperbat.com/img/11550872-dal-lake-in-srinagar-jammu-and-kashmir.jpg", tag: "Paradise on Earth", price: "₹24,999", duration: "6 Days, 5 Nights", rating: "4.9", region: "north" },
    { name: "Manali", img: "https://images.unsplash.com/photo-1626621331169-5f34be280ed9?auto=format&fit=crop&w=600&q=80", tag: "Mountain Magic", price: "₹18,500", duration: "5 Days, 4 Nights", rating: "4.8", region: "north" },
    { name: "Goa", img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80", tag: "Beach Bliss", price: "₹14,999", duration: "4 Days, 3 Nights", rating: "4.7", region: "west" },
    { name: "Kerala", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80", tag: "God's Own Country", price: "₹21,000", duration: "6 Days, 5 Nights", rating: "4.8", region: "south" },
    { name: "Rajasthan", img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80", tag: "Royal Heritage", price: "₹19,800", duration: "5 Days, 4 Nights", rating: "4.9", region: "west" },
    { name: "Andaman", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80", tag: "Island Paradise", price: "₹29,999", duration: "7 Days, 6 Nights", rating: "4.8", region: "islands" },
    { name: "Ayodhya", img: "https://wallpaperaccess.com/full/4815103.jpg", tag: "Spiritual Journey", price: "₹12,500", duration: "3 Days, 2 Nights", rating: "4.9", region: "north" },
    { name: "Char Dhaam", img: "https://vygrnews.com/uploader/Book-Your-Char-Dham-Yatra_1750615000.webp", tag: "Sacred Pilgrimage", price: "₹34,500", duration: "10 Days, 9 Nights", rating: "4.9", region: "north" },
    { name: "Spiti Valley", img: "https://tse4.mm.bing.net/th/id/OIP.u77-o6zsZqZWbGQkLCgMkwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3", tag: "Cold Desert", price: "₹22,000", duration: "7 Days, 6 Nights", rating: "4.8", region: "north" },
  ];

  const internationalDestinations = [
    { name: "Dubai", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80", tag: "City of Gold", price: "₹45,999", duration: "5 Days, 4 Nights", rating: "4.9", region: "asia" },
    { name: "Singapore", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80", tag: "Lion City", price: "₹59,999", duration: "5 Days, 4 Nights", rating: "4.8", region: "asia" },
    { name: "Thailand", img: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=600&q=80", tag: "Land of Smiles", price: "₹32,500", duration: "6 Days, 5 Nights", rating: "4.7", region: "asia" },
    { name: "Bali", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80", tag: "Island of Gods", price: "₹39,999", duration: "5 Days, 4 Nights", rating: "4.9", region: "asia" },
    { name: "Malaysia", img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=600&q=80", tag: "Truly Asia", price: "₹36,800", duration: "5 Days, 4 Nights", rating: "4.7", region: "asia" },
    { name: "Maldives", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80", tag: "Tropical Paradise", price: "₹89,999", duration: "4 Days, 3 Nights", rating: "4.9", region: "islands" },
    { name: "Paris", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80", tag: "City of Love", price: "₹95,000", duration: "6 Days, 5 Nights", rating: "4.8", region: "europe" },
    { name: "Vietnam", img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80", tag: "Hidden Charm", price: "₹38,500", duration: "6 Days, 5 Nights", rating: "4.8", region: "asia" },
  ];

  const weProvide = [
    { title: "Custom Tours", desc: "Tailored holidays built around your preferences.", icon: Compass },
    { title: "Tourist Visa", desc: "Swift & hassle-free documentation.", icon: FileText },
    { title: "Premium Hotels", desc: "Stays vetted for location and luxury.", icon: Hotel },
    { title: "Sightseeing", desc: "Experience destinations like a local.", icon: Camera },
  ];

  const steps = [
    { id: 1, title: "Choose Your Destination", desc: "Explore hundreds of beautiful places worldwide.", icon: Compass },
    { id: 2, title: "Make Your Payment", desc: "Secure and fast payment with multiple options.", icon: Wallet },
    { id: 3, title: "Enjoy Your Trip", desc: "Pack your bags and enjoy an unforgettable journey.", icon: Plane }
  ];

  return (
    <div className="bg-[#FEFAF6] text-[#0D3E36] min-h-screen font-sans antialiased overflow-x-hidden relative selection:bg-[#0D3E36]/10 selection:text-[#0D3E36]">
      
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  1. NAVBAR                                                        */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FEFAF6]/90 backdrop-blur-xl border-b border-[#0D3E36]/5 shadow-[0_2px_30px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <div className="flex items-center gap-6">
            <Link href="/" className="group text-[10px] font-black text-slate-400 hover:text-[#0D3E36] transition-all flex items-center gap-1.5 uppercase tracking-wider">
              <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" /> Home
            </Link>
            <span className="text-slate-200">|</span>
            <span className="text-xl font-black text-[#0D3E36] tracking-tight flex items-center gap-2">
              <Image src="/logos/travel-logo.png" alt="PRANIL Tours" width={36} height={36} className="w-9 h-9 rounded-xl object-contain" />
              PRANIL <span className="text-[#FFAE12] font-serif italic font-semibold">Tours</span>
            </span>
          </div>
          
          <div className="hidden lg:flex items-center gap-9">
            {["Home", "Categories", "Destinations", "Offer", "Why Us", "Contact"].map((item) => (
              <a 
                key={item} 
                href={item === "Home" ? "#" : `#${item.toLowerCase().replace(/ /g, "-")}`} 
                className="text-[11px] font-extrabold text-[#64748B] uppercase tracking-widest hover:text-[#0D3E36] transition relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0D3E36] hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden sm:inline-block relative group overflow-hidden bg-[#85CD32] hover:bg-[#7AC143] text-white text-[11px] font-black uppercase tracking-widest px-6 py-3.5 rounded-full hover:shadow-[0_8px_25px_rgba(122,193,67,0.25)] transition-all">
              <span className="relative z-10">Inquire Now</span>
            </a>

            {/* Mobile hamburger menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-50 text-[#0D3E36] hover:bg-slate-100 transition cursor-pointer border border-[#0D3E36]/10"
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
            className="fixed top-20 left-0 right-0 bg-[#FEFAF6] border-b border-slate-100 shadow-xl z-40 lg:hidden p-6 space-y-4"
          >
            <div className="flex flex-col gap-4">
              {["Home", "Categories", "Destinations", "Offer", "Why Us", "Contact"].map((item) => (
                <a 
                  key={item} 
                  href={item === "Home" ? "#" : `#${item.toLowerCase().replace(/ /g, "-")}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-black text-[#64748B] uppercase tracking-widest hover:text-[#0D3E36] transition py-2 border-b border-slate-100/50"
                >
                  {item}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#85CD32] text-white text-center text-xs font-black uppercase tracking-widest py-3.5 rounded-full block mt-2"
              >
                Inquire Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  2. HERO SECTION — Full-bleed Cinematic Design                       */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[95vh] lg:min-h-screen pt-36 pb-32 overflow-hidden flex items-center bg-[#0d3e36]">
        {/* Full-bleed Cinematic Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-100 transition-transform duration-700"
            src="https://assets.mixkit.co/videos/preview/mixkit-drone-view-of-a-beautiful-tropical-beach-40742-large.mp4"
            poster="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
          />
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
          {/* Cinematic gradient overlays for maximum text legibility & section blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#FEFAF6] z-10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading, Subtitle & Actions */}
            <div className="lg:col-span-8 p-0 flex flex-col justify-center text-left space-y-8">
              
              {/* Glassmorphic Pill badge from Dribbble */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-xl w-fit"
              >
                <div className="flex -space-x-1.5">
                  <img className="w-5.5 h-5.5 rounded-full border border-white/20 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=50&q=80" alt="avatar" />
                  <img className="w-5.5 h-5.5 rounded-full border border-white/20 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=50&q=80" alt="avatar" />
                  <img className="w-5.5 h-5.5 rounded-full border border-white/20 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=50&q=80" alt="avatar" />
                </div>
                <span className="text-[10px] sm:text-xs font-semibold tracking-wide text-white/90">
                  Trusted by <span className="font-extrabold text-[#FFAE12]">10,000+</span> Members for Exclusive World Tours
                </span>
              </motion.div>

              <div className="space-y-4">
                <h1 className="text-[2.8rem] sm:text-[4.5rem] lg:text-[5.8rem] font-black leading-[1.05] tracking-tight text-white font-sans uppercase">
                  Unlock Exclusive <br />
                  <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FFAE12] via-[#FF8C32] to-[#FFAE12]">
                    Travel Journeys
                  </span>
                </h1>
              </div>

              <p className="text-white/85 text-xs sm:text-sm md:text-base leading-[1.8] font-medium max-w-2xl">
                {data.heroSubtitle || "Experience the world like an insider—at custom-tailored package rates only Pranil Tours can offer. We manage everything from flight ticketing and visa processing to handpicked luxury 5-star hotel stays."}
              </p>

              {/* Key Features row */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] sm:text-xs uppercase font-bold tracking-wider text-white/85">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#85CD32] shadow-[0_0_10px_#85CD32] animate-pulse" />
                  <span>Custom Itineraries</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#85CD32] shadow-[0_0_10px_#85CD32] animate-pulse" />
                  <span>Flight & Train booking</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#85CD32] shadow-[0_0_10px_#85CD32] animate-pulse" />
                  <span>24/7 Helpline Support</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a 
                  href="#destinations" 
                  className="inline-flex items-center justify-center bg-white hover:bg-slate-100 text-[#0D3E36] text-[10px] sm:text-xs font-black uppercase tracking-widest px-8 py-4.5 rounded-full transition-all hover:scale-[1.02] gap-2 shadow-[0_8px_30px_rgba(255,255,255,0.15)] group"
                >
                  <span>Discover Experiences</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/35 text-[10px] sm:text-xs font-black uppercase tracking-widest px-8 py-4.5 rounded-full transition-all hover:scale-[1.02] gap-2 backdrop-blur-md"
                >
                  <Compass className="h-4 w-4 text-[#FFAE12]" />
                  <span>Plan Custom Tour</span>
                </a>
              </div>
            </div>
          </div>

          {/* Dribbble Style Horizontal Floating Booking Search Widget */}
          <div className="relative z-30 max-w-5xl mx-auto mt-16 px-4">
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_15px_50px_rgba(0,0,0,0.06)] p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                
                {/* Field 1: Destination */}
                <div className="space-y-1.5 text-left">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block ml-1 flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-[#FFAE12]" /> Location
                  </label>
                  <input
                    type="text"
                    required
                    value={searchDest}
                    onChange={(e) => setSearchDest(e.target.value)}
                    placeholder="Where to go?"
                    className="w-full bg-[#FEFAF6] border border-slate-100 rounded-xl px-4 py-3.5 text-xs font-bold text-[#0D3E36] focus:outline-none focus:border-[#0D3E36] focus:bg-white transition"
                  />
                </div>

                {/* Field 2: Themes */}
                <div className="space-y-1.5 text-left relative">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block ml-1 flex items-center gap-1">
                    <Compass className="h-3 w-3 text-[#FFAE12]" /> Themes
                  </label>
                  <div className="relative">
                    <select
                      value={searchTheme}
                      onChange={(e) => setSearchTheme(e.target.value)}
                      className="w-full bg-[#FEFAF6] border border-slate-100 rounded-xl py-3.5 pl-4 pr-10 text-xs font-bold text-[#0D3E36] focus:outline-none focus:border-[#0D3E36] focus:bg-white transition appearance-none"
                    >
                      <option>Adventure Trip</option>
                      <option>Spiritual Tour</option>
                      <option>Beach Holiday</option>
                      <option>Honeymoon Package</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Field 3: Traveler */}
                <div className="space-y-1.5 text-left relative">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block ml-1 flex items-center gap-1">
                    <Users className="h-3 w-3 text-[#FFAE12]" /> Traveler
                  </label>
                  <div className="relative">
                    <select
                      value={searchGuests}
                      onChange={(e) => setSearchGuests(e.target.value)}
                      className="w-full bg-[#FEFAF6] border border-slate-100 rounded-xl py-3.5 pl-4 pr-10 text-xs font-bold text-[#0D3E36] focus:outline-none focus:border-[#0D3E36] focus:bg-white transition appearance-none"
                    >
                      <option>01 Person</option>
                      <option>02 Persons</option>
                      <option>03 Persons</option>
                      <option>Family (4+)</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Inquire now button */}
                <button
                  type="button"
                  onClick={handleSearchInquiry}
                  className="w-full bg-[#85CD32] hover:bg-[#7AC143] text-white text-xs font-black uppercase tracking-widest py-4 rounded-xl hover:shadow-[0_8px_20px_rgba(133,205,50,0.25)] transition-all flex items-center justify-center gap-2 group cursor-pointer h-[48px]"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Subtle bottom styling mask */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FEFAF6] to-transparent pointer-events-none z-10" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  3. EASY STEPS FOR BOOKINGS & OFFER BANNER                          */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D3E36] leading-tight">
              Easy Steps <span className="font-serif italic text-[#FFAE12] font-normal">For Bookings</span>
            </h2>
            <p className="text-slate-400 text-xs font-bold tracking-wider uppercase">
              Discover Your Next Adventure! Explore our most popular destinations.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-[2rem] border border-slate-100 p-8 text-left shadow-sm hover:shadow-lg transition-all duration-300 relative flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0D3E36] text-[#FFAE12] flex items-center justify-center font-black text-sm relative">
                    {s.id}
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-[#0D3E36] uppercase tracking-wider mb-2">{s.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{s.desc}</p>
                  </div>
                  <div className="absolute right-6 top-6 text-slate-200">
                    <Icon className="h-6 w-6" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Wide Yellow Promo Banner */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-r from-[#FFAE12] to-[#FF8C32] rounded-3xl p-6 sm:p-8 text-white text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg relative overflow-hidden"
          >
            <div className="absolute right-0 top-0 opacity-[0.05] pointer-events-none transform translate-x-12 -translate-y-12">
              <Compass className="h-64 w-64" />
            </div>
            <div className="flex items-center gap-6">
              <div className="text-4xl sm:text-5xl font-black tracking-tighter">48%<span className="text-xs font-bold uppercase block -mt-1 tracking-widest text-white/80">Off</span></div>
              <div className="h-12 w-[2px] bg-white/20 hidden sm:block" />
              <div>
                <span className="text-[9px] font-black tracking-widest uppercase text-white/75 bg-white/10 px-2 py-0.5 rounded-full">Get Special Offer</span>
                <h4 className="text-base sm:text-lg font-extrabold uppercase tracking-wide mt-1">Tours and Trip Packages, Globally</h4>
              </div>
            </div>
            <a href="#contact" className="bg-[#0D3E36] hover:bg-[#082823] text-white text-[10px] font-black uppercase tracking-widest px-8 py-3.5 rounded-full transition-all shrink-0">
              Discover More
            </a>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  4. SERVICES CATEGORIES — Dribbble style grid                      */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="categories" className="py-24 bg-[#FEFAF6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 max-w-lg mx-auto">
            <span className="text-[#FFAE12] text-[10px] font-black uppercase tracking-[0.3em] block mb-3">Categories</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D3E36] leading-tight">
              Services of Pranil <br /> Tours & Travels
            </h2>
            <div className="w-12 h-1 bg-[#FFAE12] mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="bg-white border border-[#0D3E36]/5 hover:border-[#0D3E36]/20 rounded-3xl p-8 text-left group shadow-sm hover:shadow-[0_15px_45px_rgba(13,62,54,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[220px]"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#FEFAF6] border border-[#0D3E36]/10 text-[#0D3E36] flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#0D3E36] group-hover:text-[#FFAE12] transition duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-black text-[#0D3E36] uppercase tracking-wider mb-2">{s.title}</h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">{s.desc}</p>
                  </div>
                  <div className="text-[10px] font-black text-[#FFAE12] mt-6 tracking-widest">{s.num}</div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  5. TRENDING DESTINATIONS SECTION                                  */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="destinations" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            
            {/* Left Box: Text, Features, Tab Pills */}
            <div className="lg:col-span-6 text-left space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D3E36] leading-tight">
                  Trending <span className="font-serif italic text-[#FFAE12] font-normal">Destination</span>
                </h2>
                <p className="text-xs text-slate-500 leading-relaxed font-medium mt-3 max-w-md">
                  These destinations are trending because they offer authentic experiences, natural beauty, and host visa-friendly access for global travelers.
                </p>
              </div>

              {/* 2x2 Features checklist */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Safety First Always", icon: ShieldCheck, num: "1" },
                  { title: "Exclusive Trip", icon: Star, num: "2" },
                  { title: "Professional Guide", icon: UserCheck, num: "3" },
                  { title: "World-Class Dining", icon: Sparkles, num: "4" }
                ].map((f) => (
                  <div key={f.num} className="bg-[#FEFAF6] rounded-2xl p-4 border border-slate-100 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0D3E36] text-[#FFAE12] flex items-center justify-center font-bold text-xs shrink-0">
                      {f.num}
                    </div>
                    <span className="text-xs font-black text-[#0D3E36] uppercase tracking-wider">{f.title}</span>
                  </div>
                ))}
              </div>

              {/* Tab Filters */}
              <div className="flex bg-[#FEFAF6] p-1.5 rounded-full shadow-inner border border-slate-150 shrink-0">
                <button 
                  onClick={() => setActiveTab("domestic")}
                  className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition ${activeTab === "domestic" ? "bg-[#0D3E36] text-[#FFAE12] shadow-md" : "text-slate-500 hover:text-[#0D3E36]"}`}
                >
                  Domestic Tours
                </button>
                <button 
                  onClick={() => setActiveTab("international")}
                  className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition ${activeTab === "international" ? "bg-[#0D3E36] text-[#FFAE12] shadow-md" : "text-slate-500 hover:text-[#0D3E36]"}`}
                >
                  International
                </button>
              </div>
            </div>

            {/* Right: Featured image with custom border/cutout styling */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-50">
                <img
                  src={activeTab === "domestic" 
                    ? "https://wallpaperbat.com/img/11550872-dal-lake-in-srinagar-jammu-and-kashmir.jpg"
                    : "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
                  }
                  alt="Featured Holiday Destination"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 text-white text-left">
                  <span className="bg-[#FFAE12] text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full text-[#0D3E36]">Trending</span>
                  <h3 className="text-xl font-bold uppercase tracking-wider mt-2">
                    {activeTab === "domestic" ? "Kashmir Valley Yatra" : "Dubai Royal Tour"}
                  </h3>
                </div>
              </div>
            </div>

          </div>

          {/* Destinations Grid Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {(activeTab === "domestic" ? domesticDestinations : internationalDestinations).map((dest, i) => (
                <motion.div
                  key={dest.name}
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  whileHover={{ y: -8 }}
                  onClick={() => handleBookTour(dest.name, dest.duration, dest.price)}
                  className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl group text-left cursor-pointer transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FEFAF6]">
                    <img 
                      src={dest.img} 
                      alt={dest.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black text-slate-800 flex items-center gap-1 shadow-sm">
                      <Star className="h-3 w-3 fill-current text-[#FFAE12]" /> {dest.rating}
                    </div>

                    <div className="absolute top-4 right-4 bg-[#0D3E36]/90 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] font-black text-[#FFAE12] uppercase tracking-wider shadow-sm">
                      {dest.tag}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-base font-black text-[#0D3E36] uppercase tracking-wide">{dest.name}</h3>
                        <div className="flex items-center gap-1.5 text-[9px] text-slate-500 font-bold uppercase mt-1">
                          <Clock className="h-3.5 w-3.5 text-[#FFAE12]" /> {dest.duration}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Starts From</div>
                        <div className="text-sm font-black text-[#FFAE12] mt-0.5">{dest.price}</div>
                      </div>
                    </div>

                    <div className="border-t border-slate-50 pt-4 flex items-center justify-between text-xs font-black uppercase text-[#0D3E36] tracking-widest group-hover:text-[#FFAE12] transition-colors">
                      <span>Book Tour Package</span>
                      <div className="w-8 h-8 rounded-full bg-[#FEFAF6] border border-slate-100 flex items-center justify-center group-hover:bg-[#0D3E36] group-hover:text-[#FFAE12] group-hover:border-transparent transition duration-300">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  6. HOLIDAY PACKAGES PRICE SECTION (Blue/Green overlay wave)        */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#EBF7F5] relative overflow-hidden">
        {/* Wave cutouts top/bottom */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 25%)' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
          <div className="text-center mb-16 max-w-lg mx-auto space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D3E36] leading-tight">
              Price For <span className="font-serif italic text-[#FFAE12] font-normal">Travel The World</span>
            </h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
              Destinations worth exploring! Here are a few popular spots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { type: "Basic Travel", price: "₹12,500", img: "https://wallpaperaccess.com/full/4815103.jpg", days: "3 Days", nights: "2 Nights", hotel: "Standard Hotel", meal: "Breakfast Included", visa: "Tourist Visa Support" },
              { type: "Standard Travel", price: "₹21,000", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80", days: "6 Days", nights: "5 Nights", hotel: "3-Star Hotel", meal: "All Meals Included", visa: "Tourist Visa Assistance" },
              { type: "Premium Travel", price: "₹45,999", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80", days: "5 Days", nights: "4 Nights", hotel: "Luxury 5-Star Resort", meal: "All Inclusive Dining", visa: "Express Visa Processing" }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[2.5rem] p-8 text-center shadow-md relative group flex flex-col justify-between pt-16 border border-slate-100"
              >
                {/* Floating circular thumbnail */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-50">
                  <img src={card.img} alt={card.type} className="w-full h-full object-cover" />
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">{card.type}</h3>
                    <div className="text-2xl font-black text-[#0D3E36] mt-1">{card.price}</div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Full Travel Package</span>
                  </div>

                  <ul className="space-y-3.5 text-left text-xs font-bold text-[#0D3E36]/80 bg-[#FEFAF6] p-5 rounded-2xl border border-slate-100">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#FFAE12]" /> {card.days}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#FFAE12]" /> {card.nights}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#FFAE12]" /> {card.hotel}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#FFAE12]" /> {card.meal}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#FFAE12]" /> {card.visa}
                    </li>
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => handleBookTour(card.type, `${card.days}, ${card.nights}`, card.price)}
                  className="w-full bg-[#85CD32] hover:bg-[#7AC143] text-white text-[10px] font-black uppercase tracking-widest py-3.5 rounded-full mt-6 shadow-md transition-all group-hover:shadow-lg block text-center cursor-pointer"
                >
                  Book Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#FEFAF6]" style={{ clipPath: 'polygon(0 75%, 100% 0, 100% 100%, 0 100%)' }} />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  7. WE RECOMMEND EVERY MONTH SECTION                                */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#FEFAF6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Collage Group */}
            <div className="lg:col-span-6 relative flex justify-center py-6">
              <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px]">
                {/* Main Circle Image */}
                <div className="w-[85%] h-[85%] rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10 bg-slate-50">
                  <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" alt="Beautiful Tour" className="w-full h-full object-cover" />
                </div>
                {/* Secondary overlapping circle thumbnail */}
                <div className="absolute bottom-0 right-0 w-[45%] h-[45%] rounded-full overflow-hidden border-4 border-white shadow-2xl z-20 bg-slate-50">
                  <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80" alt="Bali" className="w-full h-full object-cover" />
                </div>
                {/* Visual badge: 25 Years experience */}
                <div className="absolute top-0 right-0 bg-[#FFAE12] text-[#0D3E36] font-black rounded-3xl p-5 shadow-2xl z-20 max-w-[120px] text-center border-2 border-white">
                  <div className="text-3xl leading-none font-extrabold">25</div>
                  <div className="text-[8px] font-black uppercase tracking-wider mt-1">Years of Experience</div>
                </div>
              </div>
            </div>

            {/* Right details content */}
            <div className="lg:col-span-6 text-left space-y-6">
              <div>
                <span className="text-[#FFAE12] text-[10px] font-black uppercase tracking-[0.3em] block mb-3">WHAT WE EXCEL IN</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D3E36] leading-tight">
                  We Recommend <span className="font-serif italic text-[#FFAE12] font-normal">Beautiful</span> Destinations Every Month
                </h2>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold mt-4">
                  Every month, our expert travelers Handpick destinations based on climate, tourism conditions, local safety standards, and pricing coordinates.
                </p>
              </div>

              {/* Service cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {weProvide.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div key={idx} className="flex gap-4 items-start bg-white border border-slate-100 rounded-2xl p-5 hover:border-[#0D3E36]/20 transition-all shadow-sm">
                      <div className="w-10 h-10 rounded-xl bg-[#0D3E36]/10 text-[#0D3E36] flex items-center justify-center shrink-0">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-[#0D3E36] uppercase tracking-wider mb-1">{p.title}</h4>
                        <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <a href="#contact" className="bg-[#85CD32] hover:bg-[#7AC143] text-white text-[10px] font-black uppercase tracking-widest px-8 py-3.5 rounded-full inline-block shadow-md">
                  Discover More
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  8. WHY CHOOSE US DEEP TEAL CARD BANNER                              */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="why-us" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#0D3E36] rounded-[3rem] p-8 sm:p-12 lg:p-16 text-white text-left grid lg:grid-cols-12 gap-8 items-center relative overflow-hidden shadow-2xl">
            {/* Visual background grid pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }} />

            {/* Left side checklist */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-white">Why Choose Us!</h3>
              <p className="text-white/60 text-xs font-medium leading-relaxed max-w-md">
                We organize complete tour operations including air ticketing, train ticketing, tourist visa documentation, sightseeing, stays, transport coordination, and support.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Perfect Detailing", "Custom Itineraries", "Save Your Budget", "Completed Certification"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#FFAE12] flex items-center justify-center shrink-0">
                      <Check className="h-2.5 w-2.5 text-[#0D3E36] stroke-[3]" />
                    </div>
                    <span className="text-xs font-bold text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a href="#contact" className="bg-[#85CD32] hover:bg-[#7AC143] text-white text-[10px] font-black uppercase tracking-widest px-8 py-3.5 rounded-full inline-block">
                  Discover More
                </a>
              </div>
            </div>

            {/* Right side contact CTA call layout */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-[2rem] p-8 text-center space-y-4">
              <span className="text-[#FFAE12] text-[10px] font-black uppercase tracking-[0.2em] block">24 Hours Service</span>
              <h4 className="text-2xl font-black uppercase text-white tracking-widest">Call Us</h4>
              <div className="text-xl sm:text-2xl font-extrabold text-[#FFAE12] tracking-wider font-mono">
                +91 88499 48279
              </div>
              <p className="text-white/45 text-[10px] font-bold tracking-widest">praniltoursandtravel@gmail.com</p>
            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  9. CLIENT TESTIMONIALS — Our Client Says!                         */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#FEFAF6] relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 max-w-lg mx-auto">
            <span className="text-[#FFAE12] text-[10px] font-black uppercase tracking-[0.3em] block mb-3">TESTIMONIALS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D3E36] leading-tight">
              Our Client <span className="font-serif italic text-[#FFAE12] font-normal">Says!</span>
            </h2>
            <div className="w-12 h-1 bg-[#FFAE12] mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white border border-slate-100 rounded-[2rem] p-8 text-left shadow-sm flex flex-col justify-between min-h-[260px] group transition-all duration-300"
              >
                <div>
                  <div className="flex gap-0.5 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current text-[#FFAE12]" />)}
                  </div>
                  <p className="text-xs text-slate-500 italic leading-relaxed font-semibold">&ldquo;{t.quote}&rdquo;</p>
                </div>
                <div className="flex items-center gap-3 pt-6 border-t border-slate-50 mt-6">
                  <div className="w-9 h-9 rounded-full bg-[#0D3E36]/10 text-[#0D3E36] flex items-center justify-center font-black text-xs">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-xs font-black text-[#0D3E36] uppercase tracking-wider">{t.name}</div>
                    <div className="text-[9px] text-[#FFAE12] font-bold uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  10. CONTACT FORM SECTION — Reach & Get In Touch                    */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left side Traveler Image Block */}
            <div className="lg:col-span-5 rounded-[2.5rem] overflow-hidden relative min-h-[380px] shadow-2xl bg-slate-50">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                alt="Travel contact center"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D3E36]/80 via-[#0D3E36]/20 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white text-left space-y-2">
                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#FFAE12] block">Contact Center</span>
                <h3 className="text-2xl font-black uppercase leading-tight text-white">
                  Hi there! <br /> What can I do for you today?
                </h3>
              </div>
            </div>

            {/* Right side Form Card exactly like Dribbble Reach section */}
            <div className="lg:col-span-7 bg-[#FEFAF6] rounded-[2.5rem] p-8 sm:p-12 border border-slate-100 shadow-sm flex flex-col justify-center text-left">
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0D3E36]">
                  Reach & <span className="font-serif italic text-[#FFAE12] font-normal">Get in Touch With Us!</span>
                </h3>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-1">
                  We&apos;d love to hear from you. Our friendly travel desk team is always here to chat.
                </p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100 flex items-center justify-center mb-4">
                    <Check className="h-8 w-8 stroke-[3]" />
                  </div>
                  <h3 className="text-lg font-black text-[#0D3E36] uppercase tracking-wide">Inquiry Submitted!</h3>
                  <p className="text-xs text-slate-500 font-semibold mt-2 max-w-sm">
                    Our travel experts will contact you with a customized itinerary within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {sendError && (
                    <div className="p-4 rounded-xl bg-rose-50 text-rose-600 text-xs font-bold border border-rose-100">
                      Failed to send inquiry. Please try again or call support.
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input 
                        type="text" 
                        required 
                        value={formData.name} 
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                        placeholder="Enter Your Name"
                        className="w-full p-4 rounded-2xl bg-white border border-slate-100 text-xs font-bold text-[#0D3E36] focus:outline-none focus:border-[#0D3E36] transition shadow-sm"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        required 
                        value={formData.email} 
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                        placeholder="Enter Email Address"
                        className="w-full p-4 rounded-2xl bg-white border border-slate-100 text-xs font-bold text-[#0D3E36] focus:outline-none focus:border-[#0D3E36] transition shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input 
                        type="tel" 
                        required 
                        value={formData.phone} 
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                        placeholder="Phone Number"
                        className="w-full p-4 rounded-2xl bg-white border border-slate-100 text-xs font-bold text-[#0D3E36] focus:outline-none focus:border-[#0D3E36] transition shadow-sm"
                      />
                    </div>
                    <div>
                      <input 
                        type="text" 
                        required 
                        value={formData.destination} 
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })} 
                        placeholder="Add Your Subject / Destination"
                        className="w-full p-4 rounded-2xl bg-white border border-slate-100 text-xs font-bold text-[#0D3E36] focus:outline-none focus:border-[#0D3E36] transition shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea 
                      rows={4} 
                      required 
                      value={formData.message} 
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                      placeholder="Message"
                      className="w-full p-4 rounded-2xl bg-white border border-slate-100 text-xs font-bold text-[#0D3E36] focus:outline-none focus:border-[#0D3E36] transition resize-none shadow-sm"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={sending}
                    className="bg-[#85CD32] hover:bg-[#7AC143] text-white text-[10px] font-black uppercase tracking-widest px-8 py-4 rounded-full transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer disabled:bg-slate-300 disabled:cursor-not-allowed shadow-md"
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  11. FAQ ACCORDION PORTAL (Fixed Undefined mapping)                */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#FEFAF6] relative border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-16 max-w-lg mx-auto">
            <span className="text-[#FFAE12] text-[10px] font-black uppercase tracking-[0.3em] block mb-3">FAQ PORTAL</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D3E36] leading-tight">Frequently Asked Queries</h2>
            <div className="w-12 h-1 bg-[#FFAE12] mx-auto rounded-full mt-4" />
          </div>

          <div className="space-y-4">
            {travelFaq.map((f, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-[#0D3E36]/20 transition shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-black text-[#0D3E36] uppercase tracking-wide leading-snug">{f.question}</span>
                    <span className="w-6 h-6 rounded-full bg-[#FEFAF6] border border-slate-100 text-[#0D3E36] flex items-center justify-center shrink-0 shadow-sm ml-4">
                      {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-slate-50 text-xs text-slate-500 leading-relaxed font-semibold text-left">
                          {f.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  12. NEWSLETTER SUBSCRIBE WAVE CARD                                 */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-[#FEFAF6] relative z-10 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-[#FF8C32] rounded-[2.5rem] p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl"
          >
            {/* Background design elements */}
            <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-white/5" />
            <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-white/5" />

            <div className="max-w-lg mx-auto space-y-6">
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wider">Subscribe Now!</h3>
              <p className="text-xs text-white/80 font-medium">
                Sign up for our weekly newsletter to discover secret destinations and exclusive discount coordinates.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto bg-white/10 p-1.5 rounded-2xl border border-white/20">
                <input 
                  type="email" 
                  placeholder="Enter email address..." 
                  className="bg-transparent text-xs text-white placeholder-white/60 font-bold uppercase tracking-wider px-4 py-3.5 focus:outline-none w-full text-center sm:text-left"
                />
                <button className="bg-[#0D3E36] hover:bg-[#082823] text-white text-[10px] font-black uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/*  13. FOOTER                                                        */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <footer className="bg-[#0D3E36] text-white relative z-10 border-t border-white/5">
        
        {/* Instagram Collage above footer links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 text-center space-y-6">
          <div className="text-xs font-black uppercase tracking-[0.3em] text-[#FFAE12]">Follow Instagram</div>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 max-w-3xl mx-auto">
            {[
              "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=150&q=80",
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=150&q=80",
              "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=150&q=80",
              "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=150&q=80",
              "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=150&q=80",
              "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=150&q=80",
              "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=150&q=80",
              "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=150&q=80"
            ].map((url, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:opacity-80 transition cursor-pointer">
                <img src={url} alt="Instagram thumb" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-left border-t border-white/5">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
            
            {/* Brand column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFAE12] flex items-center justify-center text-[#0D3E36] shadow-md">
                  <Plane className="h-5 w-5" />
                </div>
                <div className="leading-none">
                  <div className="text-lg font-black text-white tracking-tight uppercase">PRANIL</div>
                  <div className="text-[8px] font-bold text-[#FFAE12] uppercase tracking-[0.18em] -mt-0.5 font-serif italic">Tours & Travel</div>
                </div>
              </div>
              <p className="text-xs text-white/50 font-medium leading-relaxed max-w-xs">
                Your trusted travel partner for domestic & international vacations. Creating unforgettable travel memories.
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, href: "https://www.facebook.com/share/1L9KZqZKbS/" },
                  { Icon: Instagram, href: "https://www.instagram.com/pranil_tours_and_travels?igsh=cXU4N2k4OG1pdnQw" },
                ].map((item, i) => (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition">
                    <item.Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-widest mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["Home", "Categories", "Destinations", "Offer", "Why Us", "Contact"].map((l) => (
                  <li key={l}>
                    <a href={l === "Home" ? "#" : `#${l.toLowerCase().replace(/ /g, "-")}`} className="text-[11px] text-white/50 hover:text-white transition font-medium">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations */}
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-widest mb-6">Destinations</h4>
              <ul className="space-y-3">
                {["Kashmir", "Goa", "Dubai", "Singapore", "Bali", "Kerala"].map((d) => (
                  <li key={d} className="text-[11px] text-white/50 hover:text-white transition font-medium">
                    {d} Package
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Coordinates */}
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-widest mb-6">Coordinates</h4>
              <ul className="space-y-4 font-bold text-xs text-white/60">
                <li className="flex items-start gap-2.5">
                  <Phone className="h-3.5 w-3.5 text-[#FFAE12] shrink-0 mt-0.5" />
                  <span className="text-[11px] font-mono tracking-wider">+91 88499 48279</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="h-3.5 w-3.5 text-[#FFAE12] shrink-0 mt-0.5" />
                  <span className="text-[11px]">{data.email || "praniltoursandtravel@gmail.com"}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="h-3.5 w-3.5 text-[#FFAE12] shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-relaxed">
                    525, SV Square, New Ranip,<br />Ahmedabad, Gujarat - 382470
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-6 text-left bg-[#082823]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-white/40 font-bold uppercase tracking-wider">
            <span>&copy; {new Date().getFullYear()} PRANIL Tours & Travel. All Rights Reserved.</span>
            <span>A Pranil Group Company</span>
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
          href="https://wa.me/918849948279"
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
