/**
 * Paystack Payment Integration
 * 
 * This file contains placeholder functions for Paystack payment integration.
 * Paystack is Nigeria's leading payment gateway.
 * 
 * To integrate Paystack:
 * 1. Create a Paystack account at https://paystack.com
 * 2. Get your API keys from the dashboard
 * 3. Install Paystack: npm install @paystack/inline-js
 * 4. Replace the placeholder config with your actual keys
 */

// Paystack configuration placeholder
export const paystackConfig = {
  publicKey: "YOUR_PAYSTACK_PUBLIC_KEY",
  currency: "NGN",
};

// Payment types
export interface PaymentData {
  email: string;
  amount: number; // Amount in kobo (1 NGN = 100 kobo)
  reference: string;
  metadata?: {
    propertyId?: string;
    propertyTitle?: string;
    customerId?: string;
    paymentType?: 'deposit' | 'full' | 'installment';
  };
}

export interface PaymentResponse {
  reference: string;
  status: 'success' | 'failed' | 'pending';
  transaction: string;
  message: string;
}

/**
 * Generate a unique payment reference
 */
export const generatePaymentReference = (): string => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `SPARK-${timestamp}-${random}`;
};

/**
 * Initialize a Paystack payment
 */
export const initializePayment = async (data: PaymentData): Promise<void> => {
  // Placeholder - implement with Paystack Inline JS
  console.log('Initializing payment:', data);
  throw new Error('Paystack not configured');
};

/**
 * Verify a payment on the server side
 * Note: This should be done on a secure backend (e.g., Firebase Cloud Functions)
 */
export const verifyPayment = async (reference: string): Promise<PaymentResponse> => {
  // Placeholder - implement with Paystack API on backend
  console.log('Verifying payment:', reference);
  throw new Error('Paystack not configured - verify on backend');
};

/**
 * Calculate property deposit amount (typically 30%)
 */
export const calculateDeposit = (propertyPrice: number): number => {
  return Math.round(propertyPrice * 0.3);
};

/**
 * Format amount for display (NGN)
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Convert amount to kobo for Paystack
 */
export const toKobo = (nairaAmount: number): number => {
  return nairaAmount * 100;
};

/**
 * Convert kobo to naira
 */
export const toNaira = (koboAmount: number): number => {
  return koboAmount / 100;
};
