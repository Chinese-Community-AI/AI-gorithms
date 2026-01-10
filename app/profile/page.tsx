"use client";

import { useEffect, useState, useCallback } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

interface ProfileData {
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
}

export default function ProfilePage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [subscriptionStatus, setSubscriptionStatus] = useState<{
    isActive: boolean;
    planType: string | null;
  } | null>(null);
  const supabase = createClient();

  const fetchProfile = useCallback(async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("email, full_name, avatar_url, created_at")
        .eq("id", user.id)
        .single();

      if (error) throw error;
      setProfile(data);
    } catch (error: any) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  const fetchSubscriptionStatus = useCallback(async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from("subscriptions")
        .select("status, plan_type")
        .eq("user_id", user.id)
        .eq("status", "active")
        .single();

      if (error && error.code !== "PGRST116") {
        // PGRST116 is "no rows returned" which is fine
        throw error;
      }

      setSubscriptionStatus({
        isActive: !!data,
        planType: data?.plan_type || null,
      });
    } catch (error: any) {
      console.error("Error fetching subscription:", error);
    }
  }, [user, supabase]);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
      return;
    }

    if (user) {
      fetchProfile();
      fetchSubscriptionStatus();
    }
  }, [user, authLoading, router, fetchProfile, fetchSubscriptionStatus]);

  const handleManageSubscription = async () => {
    try {
      const response = await fetch("/api/stripe/create-portal", {
        method: "POST",
      });

      const { url, error } = await response.json();

      if (error) throw new Error(error);
      if (url) window.location.href = url;
    } catch (error: any) {
      console.error("Error opening portal:", error);
      alert("Failed to open subscription management. Please try again.");
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#191919]">
        <div className="text-[#37352f] dark:text-gray-100">Loading...</div>
      </div>
    );
  }

  if (!user || !profile) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-[#191919] min-h-screen text-[#37352f] dark:text-gray-200">
      <div className="max-w-4xl mx-auto pt-16 px-6 lg:px-10 pb-20">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#37352f] dark:text-gray-100 tracking-tight mb-4">
            Profile
          </h1>
          <p className="text-lg text-[#37352f]/60 dark:text-gray-400 font-medium">
            Manage your account and subscription settings.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Information */}
            <div className="bg-white dark:bg-[#1e1e1e] border border-[rgba(55,53,47,0.09)] dark:border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold text-[#37352f] dark:text-gray-100 mb-6">
                Profile Information
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#37352f]/60 dark:text-gray-400 mb-1">
                    Email
                  </label>
                  <div className="text-[0.9375rem] text-[#37352f] dark:text-gray-100">
                    {profile.email}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#37352f]/60 dark:text-gray-400 mb-1">
                    Full Name
                  </label>
                  <div className="text-[15px] text-[#37352f] dark:text-gray-100">
                    {profile.full_name || "Not set"}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#37352f]/60 dark:text-gray-400 mb-1">
                    Member Since
                  </label>
                  <div className="text-[15px] text-[#37352f] dark:text-gray-100">
                    {new Date(profile.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Subscription Status */}
            <div className="bg-white dark:bg-[#1e1e1e] border border-[rgba(55,53,47,0.09)] dark:border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold text-[#37352f] dark:text-gray-100 mb-6">
                Subscription
              </h2>

              {subscriptionStatus?.isActive ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-[15px] font-semibold text-[#37352f] dark:text-gray-100">
                      Active Subscription
                    </span>
                  </div>

                  {subscriptionStatus.planType && (
                    <div>
                      <label className="block text-sm font-medium text-[#37352f]/60 dark:text-gray-400 mb-1">
                        Plan
                      </label>
                      <div className="text-[15px] text-[#37352f] dark:text-gray-100 capitalize">
                        {subscriptionStatus.planType.replace("-", " ")}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleManageSubscription}
                    className="mt-4 px-4 py-2 bg-[#faebdd] border border-[#d9730d]/20 text-[#d9730d] dark:bg-[#2c221a] dark:text-[#d9730d] rounded-md font-bold text-sm hover:opacity-80 transition-opacity"
                  >
                    Manage Subscription
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-[15px] font-semibold text-[#37352f] dark:text-gray-100">
                      No Active Subscription
                    </span>
                  </div>

                  <p className="text-[14px] text-[#37352f]/60 dark:text-gray-400 mb-4">
                    Upgrade to unlock premium features and access to all
                    content.
                  </p>

                  <button
                    onClick={() => router.push("/pricing")}
                    className="px-4 py-2 bg-[#d9730d] text-white rounded-md font-bold text-sm hover:opacity-90 transition-opacity"
                  >
                    View Plans
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white dark:bg-[#1e1e1e] border border-[rgba(55,53,47,0.09)] dark:border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#37352f] dark:text-gray-100 mb-4">
                Quick Actions
              </h3>

              <div className="space-y-2">
                <button
                  onClick={() => router.push("/pricing")}
                  className="w-full text-left px-3 py-2 text-[14px] text-[#37352f] dark:text-gray-100 hover:bg-[rgba(55,53,47,0.05)] dark:hover:bg-gray-800 rounded transition-colors"
                >
                  View Pricing
                </button>
                <button
                  onClick={() => router.push("/fast-track")}
                  className="w-full text-left px-3 py-2 text-[14px] text-[#37352f] dark:text-gray-100 hover:bg-[rgba(55,53,47,0.05)] dark:hover:bg-gray-800 rounded transition-colors"
                >
                  Learning Path
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
