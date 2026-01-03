# Stripe Integration Example

## Using Stripe Checkout in Your Pricing Page

Here's how to integrate Stripe Checkout into your pricing page:

```tsx
"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { getStripe } from "@/lib/stripe/client";
import { useRouter } from "next/navigation";

export default function PricingPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);

  const handleCheckout = async (priceId: string, planType: string) => {
    if (!user) {
      router.push("/login");
      return;
    }

    setLoading(priceId);

    try {
      const response = await fetch("/api/stripe/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, planType }),
      });

      const { url, error } = await response.json();

      if (error) throw new Error(error);

      const stripe = await getStripe();
      if (stripe && url) {
        await stripe.redirectToCheckout({ url });
      }
    } catch (error: any) {
      console.error("Error:", error);
      alert(error.message);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div>
      <h1>Choose Your Plan</h1>

      <div>
        <h2>Fast Track</h2>
        <button
          onClick={() => handleCheckout("price_xxx", "fast-track")}
          disabled={loading === "price_xxx"}
        >
          {loading === "price_xxx" ? "Loading..." : "Subscribe"}
        </button>
      </div>

      <div>
        <h2>Mastery Plan</h2>
        <button
          onClick={() => handleCheckout("price_yyy", "mastery")}
          disabled={loading === "price_yyy"}
        >
          {loading === "price_yyy" ? "Loading..." : "Subscribe"}
        </button>
      </div>
    </div>
  );
}
```

## Checking Subscription Status

To protect premium content, check subscription status:

```tsx
// In a Server Component
import { createClient } from "@/lib/supabase/server";
import { hasActiveSubscription } from "@/lib/utils/subscription";

export default async function PremiumPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const isSubscribed = await hasActiveSubscription(user.id);

  if (!isSubscribed) {
    redirect("/pricing");
  }

  return <div>Premium Content Here</div>;
}
```

## Managing Subscriptions (Customer Portal)

To let users manage their subscriptions:

```tsx
"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function ManageSubscription() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const handlePortal = async () => {
    if (!user) return;

    setLoading(true);
    try {
      const response = await fetch("/api/stripe/create-portal", {
        method: "POST",
      });

      const { url, error } = await response.json();

      if (error) throw new Error(error);
      if (url) window.location.href = url;
    } catch (error: any) {
      console.error("Error:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handlePortal} disabled={loading}>
      {loading ? "Loading..." : "Manage Subscription"}
    </button>
  );
}
```

## Webhook Testing Locally

To test Stripe webhooks locally:

1. Install Stripe CLI: `brew install stripe/stripe-cli/stripe`
2. Login: `stripe login`
3. Forward webhooks: `stripe listen --forward-to localhost:3000/api/stripe/webhook`
4. Copy the webhook signing secret to your `.env.local`

## Important Notes

- **Webhook Security**: Always verify webhook signatures using `STRIPE_WEBHOOK_SECRET`
- **Idempotency**: Stripe webhooks can be sent multiple times - your handlers should be idempotent
- **Error Handling**: Always handle webhook errors gracefully and log them
- **Database Updates**: Webhooks update your database - make sure RLS policies allow service role access if needed
