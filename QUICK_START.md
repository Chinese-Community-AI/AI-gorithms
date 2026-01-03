# Quick Start Checklist

## ✅ Code Setup (Already Done!)

- [x] Packages installed
- [x] Supabase client configured
- [x] Stripe integration created
- [x] Database schema ready
- [x] Auth system implemented
- [x] API routes created

## 📝 Your Action Items

### 1. Supabase Setup (5 minutes)

- [ ] Create account at [supabase.com](https://supabase.com)
- [ ] Create new project
- [ ] Copy Project URL → `NEXT_PUBLIC_SUPABASE_URL`
- [ ] Copy anon key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Copy service_role key → `SUPABASE_SERVICE_ROLE_KEY`
- [ ] Go to SQL Editor, paste `supabase/schema.sql`, run it
- [ ] (Optional) Enable Google OAuth in Authentication → Providers

### 2. Stripe Setup (10 minutes)

- [ ] Create account at [stripe.com](https://stripe.com)
- [ ] Copy Publishable key → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- [ ] Copy Secret key → `STRIPE_SECRET_KEY`
- [ ] Create products in Stripe Dashboard:
  - Fast Track Plan (monthly & yearly)
  - Mastery Plan (monthly & yearly)
- [ ] Copy Price IDs (starts with `price_...`)
- [ ] Set up webhook:
  - URL: `https://your-domain.com/api/stripe/webhook`
  - Events: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_succeeded`, `invoice.payment_failed`
- [ ] Copy webhook signing secret → `STRIPE_WEBHOOK_SECRET`

### 3. Environment Variables (2 minutes)

- [ ] Create `.env.local` file in project root
- [ ] Add all variables from `.env.example` (if it exists) or see `SUPABASE_SETUP.md`
- [ ] Set `NEXT_PUBLIC_APP_URL=http://localhost:3000` for local dev

### 4. Test (5 minutes)

- [ ] Run `npm run dev`
- [ ] Go to `http://localhost:3000/login`
- [ ] Sign up with email/password
- [ ] Check Supabase Dashboard → Authentication → Users (should see new user)
- [ ] Check Table Editor → profiles (should see auto-created profile)

### 5. Integrate Pricing Page (Optional)

- [ ] Update `app/pricing/page.tsx` to use Stripe checkout
- [ ] See `STRIPE_INTEGRATION_EXAMPLE.md` for code examples
- [ ] Add Price IDs to your pricing buttons

## 🎯 You're Ready!

Once you complete the checklist above, your authentication and subscription system will be fully functional!

## 📖 Need Help?

- Detailed setup: See `SUPABASE_SETUP.md`
- Code examples: See `STRIPE_INTEGRATION_EXAMPLE.md`
- Full overview: See `README_SUPABASE_STRIPE.md`
