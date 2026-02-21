/**
 * Firebase Authentication Utilities
 * Sparktech Designs - Building & Construction Company
 * 
 * This file contains authentication functions and hooks.
 * Ready to use when Firebase Auth is activated.
 */

import { auth, db } from './config';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut as firebaseSignOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile,
  User as FirebaseUser,
  UserCredential
} from 'firebase/auth';
import { doc, setDoc, getDoc, Timestamp } from 'firebase/firestore';
import { COLLECTIONS, User, UserRole, UserRoleType } from './firestore';

// ============================================================
// TYPES
// ============================================================

export interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  role: UserRoleType;
}

export interface SignUpData {
  email: string;
  password: string;
  displayName: string;
  phone?: string;
}

export interface SignInData {
  email: string;
  password: string;
}

// ============================================================
// AUTHENTICATION FUNCTIONS
// ============================================================

/**
 * Sign up a new user
 * Creates Firebase Auth account and Firestore user profile
 */
export const signUp = async (data: SignUpData): Promise<AuthUser> => {
  try {
    // Create Firebase Auth account
    const userCredential: UserCredential = await createUserWithEmailAndPassword(
      auth, 
      data.email, 
      data.password
    );
    
    const { user } = userCredential;
    
    // Update display name in Auth
    await updateProfile(user, {
      displayName: data.displayName
    });
    
    // Create user profile in Firestore
    const userProfile: Omit<User, 'id'> = {
      email: data.email,
      displayName: data.displayName,
      phone: data.phone,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
      preferences: {
        notifications: true,
        newsletter: false
      }
    };
    
    await setDoc(doc(db, COLLECTIONS.USERS, user.uid), userProfile);
    
    // Create default user role
    const userRole: Omit<UserRole, 'id'> = {
      userId: user.uid,
      role: 'user',
      grantedAt: Timestamp.now()
    };
    
    await setDoc(doc(db, COLLECTIONS.USER_ROLES, user.uid), userRole);
    
    return {
      uid: user.uid,
      email: user.email,
      displayName: data.displayName,
      photoURL: user.photoURL,
      role: 'user'
    };
  } catch (error) {
    console.error('Sign up error:', error);
    throw error;
  }
};

/**
 * Sign in an existing user
 */
export const signIn = async (data: SignInData): Promise<AuthUser> => {
  try {
    const userCredential: UserCredential = await signInWithEmailAndPassword(
      auth, 
      data.email, 
      data.password
    );
    
    const { user } = userCredential;
    
    // Update last login time
    await setDoc(doc(db, COLLECTIONS.USERS, user.uid), {
      lastLoginAt: Timestamp.now()
    }, { merge: true });
    
    // Get user role
    const role = await getUserRole(user.uid);
    
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      role
    };
  } catch (error) {
    console.error('Sign in error:', error);
    throw error;
  }
};

/**
 * Sign out current user
 */
export const signOut = async (): Promise<void> => {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error('Sign out error:', error);
    throw error;
  }
};

/**
 * Send password reset email
 */
export const resetPassword = async (email: string): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.error('Password reset error:', error);
    throw error;
  }
};

/**
 * Get current Firebase user
 */
export const getCurrentUser = (): FirebaseUser | null => {
  return auth.currentUser;
};

/**
 * Get user role from Firestore
 * IMPORTANT: Roles are stored separately for security
 */
export const getUserRole = async (userId: string): Promise<UserRoleType> => {
  try {
    const roleDoc = await getDoc(doc(db, COLLECTIONS.USER_ROLES, userId));
    if (roleDoc.exists()) {
      return roleDoc.data().role as UserRoleType;
    }
    return 'user'; // Default role
  } catch (error) {
    console.error('Error fetching user role:', error);
    return 'user';
  }
};

/**
 * Check if current user is admin
 * IMPORTANT: Never rely on client-side check alone
 * Security rules enforce this on the backend
 */
export const isAdmin = async (userId: string): Promise<boolean> => {
  const role = await getUserRole(userId);
  return role === 'admin';
};

/**
 * Get user profile from Firestore
 */
export const getUserProfile = async (userId: string): Promise<User | null> => {
  try {
    const userDoc = await getDoc(doc(db, COLLECTIONS.USERS, userId));
    if (userDoc.exists()) {
      return { id: userDoc.id, ...userDoc.data() } as User;
    }
    return null;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
};

/**
 * Update user profile
 */
export const updateUserProfile = async (
  userId: string, 
  data: Partial<Omit<User, 'id' | 'email' | 'createdAt'>>
): Promise<void> => {
  try {
    await setDoc(doc(db, COLLECTIONS.USERS, userId), {
      ...data,
      updatedAt: Timestamp.now()
    }, { merge: true });
    
    // Also update Auth profile if displayName changed
    if (data.displayName && auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: data.displayName
      });
    }
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

// ============================================================
// AUTH STATE OBSERVER
// ============================================================

/**
 * Subscribe to auth state changes
 * Returns unsubscribe function
 */
export const onAuthChange = (
  callback: (user: AuthUser | null) => void
): (() => void) => {
  return onAuthStateChanged(auth, async (firebaseUser) => {
    if (firebaseUser) {
      const role = await getUserRole(firebaseUser.uid);
      callback({
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
        photoURL: firebaseUser.photoURL,
        role
      });
    } else {
      callback(null);
    }
  });
};

// ============================================================
// AUTH ERROR MESSAGES
// ============================================================

export const getAuthErrorMessage = (errorCode: string): string => {
  const errorMessages: Record<string, string> = {
    'auth/email-already-in-use': 'This email is already registered. Please sign in instead.',
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/invalid-credential': 'Invalid email or password. Please check your credentials or register a new account.',
    'auth/operation-not-allowed': 'Email/password sign-in is not enabled. Please contact support.',
    'auth/weak-password': 'Password should be at least 6 characters.',
    'auth/user-disabled': 'This account has been disabled.',
    'auth/user-not-found': 'No account found with this email. Please register first.',
    'auth/wrong-password': 'Incorrect password. Please try again.',
    'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
    'auth/network-request-failed': 'Network error. Please check your connection.',
    'auth/popup-closed-by-user': 'Sign-in popup was closed.',
    'auth/requires-recent-login': 'Please sign in again to complete this action.',
  };
  
  return errorMessages[errorCode] || 'An error occurred. Please try again.';
};
