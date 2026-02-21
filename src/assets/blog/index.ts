/**
 * Blog Images
 * ===========
 * All images used for blog posts and articles.
 * To change an image, replace the file with the same name.
 * 
 * Naming Convention: blog-{number}
 */

import blog1 from "./blog-1.jpg";  // blog-1: Modern Construction Techniques article
import blog2 from "./blog-2.jpg";  // blog-2: Architectural Trends article
import blog3 from "./blog-3.jpg";  // blog-3: Building Your Dream Home Guide

export const blogImages = {
  /** blog-1: Modern Construction Techniques article */
  blog1: blog1,
  
  /** blog-2: Architectural Trends article */
  blog2: blog2,
  
  /** blog-3: Building Your Dream Home Guide */
  blog3: blog3,
};

// Array for easy access
export const blogGallery = [blog1, blog2, blog3];

// Individual exports with clear naming
export { blog1, blog2, blog3 };
