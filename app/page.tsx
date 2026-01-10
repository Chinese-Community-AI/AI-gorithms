"use client";

import { ReactNode, useState, useEffect } from "react";
import Link from "next/link";

// --- Reusable Components ---

const SectionHeader = ({ icon, title }: { icon: string; title: string }) => (
  <div className="flex items-center gap-2 mb-4 px-1">
    <span className="text-xl">{icon}</span>
    <h2 className="text-[0.875rem] font-semibold text-[#37352f]/60 dark:text-gray-400 uppercase tracking-wider">
      {title}
    </h2>
  </div>
);

const RecentlyVisitedCard = ({
  icon,
  title,
  href,
  date,
}: {
  icon: string;
  title: string;
  href: string;
  date: string;
}) => (
  <Link
    href={href}
    className="min-w-[200px] flex flex-col p-4 bg-white dark:bg-[#191919] border border-[#37352f]/10 dark:border-gray-800 rounded-lg hover:bg-[#37352f]/[0.02] dark:hover:bg-gray-800/30 transition-all duration-200 group no-underline"
  >
    <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-200 origin-left">
      {icon}
    </div>
    <div className="font-bold text-[#37352f] dark:text-gray-100 text-[0.9375rem] mb-1 truncate">
      {title}
    </div>
    <div className="text-[0.75rem] text-[#37352f]/40 dark:text-gray-500 mt-auto">
      {date}
    </div>
  </Link>
);

