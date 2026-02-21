/**
 * Projects Data
 * =============
 * All construction and building projects.
 * Images are imported from src/assets/projects/
 */

import { 
  residential1, residential2, residential3,
  commercial1, commercial2, commercial3,
  renovation1, renovation2,
  luxury1,
  ongoing1, ongoing2
} from "@/assets/projects";

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  type: "residential" | "commercial" | "renovation" | "luxury" | "interior";
  status: "completed" | "ongoing";
  location: string;
  year: string;
  size: string;
  // Detailed info for project detail page
  fullDescription: string;
  purpose: string;
  scope: string[];
  features: string[];
  gallery: string[];
  client?: string;
  duration?: string;
  budget?: string;
}

export const projects: Project[] = [
  // Residential Projects
  {
    id: 1,
    slug: "lekki-phase-1-residential-complex",
    title: "Lekki Phase 1 Residential Complex",
    description: "Modern 12-unit residential complex with state-of-the-art amenities",
    image: residential1,
    type: "residential",
    status: "completed",
    location: "Lekki Phase 1, Lagos",
    year: "2023",
    size: "4,500 sqm",
    fullDescription: "This premium residential development in Lekki Phase 1 represents the pinnacle of modern urban living in Lagos. The 12-unit complex was designed to cater to discerning homeowners seeking a blend of luxury, convenience, and community living.",
    purpose: "To create an exclusive residential community that offers world-class amenities and modern living spaces for families and professionals.",
    scope: [
      "Complete architectural design and planning",
      "Foundation and structural construction",
      "Electrical and plumbing installations",
      "Interior finishing and fixtures",
      "Landscaping and outdoor amenities",
      "Security systems and perimeter fencing",
    ],
    features: [
      "12 luxury residential units",
      "Underground parking for 24 vehicles",
      "24/7 security with CCTV surveillance",
      "Dedicated power supply with backup generator",
      "Modern gym and fitness center",
      "Children's playground",
    ],
    gallery: [residential1, residential2, residential3],
    client: "Lekki Properties Ltd",
    duration: "18 months",
    budget: "₦2.5 Billion",
  },
  {
    id: 2,
    slug: "gra-ikeja-family-homes",
    title: "GRA Ikeja Family Homes",
    description: "6 detached homes in a gated community setting",
    image: residential2,
    type: "residential",
    status: "completed",
    location: "Ikeja GRA, Lagos",
    year: "2023",
    size: "3,600 sqm",
    fullDescription: "This exclusive gated community in Ikeja GRA features six beautifully designed detached homes built for modern Nigerian families.",
    purpose: "To create an ideal family living environment that combines privacy, security, and community living.",
    scope: [
      "Estate planning and design",
      "6 detached residential units",
      "Perimeter wall and security gate",
      "Internal road network",
      "Shared amenities construction",
    ],
    features: [
      "6 spacious 5-bedroom homes",
      "Private gardens for each unit",
      "Shared community clubhouse",
      "Children's playground",
      "Gated entry with security post",
    ],
    gallery: [residential2, residential1, residential3],
    client: "Ikeja Estates Ltd",
    duration: "14 months",
    budget: "₦1.8 Billion",
  },
  {
    id: 3,
    slug: "ajah-luxury-residences",
    title: "Ajah Luxury Residences",
    description: "Premium residential development with modern amenities",
    image: residential3,
    type: "residential",
    status: "completed",
    location: "Ajah, Lagos",
    year: "2024",
    size: "5,000 sqm",
    fullDescription: "The Ajah Luxury Residences project represents the future of urban living in Lagos with modern designs and premium finishes.",
    purpose: "To provide quality residential spaces for young professionals and modern families.",
    scope: [
      "Modern building infrastructure design",
      "Premium apartment construction",
      "Smart home systems installation",
      "Automated parking system",
    ],
    features: [
      "Smart-enabled apartments",
      "Voice-controlled home systems",
      "Keyless entry and smart locks",
      "Rooftop lounge and garden",
    ],
    gallery: [residential3, residential1, residential2],
    client: "SmartLiving Nigeria",
    duration: "16 months",
    budget: "₦1.5 Billion",
  },
  // Commercial Projects
  {
    id: 4,
    slug: "victoria-island-office-tower",
    title: "Victoria Island Office Tower",
    description: "15-story commercial office building with premium facilities",
    image: commercial1,
    type: "commercial",
    status: "completed",
    location: "Victoria Island, Lagos",
    year: "2024",
    size: "12,000 sqm",
    fullDescription: "The Victoria Island Office Tower is a landmark commercial development in Lagos's premier business district featuring cutting-edge architectural design.",
    purpose: "To provide premium office spaces that meet international standards.",
    scope: [
      "High-rise structural engineering and construction",
      "Curtain wall and facade installation",
      "Central HVAC system installation",
      "High-speed elevator systems",
    ],
    features: [
      "15 floors of premium office space",
      "Floor plates from 600-800 sqm",
      "3-level underground parking",
      "Conference center and meeting rooms",
    ],
    gallery: [commercial1, commercial2, commercial3],
    client: "VI Commercial Developments",
    duration: "24 months",
    budget: "₦8.5 Billion",
  },
  {
    id: 5,
    slug: "lagos-commercial-plaza",
    title: "Lagos Commercial Plaza",
    description: "Mixed-use development with retail and office spaces",
    image: commercial2,
    type: "commercial",
    status: "completed",
    location: "Lagos Island",
    year: "2023",
    size: "8,500 sqm",
    fullDescription: "A premier mixed-use development combining retail spaces, premium office suites, and modern amenities.",
    purpose: "To develop a world-class commercial complex that addresses the growing demand for quality retail and office space.",
    scope: [
      "Mixed-use structural design",
      "Retail space construction",
      "Office floor build-out",
      "Parking structure development",
    ],
    features: [
      "Ground floor retail arcade",
      "5 floors of premium office space",
      "Food court and restaurants",
      "Multi-level parking structure",
    ],
    gallery: [commercial2, commercial1, commercial3],
    client: "Lagos Properties Development Co.",
    duration: "20 months",
    budget: "₦3.2 Billion",
  },
  {
    id: 6,
    slug: "corporate-headquarters",
    title: "Corporate Headquarters Building",
    description: "Modern corporate office complex with state-of-the-art facilities",
    image: commercial3,
    type: "commercial",
    status: "completed",
    location: "Ikoyi, Lagos",
    year: "2023",
    size: "10,000 sqm",
    fullDescription: "A flagship corporate headquarters featuring modern architecture and premium office amenities.",
    purpose: "To provide world-class office infrastructure for leading corporations.",
    scope: [
      "Commercial building design",
      "Structural construction",
      "MEP systems installation",
      "Interior fit-out",
    ],
    features: [
      "Executive office suites",
      "Board rooms and conference facilities",
      "Cafeteria and wellness center",
      "Secure parking facilities",
    ],
    gallery: [commercial3, commercial1, commercial2],
    client: "Private Corporation",
    duration: "18 months",
    budget: "₦4.5 Billion",
  },
  // Renovation Projects
  {
    id: 7,
    slug: "ikoyi-villa-renovation",
    title: "Ikoyi Villa Renovation",
    description: "Complete renovation of a classic colonial-era mansion",
    image: renovation1,
    type: "renovation",
    status: "completed",
    location: "Ikoyi, Lagos",
    year: "2023",
    size: "800 sqm",
    fullDescription: "This prestigious renovation project involved the complete restoration and modernization of a historic colonial-era mansion.",
    purpose: "To preserve the historical significance while transforming it into a modern luxury residence.",
    scope: [
      "Structural assessment and reinforcement",
      "Heritage facade restoration",
      "Complete interior redesign",
      "Modern electrical and plumbing systems",
    ],
    features: [
      "Preserved colonial architectural elements",
      "Modern smart home integration",
      "Restored original hardwood flooring",
      "New infinity pool and cabana",
    ],
    gallery: [renovation1, renovation2],
    client: "Private Client",
    duration: "12 months",
    budget: "₦850 Million",
  },
  {
    id: 8,
    slug: "modern-home-renovation",
    title: "Modern Home Renovation",
    description: "Contemporary transformation of a classic Nigerian home",
    image: renovation2,
    type: "renovation",
    status: "completed",
    location: "Victoria Island, Lagos",
    year: "2024",
    size: "600 sqm",
    fullDescription: "A complete renovation transforming a dated property into a contemporary masterpiece.",
    purpose: "To modernize an existing property while maximizing space and functionality.",
    scope: [
      "Interior demolition and reconstruction",
      "Modern kitchen and bathroom installation",
      "Electrical and plumbing upgrades",
      "New flooring and finishing",
    ],
    features: [
      "Open-plan living areas",
      "Modern kitchen with premium appliances",
      "Spa-inspired bathrooms",
      "Energy-efficient systems",
    ],
    gallery: [renovation2, renovation1],
    client: "Private Client",
    duration: "8 months",
    budget: "₦450 Million",
  },
  // Luxury Projects
  {
    id: 9,
    slug: "banana-island-luxury-estate",
    title: "Banana Island Luxury Estate",
    description: "Ultra-luxury waterfront mansion with private dock",
    image: luxury1,
    type: "luxury",
    status: "completed",
    location: "Banana Island, Lagos",
    year: "2022",
    size: "2,200 sqm",
    fullDescription: "This ultra-luxury waterfront estate on Banana Island represents the epitome of opulent living in Nigeria.",
    purpose: "To create an exclusive waterfront residence that offers unmatched luxury, privacy, and sophistication.",
    scope: [
      "Waterfront foundation engineering",
      "Custom architectural design",
      "Marine dock construction",
      "Premium interior finishing",
    ],
    features: [
      "7 bedrooms with en-suite bathrooms",
      "Private yacht dock",
      "Infinity pool overlooking lagoon",
      "Private cinema room",
      "Full smart home automation",
    ],
    gallery: [luxury1],
    client: "Private Client",
    duration: "24 months",
    budget: "₦4.8 Billion",
  },
  // Ongoing Projects
  {
    id: 10,
    slug: "lekki-commercial-development",
    title: "Lekki Commercial Development",
    description: "Modern commercial complex under construction",
    image: ongoing1,
    type: "commercial",
    status: "ongoing",
    location: "Lekki, Lagos",
    year: "2024",
    size: "15,000 sqm",
    fullDescription: "A major commercial development currently under construction in the Lekki corridor.",
    purpose: "To provide modern commercial spaces for businesses in the growing Lekki area.",
    scope: [
      "Foundation and structural work",
      "Multi-story construction",
      "MEP installations",
      "External works",
    ],
    features: [
      "Multiple retail spaces",
      "Office suites",
      "Large parking facility",
      "Modern amenities",
    ],
    gallery: [ongoing1, ongoing2],
    client: "Lekki Developments Ltd",
    duration: "24 months (ongoing)",
    budget: "₦5.5 Billion",
  },
  {
    id: 11,
    slug: "residential-estate-development",
    title: "Residential Estate Development",
    description: "Premium residential estate under development",
    image: ongoing2,
    type: "residential",
    status: "ongoing",
    location: "Ajah, Lagos",
    year: "2024",
    size: "10,000 sqm",
    fullDescription: "A premium residential estate currently being developed with modern amenities.",
    purpose: "To create a modern residential community with world-class facilities.",
    scope: [
      "Estate infrastructure development",
      "Multiple residential units",
      "Road network construction",
      "Utility installations",
    ],
    features: [
      "Multiple housing units",
      "Community facilities",
      "Green spaces",
      "24/7 security",
    ],
    gallery: [ongoing2, ongoing1],
    client: "Private Developer",
    duration: "20 months (ongoing)",
    budget: "₦3.8 Billion",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getProjectById = (id: number): Project | undefined => {
  return projects.find((p) => p.id === id);
};
