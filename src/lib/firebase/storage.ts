/**
 * Firebase Storage Utilities
 * Sparktech Designs - Building & Construction Company
 * 
 * This file contains storage functions for file uploads.
 * Ready to use when Firebase Storage is activated.
 */

import { storage } from './config';
import { 
  ref, 
  uploadBytes, 
  uploadBytesResumable,
  getDownloadURL, 
  deleteObject,
  listAll,
  UploadTaskSnapshot,
  UploadTask
} from 'firebase/storage';

// ============================================================
// STORAGE PATHS
// ============================================================

export const STORAGE_PATHS = {
  PROJECTS: 'projects',
  PROPERTIES: 'properties',
  SERVICES: 'services',
  BLOG: 'blog',
  TEAM: 'team',
  USERS: 'users',
  APPLICATIONS: 'applications',
  GENERAL: 'general',
  TEMP: 'temp',
} as const;

// ============================================================
// TYPES
// ============================================================

export interface UploadProgress {
  progress: number;
  bytesTransferred: number;
  totalBytes: number;
}

export interface UploadResult {
  url: string;
  path: string;
  name: string;
}

export type StorageFolder = typeof STORAGE_PATHS[keyof typeof STORAGE_PATHS];

// ============================================================
// FILE NAMING UTILITIES
// ============================================================

/**
 * Generate a unique filename
 */
export const generateFileName = (originalName: string): string => {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 8);
  const extension = originalName.split('.').pop()?.toLowerCase() || '';
  return `${timestamp}-${randomString}.${extension}`;
};

/**
 * Get file extension
 */
export const getFileExtension = (filename: string): string => {
  return filename.split('.').pop()?.toLowerCase() || '';
};

/**
 * Check if file is an image
 */
export const isImageFile = (file: File): boolean => {
  return file.type.startsWith('image/');
};

/**
 * Check if file is a PDF
 */
export const isPDFFile = (file: File): boolean => {
  return file.type === 'application/pdf';
};

/**
 * Validate file size (in bytes)
 */
export const validateFileSize = (file: File, maxSize: number): boolean => {
  return file.size <= maxSize;
};

// ============================================================
// UPLOAD FUNCTIONS
// ============================================================

/**
 * Upload a file to Firebase Storage
 * @param file - The file to upload
 * @param folder - The storage folder (e.g., 'projects', 'properties')
 * @param subfolder - Optional subfolder (e.g., project ID)
 * @param customName - Optional custom filename
 */
export const uploadFile = async (
  file: File,
  folder: StorageFolder,
  subfolder?: string,
  customName?: string
): Promise<UploadResult> => {
  try {
    const fileName = customName || generateFileName(file.name);
    const path = subfolder 
      ? `${folder}/${subfolder}/${fileName}`
      : `${folder}/${fileName}`;
    
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);
    
    return {
      url,
      path,
      name: fileName
    };
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
};

/**
 * Upload a file with progress tracking
 */
export const uploadFileWithProgress = (
  file: File,
  folder: StorageFolder,
  subfolder?: string,
  onProgress?: (progress: UploadProgress) => void
): Promise<UploadResult> => {
  return new Promise((resolve, reject) => {
    const fileName = generateFileName(file.name);
    const path = subfolder 
      ? `${folder}/${subfolder}/${fileName}`
      : `${folder}/${fileName}`;
    
    const storageRef = ref(storage, path);
    const uploadTask: UploadTask = uploadBytesResumable(storageRef, file);
    
    uploadTask.on(
      'state_changed',
      (snapshot: UploadTaskSnapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        onProgress?.({
          progress,
          bytesTransferred: snapshot.bytesTransferred,
          totalBytes: snapshot.totalBytes
        });
      },
      (error) => {
        console.error('Upload error:', error);
        reject(error);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        resolve({
          url,
          path,
          name: fileName
        });
      }
    );
  });
};

/**
 * Upload multiple files
 */
export const uploadMultipleFiles = async (
  files: File[],
  folder: StorageFolder,
  subfolder?: string,
  onProgress?: (fileIndex: number, progress: UploadProgress) => void
): Promise<UploadResult[]> => {
  const results: UploadResult[] = [];
  
  for (let i = 0; i < files.length; i++) {
    const result = await uploadFileWithProgress(
      files[i],
      folder,
      subfolder,
      (progress) => onProgress?.(i, progress)
    );
    results.push(result);
  }
  
  return results;
};

// Legacy function names for backwards compatibility
export const uploadImage = uploadFile;
export const uploadImages = async (
  files: File[], 
  basePath: string
): Promise<string[]> => {
  const results = await uploadMultipleFiles(files, basePath as StorageFolder);
  return results.map(r => r.url);
};