const QuickAccessCard = ({
  icon,
  title,
  description,
  href,
  color,
}: {
  icon: string;
  title: string;
  description: string;
  href: string;
  color: "orange" | "yellow" | "green";
}) => {
  const bgColors = {
    orange: "bg-[#faebdd] dark:bg-orange-900/20",
    yellow: "bg-[#fbf3db] dark:bg-yellow-900/20",
    green: "bg-[#edf3e8] dark:bg-green-900/20",
  };

  return (
    <Link
      href={href}
      className="flex items-start gap-4 p-5 bg-white dark:bg-[#191919] border border-[#37352f]/10 dark:border-gray-800 rounded-lg hover:bg-[#37352f]/[0.02] dark:hover:bg-gray-800/30 transition-all duration-200 no-underline group"
    >
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-lg text-2xl flex-shrink-0 ${bgColors[color]} group-hover:scale-105 transition-transform duration-200`}
      >
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-[#37352f] dark:text-gray-100 text-base mb-1">
          {title}
        </h3>
        <p className="text-sm text-[#37352f]/60 dark:text-gray-400 leading-relaxed m-0">
          {description}
        </p>
      </div>
    </Link>
  );
};

const LearningPathCard = ({
  icon,
  title,
  description,
  summary,
  href,
  color,
}: {
  icon: string;
  title: string;
  description: string;
  summary: string;
  href: string;
  color: "orange" | "yellow";
}) => {
  const bgColors = {
    orange: "bg-[#faebdd] dark:bg-[#2c221a]",
    yellow: "bg-[#fbf3db] dark:bg-yellow-900/20",
  };

  const borderColors = {
    orange: "border-[#d9730d]/30 dark:border-[#d9730d]/40",
    yellow: "border-[#dfab01]/30 dark:border-yellow-800/40",
  };

  const hoverBorderColors = {
    orange:
      "group-hover:border-[#d9730d]/60 dark:group-hover:border-[#d9730d]/70",
    yellow:
      "group-hover:border-[#dfab01]/60 dark:group-hover:border-yellow-600/70",
  };

  const hoverTextColors = {
    orange: "group-hover:text-[#d9730d] dark:group-hover:text-[#d9730d]",
    yellow: "group-hover:text-[#dfab01] dark:group-hover:text-[#dfab01]",
  };

  return (
    <Link
      href={href}
      className={`relative flex flex-col p-8 ${bgColors[color]} border-2 ${borderColors[color]} ${hoverBorderColors[color]} rounded-xl hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 no-underline group cursor-pointer`}
    >
      <div className="flex items-start gap-5 mb-6">
        <div className="text-5xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
          {icon}
        </div>
        <div className="flex-1">
          <h3
            className={`font-extrabold text-[#37352f] dark:text-gray-100 text-2xl mb-2 ${hoverTextColors[color]} transition-colors duration-300`}
          >
            {title}
          </h3>
          <p className="text-base font-semibold text-[#37352f]/70 dark:text-gray-300 mb-3">
            {description}
          </p>
        </div>
      </div>
      <div className="pt-4 border-t border-[#37352f]/10 dark:border-gray-700 mb-4">
        <p className="text-[0.9375rem] text-[#37352f]/70 dark:text-gray-300 leading-relaxed">
          {summary}
        </p>
      </div>
      <div
        className={`mt-auto flex items-center gap-2 text-[#37352f]/60 dark:text-gray-400 ${hoverTextColors[color]} transition-colors duration-300`}
      >
        <span className="font-bold text-sm">Get started</span>
        <svg
          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </div>
    </Link>
  );
};

// --- Feature Card Component ---

const FeatureCard = ({
  icon,
  title,
  description,
  featureId,
  onFeatureClick,
}: {
  icon: string;
  title: string;
  description: string;
  featureId: "tutor" | "chat" | "audible";
  onFeatureClick: (id: "tutor" | "chat" | "audible") => void;
}) => {
  return (
    <button
      onClick={() => onFeatureClick(featureId)}
      className="w-full p-6 bg-white dark:bg-[#191919] border border-[#37352f]/10 dark:border-gray-800 rounded-xl hover:border-[#d9730d]/30 dark:hover:border-[#d9730d]/40 hover:shadow-md transition-all duration-200 text-left group cursor-pointer"
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
        {icon}
      </div>
      <h3 className="font-bold text-[#37352f] dark:text-gray-100 text-lg mb-2 group-hover:text-[#d9730d] dark:group-hover:text-[#d9730d] transition-colors duration-200">
        {title}
      </h3>
      <p className="text-sm text-[#37352f]/60 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </button>
  );
};

// --- Feature Overlay Component ---

const FeatureOverlay = ({
  featureId,
  onClose,
}: {
  featureId: "tutor" | "chat" | "audible" | null;
  onClose: () => void;
}) => {
  const [showArrow, setShowArrow] = useState(false);
  const [buttonPosition, setButtonPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    if (featureId) {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Find the navbar button after scroll
      setTimeout(() => {
        const buttonLabels = {
          tutor: "AI Tutor",
          chat: "AI Chat",
          audible: "Audible",
        };

        // Find all buttons in the header
        const header = document.querySelector("header");
        if (!header) return;

        const buttons = header.querySelectorAll("button");
        let targetButton: Element | null = null;

        // Find the button with matching text
        buttons.forEach((button) => {
          const text = button.textContent?.trim();
          if (
            text === buttonLabels[featureId] ||
            text?.includes(buttonLabels[featureId])
          ) {
            targetButton = button;
          }
        });

        if (targetButton) {
          const rect = targetButton.getBoundingClientRect();
          setButtonPosition({
            x: rect.left + rect.width / 2, // Center of button
            y: rect.top + rect.height / 2, // Center of button
          });
          setShowArrow(true);
        }
      }, 500); // Wait for scroll to complete
    } else {
      setShowArrow(false);
      setButtonPosition(null);
    }
  }, [featureId]);

  if (!featureId || !buttonPosition) return null;

  const featureNames = {
    tutor: "AI Tutor",
    chat: "AI Chat",
    audible: "Audible",
  };

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Arrow pointing to navbar button */}
      {showArrow && buttonPosition && (
        <>
          {/* Arrow line */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon
                  points="0 0, 10 3, 0 6"
                  fill="#d9730d"
                  className="animate-pulse"
                />
              </marker>
            </defs>
            <line
              x1={buttonPosition.x}
              y1={buttonPosition.y + 60}
              x2={buttonPosition.x}
              y2={buttonPosition.y}
              stroke="#d9730d"
              strokeWidth="3"
              markerEnd="url(#arrowhead)"
              className="animate-pulse"
            />
          </svg>

          {/* Highlight circle around button */}
          <div
            className="absolute rounded-full border-4 border-[#d9730d] animate-ping pointer-events-none"
            style={{
              left: buttonPosition.x - 30,
              top: buttonPosition.y - 30,
              width: 60,
              height: 60,
            }}
          />
          <div
            className="absolute rounded-full border-2 border-[#d9730d] pointer-events-none"
            style={{
              left: buttonPosition.x - 30,
              top: buttonPosition.y - 30,
              width: 60,
              height: 60,
            }}
          />

          {/* Tooltip */}
          <div
            className="absolute bg-[#37352f] dark:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg pointer-events-auto"
            style={{
              left: buttonPosition.x,
              top: buttonPosition.y + 50,
              transform: "translateX(-50%)",
            }}
          >
            Click {featureNames[featureId]} here
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#37352f] dark:bg-gray-800 rotate-45"></div>
          </div>
        </>
      )}

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-white dark:bg-[#191919] text-[#37352f] dark:text-gray-100 px-4 py-2 rounded-lg shadow-lg font-medium hover:bg-[#faebdd] dark:hover:bg-[#2c221a] transition-colors pointer-events-auto z-10"
      >
        Close
      </button>
    </div>
  );
};

