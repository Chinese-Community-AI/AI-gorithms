# Supabase + Stripe Integration - Complete Setup

## ✅ What's Been Set Up

### 1. **Packages Installed**

- `@supabase/supabase-js` - Supabase client
- `@supabase/ssr` - Server-side rendering support
- `stripe` - Stripe server SDK
- `@stripe/stripe-js` - Stripe client SDK

### 2. **Supabase Configuration**

- ✅ Client utilities (`lib/supabase/client.ts`)
- ✅ Server utilities (`lib/supabase/server.ts`)
- ✅ Middleware helper (`lib/supabase/middleware.ts`)
- ✅ Auth context (`contexts/AuthContext.tsx`)
- ✅ Login page (`app/login/page.tsx`)
- ✅ Auth callback route (`app/api/auth/callback/route.ts`)
- ✅ Logout route (`app/api/auth/logout/route.ts`)

### 3. **Stripe Integration**

- ✅ Stripe client (`lib/stripe/client.ts`)
- ✅ Stripe server (`lib/stripe/server.ts`)
- ✅ Checkout creation API (`app/api/stripe/create-checkout/route.ts`)
- ✅ Customer portal API (`app/api/stripe/create-portal/route.ts`)
- ✅ Webhook handler (`app/api/stripe/webhook/route.ts`)
- ✅ Subscription utilities (`lib/utils/subscription.ts`)

### 4. **Database Schema**

- ✅ SQL schema file (`supabase/schema.sql`)
  - `profiles` table
  - `stripe_customers` table
  - `subscriptions` table
  - Row Level Security (RLS) policies
  - Auto-profile creation trigger

### 5. **UI Updates**

- ✅ Header login button now uses auth
- ✅ AuthProvider added to root layout
- ✅ Middleware for route protection

## 📋 Next Steps

### Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Copy your credentials (see `SUPABASE_SETUP.md`)

### Step 2: Run Database Schema

1. Open Supabase Dashboard → SQL Editor
2. Copy and run `supabase/schema.sql`

### Step 3: Set Up Stripe

1. Create Stripe account
2. Create products and prices
3. Set up webhook endpoint
4. Copy API keys (see `SUPABASE_SETUP.md`)

### Step 4: Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_key
STRIPE_SECRET_KEY=your_key
STRIPE_WEBHOOK_SECRET=your_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Step 5: Test

1. Run `npm run dev`
2. Go to `/login`
3. Sign up with email or Google
4. Test subscription flow

## 🔒 Security Notes

- **Never commit** `.env.local` (already in `.gitignore`)
- **Service Role Key** should only be used server-side
- **Webhook Secret** must match Stripe webhook configuration
- **RLS Policies** protect user data - don't disable without good reason

## 📚 Documentation Files

- `SUPABASE_SETUP.md` - Detailed Supabase setup guide
- `STRIPE_INTEGRATION_EXAMPLE.md` - Code examples for using Stripe
- `supabase/schema.sql` - Database schema to run in Supabase

## 🚀 Usage Examples

See `STRIPE_INTEGRATION_EXAMPLE.md` for:

- Creating checkout sessions
- Checking subscription status
- Managing subscriptions via customer portal
- Protecting premium content

## 🐛 Troubleshooting

**Auth not working?**

- Check environment variables are set
- Verify Supabase project is active
- Check browser console for errors

**Webhook not receiving events?**

- Verify webhook URL is correct in Stripe dashboard
- Check `STRIPE_WEBHOOK_SECRET` matches
- Use Stripe CLI for local testing

**Database errors?**

- Ensure schema.sql was run successfully
- Check RLS policies are enabled
- Verify user is authenticated when querying
