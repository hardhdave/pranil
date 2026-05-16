import {
  BriefcaseBusiness,
  Building2,
  FileCheck2,
  GraduationCap,
  Landmark,
  Map,
  Plane,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Ticket,
  UserRoundCheck,
  Lightbulb,
  Heart,
  Handshake,
  Target,
  Eye,
  Award
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Our Companies", href: "#companies" },
  { label: "Our Vision", href: "#vision" },
  { label: "News & Events", href: "#news" },
  { label: "Contact Us", href: "#contact" }
];

/* ── Hero content ── */
export const heroContent = {
  line1: "Building Trust.",
  line2: "Creating Value.",
  line3: "Delivering Excellence.",
  description:
    "Pranil Group of Companies is a diversified organization driven by integrity, innovation and a commitment to building a better tomorrow.",
  image:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=90"
};

/* ── Hero slides (keep for backward compat) ── */
export const heroSlides = [
  {
    title: "Study Abroad",
    subtitle: "One Destination for Your Study Abroad Dreams",
    cta: "KNOW MORE",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=90"
  },
  {
    title: "Student Visa",
    subtitle: "Get Your Visa Approved – Fast & Reliable Visa Assistance",
    cta: "KNOW MORE",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=90"
  },
  {
    title: "IELTS / PTE Coaching",
    subtitle: "Ace Your Language Test with Our Coaching – Guaranteed Results!",
    cta: "KNOW MORE",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=90"
  },
  {
    title: "Career Counselling",
    subtitle: "Find Your Dream Career with Expert Guidance – Get Started Today!",
    cta: "KNOW MORE",
    image: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1400&q=90"
  }
];

/* ── Our Companies ── */
export const companies = [
  {
    name: "Visa",
    slug: "education",
    fullName: "PRANIL Education Services LLP",
    tagline: "Success is Our New Horizon",
    logoUrl: "/logos/main-logo.jpg",
    color: "#0a4d8c"
  },
  {
    name: "Recruitment",
    slug: "recruitment",
    fullName: "PRANIL Recruitment Services",
    tagline: "Connecting Talent with Opportunity",
    logoUrl: "/logos/recruitment-logo.png",
    color: "#1a6e3a"
  },
  {
    name: "Tours & Travel",
    slug: "travel",
    fullName: "PRANIL Tours & Travel",
    tagline: "Your Journey, Our Passion",
    logoUrl: "/logos/travel-logo.png",
    color: "#0052CC"
  },
  {
    name: "IT Services",
    slug: "it-services",
    fullName: "PRANIL IT Solutions",
    tagline: "Digital Innovation for Growth",
    logoUrl: null,
    color: "#6B21A8"
  }
];

/* ── Our Values ── */
export const values = [
  {
    title: "INTEGRITY",
    description: "We do what is right, always.",
    icon: ShieldCheck
  },
  {
    title: "COMMITMENT",
    description: "We are committed to excellence in everything we do.",
    icon: Target
  },
  {
    title: "INNOVATION",
    description: "We embrace new ideas to create lasting value.",
    icon: Lightbulb
  },
  {
    title: "TRUST",
    description: "We build lasting relationships based on trust and respect.",
    icon: Handshake
  }
];

/* ── Stats counters ── */
export const statsCounters = [
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 4, suffix: "", label: "Group Companies" },
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 100, suffix: "+", label: "Projects Completed" }
];

/* ── News & Events ── */
export const newsEvents = [
  {
    date: "17 May 2024",
    title: "PRANIL Group Expands Education Services",
    excerpt:
      "Pranil Education Services launches new partnerships with leading universities across Canada and Australia for 2025 intake.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
  },
  {
    date: "15 Apr 2024",
    title: "Recruitment Drive Success Story",
    excerpt:
      "Over 200 candidates placed in multinational companies through our free recruitment services program this quarter.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80"
  },
  {
    date: "29 Mar 2024",
    title: "Travel Division Launches Premium Packages",
    excerpt:
      "Pranil Tours & Travel introduces exclusive international tour packages with personalized itineraries and dedicated support.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80"
  }
];

/* ── About / Why Choose section bullet points ── */
export const whyChoosePoints = [
  { bold: "Student Visas:", text: "Pursue your education abroad seamlessly." },
  { bold: "Immigration Visas (Canada PR):", text: "Turn your dream into reality with expert guidance." },
  { bold: "Europe Work Permits:", text: "Work in Europe without a Job Offer Letter." },
  { bold: "IELTS/PTE Coaching:", text: "Achieve your desired score with our expert coaching." },
  { bold: "Recruitment Services:", text: "Free job placement support for eligible profiles." },
  { bold: "Tours & Travels:", text: "Flights, hotels, insurance, and curated tour packages." },
  { bold: "Post-Visa Services:", text: "Ensure a smooth transition to your new life abroad." }
];

