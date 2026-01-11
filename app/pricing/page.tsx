"use client";

import { useEffect } from "react";
import Link from "next/link";

// --- Reusable Components ---

const CheckIcon = () => (
  <svg
    className="w-3.5 h-3.5 text-[#37352f] dark:text-gray-300 mt-1 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const PlanCard = ({
  name,
  price,
  period,
  features,
  cta,
  popular,
  color = "default",
}: {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  popular: boolean;
  color?: "default" | "orange" | "yellow";
}) => {
  const bgColors = {
    default: "bg-white dark:bg-[#191919]",
    orange: "bg-[#faebdd] dark:bg-[#2c221a]",
    yellow: "bg-[#fbf3db] dark:bg-yellow-900/10",
  };

  const accentColors = {
    default: "border-[#37352f]/10 dark:border-gray-800",
    orange: "border-[#d9730d]/20 dark:border-[#d9730d]/30",
    yellow: "border-[#dfab01]/20 dark:border-yellow-800/30",
  };

  return (
    <div
      className={`relative flex flex-col p-5 lg:p-6 rounded-lg border ${accentColors[color]} ${bgColors[color]} transition-all duration-200 hover:shadow-sm`}
    >
      {popular && (
        <div className="absolute -top-3 left-4 bg-[#37352f] dark:bg-gray-100 text-white dark:text-[#191919] px-2.5 py-0.5 rounded text-[0.6875rem] font-bold uppercase tracking-wider">
          Most Popular
        </div>
      )}

      <div className="mb-5">
        <h3 className="text-sm font-semibold text-[#37352f]/60 dark:text-gray-400 uppercase tracking-widest mb-3">
          {name}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl lg:text-4xl font-extrabold text-[#37352f] dark:text-gray-100 tracking-tight">
            {price}
          </span>
          <span className="text-[#37352f]/40 dark:text-gray-500 text-[0.75rem] lg:text-[0.8125rem] font-medium">
            /{period}
          </span>
        </div>
      </div>

      <div className="h-px bg-[#37352f]/10 dark:bg-gray-800 w-full mb-5" />

      <ul className="space-y-2.5 mb-6 flex-1">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex gap-2.5 text-[0.8125rem] lg:text-[0.875rem] leading-relaxed text-[#37352f] dark:text-gray-300"
          >
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-2 px-4 rounded border text-sm font-bold transition-all duration-200 ${
          popular
            ? "bg-[#faebdd] border-[#d9730d]/20 text-[#d9730d] hover:bg-[#faebdd]/80 dark:bg-[#2c221a] dark:text-[#d9730d] dark:border-[#d9730d]/30"
            : "bg-white dark:bg-transparent border-[#37352f]/10 dark:border-gray-700 text-[#37352f] dark:text-gray-100 hover:bg-[#faebdd]/20 dark:hover:bg-[#2c221a]/50"
        }`}
      >
        {cta}
      </button>
    </div>
  );
};

// --- Main Page Component ---

export default function PricingPage() {
  // Prevent body scrolling on pricing page
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const plans = [
    {
      name: "Majority",
      price: "$0",
      period: "forever",
      features: [
        "Access to basic algorithms",
        "Fundamental practice sets",
        "Public community support",
        "Standard curriculum access",
      ],
      cta: "Login for free",
      popular: false,
      color: "default" as const,
    },
    {
      name: "Early Adopter",
      price: "$9.99",
      period: "month",
      features: [
        "All free features",
        "AI-powered Tutor assistance",
        "Detailed AI code explanations",
        "Unlimited practice problems",
        "Advanced System Design modules",
        "Visual progress analytics",
      ],
      cta: "Get started",
      popular: true,
      color: "orange" as const,
    },
    {
      name: "Community Innovator",
      price: "$19.99",
      period: "month",
      features: [
        "All Pro Learner features",
        "Monthly Q&A with founders",
        "Exclusive resource library",
        "Beta access to experimental tools",
        "Live study group priority",
        "HaoHaoXueXi community badge",
      ],
      cta: "Join the community",
      popular: false,
      color: "yellow" as const,
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-full py-4 lg:py-8 bg-white dark:bg-[#191919]">
      <div className="w-full max-w-[62.5rem] px-6 lg:px-10">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-[#37352f] dark:text-gray-100 tracking-tight mb-3">
            Pricing
        </h1>
          <p className="text-base lg:text-lg text-[#37352f]/60 dark:text-gray-400 font-medium">
            Select the plan that best fits your learning journey.
        </p>
        </header>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
      </div>

        {/* Bottom Callout */}
        <div className="border-t border-[#37352f]/10 dark:border-gray-800 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-bold text-[#37352f] dark:text-gray-100 mb-2">
                Educational access
              </h2>
              <p className="text-[0.875rem] text-[#37352f]/60 dark:text-gray-400 leading-relaxed mb-3">
                We believe algorithm education should be accessible to everyone.
                If you're a student or educator and can't afford the Pro plan,
                please reach out.
              </p>
              <Link
                href="mailto:support@haohaoxuexi.ai"
                className="text-[0.9375rem] font-semibold text-[#37352f] dark:text-gray-100 underline decoration-[#37352f]/20 hover:decoration-[#37352f] transition-all"
              >
                Contact education support
              </Link>
              </div>

            <div className="bg-[#fbf3db]/30 dark:bg-yellow-900/5 p-5 rounded-lg border border-[#37352f]/10 dark:border-gray-800">
              <h3 className="text-base font-bold text-[#37352f] dark:text-gray-100 mb-1">
                Enterprise & Teams
              </h3>
              <p className="text-[0.8125rem] text-[#37352f]/60 dark:text-gray-400 mb-3">
                Looking to train your engineering team? We offer volume
                discounts and custom learning paths.
              </p>
              <button className="text-[0.875rem] font-bold text-[#37352f] dark:text-gray-100 hover:opacity-70 transition-opacity">
                Learn more →
              </button>
            </div>
          </div>
      </div>

        {/* Simple Footer */}
        <footer className="mt-8 text-center border-t border-[#37352f]/5 dark:border-gray-800 pt-4 pb-4">
          <p className="text-[0.75rem] text-[#37352f]/40 dark:text-gray-500">
            © {new Date().getFullYear()} HaoHaoXueXi. All plans include a 7-day
            free trial.
        </p>
        </footer>
      </div>
    </div>
  );
}