// ============================================================
// DELETE FUNCTIONS
// ============================================================

/**
 * Delete a file from Firebase Storage
 */
export const deleteFile = async (path: string): Promise<void> => {
  try {
    const storageRef = ref(storage, path);
    await deleteObject(storageRef);
  } catch (error) {
    console.error('Delete error:', error);
    throw error;
  }
};

/**
 * Delete multiple files
 */
export const deleteMultipleFiles = async (paths: string[]): Promise<void> => {
  await Promise.all(paths.map(path => deleteFile(path)));
};

// Legacy function name
export const deleteImage = deleteFile;

// ============================================================
// URL FUNCTIONS
// ============================================================

/**
 * Get download URL for a file
 */
export const getFileUrl = async (path: string): Promise<string> => {
  try {
    const storageRef = ref(storage, path);
    return await getDownloadURL(storageRef);
  } catch (error) {
    console.error('Get URL error:', error);
    throw error;
  }
};

/**
 * List all files in a folder
 */
export const listFiles = async (
  folder: StorageFolder,
  subfolder?: string
): Promise<{ name: string; path: string }[]> => {
  try {
    const path = subfolder ? `${folder}/${subfolder}` : folder;
    const storageRef = ref(storage, path);
    const result = await listAll(storageRef);
    
    return result.items.map(item => ({
      name: item.name,
      path: item.fullPath
    }));
  } catch (error) {
    console.error('List files error:', error);
    throw error;
  }
};

// Legacy function name
export const getImagesInFolder = async (folderPath: string): Promise<string[]> => {
  const files = await listFiles(folderPath as StorageFolder);
  const urls = await Promise.all(files.map(f => getFileUrl(f.path)));
  return urls;
};

// ============================================================
// IMAGE PROCESSING (Client-side)
// ============================================================

/**
 * Resize image before upload (client-side)
 */
export const resizeImage = (
  file: File,
  maxWidth: number = 1920,
  maxHeight: number = 1080,
  quality: number = 0.8
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let { width, height } = img;
        
        // Calculate new dimensions
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }
        if (height > maxHeight) {
          width = (width * maxHeight) / height;
          height = maxHeight;
        }
        
        canvas.width = width;
        canvas.height = height;
        
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);
        
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('Failed to resize image'));
            }
          },
          'image/jpeg',
          quality
        );
      };
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = e.target?.result as string;
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
};

/**
 * Create thumbnail from image
 */
export const createThumbnail = async (
  file: File,
  size: number = 200
): Promise<Blob> => {
  return resizeImage(file, size, size, 0.7);
};

// ============================================================
// STORAGE PATH BUILDERS
// ============================================================

/**
 * Build storage path for project images
 */
export const getProjectImagePath = (
  projectId: string,
  type: 'main' | 'gallery' = 'gallery',
  filename?: string
): string => {
  if (type === 'main') {
    return `${STORAGE_PATHS.PROJECTS}/${projectId}/main.jpg`;
  }
  return `${STORAGE_PATHS.PROJECTS}/${projectId}/gallery/${filename || ''}`;
};

/**
 * Build storage path for property images
 */
export const getPropertyImagePath = (
  propertyId: string,
  type: 'main' | 'gallery' | 'floor-plans' = 'gallery',
  filename?: string
): string => {
  if (type === 'main') {
    return `${STORAGE_PATHS.PROPERTIES}/${propertyId}/main.jpg`;
  }
  return `${STORAGE_PATHS.PROPERTIES}/${propertyId}/${type}/${filename || ''}`;
};

/**
 * Build storage path for user avatar
 */
export const getUserAvatarPath = (userId: string): string => {
  return `${STORAGE_PATHS.USERS}/${userId}/avatar.jpg`;
};

/**
 * Build storage path for team member photo
 */
export const getTeamMemberPhotoPath = (memberId: string): string => {
  return `${STORAGE_PATHS.TEAM}/${memberId}.jpg`;
};

/**
 * Build storage path for blog images
 */
export const getBlogImagePath = (
  postId: string,
  type: 'featured' | 'content' = 'content',
  filename?: string
): string => {
  if (type === 'featured') {
    return `${STORAGE_PATHS.BLOG}/${postId}/featured.jpg`;
  }
  return `${STORAGE_PATHS.BLOG}/${postId}/content/${filename || ''}`;
};

/**
 * Build storage path for job application resume
 */
export const getApplicationResumePath = (applicationId: string): string => {
  return `${STORAGE_PATHS.APPLICATIONS}/${applicationId}/resume.pdf`;
};
