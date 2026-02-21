/**
 * Firebase Firestore Database Utilities
 * Sparktech Designs - Building & Construction Company
 * 
 * This file contains type definitions and utility functions for Firestore.
 * Functions are ready to use when Firebase is activated.
 */

import { db } from './config';
import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
  DocumentReference,
  QueryConstraint
} from 'firebase/firestore';

// ============================================================
// COLLECTION NAMES
// ============================================================

export const COLLECTIONS = {
  USERS: 'users',
  USER_ROLES: 'user_roles',
  PROJECTS: 'projects',
  PROPERTIES: 'properties',
  SERVICES: 'services',
  BLOG_POSTS: 'blogPosts',
  INQUIRIES: 'inquiries',
  JOB_APPLICATIONS: 'jobApplications',
  NOTIFICATIONS: 'notifications',
  SAVED_ITEMS: 'savedItems',
  CITIES: 'cities',
  TESTIMONIALS: 'testimonials',
  SETTINGS: 'settings',
} as const;

// ============================================================
// TYPE DEFINITIONS
// ============================================================

// User Profile
export interface User {
  id: string;
  email: string;
  displayName: string;
  phone?: string;
  avatar?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  lastLoginAt?: Timestamp;
  preferences: {
    notifications: boolean;
    newsletter: boolean;
  };
}

// User Role (Separate for security)
export type UserRoleType = 'guest' | 'user' | 'admin';

export interface UserRole {
  id: string;
  userId: string;
  role: UserRoleType;
  grantedAt: Timestamp;
  grantedBy?: string;
}

// Project
export type ProjectType = 'residential' | 'commercial' | 'renovation' | 'luxury';
export type ProjectStatus = 'planning' | 'ongoing' | 'completed';

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  type: ProjectType;
  status: ProjectStatus;
  location: string;
  city: string;
  year: number;
  size: string;
  client?: string;
  duration?: string;
  budget?: string;
  purpose: string;
  scope: string;
  features: string[];
  images: string[];
  gallery: string[];
  featured: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  createdBy: string;
}

// Property
export type PropertyType = 'house' | 'apartment' | 'land' | 'commercial' | 'villa' | 'office';
export type PropertyStatus = 'available' | 'unavailable' | 'sold';

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  priceLabel: string;
  location: string;
  city: string;
  type: PropertyType;
  status: PropertyStatus;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  images: string[];
  featured: boolean;
  amenities: string[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Service
export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  images: string[];
  galleryImages: string[];
  features: string[];
  process: { step: string; description: string }[];
  benefits: string[];
  order: number;
  active: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Blog Post
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  featuredImage: string;
  images: string[];
  author: {
    name: string;
    avatar?: string;
    role?: string;
  };
  published: boolean;
  publishedAt?: Timestamp;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  viewCount: number;
}

// Inquiry
export type InquiryType = 'general' | 'property' | 'project' | 'quote' | 'career';
export type InquiryStatus = 'new' | 'read' | 'replied' | 'closed';

export interface Inquiry {
  id: string;
  type: InquiryType;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  referenceId?: string;
  referenceType?: 'property' | 'project';
  status: InquiryStatus;
  userId?: string;
  createdAt: Timestamp;
  repliedAt?: Timestamp;
  repliedBy?: string;
}

// Job Application
export type ApplicationStatus = 'pending' | 'reviewing' | 'interviewed' | 'hired' | 'rejected';

export interface JobApplication {
  id: string;
  positionId: string;
  positionTitle: string;
  name: string;
  email: string;
  phone: string;
  resumeUrl?: string;
  coverLetter?: string;
  linkedIn?: string;
  portfolio?: string;
  status: ApplicationStatus;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  reviewedBy?: string;
  notes?: string;
}

// Notification
export type NotificationType = 'project_update' | 'property_available' | 'blog_post' | 'inquiry_reply' | 'system';

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  link?: string;
  read: boolean;
  createdAt: Timestamp;
}

// Saved Item
export type SavedItemType = 'project' | 'property' | 'blog';

export interface SavedItem {
  id: string;
  userId: string;
  itemId: string;
  itemType: SavedItemType;
  savedAt: Timestamp;
}

