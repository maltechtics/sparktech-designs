/**
 * Firebase Configuration
 * Sparktech Designs Firebase Integration
 */

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChxmnhYE_SL_cVS8TwBId9OElu3ntp76s",
  authDomain: "sparktech-5582d.firebaseapp.com",
  projectId: "sparktech-5582d",
  storageBucket: "sparktech-5582d.firebasestorage.app",
  messagingSenderId: "515760731390",
  appId: "1:515760731390:web:1da9469a03de9ceed6a1af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export { firebaseConfig };
export default app;
