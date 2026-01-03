# Supabase + Stripe Setup Guide

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Fill in:
   - **Name**: AI-gorithms
   - **Database Password**: (save this securely)
   - **Region**: Choose closest to your users
4. Wait for project to be created (~2 minutes)

## Step 2: Get Supabase Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role key** → `SUPABASE_SERVICE_ROLE_KEY` (keep this secret!)

## Step 3: Set Up Database Schema

1. In Supabase dashboard, go to **SQL Editor**
2. Copy the contents of `supabase/schema.sql`
3. Paste and run the SQL script
4. This creates:
   - `profiles` table (user profiles)
   - `stripe_customers` table (Stripe customer IDs)
   - `subscriptions` table (subscription data)
   - Row Level Security (RLS) policies
   - Auto-profile creation trigger

## Step 4: Enable Google OAuth (Optional but Recommended)

1. Go to **Authentication** → **Providers** in Supabase
2. Enable **Google**
3. Add your Google OAuth credentials:
   - Get credentials from [Google Cloud Console](https://console.cloud.google.com)
   - Add authorized redirect URI: `https://your-project-ref.supabase.co/auth/v1/callback`

## Step 5: Create Stripe Account

1. Go to [stripe.com](https://stripe.com) and sign up
2. Get your API keys from **Developers** → **API keys**
3. Copy:
   - **Publishable key** → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - **Secret key** → `STRIPE_SECRET_KEY`

## Step 6: Set Up Stripe Products & Prices

1. In Stripe Dashboard, go to **Products**
2. Create products for your plans:
   - **Fast Track Plan** (monthly/annual)
   - **Mastery Plan** (monthly/annual)
3. Copy the **Price IDs** (starts with `price_...`)
4. You'll use these in your pricing page

## Step 7: Configure Stripe Webhook

1. In Stripe Dashboard, go to **Developers** → **Webhooks**
2. Click **Add endpoint**
3. Endpoint URL: `https://your-domain.com/api/stripe/webhook`
4. Select events to listen to:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Copy the **Signing secret** → `STRIPE_WEBHOOK_SECRET`

## Step 8: Environment Variables

Create a `.env.local` file in your project root:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Step 9: Test the Setup

1. Run `npm run dev`
2. Navigate to `/login`
3. Try signing up with email/password
4. Check Supabase **Authentication** → **Users** to see the new user
5. Check **Table Editor** → **profiles** to see the auto-created profile

## Step 10: Update Stripe API Version

The Stripe server file uses API version `2024-12-18.acacia`. Update it if needed:

- Check [Stripe API Changelog](https://stripe.com/docs/upgrades) for latest version
- Update `lib/stripe/server.ts` if you want a different version

## Troubleshooting

### "Invalid API key" error

- Make sure all environment variables are set correctly
- Restart your dev server after adding env vars

### Webhook not working

- Make sure webhook URL is accessible (use ngrok for local testing)
- Check Stripe webhook logs for errors
- Verify `STRIPE_WEBHOOK_SECRET` matches your webhook endpoint

### RLS (Row Level Security) blocking queries

- Check that RLS policies are created correctly
- Verify user is authenticated when querying protected tables

### Profile not created automatically

- Check Supabase **Database** → **Functions** to see if trigger exists
- Verify trigger is enabled and function is correct

## Next Steps

1. Create pricing page with Stripe Checkout integration
2. Add subscription status checks to protect premium content
3. Set up customer portal for subscription management
4. Add email templates for subscription events