// City
export interface City {
  id: string;
  name: string;
  state: string;
  country: string;
  coordinates: { lat: number; lng: number };
  propertyCount: number;
  projectCount: number;
  featured: boolean;
  image?: string;
}

// Testimonial
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  image?: string;
  featured: boolean;
  createdAt: Timestamp;
}

// ============================================================
// GENERIC CRUD OPERATIONS
// ============================================================

/**
 * Get all documents from a collection
 */
export const getAll = async <T>(
  collectionName: string,
  constraints: QueryConstraint[] = []
): Promise<T[]> => {
  try {
    const q = query(collection(db, collectionName), ...constraints);
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as T[];
  } catch (error) {
    console.error(`Error fetching ${collectionName}:`, error);
    throw error;
  }
};

/**
 * Get a single document by ID
 */
export const getById = async <T>(
  collectionName: string,
  id: string
): Promise<T | null> => {
  try {
    const docRef = doc(db, collectionName, id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() } as T;
    }
    return null;
  } catch (error) {
    console.error(`Error fetching ${collectionName}/${id}:`, error);
    throw error;
  }
};

/**
 * Add a new document
 */
export const create = async <T extends object>(
  collectionName: string,
  data: Omit<T, 'id'>
): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });
    return docRef.id;
  } catch (error) {
    console.error(`Error creating ${collectionName}:`, error);
    throw error;
  }
};

/**
 * Update a document
 */
export const update = async <T extends object>(
  collectionName: string,
  id: string,
  data: Partial<T>
): Promise<void> => {
  try {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: Timestamp.now()
    });
  } catch (error) {
    console.error(`Error updating ${collectionName}/${id}:`, error);
    throw error;
  }
};

/**
 * Delete a document
 */
export const remove = async (
  collectionName: string,
  id: string
): Promise<void> => {
  try {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error(`Error deleting ${collectionName}/${id}:`, error);
    throw error;
  }
};

// ============================================================
// PROJECTS
// ============================================================

export const getProjects = async (
  filters?: { type?: ProjectType; status?: ProjectStatus; featured?: boolean }
): Promise<Project[]> => {
  const constraints: QueryConstraint[] = [];
  
  if (filters?.type) {
    constraints.push(where('type', '==', filters.type));
  }
  if (filters?.status) {
    constraints.push(where('status', '==', filters.status));
  }
  if (filters?.featured !== undefined) {
    constraints.push(where('featured', '==', filters.featured));
  }
  
  constraints.push(orderBy('createdAt', 'desc'));
  
  return getAll<Project>(COLLECTIONS.PROJECTS, constraints);
};

export const getProjectBySlug = async (slug: string): Promise<Project | null> => {
  const constraints = [where('slug', '==', slug), limit(1)];
  const projects = await getAll<Project>(COLLECTIONS.PROJECTS, constraints);
  return projects[0] || null;
};

export const getProjectById = async (id: string): Promise<Project | null> => {
  return getById<Project>(COLLECTIONS.PROJECTS, id);
};

export const getFeaturedProjects = async (limitCount: number = 6): Promise<Project[]> => {
  const constraints = [
    where('featured', '==', true),
    orderBy('createdAt', 'desc'),
    limit(limitCount)
  ];
  return getAll<Project>(COLLECTIONS.PROJECTS, constraints);
};

// ============================================================
// PROPERTIES
// ============================================================

export const getProperties = async (
  filters?: { type?: PropertyType; status?: PropertyStatus; city?: string }
): Promise<Property[]> => {
  const constraints: QueryConstraint[] = [];
  
  if (filters?.type) {
    constraints.push(where('type', '==', filters.type));
  }
  if (filters?.status) {
    constraints.push(where('status', '==', filters.status));
  }
  if (filters?.city) {
    constraints.push(where('city', '==', filters.city));
  }
  
  constraints.push(orderBy('createdAt', 'desc'));
  
  return getAll<Property>(COLLECTIONS.PROPERTIES, constraints);
};

export const getPropertyById = async (id: string): Promise<Property | null> => {
  return getById<Property>(COLLECTIONS.PROPERTIES, id);
};

export const getFeaturedProperties = async (limitCount: number = 6): Promise<Property[]> => {
  const constraints = [
    where('featured', '==', true),
    orderBy('createdAt', 'desc'),
    limit(limitCount)
  ];
  return getAll<Property>(COLLECTIONS.PROPERTIES, constraints);
};

