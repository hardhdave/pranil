export interface CompanyPageData {
  slug: string;
  name: string;
  fullName: string;
  tagline: string;
  logoUrl: string | null;
  color: string;
  accentColor: string;
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  about: { title: string; paragraphs: string[]; image: string };
  services: { title: string; description: string; icon: string }[];
  process: { step: string; description: string }[];
  stats: { value: number; suffix: string; label: string }[];
  whyChoose: { title: string; points: string[] };
  gallery: { image: string; caption: string }[];
  testimonials: { quote: string; name: string; role: string }[];
  ctaTitle: string;
  ctaDescription: string;
  phone: string;
  email: string;
}

export const companyPages: Record<string, CompanyPageData> = {
  education: {
    slug: "education",
    name: "Education & Visa",
    fullName: "PRANIL Education Services LLP",
    tagline: "Success is Our New Horizon",
    logoUrl: "/logos/main-logo.jpg",
    color: "#0a4d8c",
    accentColor: "#1e7bb8",
    heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=90",
    heroTitle: "Your Gateway to Global Education",
    heroSubtitle: "Expert visa consulting, university admissions & career counselling across 15+ countries. We turn your study abroad dreams into reality.",
    about: {
      title: "About PRANIL Education Services",
      paragraphs: [
        "PRANIL Education Services LLP is Gujarat's leading international education and visa consulting company, established with a vision to simplify the study abroad journey for students across India.",
        "With over 12 years of experience and partnerships with 200+ universities worldwide, we provide end-to-end support from university shortlisting and admissions to visa processing and post-arrival assistance.",
        "Our team of certified education counsellors has helped thousands of students achieve their dreams of studying in Canada, Australia, UK, USA, Europe, and beyond."
      ],
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
    },
    services: [
      { title: "Work Permit", description: "Work permit processing for Europe, UK, Canada, Australia, New Zealand, Dubai, and Singapore with complete documentation support.", icon: "Globe" },
      { title: "Permanent Residency (PR)", description: "PR assistance for Canada, Australia, New Zealand, UK, Germany, Portugal, Malta, and UAE with profile assessment and settlement planning.", icon: "Landmark" },
      { title: "Spouse Visa", description: "Spouse visa processing for Canada, Australia, New Zealand, UK, USA, Germany, France, Italy, Portugal, and UAE.", icon: "ShieldCheck" },
      { title: "Student Visa Processing", description: "Complete documentation, visa file preparation, interview readiness, mock interviews, and transparent application tracking.", icon: "FileCheck2" },
      { title: "IELTS / PTE Coaching", description: "Expert coaching for IELTS, PTE, Spoken English, and Duolingo with interactive sessions and personalized attention.", icon: "ScrollText" },
      { title: "Study Abroad Consulting", description: "University shortlisting, admissions strategy, SOP guidance, and end-to-end overseas education support.", icon: "GraduationCap" },
      { title: "Career Counselling", description: "Expert career guidance to help you choose the right course, university, and country based on your profile.", icon: "BookOpen" },
      { title: "Post-Visa Support", description: "Complete assistance from training to post-visa support including accommodation, airport pickup, and settlement.", icon: "Plane" }
    ],
    process: [
      { step: "Free Consultation", description: "Meet our expert counsellors to discuss your goals, budget, and preferences." },
      { step: "Profile Assessment", description: "We evaluate your academic background, test scores, and career aspirations." },
      { step: "University Shortlisting", description: "Curated list of universities matching your profile across multiple countries." },
      { step: "Application & SOP", description: "Professionally crafted SOPs, LORs, and complete application submission." },
      { step: "Visa File Preparation", description: "Comprehensive documentation, financial proofs, and mock interview coaching." },
      { step: "Approval & Departure", description: "Visa approval, pre-departure orientation, and smooth transition to your new life." }
    ],
    stats: [
      { value: 5000, suffix: "+", label: "Students Counselled" },
      { value: 200, suffix: "+", label: "University Partners" },
      { value: 98, suffix: "%", label: "Visa Success Rate" },
      { value: 15, suffix: "+", label: "Countries Covered" }
    ],
    whyChoose: {
      title: "Why Choose PRANIL Education?",
      points: [
        "Interactive classroom sessions with focus on Listening, Reading, Writing & Speaking",
        "Personalized doubt-clearing sessions with individual attention",
        "Corporate Training & Personality Development programs",
        "Special weekend activities for real-time communication practice",
        "Supportive and engaging learning environment",
        "Complete assistance from training to post-visa support",
        "Dedicated activities for student encouragement",
        "Specialized coaching for IELTS, PTE, Spoken English & Duolingo"
      ]
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800&q=80", caption: "Canada" },
      { image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80", caption: "Australia" },
      { image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800&q=80", caption: "USA" },
      { image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80", caption: "United Kingdom" },
      { image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80", caption: "Europe" },
      { image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=800&q=80", caption: "Germany" }
    ],
    testimonials: [
      { quote: "Their expert guidance helped me secure Canadian PR. Professional, thorough, and always updated.", name: "Bindya Mankadya", role: "Canada PR" },
      { quote: "Heartfelt gratitude for their invaluable assistance in obtaining my Canadian work permit.", name: "Hars Patel", role: "Canada Work Permit" },
      { quote: "Guided me through the visa process step-by-step, ensuring accurate documentation.", name: "Dhruv Parekh", role: "Student Visa - UK" }
    ],
    ctaTitle: "Start Your Study Abroad Journey Today",
    ctaDescription: "Book a FREE counselling session with our expert education consultants.",
    phone: "+91 73839 97679",
    email: "info@pranileducation.in"
  },

  recruitment: {
    slug: "recruitment",
    name: "Recruitment",
    fullName: "PRANIL Recruitment Services",
    tagline: "Connecting Talent with Opportunity",
    logoUrl: "/logos/recruitment-logo.png",
    color: "#1a6e3a",
    accentColor: "#22c55e",
    heroImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=90",
    heroTitle: "Connecting Talent with Opportunity",
    heroSubtitle: "Free job placement support, corporate training, and career development services. We bridge the gap between skilled professionals and leading companies.",
    about: {
      title: "About PRANIL Recruitment Services",
      paragraphs: [
        "PRANIL Recruitment Services (PRS) is a leading HR consultancy dedicated to connecting talented professionals with the right career opportunities - completely free of charge.",
        "We partner with multinational companies, startups, and established businesses across India and abroad to source, screen, and place the best talent.",
        "With a track record of 200+ successful placements per quarter, we specialize in IT, manufacturing, healthcare, hospitality, finance, and engineering."
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
    },
    services: [
      { title: "Free Job Placement", description: "100% free placement support for candidates. We connect you with verified employers matching your skills.", icon: "UserRoundCheck" },
      { title: "Corporate Training", description: "Customized training programs covering leadership, communication, technical skills, and team development.", icon: "Building2" },
      { title: "Resume Building", description: "Professionally crafted resumes highlighting your strengths and presenting you in an employer-ready format.", icon: "ScrollText" },
      { title: "Interview Preparation", description: "One-on-one interview coaching covering common questions, communication techniques, and confidence building.", icon: "Sparkles" },
      { title: "Campus Recruitment", description: "End-to-end campus hiring solutions for colleges and universities with pre-screening and placement drives.", icon: "GraduationCap" },
      { title: "Executive Search", description: "Specialized headhunting for senior and C-level positions with confidential, targeted candidate sourcing.", icon: "Search" },
      { title: "HR Consulting", description: "Complete HR solutions including policy development, compliance, payroll structuring, and workforce planning.", icon: "BriefcaseBusiness" },
      { title: "Skill Assessment", description: "Comprehensive skill testing and assessment tools to identify candidate strengths and areas for improvement.", icon: "BarChart3" }
    ],
    process: [
      { step: "Register With Us", description: "Submit your profile and resume - completely free, no hidden charges." },
      { step: "Profile Analysis", description: "Our experts review your skills, experience, and career preferences." },
      { step: "Resume Enhancement", description: "We refine your resume to meet industry standards and employer expectations." },
      { step: "Job Matching", description: "AI-powered and manual matching with verified job opportunities from top companies." },
      { step: "Interview Coaching", description: "Personalized preparation sessions to boost your confidence and performance." },
      { step: "Placement & Follow-up", description: "Successful placement with post-joining support and career growth guidance." }
    ],
    stats: [
      { value: 800, suffix: "+", label: "Successful Placements" },
      { value: 150, suffix: "+", label: "Partner Companies" },
      { value: 0, suffix: "Rs", label: "Candidate Charges" },
      { value: 95, suffix: "%", label: "Satisfaction Rate" }
    ],
    whyChoose: {
      title: "Why Choose PRANIL Recruitment?",
      points: [
        "100% free placement - zero charges for candidates",
        "Partnerships with 150+ verified companies and MNCs",
        "800+ successful placements and counting",
        "Expert resume building and interview coaching",
        "Industry-specific recruiters with deep market knowledge",
        "Confidential and transparent process",
        "Post-placement support and career guidance",
        "Campus recruitment and bulk hiring solutions"
      ]
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80", caption: "Corporate Training" },
      { image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80", caption: "Interview Prep" },
      { image: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=800&q=80", caption: "Career Fair" },
      { image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80", caption: "Team Meeting" },
      { image: "https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?auto=format&fit=crop&w=800&q=80", caption: "Workspace" },
      { image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80", caption: "Success" }
    ],
    testimonials: [
      { quote: "Great experience with PRS HR Consultancy. Very professional, provided support, and kept me updated.", name: "Kaushal Patel", role: "IT Professional" },
      { quote: "Thank you for your support and efforts for my selection. Pranil gave me the best opportunity.", name: "Aarti Pandit", role: "Marketing Executive" },
      { quote: "From day one, I was impressed by the supportive environment and opportunities to grow.", name: "Nisha Kabira", role: "HR Associate" }
    ],
    ctaTitle: "Find Your Dream Job - For Free",
    ctaDescription: "Register with PRANIL Recruitment Services today. Zero fees, expert guidance, and verified opportunities.",
    phone: "+91 73832 99556",
    email: "hr@pranilrecruitment.com"
  },

  travel: {
    slug: "travel",
    name: "Tours & Travel",
    fullName: "PRANIL Tours & Travel",
    tagline: "Your Journey, Our Passion",
    logoUrl: "/logos/travel-logo.png",
    color: "#0052CC",
    accentColor: "#5ba4e6",
    heroImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=90",
    heroTitle: "Your Journey, Our Passion",
    heroSubtitle: "Domestic & international tour packages, flight bookings, hotel reservations, and travel insurance - all under one roof.",
    about: {
      title: "About PRANIL Tours & Travel",
      paragraphs: [
        "PRANIL Tours & Travel is your complete travel partner, offering everything from flight and hotel bookings to fully curated domestic and international tour packages.",
        "We believe travel should be an experience, not a hassle. Our team designs personalized itineraries that match your preferences, budget, and travel style.",
        "From the serene hills of Himachal to the bustling streets of Dubai, we handle every detail so you can focus on making memories."
      ],
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
    },
    services: [
      { title: "Air Ticketing", description: "Best deals on domestic and international flights with 24/7 booking support and instant confirmations.", icon: "Plane" },
      { title: "Train Booking", description: "Hassle-free train ticket reservations across India with tatkal and premium booking assistance.", icon: "Ticket" },
      { title: "Tourist Visa", description: "Complete tourist visa support for all countries with documentation guidance and application tracking.", icon: "FileCheck2" },
      { title: "Domestic Tour", description: "Explore Kashmir, Manali, Goa, Kerala, Rajasthan, Andaman, Ayodhya, Char-Dhaam, Spiti Valley, Dalhousie, Shimla, Kasol, Meghalaya, Sikkim & North East.", icon: "Map" },
      { title: "Hotel Booking", description: "Handpicked hotels from budget to luxury with verified reviews and exclusive deals for every destination.", icon: "Building2" },
      { title: "Bus Booking", description: "Easy bus ticket reservations across India for comfortable and affordable travel.", icon: "Ticket" },
      { title: "Insurance", description: "Comprehensive travel insurance covering medical emergencies, trip cancellation, and baggage loss.", icon: "ShieldCheck" },
      { title: "International Tour", description: "Curated packages to Dubai, Singapore, Thailand, Bali, Malaysia, Maldives, Vietnam, UK, USA, Australia, Canada, France, Georgia, UAE, Germany, Italy & all European countries.", icon: "Globe" }
    ],
    process: [
      { step: "Share Your Wishlist", description: "Tell us your dream destination, dates, budget, and travel preferences." },
      { step: "Custom Itinerary", description: "We design a personalized itinerary with flights, hotels, sightseeing, pickup & drop, and insurance." },
      { step: "Booking & Confirmation", description: "Flights, hotels, transfers - all booked and confirmed with best-price guarantee." },
      { step: "Pre-Trip Briefing", description: "Detailed travel guide, tips, emergency contacts, and packing recommendations." },
      { step: "Travel Support", description: "24/7 on-trip support for any changes, emergencies, or assistance needed." },
      { step: "Memories Forever", description: "Post-trip feedback and exclusive deals for your next adventure with us." }
    ],
    stats: [
      { value: 5000, suffix: "+", label: "Happy Travellers" },
      { value: 50, suffix: "+", label: "Destinations" },
      { value: 100, suffix: "%", label: "Customizable Tours" },
      { value: 24, suffix: "/7", label: "Travel Support" }
    ],
    whyChoose: {
      title: "Why Choose PRANIL Tours & Travel?",
      points: [
        "Personalized Tours tailored to your preferences",
        "Expert Guides with local knowledge at every destination",
        "Affordable Packages with best price guarantee",
        "Hassle-Free Booking for flights, hotels, and transport",
        "Tailored Itineraries for every trip style",
        "We provide Flight, Hotel, Visa, Sightseeing, Pickup & Drop, and Insurance",
        "19+ domestic destinations across India",
        "20+ international destinations worldwide"
      ]
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80", caption: "Dubai" },
      { image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80", caption: "Maldives" },
      { image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=80", caption: "Manali" },
      { image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80", caption: "Bali" },
      { image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80", caption: "Rajasthan" },
      { image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80", caption: "Singapore" }
    ],
    testimonials: [
      { quote: "An incredible Dubai trip with breathtaking architecture, luxurious experiences, and exceptional hospitality.", name: "Jay Nayak", role: "Dubai Tour" },
      { quote: "Made my Manali trip unforgettable with excellent service, stunning itinerary, and seamless experience.", name: "Kashyap Patel", role: "Manali Tour" },
      { quote: "Our Himachal Pradesh trip was unforgettable with impeccable service and local expertise.", name: "Manish Patel", role: "Himachal Tour" }
    ],
    ctaTitle: "Plan Your Dream Vacation Today",
    ctaDescription: "Get a customized itinerary and the best deals on flights, hotels, and tour packages.",
    phone: "+91 73833 69769",
    email: "travel@pranilgroup.com"
  },

  "it-services": {
    slug: "it-services",
    name: "IT Services",
    fullName: "PRANIL IT Solutions",
    tagline: "Digital Innovation for Growth",
    logoUrl: null,
    color: "#6B21A8",
    accentColor: "#a855f7",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=90",
    heroTitle: "Digital Innovation for Growth",
    heroSubtitle: "Web development, mobile apps, UI/UX design, SEO, and digital marketing solutions to transform your business.",
    about: {
      title: "About PRANIL IT Solutions",
      paragraphs: [
        "PRANIL IT Solutions is the technology arm of PRANIL Group, delivering cutting-edge digital solutions to businesses of all sizes.",
        "We combine creativity with technical excellence to build websites, mobile applications, and digital marketing strategies that drive results.",
        "From custom web applications to SEO optimization, we offer a complete suite of IT services to help your business thrive digitally."
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
    },
    services: [
      { title: "Web Development", description: "Custom websites and web applications built with React, Next.js, and Node.js.", icon: "Code" },
      { title: "Mobile App Development", description: "Native and cross-platform mobile applications for iOS and Android.", icon: "Smartphone" },
      { title: "UI/UX Design", description: "User-centered design combining aesthetics with functionality. Wireframes and prototypes.", icon: "Palette" },
      { title: "SEO Optimization", description: "Data-driven SEO strategies to improve search rankings and boost online visibility.", icon: "Search" },
      { title: "Digital Marketing", description: "Social media, PPC, content marketing, and email campaigns for business growth.", icon: "TrendingUp" },
      { title: "E-Commerce Solutions", description: "Full-featured online stores with payment integration and conversion optimization.", icon: "Monitor" },
      { title: "Database Management", description: "Scalable database design, migration, optimization, and cloud hosting solutions.", icon: "Database" },
      { title: "IT Consulting", description: "Strategic technology consulting to align IT infrastructure with business goals.", icon: "BarChart3" }
    ],
    process: [
      { step: "Discovery Call", description: "We understand your business, goals, challenges, and vision for the project." },
      { step: "Strategy & Planning", description: "Detailed project roadmap with timelines, milestones, and technology stack selection." },
      { step: "Design & Prototype", description: "UI/UX design, wireframes, and interactive prototypes for your approval." },
      { step: "Development", description: "Agile development with regular updates, code reviews, and quality assurance." },
      { step: "Testing & Launch", description: "Thorough testing, performance optimization, and smooth deployment." },
      { step: "Support & Growth", description: "Post-launch maintenance, analytics tracking, and continuous improvement." }
    ],
    stats: [
      { value: 100, suffix: "+", label: "Projects Delivered" },
      { value: 50, suffix: "+", label: "Happy Clients" },
      { value: 99, suffix: "%", label: "Client Retention" },
      { value: 15, suffix: "+", label: "Tech Experts" }
    ],
    whyChoose: {
      title: "Why Choose PRANIL IT Solutions?",
      points: [
        "Modern tech stack - React, Next.js, Node.js, Python",
        "100+ projects delivered across multiple industries",
        "Agile development with transparent communication",
        "Dedicated project manager for every engagement",
        "Pixel-perfect designs with mobile-first approach",
        "Post-launch support and maintenance included",
        "Competitive pricing with no hidden costs",
        "SEO and performance optimization built-in"
      ]
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80", caption: "Development" },
      { image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80", caption: "Design" },
      { image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", caption: "Analytics" },
      { image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", caption: "Teamwork" },
      { image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80", caption: "Data" },
      { image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80", caption: "Code" }
    ],
    testimonials: [
      { quote: "PRANIL IT built our website from scratch. The design, speed, and SEO results exceeded expectations.", name: "Rajesh Patel", role: "E-commerce Client" },
      { quote: "Their mobile app development team is outstanding. The app is smooth and our users love it.", name: "Sneha Mehta", role: "Startup Founder" },
      { quote: "Professional, on-time, and within budget. PRANIL IT is our go-to technology partner.", name: "Amit Shah", role: "Business Owner" }
    ],
    ctaTitle: "Let's Build Something Amazing",
    ctaDescription: "Get a free project consultation and quote. Transform your business with cutting-edge digital solutions.",
    phone: "+91 73839 97679",
    email: "it@pranilgroup.com"
  }
};

export const companyPageSlugs = Object.keys(companyPages);