/* ── FAQ data ── */
export const faqItems = [
  {
    question: "What services does PRANIL Group provide?",
    answer: "PRANIL Group of Companies provides comprehensive services including study abroad consulting, student visa processing, Canada PR assistance, Europe work permits, IELTS/PTE coaching, recruitment services, and tours & travels. We are your one-stop solution for going global."
  },
  {
    question: "How can PRANIL help me in my educational journey abroad?",
    answer: "We offer end-to-end support including university shortlisting, admission strategy, SOP guidance, documentation, visa file preparation, interview readiness, and post-visa support to ensure a seamless study abroad experience."
  },
  {
    question: "What types of visas and permits can PRANIL help me with?",
    answer: "We assist with student visas, Canada PR, Europe work permits, Canada LMIA, spouse visas, visitor visas, tourist visas, and non-immigration visas for any country and any visa type."
  },
  {
    question: "Does PRANIL charge any fees for job placement?",
    answer: "No, PRANIL Recruitment Services provides free job placement support. We connect candidates with opportunities that match their skills and career goals without any placement charges."
  },
  {
    question: "What are the benefits of choosing PRANIL Group for my needs?",
    answer: "With experienced professionals across education, recruitment, and travel, we offer personalized guidance, transparent processes, high success rates, and comprehensive post-service support. Our integrated approach means all your global needs are handled under one roof."
  }
];

export const services = [
  {
    title: "Study Abroad",
    description: "University shortlisting, admissions strategy, SOP guidance, and end-to-end overseas education support.",
    icon: GraduationCap,
    stat: "5+ countries"
  },
  {
    title: "Student Visa",
    description: "Documentation, visa file preparation, interview readiness, and transparent application tracking.",
    icon: FileCheck2,
    stat: "File-ready"
  },
  {
    title: "Permanent Residency",
    description: "PR assistance for Canada, Australia, New Zealand, UK, Germany, Portugal, Malta, and UAE.",
    icon: Landmark,
    stat: "8 countries"
  },
  {
    title: "Work Permit",
    description: "Work permit processing for Europe, UK, Canada, Australia, New Zealand, Dubai, and Singapore.",
    icon: FileCheck2,
    stat: "7 countries"
  },
  {
    title: "Spouse Visa",
    description: "Spouse visa for Canada, Australia, NZ, UK, USA, Germany, France, Italy, Portugal, and UAE.",
    icon: ShieldCheck,
    stat: "10 countries"
  },
  {
    title: "Visitor Visa",
    description: "Visitor visa assistance for travel, family visits, and short-term international plans.",
    icon: Plane,
    stat: "Travel ready"
  },
  {
    title: "Recruitment Services",
    description: "Corporate training, resume positioning, interview preparation, and employer-aligned placement support.",
    icon: BriefcaseBusiness,
    stat: "Career engine"
  },
  {
    title: "IELTS / PTE Coaching",
    description: "Expert coaching for IELTS, PTE, Spoken English, and Duolingo with interactive sessions and individual attention.",
    icon: ScrollText,
    stat: "4 programs"
  },
  {
    title: "Tours & Travels",
    description: "Flights, hotels, transport, insurance, and curated tour packages for seamless travel experiences.",
    icon: Plane,
    stat: "One desk"
  },
  {
    title: "Tourist Visa",
    description: "Tourist and visitor visa assistance with meticulous paperwork and practical itinerary support.",
    icon: Map,
    stat: "Smooth trips"
  },
  {
    title: "Job Placement",
    description: "Candidate grooming, opportunity mapping, and free job placement pathways for eligible profiles.",
    icon: UserRoundCheck,
    stat: "Placement-led"
  }
];

export const destinations = [
  {
    country: "Canada",
    line: "PR-friendly pathways, world-class education, and strong post-study opportunities.",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1200&q=80",
    badge: "Education + PR"
  },
  {
    country: "Australia",
    line: "Globally ranked universities, vibrant cities, and career-oriented migration routes.",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
    badge: "Campus life"
  },
  {
    country: "USA",
    line: "High-impact programs, research ecosystems, and ambitious global career access.",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1200&q=80",
    badge: "Innovation"
  },
  {
    country: "UK",
    line: "Prestigious universities, compact degrees, and heritage-rich student experiences.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    badge: "Legacy"
  },
  {
    country: "Europe",
    line: "Affordable study routes, multicultural campuses, and connected continental travel.",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
    badge: "Schengen access"
  }
];

