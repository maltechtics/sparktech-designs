/**
 * Property Type Images
 * ====================
 * Images representing different property types.
 * Used in property type selection and filtering.
 * To change an image, replace the file with the same name.
 * 
 * Naming Convention: type-{number}
 */

import type1 from "./type-apartment.jpg";  // type-1: Apartment/flat
import type2 from "./type-house.jpg";      // type-2: House/residential
import type3 from "./type-office.jpg";     // type-3: Office/commercial
import type4 from "./type-villa.jpg";      // type-4: Villa/luxury

export const propertyTypeImages = {
  /** type-1: Apartment/flat image */
  type1: type1,
  
  /** type-2: House/residential image */
  type2: type2,
  
  /** type-3: Office/commercial image */
  type3: type3,
  
  /** type-4: Villa/luxury image */
  type4: type4,
};

// Array for easy access
export const propertyTypeGallery = [type1, type2, type3, type4];

// Individual exports with clear naming
export { type1, type2, type3, type4 };