// ============================================================
// SERVICES
// ============================================================

export const getServices = async (): Promise<Service[]> => {
  const constraints = [
    where('active', '==', true),
    orderBy('order', 'asc')
  ];
  return getAll<Service>(COLLECTIONS.SERVICES, constraints);
};

export const getServiceBySlug = async (slug: string): Promise<Service | null> => {
  const constraints = [where('slug', '==', slug), limit(1)];
  const services = await getAll<Service>(COLLECTIONS.SERVICES, constraints);
  return services[0] || null;
};

// ============================================================
// BLOG POSTS
// ============================================================

export const getBlogPosts = async (
  filters?: { category?: string; published?: boolean }
): Promise<BlogPost[]> => {
  const constraints: QueryConstraint[] = [];
  
  if (filters?.category) {
    constraints.push(where('category', '==', filters.category));
  }
  if (filters?.published !== undefined) {
    constraints.push(where('published', '==', filters.published));
  }
  
  constraints.push(orderBy('publishedAt', 'desc'));
  
  return getAll<BlogPost>(COLLECTIONS.BLOG_POSTS, constraints);
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const constraints = [where('slug', '==', slug), limit(1)];
  const posts = await getAll<BlogPost>(COLLECTIONS.BLOG_POSTS, constraints);
  return posts[0] || null;
};

// ============================================================
// INQUIRIES
// ============================================================

export const createInquiry = async (inquiry: Omit<Inquiry, 'id' | 'status' | 'createdAt'>): Promise<string> => {
  return create<Inquiry>(COLLECTIONS.INQUIRIES, {
    ...inquiry,
    status: 'new',
    createdAt: Timestamp.now()
  } as Omit<Inquiry, 'id'>);
};

export const getUserInquiries = async (userId: string): Promise<Inquiry[]> => {
  const constraints = [
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  ];
  return getAll<Inquiry>(COLLECTIONS.INQUIRIES, constraints);
};

// ============================================================
// NOTIFICATIONS
// ============================================================

export const getUserNotifications = async (userId: string): Promise<Notification[]> => {
  const constraints = [
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  ];
  return getAll<Notification>(COLLECTIONS.NOTIFICATIONS, constraints);
};

export const markNotificationAsRead = async (notificationId: string): Promise<void> => {
  return update<Notification>(COLLECTIONS.NOTIFICATIONS, notificationId, { read: true });
};

// ============================================================
// SAVED ITEMS
// ============================================================

export const getSavedItems = async (userId: string, type?: SavedItemType): Promise<SavedItem[]> => {
  const constraints: QueryConstraint[] = [where('userId', '==', userId)];
  
  if (type) {
    constraints.push(where('itemType', '==', type));
  }
  
  constraints.push(orderBy('savedAt', 'desc'));
  
  return getAll<SavedItem>(COLLECTIONS.SAVED_ITEMS, constraints);
};

export const saveItem = async (userId: string, itemId: string, itemType: SavedItemType): Promise<string> => {
  return create<SavedItem>(COLLECTIONS.SAVED_ITEMS, {
    userId,
    itemId,
    itemType,
    savedAt: Timestamp.now()
  } as Omit<SavedItem, 'id'>);
};

export const unsaveItem = async (savedItemId: string): Promise<void> => {
  return remove(COLLECTIONS.SAVED_ITEMS, savedItemId);
};

// ============================================================
// CITIES
// ============================================================

export const getCities = async (): Promise<City[]> => {
  const constraints = [orderBy('name', 'asc')];
  return getAll<City>(COLLECTIONS.CITIES, constraints);
};

export const getFeaturedCities = async (): Promise<City[]> => {
  const constraints = [
    where('featured', '==', true),
    orderBy('propertyCount', 'desc')
  ];
  return getAll<City>(COLLECTIONS.CITIES, constraints);
};

// ============================================================
// TESTIMONIALS
// ============================================================

export const getTestimonials = async (): Promise<Testimonial[]> => {
  const constraints = [
    where('featured', '==', true),
    orderBy('createdAt', 'desc')
  ];
  return getAll<Testimonial>(COLLECTIONS.TESTIMONIALS, constraints);
};