export const processSteps = [
  "Consultation",
  "Documentation",
  "Application",
  "Visa Process",
  "Approval",
  "Departure"
];

export const recruitmentPoints = [
  {
    label: "Corporate Training",
    icon: Building2,
    description:
      "Enhance your professional skills with customized corporate training sessions focused on leadership, communication, and technical abilities."
  },
  {
    label: "Resume Building",
    icon: ScrollText,
    description:
      "Professionally crafted resumes that highlight strengths, achievements, and employer-ready presentation."
  },
  {
    label: "Interview Preparation",
    icon: Sparkles,
    description:
      "One-on-one interview coaching covering common questions, communication techniques, and presentation skills."
  },
  {
    label: "Job Without Any Charges",
    icon: ShieldCheck,
    description:
      "Free job placement support connecting candidates with opportunities that match their skills and career goals."
  }
];

export const travelServices = [
  {
    title: "Air Ticketing",
    icon: Ticket,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Train Booking",
    icon: Ticket,
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Tourist Visa",
    icon: FileCheck2,
    image: "https://images.unsplash.com/photo-1548957175-84f0f9af659e?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Domestic Tour",
    icon: Map,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Hotel Booking",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Bus Booking",
    icon: Ticket,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Insurance",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "International Tour",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80"
  }
];

export const testimonials = [
  {
    quote:
      "I'm thrilled with Pranil Education Services! Their expert guidance and support helped me secure Canadian PR. Their team was professional, thorough, and kept me updated throughout the process.",
    name: "Bindya Mankadya",
    role: "PRANIL Education Services"
  },
  {
    quote:
      "I want to express my heartfelt gratitude to Pranil Education Services for their invaluable assistance in obtaining my Canadian work permit.",
    name: "Hars Patel",
    role: "PRANIL Education Services"
  },
  {
    quote:
      "Pranil Education Services guided me through the visa process step-by-step, ensuring accurate documentation and timely submissions.",
    name: "Dhruv Parekh",
    role: "PRANIL Education Services"
  },
  {
    quote:
      "It was a great experience with PRS HR Consultancy. They are very professional, provided the required support, and kept me updated in every step.",
    name: "Kaushal Patel",
    role: "PRANIL Recruitment Services"
  },
  {
    quote:
      "Thank you so much for your support and efforts for my selection. Pranil Recruitment Services gave me the best opportunity.",
    name: "Aarti Pandit",
    role: "PRANIL Recruitment Services"
  },
  {
    quote:
      "From day one, I have been impressed by the supportive environment and opportunities provided to grow professionally.",
    name: "Nisha Kabira",
    role: "PRANIL Recruitment Services"
  },
  {
    quote:
      "An incredible Dubai trip with breathtaking architecture, luxurious experiences, and exceptional hospitality.",
    name: "Jay Nayak",
    role: "PRANIL Tours & Travels"
  },
  {
    quote:
      "Pranil Tour and Travels made my Manali trip unforgettable with excellent service, stunning itinerary, and seamless experience.",
    name: "Kashyap Patel",
    role: "PRANIL Tours & Travels"
  },
  {
    quote:
      "Pranil Tours and Travels made our Himachal Pradesh trip unforgettable with impeccable service and local expertise.",
    name: "Manish Patel",
    role: "PRANIL Tours & Travels"
  }
];

export const coachingServices = ["IELTS", "PTE", "Spoken English", "Duolingo"];

export const visaProcessServices = [
  "Student Visa",
  "Canada PR",
  "Europe WP",
  "Canada LMIA",
  "Spouse Visa",
  "Visitor Visa"
];

export const companyContacts = [
  {
    label: "PRANIL Education Services",
    short: "PES",
    logoUrl: "/logos/main-logo.jpg",
    phone: "+91 73839 97679",
    website: "www.pranileducation.in"
  },
  {
    label: "PRANIL Recruitment Services",
    short: "PRS",
    logoUrl: "/logos/recruitment-logo.png",
    phone: "+91 73832 99556",
    email: "hr@pranilrecruitment.com"
  },
  {
    label: "PRANIL Tours & Travels",
    short: "PTT",
    logoUrl: "/logos/travel-logo.png",
    phone: "+91 73833 69769",
    email: "Tours, tickets, visas and packages"
  }
];

export const companyAddress = "525, SV SQUARE, Opp. Nishan Pride, New Ranip, Ahmedabad, Gujarat - 382470";

export const travelReasons = [
  "Personalized Tours",
  "Expert Guides",
  "Affordable Packages",
  "Hassle-Free Booking",
  "Tailored Itineraries"
];
