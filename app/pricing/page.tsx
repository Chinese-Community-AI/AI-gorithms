"use client";

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
  color?: "default" | "blue" | "purple";
}) => {
  const bgColors = {
    default: "bg-white dark:bg-[#191919]",
    blue: "bg-[#e7f3f8] dark:bg-blue-900/10",
    purple: "bg-[#f4f0f7] dark:bg-purple-900/10",
  };

  const accentColors = {
    default: "border-[#37352f]/10 dark:border-gray-800",
    blue: "border-blue-200/50 dark:border-blue-800/30",
    purple: "border-purple-200/50 dark:border-purple-800/30",
  };

  return (
    <div
      className={`relative flex flex-col p-6 rounded-lg border ${accentColors[color]} ${bgColors[color]} transition-all duration-200 hover:shadow-sm`}
    >
      {popular && (
        <div className="absolute -top-3 left-4 bg-[#37352f] dark:bg-gray-100 text-white dark:text-[#191919] px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-[#37352f]/60 dark:text-gray-400 uppercase tracking-widest mb-4">
          {name}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-extrabold text-[#37352f] dark:text-gray-100 tracking-tight">
            {price}
          </span>
          <span className="text-[#37352f]/40 dark:text-gray-500 text-[13px] font-medium">
            /{period}
          </span>
        </div>
      </div>

      <div className="h-px bg-[#37352f]/10 dark:bg-gray-800 w-full mb-6" />

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex gap-3 text-[14px] leading-relaxed text-[#37352f] dark:text-gray-300"
          >
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-2 px-4 rounded border text-sm font-bold transition-all duration-200 ${
          popular
            ? "bg-[#37352f] border-[#37352f] text-white hover:bg-black dark:bg-gray-100 dark:border-gray-100 dark:text-[#191919] dark:hover:bg-white"
            : "bg-white dark:bg-transparent border-[#37352f]/10 dark:border-gray-700 text-[#37352f] dark:text-gray-100 hover:bg-[#37352f]/[0.02] dark:hover:bg-gray-800"
        }`}
      >
        {cta}
      </button>
    </div>
  );
};

// --- Main Page Component ---

export default function PricingPage() {
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
      color: "blue" as const,
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
        "AI-gorithms community badge",
      ],
      cta: "Join the community",
      popular: false,
      color: "purple" as const,
    },
  ];

  return (
    <div className="bg-white dark:bg-[#191919] min-h-screen text-[#37352f] dark:text-gray-200">
      <div className="max-w-[1000px] mx-auto pt-16 px-6 lg:px-10 pb-20">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#37352f] dark:text-gray-100 tracking-tight mb-4">
            Pricing
          </h1>
          <p className="text-lg text-[#37352f]/60 dark:text-gray-400 font-medium">
            Select the plan that best fits your learning journey.
          </p>
        </header>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="border-t border-[#37352f]/10 dark:border-gray-800 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#37352f] dark:text-gray-100 mb-4">
                Educational access
              </h2>
              <p className="text-[15px] text-[#37352f]/60 dark:text-gray-400 leading-relaxed mb-6">
                We believe algorithm education should be accessible to everyone.
                If you're a student or educator and can't afford the Pro plan,
                please reach out.
              </p>
              <Link
                href="mailto:support@ai-gorithms.com"
                className="text-[15px] font-semibold text-[#37352f] dark:text-gray-100 underline decoration-[#37352f]/20 hover:decoration-[#37352f] transition-all"
              >
                Contact education support
              </Link>
            </div>

            <div className="bg-[#fbf3db]/30 dark:bg-yellow-900/5 p-8 rounded-lg border border-[#37352f]/10 dark:border-gray-800">
              <h3 className="text-lg font-bold text-[#37352f] dark:text-gray-100 mb-2">
                Enterprise & Teams
              </h3>
              <p className="text-[14px] text-[#37352f]/60 dark:text-gray-400 mb-6">
                Looking to train your engineering team? We offer volume
                discounts and custom learning paths.
              </p>
              <button className="text-[14px] font-bold text-[#37352f] dark:text-gray-100 hover:opacity-70 transition-opacity">
                Learn more →
              </button>
            </div>
          </div>
        </div>

        {/* Simple Footer */}
        <footer className="mt-24 text-center border-t border-[#37352f]/5 dark:border-gray-800 pt-12">
          <p className="text-[13px] text-[#37352f]/40 dark:text-gray-500">
            © {new Date().getFullYear()} AI-gorithms. All plans include a 7-day
            free trial.
          </p>
        </footer>
      </div>
    </div>
  );
}
