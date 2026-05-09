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
  UserRoundCheck
} from "lucide-react";

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Destinations", href: "#destinations" },
  { label: "Recruitment", href: "#recruitment" },
  { label: "Travel", href: "#travel" },
  { label: "Contact", href: "#contact" }
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
    title: "Canada PR",
    description: "Profile assessment and settlement-first guidance for Canada PR pathways.",
    icon: Landmark,
    stat: "Future-first"
  },
  {
    title: "Europe WP",
    description: "Work permit guidance for Europe with document planning and profile readiness support.",
    icon: FileCheck2,
    stat: "Work abroad"
  },
  {
    title: "Spouse Visa",
    description: "Spouse visa documentation support with clear file preparation and step-by-step assistance.",
    icon: ShieldCheck,
    stat: "Family route"
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
    description: "Focused coaching programs designed around confidence, practice rhythm, and test-day performance.",
    icon: ScrollText,
    stat: "Score clarity"
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
    title: "Bus Booking",
    icon: Ticket,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Hotel Booking",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Domestic Tour",
    icon: Map,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "International Tour",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Tourist Visa",
    icon: FileCheck2,
    image: "https://images.unsplash.com/photo-1548957175-84f0f9af659e?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Insurance",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
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

export const coachingServices = ["IELTS", "PTE", "Duolingo", "Spoken English", "French Language", "Computer Class"];

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
    phone: "+91 73839 97679",
    website: "www.pranileducation.in"
  },
  {
    label: "PRANIL Recruitment Services",
    short: "PRS",
    phone: "+91 73832 99556",
    email: "hr@pranilrecruitment.com"
  },
  {
    label: "PRANIL Tours & Travels",
    short: "PTT",
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
