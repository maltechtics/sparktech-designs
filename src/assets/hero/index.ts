/**
 * Hero Section Images
 * ==================
 * All images used in the hero section of the website.
 * To change an image, simply replace the file with the same name.
 * 
 * Naming Convention: hero-{number} or hero-{descriptor}
 */

import hero1 from "./hero-construction.jpg";  // hero-1: Main construction background
import hero2 from "./hero-house.jpg";         // hero-2: House alternative
import heroArrow from "./curved-arrow.webp"; // hero-arrow: Decorative element

export const heroImages = {
  /** hero-1: Main hero background - construction site image */
  hero1: hero1,
  
  /** hero-2: Alternative hero image - house */
  hero2: hero2,
  
  /** hero-arrow: Decorative curved arrow for "Watch Video" section */
  heroArrow: heroArrow,
};

// Array for easy access
export const heroGallery = [hero1, hero2];

// Individual exports with clear naming
export { hero1, hero2, heroArrow };