// --- Main Page Component ---

export default function Home() {
  const [highlightedFeature, setHighlightedFeature] = useState<
    "tutor" | "chat" | "audible" | null
  >(null);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const handleFeatureClick = (featureId: "tutor" | "chat" | "audible") => {
    setHighlightedFeature(featureId);
    // Auto-close after 5 seconds
    setTimeout(() => {
      setHighlightedFeature(null);
    }, 5000);
  };

  const recentlyVisited = [
    { icon: "📚", title: "Fast Track", href: "/fast-track", date: "Today" },
    {
      icon: "🔢",
      title: "Quick Introduction",
      href: "/basics/quick-introduction",
      date: "2 days ago",
    },
    {
      icon: "📊",
      title: "10 Sorting Algorithms",
      href: "/basics/10-sorting-algorithms",
      date: "3 days ago",
    },
    {
      icon: "🌳",
      title: "Binary Tree Structure",
      href: "/basics/binary-tree-structure-and-traversal",
      date: "1 week ago",
    },
    {
      icon: "📈",
      title: "Graph Algorithms",
      href: "/basics/graph-structure-algorithm-overview.md",
      date: "2 weeks ago",
    },
  ];

  return (
    <div className="bg-white dark:bg-[#191919] min-h-screen text-[#37352f] dark:text-gray-200">
      <div className="max-w-[1000px] mx-auto pt-8 px-6 lg:px-10 pb-20">
        {/* Header / Greeting */}
        <header className="mb-12">
          <h1 className="text-2xl lg:text-3xl font-extrabold text-[#37352f] dark:text-gray-100 tracking-tight">
            {getGreeting()}
          </h1>
        </header>

        {/* Learning Paths */}
        <section className="mb-16">
          <SectionHeader icon="🛤️" title="Learning paths" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <LearningPathCard
              icon="🚀"
              title="Fast Track"
              description="1-3 months interview ready path"
              summary="Perfect for job seekers and career switchers. Focus on practical problem-solving, common interview patterns, and building confidence through hands-on practice. Get interview-ready quickly with our streamlined curriculum."
              href="/fast-track"
              color="orange"
            />
            <LearningPathCard
              icon="🏆"
              title="Mastery"
              description="Deep dive into theoretical foundations"
              summary="Ideal for students and engineers who want to truly understand algorithms. Explore mathematical proofs, advanced data structures, complexity analysis, and build a solid theoretical foundation for long-term growth."
              href="/fast-track"
              color="yellow"
            />
          </div>
        </section>

        {/* Recently Visited */}
        <section className="mb-16">
          <SectionHeader icon="🕐" title="Recently visited" />
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-1 px-1">
            {recentlyVisited.map((item, index) => (
              <RecentlyVisitedCard key={index} {...item} />
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mt-20">
          <SectionHeader icon="✨" title="Platform Features" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon="🤖"
              title="AI Tutor"
              description="Coming soon"
              featureId="tutor"
              onFeatureClick={handleFeatureClick}
            />
            <FeatureCard
              icon="💬"
              title="AI Chat"
              description="In-website chatbot for instant help"
              featureId="chat"
              onFeatureClick={handleFeatureClick}
            />
            <FeatureCard
              icon="🎧"
              title="Audible"
              description="Learn everywhere by listening to the content"
              featureId="audible"
              onFeatureClick={handleFeatureClick}
            />
          </div>
        </section>

        {/* Feature Overlay */}
        <FeatureOverlay
          featureId={highlightedFeature}
          onClose={() => setHighlightedFeature(null)}
        />
      </div>
    </div>
  );
}
