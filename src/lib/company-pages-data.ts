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
  phone2?: string;
  email: string;
  blog?: {
    title: string;
    sections: { heading: string; paragraphs: string[] }[];
    author: string;
    authorRole: string;
  };
}

export const companyPages: Record<string, CompanyPageData> = {
  education: {
    slug: "education",
    name: "Education & Visa",
    fullName: "PRANIL Education Services LLP",
    tagline: "Success is Our New Horizon",
    logoUrl: "/logos/main-logo.png",
    color: "#991B1B",
    accentColor: "#E11D48",
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
    phone: "+91 73839 97825 / +91 88499 48279",
    email: "inquiry.pranileducation@gmail.com"
  },

  recruitment: {
    slug: "recruitment",
    name: "Recruitment",
    fullName: "PRANIL Recruitment Services",
    tagline: "Connecting Talent with Opportunity",
    logoUrl: "/logos/recruitment-logo.png",
    color: "#0B4F8A",
    accentColor: "#00A6D6",
    heroImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=90",
    heroTitle: "Connecting Talent with Opportunity",
    heroSubtitle: "Professional staffing solutions with the vision to provide right talent for dream jobs. Serving Education, BPO, KPO, Finance, Banking, Healthcare, IT and Non-IT sectors.",
    about: {
      title: "About PRANIL Recruitment Services",
      paragraphs: [
        "We are pleased to introduce our PRANIL RECRUITMENT SERVICES Professionals Team who diligently provide staffing solutions with the vision to provide right talent for getting their dream job aligning with the organization expectations and norms.",
        "For the proficiency utilizing in prominent sectors such as Education, BPO, KPO, Finance, Banking, Healthcare, IT and Non-IT Sector, we gratefully invite you for better business relations assuring growth for the future.",
        "Our dedicated team of recruitment specialists ensures a seamless hiring process, matching skilled professionals with the right opportunities while maintaining the highest standards of quality and professionalism."
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
    },
    services: [
      { title: "Recruitment", description: "End-to-end recruitment solutions connecting talented professionals with the right career opportunities across Education, BPO, KPO, Finance, Banking, Healthcare, IT and Non-IT sectors.", icon: "UserRoundCheck" },
      { title: "Permanent Staffing", description: "Long-term staffing solutions to help organizations find the right talent for permanent positions, ensuring alignment with company culture and expectations.", icon: "Building2" },
      { title: "Temporary Staffing", description: "Flexible temporary staffing services to meet short-term business needs, project-based requirements, and seasonal demands with qualified professionals.", icon: "BriefcaseBusiness" },
      { title: "Resume Update", description: "Professional resume enhancement services to highlight your strengths, achievements, and skills in an employer-ready format that stands out.", icon: "ScrollText" },
      { title: "Interview Preparation", description: "One-on-one interview coaching covering common questions, communication techniques, confidence building, and presentation skills.", icon: "Sparkles" }
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
    phone: "+91 87800 48502",
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
    phone: "+91 88499 48279",
    email: "praniltoursandtravel@gmail.com"
  },

  "digital-media": {
    slug: "digital-media",
    name: "Digital Media",
    fullName: "KARV Digital Media & Event Solutions",
    tagline: "We Don't Just Market — We Build Legacies",
    logoUrl: "/logos/karv-logo.png",
    color: "#0077B6",
    accentColor: "#00B4D8",
    heroImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=2000&q=90",
    heroTitle: "Transforming Brands with Creative Digital Solutions",
    heroSubtitle: "Expert website development, social media management, branding, lead generation & event solutions. We craft digital experiences that elevate your brand's presence and drive meaningful engagement.",
    about: {
      title: "About KARV Digital Media & Event Solutions",
      paragraphs: [
        "KARV Digital Media & Event Solutions delivers expert website development, social media management, and branding services. We craft creative digital solutions to enhance your brand's presence and engagement.",
        "Our team ensures innovation, strategy, and precision in every project. We empower businesses with tailored digital solutions, seamlessly blending creativity and technology to elevate brand visibility, engagement, and growth.",
        "Through data-driven strategies and innovative storytelling, we help brands stand out in a competitive digital world. At KARV, we turn ideas into influence and businesses into industry leaders. Let's build your digital success together!"
      ],
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1200&q=80"
    },
    services: [
      { title: "Flyer Design", description: "Eye-catching, professionally designed flyers that captivate your audience and leave a lasting impression. Whether for promotions, events, or branding, we create designs that speak for your business.", icon: "Palette" },
      { title: "Carousel Design", description: "Creative and interactive carousel designs for social media, designed to capture attention and boost engagement with visually appealing content.", icon: "Monitor" },
      { title: "Videos & Reels", description: "High-quality edited and promotional videos that captivate audiences and elevate your brand. From seamless editing to dynamic visuals and storytelling, our videos engage, inform, and drive action.", icon: "TrendingUp" },
      { title: "Animated Reels", description: "Captivating animated reels that bring your brand to life with dynamic motion graphics, engaging storytelling, and vibrant visuals. From smooth transitions to trendy effects and compelling messaging.", icon: "Sparkles" },
      { title: "Web Development", description: "High-performing websites with stunning visuals, seamless functionality, user-friendly experiences, responsive layouts, fast loading speeds, and SEO optimization.", icon: "Code" },
      { title: "Lead Generation", description: "Result-driven lead generation services using data-driven strategies, targeted marketing, and optimized funnels to attract, engage, and convert potential customers.", icon: "TrendingUp" },
      { title: "SEO Services", description: "Data-driven SEO strategies to improve search rankings, boost online visibility, and drive organic traffic to your business.", icon: "Search" },
      { title: "Social Media Management", description: "Complete social media management including content creation, scheduling, analytics, and community engagement to grow your brand's digital presence.", icon: "Globe" }
    ],
    process: [
      { step: "Concept & Strategy", description: "We understand your brand, goals, target audience, and create a tailored digital strategy." },
      { step: "Scripting & Storyboarding", description: "Detailed planning with scripts, storyboards, and creative direction for every project." },
      { step: "Design & Animation", description: "Creating stunning visuals, motion graphics, and eye-catching designs that captivate." },
      { step: "Audio & Sound Design", description: "Professional audio integration with music selection, sound effects, and voiceovers." },
      { step: "Branding & Final Touches", description: "Adding brand elements, final refinements, and quality assurance for a polished result." },
      { step: "Review & Delivery", description: "Client review, revisions, and final delivery with optimized formats for all platforms." }
    ],
    stats: [
      { value: 50, suffix: "+", label: "Clients Served" },
      { value: 200, suffix: "+", label: "Projects Delivered" },
      { value: 100, suffix: "%", label: "Client Satisfaction" },
      { value: 5, suffix: "+", label: "Industries Covered" }
    ],
    whyChoose: {
      title: "Why Choose KARV Digital Media?",
      points: [
        "Elevate your brand with powerful digital strategies that enhance visibility, credibility, and impact",
        "Drive unstoppable growth with targeted marketing and high-converting lead generation",
        "Build meaningful engagement with compelling content and interactive campaigns",
        "Maximize ROI with smart, data-backed strategies for the best possible returns",
        "Comprehensive digital services from flyer design to web development",
        "Creative excellence with innovation at our core",
        "Strategic campaigns that deliver measurable results",
        "End-to-end event solutions ensuring seamless planning and digital presence"
      ]
    },
    gallery: [
      { image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80", caption: "Social Media" },
      { image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80", caption: "Graphic Design" },
      { image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80", caption: "Video Production" },
      { image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", caption: "Lead Generation" },
      { image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80", caption: "Web Development" },
      { image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", caption: "SEO & Analytics" }
    ],
    testimonials: [
      { quote: "KARV created impactful flyers, engaging videos, and dynamic reels for Pranil Education Services, showcasing our educational offerings with creativity and clarity.", name: "Pranil Education Services", role: "Client — Education" },
      { quote: "KARV created captivating flyers, engaging videos, and dynamic reels for Pranil Tours and Travels, showcasing unforgettable travel experiences with inspiring storytelling.", name: "Pranil Tours & Travels", role: "Client — Travel" },
      { quote: "Through strategic digital content, KARV helped enhance our brand visibility, attract customers, and build a strong digital presence with measurable results.", name: "KARV Client", role: "Digital Marketing" }
    ],
    ctaTitle: "Elevate Your Brand Today",
    ctaDescription: "Transform your brand with cutting-edge digital media, creative designs, and result-driven marketing strategies. At KARV, we don't just market — we build legacies.",
    phone: "+91 63538 18174",
    email: "admin.karv@gmail.com"
  }
};

export const companyPageSlugs = Object.keys(companyPages);
