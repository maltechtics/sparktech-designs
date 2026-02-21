/**
 * City/Location Images
 * ====================
 * Images representing different cities where we operate.
 * Used in location sections and maps.
 * To change an image, replace the file with the same name.
 * 
 * Naming Convention: city-{number}
 */

import city1 from "./city-lagos.jpg";        // city-1: Lagos
import city2 from "./city-abuja.jpg";        // city-2: Abuja
import city3 from "./city-portharcourt.jpg"; // city-3: Port Harcourt

export const cityImages = {
  /** city-1: Lagos city image */
  city1: city1,
  
  /** city-2: Abuja city image */
  city2: city2,
  
  /** city-3: Port Harcourt city image */
  city3: city3,
};

// Array for easy access
export const cityGallery = [city1, city2, city3];

// Individual exports with clear naming
export { city1, city2, city3 };
