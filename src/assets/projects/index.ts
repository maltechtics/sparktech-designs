/**
 * Project Images
 * ==============
 * All images used for construction/building projects.
 * Each project can have multiple gallery images.
 * To change an image, replace the file with the same name.
 * 
 * Naming Convention: residential-{number}, commercial-{number}, renovation-{number}, luxury-{number}, ongoing-{number}
 */

// Residential Projects
import residential1 from "./residential-1.jpg";  // residential-1: Residential project image 1
import residential2 from "./residential-2.jpg";  // residential-2: Residential project image 2
import residential3 from "./residential-3.jpg";  // residential-3: Residential project image 3

// Commercial Projects
import commercial1 from "./commercial-1.jpg";  // commercial-1: Commercial project image 1
import commercial2 from "./commercial-2.jpg";  // commercial-2: Commercial project image 2
import commercial3 from "./commercial-3.jpg";  // commercial-3: Commercial project image 3

// Renovation Projects
import renovation1 from "./renovation-1.jpg";  // renovation-1: Renovation project image 1
import renovation2 from "./renovation-2.jpg";  // renovation-2: Renovation project image 2

// Luxury Projects
import luxury1 from "./luxury-1.jpg";  // luxury-1: Luxury project image 1

// Ongoing Projects
import ongoing1 from "./ongoing-1.jpg";  // ongoing-1: Ongoing project image 1
import ongoing2 from "./ongoing-2.jpg";  // ongoing-2: Ongoing project image 2

export const projectImages = {
  // Residential
  residential1,
  residential2,
  residential3,
  
  // Commercial
  commercial1,
  commercial2,
  commercial3,
  
  // Renovation
  renovation1,
  renovation2,
  
  // Luxury
  luxury1,
  
  // Ongoing
  ongoing1,
  ongoing2,
};

// Arrays for easy gallery access by category
export const residentialGallery = [residential1, residential2, residential3];
export const commercialGallery = [commercial1, commercial2, commercial3];
export const renovationGallery = [renovation1, renovation2];
export const luxuryGallery = [luxury1];
export const ongoingGallery = [ongoing1, ongoing2];

// All projects gallery
export const projectGallery = [
  ...residentialGallery,
  ...commercialGallery,
  ...renovationGallery,
  ...luxuryGallery,
  ...ongoingGallery,
];

// Individual exports with clear naming
export { 
  residential1, residential2, residential3,
  commercial1, commercial2, commercial3,
  renovation1, renovation2,
  luxury1,
  ongoing1, ongoing2
};
