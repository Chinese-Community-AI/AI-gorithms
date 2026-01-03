/**
 * Example Stripe Price IDs
 *
 * Replace these with your actual Stripe Price IDs from your Stripe Dashboard
 *
 * To get your Price IDs:
 * 1. Go to Stripe Dashboard → Products
 * 2. Click on a product
 * 3. Copy the Price ID (starts with price_...)
 */

export const STRIPE_PRICES = {
  // Fast Track Plan
  FAST_TRACK_MONTHLY: "price_xxxxxxxxxxxxx", // Replace with your actual price ID
  FAST_TRACK_YEARLY: "price_xxxxxxxxxxxxx", // Replace with your actual price ID

  // Mastery Plan
  MASTERY_MONTHLY: "price_xxxxxxxxxxxxx", // Replace with your actual price ID
  MASTERY_YEARLY: "price_xxxxxxxxxxxxx", // Replace with your actual price ID
} as const;
