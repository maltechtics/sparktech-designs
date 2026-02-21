import { property1, property2, property3, property4, property5 } from "@/assets/properties";

export interface Property {
  id: number;
  title: string;
  image: string;
}

export const properties: Property[] = [
  { id: 1, title: "Modern Duplex", image: property1 },
  { id: 2, title: "Luxury Terrace", image: property2 },
  { id: 3, title: "Contemporary Home", image: property3 },
  { id: 4, title: "Executive Residence", image: property4 },
  { id: 5, title: "Premium Villa", image: property5 },
];
