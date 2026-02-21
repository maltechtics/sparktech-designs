/**
 * Interior Designs Data
 * =====================
 * All interior design portfolio items.
 * Images are imported from src/assets/interior/
 */

import { 
  interior1, 
  interior2, 
  interior3, 
  interior4, 
  interior5, 
  interior6 
} from "@/assets/interior";

export interface InteriorDesign {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "living-room" | "bedroom" | "kitchen" | "dining" | "bathroom" | "office";
  style: string;
  features: string[];
}

export const interiorDesigns: InteriorDesign[] = [
  {
    id: 1,
    title: "Modern Luxury Living Room",
    description: "Contemporary living space featuring elegant furniture, warm ambient lighting, and sophisticated decor elements.",
    image: interior1,
    category: "living-room",
    style: "Contemporary Luxury",
    features: [
      "Custom ceiling design with ambient lighting",
      "Premium furniture selection",
      "Neutral color palette with accent pieces",
      "Statement chandelier",
      "Floor-to-ceiling windows",
    ],
  },
  {
    id: 2,
    title: "Executive Master Bedroom",
    description: "Luxurious bedroom design with plush bedding, elegant headboard, and calming neutral tones.",
    image: interior2,
    category: "bedroom",
    style: "Modern Elegance",
    features: [
      "Upholstered headboard wall",
      "Designer pendant lighting",
      "Premium bedding and linens",
      "Integrated ambient lighting",
      "Custom built-in storage",
    ],
  },
  {
    id: 3,
    title: "Chef's Dream Kitchen",
    description: "State-of-the-art kitchen featuring marble countertops, premium appliances, and functional design.",
    image: interior3,
    category: "kitchen",
    style: "Modern Functional",
    features: [
      "Marble countertops and backsplash",
      "Premium wood cabinetry",
      "Designer pendant lights",
      "High-end appliances",
      "Large island with seating",
    ],
  },
  {
    id: 4,
    title: "Elegant Dining Experience",
    description: "Sophisticated dining room with crystal chandelier, designer furniture, and luxurious finishes.",
    image: interior4,
    category: "dining",
    style: "Classic Luxury",
    features: [
      "Crystal chandelier centerpiece",
      "Designer dining set",
      "Paneled accent walls",
      "Marble flooring pattern",
      "Ambient cove lighting",
    ],
  },
  {
    id: 5,
    title: "Spa-Inspired Bathroom",
    description: "Tranquil bathroom retreat featuring marble throughout, freestanding tub, and premium fixtures.",
    image: interior5,
    category: "bathroom",
    style: "Spa Luxury",
    features: [
      "Full marble installation",
      "Freestanding soaking tub",
      "Rain shower system",
      "Designer lighting fixtures",
      "Floating vanity design",
    ],
  },
  {
    id: 6,
    title: "Professional Home Office",
    description: "Sophisticated workspace designed for productivity with custom built-ins and executive furniture.",
    image: interior6,
    category: "office",
    style: "Executive Modern",
    features: [
      "Custom built-in shelving",
      "Executive desk setup",
      "Integrated task lighting",
      "Warm wood accents",
      "Comfortable seating area",
    ],
  },
];

export const interiorCategories = [
  { label: "All Designs", value: "all" },
  { label: "Living Room", value: "living-room" },
  { label: "Bedroom", value: "bedroom" },
  { label: "Kitchen", value: "kitchen" },
  { label: "Dining Room", value: "dining" },
  { label: "Bathroom", value: "bathroom" },
  { label: "Home Office", value: "office" },
];

export const getInteriorById = (id: number): InteriorDesign | undefined => {
  return interiorDesigns.find((d) => d.id === id);
};
