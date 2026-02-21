export interface Service {
  id: string;
  title: string;
  keywords: string[];
}

export const services: Service[] = [
  {
    id: "construction",
    title: "Construction & Building",
    keywords: ["construction", "building", "build", "foundation", "structural", "roofing", "finishing"],
  },
  {
    id: "architecture",
    title: "Architectural Design",
    keywords: ["architecture", "architectural", "design", "blueprint", "3d", "visualization", "drawing", "plans"],
  },
];

// Location data for map section
export const locations = [
  { name: "Lagos", keywords: ["lagos", "lekki", "victoria island", "ikoyi", "banana island", "ajah", "ikeja", "eko atlantic", "magodo"] },
  { name: "Abuja", keywords: ["abuja", "maitama", "asokoro", "wuse", "garki", "central business district", "cbd"] },
  { name: "Port Harcourt", keywords: ["port harcourt", "ph", "rivers"] },
  { name: "Abia", keywords: ["abia", "aba", "umuahia"] },
  { name: "Enugu", keywords: ["enugu"] },
  { name: "Kano", keywords: ["kano"] },
  { name: "Kaduna", keywords: ["kaduna"] },
  { name: "Ogun", keywords: ["ogun", "abeokuta"] },
  { name: "Oyo", keywords: ["oyo", "ibadan"] },
];
