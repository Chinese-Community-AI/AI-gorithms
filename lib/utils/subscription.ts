import { createClient } from "@/lib/supabase/server";

export interface SubscriptionStatus {
  isActive: boolean;
  planType: string | null;
  status: string | null;
}

export async function getUserSubscription(
  userId: string
): Promise<SubscriptionStatus> {
  const supabase = await createClient();

  const { data: subscription } = await supabase
    .from("subscriptions")
    .select("status, plan_type")
    .eq("user_id", userId)
    .eq("status", "active")
    .single();

  return {
    isActive: !!subscription && subscription.status === "active",
    planType: subscription?.plan_type || null,
    status: subscription?.status || null,
  };
}

export async function hasActiveSubscription(userId: string): Promise<boolean> {
  const { isActive } = await getUserSubscription(userId);
  return isActive;
}
