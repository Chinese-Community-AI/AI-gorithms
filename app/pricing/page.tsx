export default function PricingPage() {
  const plans = [
    {
      name: "Free Education",
      price: "$0",
      period: "forever",
      features: [
        "Access to the basics",
        "Basic practice problems",
        "Community support",
      ],
      cta: "Login for free",
      popular: false,
    },
    {
      name: "Early Adopter",
      price: "$9.99",
      period: "per month",
      features: [
        "All free features",
        "AI-powered tutor",
        "AI-powered code explanation",
        "thousands of practice problems",
        "Tutorials: System Design and more",
        "Priority support",
        "Progress tracking",
      ],
      cta: "Improving faster now",
      popular: true,
    },
    {
      name: "Community Pioneer",
      price: "$19.99",
      period: "per month",
      features: [
        "All Pro features",
        "Foudner 1-on-1 sessions",
        "Community Resource Access",
        "Events and Workshops",
        "Swags",
      ],
      cta: "Join the community",
      popular: false,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Choose Your Plan
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Select the plan that best fits your learning journey
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-lg border-2 p-8 ${
              plan.popular
                ? "border-blue-500 dark:border-blue-600 bg-blue-50 dark:bg-blue-950"
                : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                {plan.name}
              </h3>
              <div className="mb-2">
                <span className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                  {plan.price}
                </span>
                <span className="text-gray-600 dark:text-gray-400 ml-2">
                  /{plan.period}
                </span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-700 dark:text-gray-300"
                >
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                plan.popular
                  ? "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                  : "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          All plans include a 7-day free trial. Cancel anytime.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Questions? Contact us at support@ai-gorithms.com
        </p>
      </div>
    </div>
  );
}
