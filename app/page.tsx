"use client";

import { ReactNode } from "react";
import Link from "next/link";

// --- Reusable Components ---

const SectionHeader = ({ icon, title }: { icon: string; title: string }) => (
  <div className="flex items-center gap-2 mb-4 px-1">
    <span className="text-xl">{icon}</span>
    <h2 className="text-[14px] font-semibold text-[#37352f]/60 dark:text-gray-400 uppercase tracking-wider">
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
    <div className="font-bold text-[#37352f] dark:text-gray-100 text-[15px] mb-1 truncate">
      {title}
    </div>
    <div className="text-[12px] text-[#37352f]/40 dark:text-gray-500 mt-auto">
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
  color: "blue" | "orange" | "green" | "purple";
}) => {
  const bgColors = {
    blue: "bg-[#e7f3f8] dark:bg-blue-900/20",
    orange: "bg-[#fbf3db] dark:bg-orange-900/20",
    green: "bg-[#edf3e8] dark:bg-green-900/20",
    purple: "bg-[#f4f0f7] dark:bg-purple-900/20",
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

const LearnCard = ({
  icon,
  title,
  description,
  href,
  readTime,
}: {
  icon: string;
  title: string;
  description: string;
  href: string;
  readTime: string;
}) => (
  <Link
    href={href}
    className="min-w-[260px] flex flex-col p-5 bg-white dark:bg-[#191919] border border-[#37352f]/10 dark:border-gray-800 rounded-lg hover:bg-[#37352f]/[0.02] dark:hover:bg-gray-800/30 transition-all duration-200 no-underline group"
  >
    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200 origin-left">
      {icon}
    </div>
    <h3 className="font-bold text-[#37352f] dark:text-gray-100 text-base mb-2">
      {title}
    </h3>
    <p className="text-sm text-[#37352f]/60 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
      {description}
    </p>
    <div className="flex items-center gap-2 mt-auto text-[12px] font-medium text-[#37352f]/40 dark:text-gray-500">
      <span>📖</span>
      {readTime}
    </div>
  </Link>
);

// --- Main Page Component ---

export default function Home() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
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

  const learnCards = [
    {
      icon: "🚀",
      title: "Getting Started with Fast Track",
      description: "Master algorithms in 1-3 months",
      href: "/fast-track",
      readTime: "5m read",
    },
    {
      icon: "📖",
      title: "Understanding Data Structures",
      description: "Learn the fundamentals",
      href: "/basics/quick-introduction",
      readTime: "8m read",
    },
    {
      icon: "🎯",
      title: "Algorithm Patterns",
      description: "Master core problem-solving patterns",
      href: "/basics",
      readTime: "12m read",
    },
    {
      icon: "💡",
      title: "AI-Powered Learning",
      description: "Leverage AI to accelerate your journey",
      href: "/",
      readTime: "3m read",
    },
  ];

  return (
    <div className="bg-white dark:bg-[#191919] min-h-screen text-[#37352f] dark:text-gray-200">
      <div className="max-w-[1000px] mx-auto pt-20 px-6 lg:px-10 pb-20">
        {/* Header / Greeting */}
        <header className="mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#37352f] dark:text-gray-100 tracking-tight mb-2">
            {getGreeting()}, AI-gorithm Learner
          </h1>
          <p className="text-lg text-[#37352f]/60 dark:text-gray-400 font-medium">
            Continue your journey to master data structures and algorithms.
          </p>
        </header>

        {/* Recently Visited */}
        <section className="mb-16">
          <SectionHeader icon="🕐" title="Recently visited" />
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-1 px-1">
            {recentlyVisited.map((item, index) => (
              <RecentlyVisitedCard key={index} {...item} />
            ))}
          </div>
        </section>

        {/* Quick Access Grid */}
        <section className="mb-16">
          <SectionHeader icon="⚡" title="Quick access" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <QuickAccessCard
              icon="🚀"
              title="Fast Track"
              description="1-3 months interview ready path"
              href="/fast-track"
              color="blue"
            />
            <QuickAccessCard
              icon="📚"
              title="Basics"
              description="Fundamental data structures"
              href="/basics"
              color="green"
            />
            <QuickAccessCard
              icon="💎"
              title="Pricing"
              description="View plans and features"
              href="/pricing"
              color="purple"
            />
          </div>
        </section>

        {/* Learn Section */}
        <section className="mb-16">
          <SectionHeader icon="📖" title="Learning Modules" />
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-1 px-1">
            {learnCards.map((card, index) => (
              <LearnCard key={index} {...card} />
            ))}
          </div>
        </section>

        {/* Motivation / Footer-like Callout */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border border-blue-100/50 dark:border-blue-800/30 flex flex-col items-center text-center">
          <span className="text-4xl mb-4">🏆</span>
          <h3 className="text-xl font-bold text-[#37352f] dark:text-gray-100 mb-2">
            Ready for a challenge?
          </h3>
          <p className="text-sm text-[#37352f]/60 dark:text-gray-400 max-w-md mb-6 leading-relaxed">
            Consistency is the key to mastering algorithms. Try to solve at
            least one problem today using our AI-powered templates.
          </p>
          <Link
            href="/fast-track"
            className="px-6 py-2 bg-[#37352f] dark:bg-gray-100 text-white dark:text-[#191919] rounded-full font-bold text-sm hover:opacity-90 transition-opacity no-underline"
          >
            Go to Fast Track
          </Link>
        </div>
      </div>
    </div>
  );
}
