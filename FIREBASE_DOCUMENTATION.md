# 🔥 Firebase Integration Documentation
## Sparktech Designs - Building & Construction Company Website

> **Status**: Firebase-Ready (Not Yet Activated)
> **Last Updated**: January 2026

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Firebase Configuration](#firebase-configuration)
3. [Firestore Database Structure](#firestore-database-structure)
4. [Security Rules](#security-rules)
5. [Role-Based Access Control](#role-based-access-control)
6. [Firebase Storage Structure](#firebase-storage-structure)
7. [Authentication Flow](#authentication-flow)
8. [Real-Time Notifications](#real-time-notifications)
9. [Best Practices](#best-practices)
10. [Activation Checklist](#activation-checklist)
11. [Risks & Warnings](#risks--warnings)

---

## 📖 Overview

This website is designed to be **Firebase-ready** without requiring Firebase for basic functionality. All pages work independently, and Firebase enhances the user experience when activated.

### Current State
- ✅ Firebase SDK installed and configured
- ✅ Utility functions prepared with placeholders
- ✅ Data structures designed for Firestore
- ✅ Security rules documented
- ✅ Dashboard routes prepared
- ⏳ Firebase features not activated (intentional)

---

## 🔧 Firebase Configuration

### Config Location
`src/lib/firebase/config.ts`

```typescript
const firebaseConfig = {
  apiKey: "AIzaSyChxmnhYE_SL_cVS8TwBId9OElu3ntp76s",
  authDomain: "sparktech-5582d.firebaseapp.com",
  projectId: "sparktech-5582d",
  storageBucket: "sparktech-5582d.firebasestorage.app",
  messagingSenderId: "515760731390",
  appId: "1:515760731390:web:1da9469a03de9ceed6a1af"
};
```

### Exported Services
- `auth` - Firebase Authentication
- `db` - Firestore Database
- `storage` - Firebase Storage

---

## 🗄️ Firestore Database Structure

### Collection: `users`
Stores registered user profiles.

```typescript
interface User {
  id: string;                    // Firebase Auth UID
  email: string;                 // User email
  displayName: string;           // Full name
  phone?: string;                // Phone number
  avatar?: string;               // Storage URL
  createdAt: Timestamp;          // Registration date
  updatedAt: Timestamp;          // Last update
  lastLoginAt?: Timestamp;       // Last login
  preferences: {
    notifications: boolean;      // Email notifications
    newsletter: boolean;         // Newsletter subscription
  };
}
```

### Collection: `user_roles`
**CRITICAL**: Roles stored separately for security.

```typescript
interface UserRole {
  id: string;                    // Auto-generated
  userId: string;                // Reference to user
  role: 'guest' | 'user' | 'admin';
  grantedAt: Timestamp;
  grantedBy?: string;            // Admin who granted
}
```

### Collection: `projects`
Company construction projects.

```typescript
interface Project {
  id: string;
  slug: string;                  // URL-friendly identifier
  title: string;
  description: string;
  fullDescription: string;       // Rich text/HTML
  type: 'residential' | 'commercial' | 'renovation' | 'luxury';
  status: 'planning' | 'ongoing' | 'completed';
  location: string;
  city: string;
  year: number;
  size: string;                  // e.g., "5,000 sqm"
  client?: string;
  duration?: string;
  budget?: string;
  purpose: string;
  scope: string;
  features: string[];
  images: string[];              // Storage URLs
  gallery: string[];             // Additional images
  featured: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  createdBy: string;             // Admin user ID
}
```

### Collection: `properties`
Real estate listings.

```typescript
interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  priceLabel: string;           // "₦45,000,000"
  location: string;
  city: string;
  type: 'house' | 'apartment' | 'land' | 'commercial' | 'villa';
  status: 'available' | 'unavailable' | 'sold';
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  images: string[];
  featured: boolean;
  amenities: string[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

### Collection: `services`
Company services offered.

```typescript
interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;                  // Lucide icon name
  images: string[];
  galleryImages: string[];
  features: string[];
  process: { step: string; description: string }[];
  benefits: string[];
  order: number;                 // Display order
  active: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

### Collection: `blogPosts`
Blog articles.

```typescript
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;               // Rich text/Markdown
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
```

### Collection: `inquiries`
Contact form submissions & property inquiries.

```typescript
interface Inquiry {
  id: string;
  type: 'general' | 'property' | 'project' | 'quote' | 'career';
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  referenceId?: string;          // Property/Project ID
  referenceType?: string;        // 'property' | 'project'
  status: 'new' | 'read' | 'replied' | 'closed';
  userId?: string;               // If logged in
  createdAt: Timestamp;
  repliedAt?: Timestamp;
  repliedBy?: string;
}
```

### Collection: `jobApplications`
Career applications.

```typescript
interface JobApplication {
  id: string;
  positionId: string;
  positionTitle: string;
  name: string;
  email: string;
  phone: string;
  resumeUrl?: string;            // Storage URL
  coverLetter?: string;
  linkedIn?: string;
  portfolio?: string;
  status: 'pending' | 'reviewing' | 'interviewed' | 'hired' | 'rejected';
  createdAt: Timestamp;
  updatedAt: Timestamp;
  reviewedBy?: string;
  notes?: string;                // Admin notes
}
```

### Collection: `notifications`
User notifications.

```typescript
interface Notification {
  id: string;
  userId: string;
  type: 'project_update' | 'property_available' | 'blog_post' | 'inquiry_reply' | 'system';
  title: string;
  message: string;
  link?: string;
  read: boolean;
  createdAt: Timestamp;
}
```

### Collection: `savedItems`
User favorites/bookmarks.

```typescript
interface SavedItem {
  id: string;
  userId: string;
  itemId: string;
  itemType: 'project' | 'property' | 'blog';
  savedAt: Timestamp;
}
```

### Collection: `cities`
Supported locations/cities.

```typescript
interface City {
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
```

---

## 🔐 Security Rules

### Firestore Rules (`firestore.rules`)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // ========================================
    // HELPER FUNCTIONS
    // ========================================
    
    // Check if user is authenticated
    function isAuthenticated() {
      return request.auth != null;
    }
    
    // Check if user owns this document
    function isOwner(userId) {
      return isAuthenticated() && request.auth.uid == userId;
    }
    
    // Check if user has admin role
    function isAdmin() {
      return isAuthenticated() && 
        exists(/databases/$(database)/documents/user_roles/$(request.auth.uid)) &&
        get(/databases/$(database)/documents/user_roles/$(request.auth.uid)).data.role == 'admin';
    }
    
    // ========================================
    // USER PROFILES
    // ========================================
    match /users/{userId} {
      // Users can read their own profile
      // Admins can read all profiles
      allow read: if isOwner(userId) || isAdmin();
      
      // Users can create their own profile on signup
      allow create: if isOwner(userId);
      
      // Users can update their own profile
      allow update: if isOwner(userId);
      
      // Only admins can delete profiles
      allow delete: if isAdmin();
    }
    
    // ========================================
    // USER ROLES (Critical Security)
    // ========================================
    match /user_roles/{roleId} {
      // Only admins can read roles
      allow read: if isAdmin();
      
      // Only admins can create/update/delete roles
      allow write: if isAdmin();
    }
    
    // ========================================
    // PROJECTS (Public Read)
    // ========================================
    match /projects/{projectId} {
      // Anyone can read projects
      allow read: if true;
      
      // Only admins can write
      allow write: if isAdmin();
    }
    
    // ========================================
    // PROPERTIES (Public Read)
    // ========================================
    match /properties/{propertyId} {
      // Anyone can read properties
      allow read: if true;
      
      // Only admins can write
      allow write: if isAdmin();
    }
    
    // ========================================
    // SERVICES (Public Read)
    // ========================================
    match /services/{serviceId} {
      // Anyone can read services
      allow read: if true;
      
      // Only admins can write
      allow write: if isAdmin();
    }
    
    // ========================================
    // BLOG POSTS (Public Read for Published)
    // ========================================
    match /blogPosts/{postId} {
      // Anyone can read published posts
      // Admins can read all posts
      allow read: if resource.data.published == true || isAdmin();
      
      // Only admins can write
      allow write: if isAdmin();
    }
    
    // ========================================
    // INQUIRIES
    // ========================================
    match /inquiries/{inquiryId} {
      // Users can read their own inquiries
      // Admins can read all
      allow read: if isOwner(resource.data.userId) || isAdmin();
      
      // Anyone can create an inquiry (contact form)
      allow create: if true;
      
      // Only admins can update/delete
      allow update, delete: if isAdmin();
    }
    
    // ========================================
    // JOB APPLICATIONS
    // ========================================
    match /jobApplications/{appId} {
      // Users can read their own applications
      // Admins can read all
      allow read: if isOwner(resource.data.userId) || isAdmin();
      
      // Anyone can create an application
      allow create: if true;
      
      // Only admins can update/delete
      allow update, delete: if isAdmin();
    }
    
    // ========================================
    // NOTIFICATIONS
    // ========================================
    match /notifications/{notifId} {
      // Users can only read their own notifications
      allow read: if isOwner(resource.data.userId);
      
      // Users can update (mark as read) their own
      allow update: if isOwner(resource.data.userId);
      
      // Only admins/system can create
      allow create: if isAdmin();
      
      // Users can delete their own, admins can delete any
      allow delete: if isOwner(resource.data.userId) || isAdmin();
    }
    
    // ========================================
    // SAVED ITEMS
    // ========================================
    match /savedItems/{itemId} {
      // Users can only access their own saved items
      allow read, write: if isOwner(resource.data.userId) || 
                           (request.auth != null && request.resource.data.userId == request.auth.uid);
    }
    
    // ========================================
    // CITIES (Public Read)
    // ========================================
    match /cities/{cityId} {
      allow read: if true;
      allow write: if isAdmin();
    }
  }
}
```

---

## 👥 Role-Based Access Control

### Role Definitions

| Role | Description |
|------|-------------|
| `guest` | Not logged in - public visitor |
| `user` | Logged in user with account |
| `admin` | Company staff with full access |

### Access Matrix

| Resource | Guest | User | Admin |
|----------|-------|------|-------|
| **Projects** | Read ✅ | Read ✅ | Full ✅ |
| **Properties** | Read ✅ | Read ✅ | Full ✅ |
| **Services** | Read ✅ | Read ✅ | Full ✅ |
| **Blog (Published)** | Read ✅ | Read ✅ | Full ✅ |
| **Blog (Draft)** | ❌ | ❌ | Full ✅ |
| **Own Profile** | ❌ | Full ✅ | Full ✅ |
| **Other Profiles** | ❌ | ❌ | Read ✅ |
| **Submit Inquiry** | ✅ | ✅ | ✅ |
| **View Own Inquiries** | ❌ | ✅ | All ✅ |
| **Save Items** | ❌ | ✅ | ✅ |
| **Notifications** | ❌ | Own ✅ | All ✅ |
| **User Roles** | ❌ | ❌ | Full ✅ |

### Page Access

| Page | Guest | User | Admin |
|------|-------|------|-------|
| Home | ✅ | ✅ | ✅ |
| Projects | ✅ | ✅ | ✅ |
| Properties | ✅ | ✅ | ✅ |
| Services | ✅ | ✅ | ✅ |
| Blog | ✅ | ✅ | ✅ |
| About/Contact | ✅ | ✅ | ✅ |
| Login/Register | ✅ | ❌ | ❌ |
| Dashboard | ❌ | ✅ | ✅ |
| Saved Items | ❌ | ✅ | ✅ |
| My Inquiries | ❌ | ✅ | ✅ |
| Notifications | ❌ | ✅ | ✅ |
| Admin Panel | ❌ | ❌ | ✅ |

---

## 📁 Firebase Storage Structure

### Folder Organization

```
sparktech-5582d.firebasestorage.app/
├── projects/
│   ├── {projectId}/
│   │   ├── main.jpg              # Primary image
│   │   ├── gallery/
│   │   │   ├── 001.jpg
│   │   │   ├── 002.jpg
│   │   │   └── ...
│   │   └── documents/
│   │       └── spec.pdf
│
├── properties/
│   ├── {propertyId}/
│   │   ├── main.jpg
│   │   ├── gallery/
│   │   │   ├── 001.jpg
│   │   │   └── ...
│   │   └── floor-plans/
│   │       └── plan.pdf
│
├── services/
│   ├── {serviceId}/
│   │   ├── main.jpg
│   │   └── gallery/
│   │       └── ...
│
├── blog/
│   ├── {postId}/
│   │   ├── featured.jpg
│   │   └── content/
│   │       └── ...
│
├── team/
│   ├── {memberId}.jpg
│   └── ...
│
├── users/
│   ├── {userId}/
│   │   └── avatar.jpg
│
├── applications/
│   ├── {applicationId}/
│   │   └── resume.pdf
│
└── general/
    ├── logo.png
    ├── favicon.png
    └── og-image.jpg
```

### File Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Project Main | `main.jpg` | `projects/abc123/main.jpg` |
| Gallery | `001.jpg`, `002.jpg` | `projects/abc123/gallery/001.jpg` |
| User Avatar | `avatar.jpg` | `users/uid123/avatar.jpg` |
| Team Photo | `{memberId}.jpg` | `team/ceo.jpg` |
| Resume | `resume.pdf` | `applications/app123/resume.pdf` |

### Storage Security Rules

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    
    // Public read for project/property/service/blog images
    match /projects/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && 
        firestore.exists(/databases/(default)/documents/user_roles/$(request.auth.uid));
    }
    
    match /properties/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    match /services/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    match /blog/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    match /team/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // User avatars - users can manage their own
    match /users/{userId}/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Applications - private
    match /applications/{appId}/{allPaths=**} {
      allow read: if request.auth != null;
      allow write: if true; // Anyone can upload resume
    }
    
    // General assets - public read, admin write
    match /general/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

---

## 🔑 Authentication Flow

### Registration Flow
1. User fills registration form
2. Firebase Auth creates account
3. Trigger creates user document in `users` collection
4. Default role assigned in `user_roles` (role: 'user')
5. Welcome notification created
6. Redirect to dashboard

### Login Flow
1. User enters credentials
2. Firebase Auth validates
3. Fetch user profile from `users`
4. Fetch role from `user_roles`
5. Update `lastLoginAt`
6. Redirect based on role:
   - `admin` → `/admin/dashboard`
   - `user` → `/dashboard`

### Password Reset
1. User requests reset
2. Firebase sends email
3. User clicks link
4. User sets new password
5. Redirect to login

---

## 🔔 Real-Time Notifications (Future)

### Notification Triggers

| Event | Notification Type | Recipients |
|-------|------------------|------------|
| New project added | `project_update` | All users with notifications enabled |
| Property becomes available | `property_available` | Users who saved it |
| New blog post | `blog_post` | Newsletter subscribers |
| Inquiry replied | `inquiry_reply` | Inquiry submitter |
| Application status change | `application_update` | Applicant |

### Implementation Pattern

```typescript
// Listen to project changes
const unsubscribe = onSnapshot(
  query(collection(db, 'projects'), orderBy('createdAt', 'desc'), limit(1)),
  (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        // Create notifications for subscribed users
      }
    });
  }
);
```

---

## ✅ Best Practices

### Data Fetching
1. Use React Query for caching
2. Implement pagination for lists
3. Use `where` queries for filtering
4. Index frequently queried fields

### Security
1. **Never store roles on user document** - use separate `user_roles` collection
2. **Never check admin status client-side** - always verify in security rules
3. **Validate all user input** before writing
4. **Use security rules** for all access control

### Performance
1. Use `limit()` for large collections
2. Implement infinite scroll for lists
3. Cache static data locally
4. Use Cloud Functions for heavy operations

### Image Handling
1. Resize images before upload
2. Use WebP format when possible
3. Implement lazy loading
4. Generate thumbnails with Cloud Functions

---

## 📋 Activation Checklist

When ready to activate Firebase:

### Phase 1: Authentication
- [ ] Enable Email/Password auth in Firebase Console
- [ ] Test registration flow
- [ ] Test login flow
- [ ] Test password reset
- [ ] Verify `users` collection creation

### Phase 2: Firestore
- [ ] Deploy security rules
- [ ] Create indexes for queries
- [ ] Migrate existing data to Firestore
- [ ] Test CRUD operations
- [ ] Verify role-based access

### Phase 3: Storage
- [ ] Configure storage rules
- [ ] Upload existing images
- [ ] Test upload functionality
- [ ] Verify public/private access

### Phase 4: Admin
- [ ] Create initial admin account
- [ ] Assign admin role manually
- [ ] Test admin dashboard
- [ ] Verify admin-only features

### Phase 5: Testing
- [ ] Test as guest user
- [ ] Test as logged-in user
- [ ] Test as admin
- [ ] Verify all security rules
- [ ] Load testing

---

## ⚠️ Risks & Warnings

### Security Risks to Avoid

1. **Role in User Document**
   - ❌ Don't store role in `users` document
   - ✅ Use separate `user_roles` collection
   - Reason: Users could modify their own role

2. **Client-Side Admin Check**
   - ❌ Don't check `localStorage` for admin
   - ✅ Always verify in Firestore security rules
   - Reason: Client storage can be manipulated

3. **Hardcoded Admin List**
   - ❌ Don't hardcode admin UIDs in code
   - ✅ Use database-driven roles
   - Reason: Code can be inspected

4. **Open Write Rules**
   - ❌ Don't allow public writes to content
   - ✅ Require authentication for writes
   - Reason: Spam and data corruption

### Performance Risks

1. **Large Collection Reads**
   - ❌ Don't fetch entire collections
   - ✅ Use pagination and limits
   - Reason: Costs and performance

2. **No Indexing**
   - ❌ Don't query without indexes
   - ✅ Create composite indexes
   - Reason: Query failures in production

### Data Integrity Risks

1. **No Validation**
   - ❌ Don't trust client data
   - ✅ Validate in security rules
   - Reason: Corrupted data

2. **No Backups**
   - ❌ Don't rely on single source
   - ✅ Enable automatic backups
   - Reason: Data loss

---

## 📞 Support

For Firebase integration support:
- Firebase Console: https://console.firebase.google.com
- Documentation: https://firebase.google.com/docs
- Project ID: `sparktech-5582d`

---

*This documentation should be reviewed and updated when Firebase is fully activated.*
