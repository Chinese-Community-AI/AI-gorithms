"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";

// --- Reusable Components ---

const Callout = ({
  type = "info",
  icon,
  children,
}: {
  type?: "info" | "warning" | "critical" | "success";
  icon?: string;
  children: ReactNode;
}) => {
  const styles = {
    info: "bg-[#faebdd] dark:bg-[#2c221a] border-none",
    warning: "bg-[#fbf3db] dark:bg-[#2d2a1e] border-none",
    critical: "bg-[#fdebec] dark:bg-[#331a1a] border-none",
    success: "bg-[#edf3e8] dark:bg-[#1c2d1c] border-none",
  };

  const icons = {
    info: "ℹ️",
    warning: "⚠️",
    critical: "🛑",
    success: "✅",
  };

  return (
    <div className={`flex gap-3 p-4 rounded-md mb-6 ${styles[type]}`}>
      <div className="text-xl flex-shrink-0">{icon || icons[type]}</div>
      <div className="text-[15px] leading-relaxed text-[#37352f] dark:text-gray-200">
        {children}
      </div>
    </div>
  );
};

const Badge = ({
  label,
  variant = "default",
}: {
  label: string;
  variant?: "default" | "intermediate" | "advanced" | "critical" | "success";
}) => {
  const styles = {
    default: "bg-[#f1f1ef] text-[#37352f] dark:bg-gray-800 dark:text-gray-300",
    intermediate:
      "bg-[#faebdd] text-[#d9730d] dark:bg-orange-900/30 dark:text-orange-300",
    advanced:
      "bg-[#fbf3db] text-[#dfab01] dark:bg-yellow-900/30 dark:text-yellow-300",
    critical:
      "bg-[#fdebec] text-[#ad1a1a] dark:bg-red-900/30 dark:text-red-300",
    success:
      "bg-[#edf3e8] text-[#1c6b1c] dark:bg-green-900/30 dark:text-green-300",
  };

  return (
    <span
      className={`px-2 py-0.5 rounded text-[12px] font-bold ${styles[variant]}`}
    >
      {label}
    </span>
  );
};

const TopicCard = ({
  title,
  badge,
  badgeVariant,
  time,
  children,
  href,
}: {
  title: string;
  badge?: string;
  badgeVariant?:
    | "default"
    | "intermediate"
    | "advanced"
    | "critical"
    | "success";
  time?: string;
  children: ReactNode;
  href?: string;
}) => {
  const Content = (
    <div className="group border border-[#37352f]/10 dark:border-gray-800 rounded-lg p-5 mb-4 bg-white dark:bg-[#191919] hover:bg-[#37352f]/[0.02] dark:hover:bg-gray-800/30 transition-all duration-200 text-left">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-bold text-[#37352f] dark:text-gray-100 m-0 leading-tight">
            {title}
          </h3>
          {badge && <Badge label={badge} variant={badgeVariant} />}
        </div>
        {time && (
          <span className="text-sm text-[#37352f]/50 dark:text-gray-400 font-medium italic">
            {time}
          </span>
        )}
      </div>
      <div className="text-[15px] leading-relaxed text-[#37352f]/80 dark:text-gray-300">
        {children}
      </div>
    </div>
  );

  return href ? (
    <Link href={href} className="no-underline block">
      {Content}
    </Link>
  ) : (
    Content
  );
};

const SectionHeading = ({
  children,
  subtitle,
  icon,
}: {
  children: ReactNode;
  subtitle?: string;
  icon?: string;
}) => (
  <div className="mt-4 mb-6">
    <div className="flex items-center gap-2 mb-1">
      {icon && <span className="text-2xl">{icon}</span>}
      <h2 className="text-2xl font-extrabold text-[#37352f] dark:text-gray-100 m-0 text-left tracking-tight">
        {children}
      </h2>
    </div>
    {subtitle && (
      <p className="text-[15px] text-[#37352f]/50 dark:text-gray-400 m-0 italic font-medium text-left">
        {subtitle}
      </p>
    )}
    <div className="h-px bg-[#37352f]/10 dark:bg-gray-800 w-full mt-4" />
  </div>
);

const TipCard = ({
  emoji,
  title,
  children,
}: {
  emoji: string;
  title: string;
  children: ReactNode;
}) => (
  <div className="border border-[#37352f]/10 dark:border-gray-800 rounded-lg p-5 bg-white dark:bg-[#191919] shadow-sm text-left hover:border-[#d9730d]/30 transition-all">
    <div className="text-3xl mb-3">{emoji}</div>
    <h4 className="text-base font-bold text-[#37352f] dark:text-gray-100 mb-2 tracking-tight">
      {title}
    </h4>
    <div className="text-sm leading-relaxed text-[#37352f]/70 dark:text-gray-400">
      {children}
    </div>
  </div>
);

// --- Main Page Component ---

export default function FastTrackPage() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Preparation",
      icon: "🎯",
      content: (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="mb-12">
            <p className="text-xl text-[#37352f]/80 dark:text-gray-300 leading-relaxed mb-8 text-left">
              This is a no-BS, interview-focused roadmap. Every reasonable
              interview question is just a variation of a few core patterns.
              Master these foundations, and you'll stop memorizing code and
              start seeing solutions intuitively.
            </p>

            <Callout type="info" icon="🚀">
              <p className="font-bold mb-1 text-left uppercase tracking-widest text-[11px] opacity-60">
                The Goal
              </p>
              <p className="text-lg font-bold mb-3 text-left">
                Acquire pattern-based intuition to solve Medium/Hard problems in
                record time.
              </p>
              <p className="font-bold mb-1 text-xs opacity-80 uppercase tracking-wider text-left">
                Time Commitment
              </p>
              <p className="text-left font-medium">
                4-6 weeks (1-2 hours daily)
              </p>
            </Callout>
          </div>

          <SectionHeading icon="🎯">Who is this for?</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <TipCard emoji="⏰" title="Fast-Track Prep">
              You need to be interview-ready in weeks, not months, and can't
              afford to waste time on low-impact problems.
            </TipCard>
            <TipCard emoji="🧘" title="Zero Frustration">
              Learn from patterns and answers directly. Skip the hours of
              pain—once you master the core patterns, solutions will follow
              naturally.
            </TipCard>
            <TipCard emoji="💎" title="Anti-Grind Method">
              Master the underlying logic once. Stop the endless cycle of
              solving and memorizing thousands of individual LeetCode problems.
            </TipCard>
          </div>
        </div>
      ),
    },
    {
      title: "The Building Blocks",
      icon: "🧱",
      content: (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <SectionHeading subtitle="Weeks 1-2" icon="🧱">
            Part 1: Data Structures Fundamentals
          </SectionHeading>

          <div className="space-y-2">
            <TopicCard
              title="Arrays & Linked Lists"
              badge="Beginner"
              badgeVariant="default"
              time="2 days"
            >
              <ul className="list-disc pl-5 space-y-1 text-left">
                <li>Array basics and circular array technique</li>
                <li>Linked list principles & Two-pointer technique</li>
                <li>Sequential vs linked storage analysis</li>
                <li>O(1) insertion/deletion optimizations</li>
              </ul>
            </TopicCard>

            <TopicCard
              title="Hash Tables"
              badge="Beginner"
              badgeVariant="default"
              time="1-2 days"
            >
              <p className="mb-2 text-left">
                <strong>Core Focus:</strong> Hash table principles and usage
                patterns like LinkedHashMap and ArrayHashMap.
              </p>
              <p className="text-sm opacity-60 italic text-left">
                Note: You can skip detailed collision resolution
                implementations.
              </p>
            </TopicCard>

            <TopicCard
              title="Binary Trees"
              badge="Critical Foundation"
              badgeVariant="critical"
              time="2-3 days"
            >
              <div className="bg-red-50 dark:bg-red-900/10 p-3 rounded-md mb-3 text-sm text-red-800 dark:text-red-300 border border-red-100 dark:border-red-900/30 text-left">
                <strong>Crucial</strong>: All recursive algorithms are
                essentially tree traversals. Mastery here unlocks DFS,
                Backtracking, and DP.
              </div>
              <ul className="list-disc pl-5 space-y-1 text-left">
                <li>Recursive & level-order traversal frameworks</li>
                <li>N-ary trees & binary tree properties</li>
                <li>DFS vs BFS decision matrix</li>
              </ul>
            </TopicCard>

            <TopicCard
              title="Heaps & BSTs"
              badge="Essential"
              badgeVariant="intermediate"
              time="1.5 days"
            >
              <ul className="list-disc pl-5 space-y-1 text-left">
                <li>
                  <strong>BST</strong>: "Left smaller, right larger" search
                  properties
                </li>
                <li>
                  <strong>Heap</strong>: Priority queues and O(log N) operations
                </li>
              </ul>
            </TopicCard>

            <TopicCard
              title="Graphs Basics"
              badge="Beginner"
              badgeVariant="default"
              time="1 day"
            >
              <ul className="list-disc pl-5 space-y-1 text-left">
                <li>Adjacency list vs matrix representations</li>
                <li>Standard DFS/BFS traversal templates</li>
              </ul>
            </TopicCard>
          </div>
        </div>
      ),
    },
    {
      title: "The Master Patterns",
      icon: "🧠",
      content: (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <SectionHeading subtitle="Weeks 2-5" icon="🧠">
            Part 2: Algorithm Patterns
          </SectionHeading>

          <Callout type="info" icon="⭐">
            <p className="text-left">
              <strong>Mandatory Reading</strong>: Before diving into patterns,
              read the <em>Framework Thinking for Learning DSA</em>. It reveals
              the essence shared by all algorithms.
            </p>
          </Callout>

          <div className="mt-8 space-y-2">
            <TopicCard
              title="Linked List Techniques"
              badge="Intermediate"
              badgeVariant="intermediate"
              time="2 days"
            >
              <ul className="list-disc pl-5 space-y-1 text-sm text-left">
                <li>Two-pointer technique framework (1 day)</li>
                <li>Classic list problems & recursive operations (1 day)</li>
              </ul>
            </TopicCard>

            <TopicCard
              title="Advanced Array Patterns"
              badge="Intermediate"
              badgeVariant="intermediate"
              time="4-5 days"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-2 mb-2">
                <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded border border-gray-100 dark:border-gray-700 text-left">
                  <span className="font-bold block mb-1">Key Techniques</span>
                  Binary search, Sliding window, Two-pointers
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded border border-gray-100 dark:border-gray-700 text-left">
                  <span className="font-bold block mb-1">Specialized</span>
                  Prefix sums, Difference arrays, 2D traversal
                </div>
              </div>
            </TopicCard>

            <TopicCard
              title="Stacks & Queues"
              badge="Intermediate"
              badgeVariant="intermediate"
              time="3 days"
            >
              <ul className="list-disc pl-5 space-y-1 text-left">
                <li>
                  Monotonic stack/queue frameworks (Critical for "Next Greater
                  Element" types)
                </li>
                <li>Basic implementations and classic interview problems</li>
              </ul>
            </TopicCard>

            <TopicCard
              title="Binary Tree Deep Dive"
              badge="High Frequency"
              badgeVariant="critical"
              time="5-7 days"
            >
              <Callout type="critical" icon="⚠️">
                <p className="text-left">
                  <strong>Interview Success</strong>: This is the most crucial
                  section. Spend extra time here.
                </p>
              </Callout>
              <div className="mt-3 space-y-2 text-sm text-left">
                <p>
                  <strong>Phase 1</strong>: Traversal vs Decomposition thinking
                  models
                </p>
                <p>
                  <strong>Phase 2</strong>: Binary tree construction and
                  serialization
                </p>
                <p>
                  <strong>Phase 3</strong>: Lowest common ancestor & tree
                  diameter patterns
                </p>
              </div>
            </TopicCard>

            <TopicCard
              title="Graph Patterns"
              badge="Intermediate"
              badgeVariant="intermediate"
              time="4 days"
            >
              <ul className="list-disc pl-5 space-y-1 text-sm text-left">
                <li>Topological Sort & Cycle Detection (Critical)</li>
                <li>Union-Find (Kruskal's, Bipartite checks)</li>
                <li>Dijkstra's Shortest Path Framework</li>
              </ul>
            </TopicCard>

            <TopicCard
              title="Backtracking & DFS"
              badge="Advanced"
              badgeVariant="advanced"
              time="5-7 days"
            >
              <p className="mb-3 text-sm italic opacity-70 font-medium text-left">
                "The fallback solution for any difficult problem."
              </p>
              <ul className="list-disc pl-5 space-y-1 text-left">
                <li>Standard Backtracking Template (Permutations, Subsets)</li>
                <li>State management and "Choose-Explore-Unchoose" pattern</li>
                <li>Grid DFS (Island problems)</li>
              </ul>
            </TopicCard>

            <TopicCard
              title="Dynamic Programming"
              badge="Advanced"
              badgeVariant="advanced"
              time="7-10 days"
            >
              <div className="mt-2 space-y-4">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-[#37352f]/40 dark:text-gray-500 block mb-1 text-left">
                    Foundations
                  </span>
                  <p className="text-sm text-left">
                    Memoization, State transition equations, Base cases
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded border border-gray-100 dark:border-gray-700 text-left">
                    <span className="font-bold block mb-1 text-[#d9730d]/80">
                      Sequence DP
                    </span>
                    LIS, LCS, Edit Distance
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded border border-gray-100 dark:border-gray-700 text-left">
                    <span className="font-bold block mb-1 text-[#d9730d]/80">
                      Knapsack & Others
                    </span>
                    0/1, Complete, Game Theory
                  </div>
                </div>
              </div>
            </TopicCard>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white dark:bg-[#191919] min-h-screen text-[#37352f] dark:text-gray-200 relative">
      <div className="max-w-[1000px] mx-auto pt-20 px-6 lg:px-10 pb-20 relative">
        {/* Side Navigation - Left */}
        <div className="hidden lg:flex absolute -left-4 lg:-left-16 top-0 h-full z-10">
          <div className="sticky top-1/2 -translate-y-1/2 h-fit">
            <button
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className={`group flex flex-col items-center gap-3 transition-all duration-300 ${
                step === 0
                  ? "opacity-0 pointer-events-none"
                  : "opacity-30 hover:opacity-100"
              }`}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--sidebar-bg)] border border-[rgba(55,53,47,0.09)] shadow-sm group-hover:scale-110 group-active:scale-95 transition-all">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <span
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#37352f] dark:text-gray-400"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                Previous
              </span>
            </button>
          </div>
        </div>

        {/* Side Navigation - Right */}
        <div className="hidden lg:flex absolute -right-4 lg:-right-16 top-0 h-full z-10">
          <div className="sticky top-1/2 -translate-y-1/2 h-fit">
            <button
              onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
              disabled={step === steps.length - 1}
              className={`group flex flex-col items-center gap-3 transition-all duration-300 ${
                step === steps.length - 1
                  ? "opacity-0 pointer-events-none"
                  : "opacity-30 hover:opacity-100"
              }`}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#faebdd] border border-[#d9730d]/20 shadow-sm group-hover:scale-110 group-active:scale-95 transition-all">
                <svg
                  className="w-5 h-5 text-[#d9730d]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <span
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d9730d]"
                style={{ writingMode: "vertical-rl" }}
              >
                Next Phase
              </span>
            </button>
          </div>
        </div>

        <div className="max-w-[800px] mx-auto">
          <header className="mb-12 text-left">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-[#37352f] dark:text-gray-100 tracking-tight leading-tight mb-4">
              The Pattern-First Fast Track
            </h1>
            <p className="text-xl lg:text-2xl text-[#37352f]/60 dark:text-gray-400 font-medium mb-8">
              Stop grinding LeetCode. Start mastering the underlying patterns
              that actually matter.
            </p>
            <div className="flex items-center gap-4 text-xl lg:text-2xl text-[#37352f]/60 dark:text-gray-400 font-medium">
              <span>{steps[step].icon}</span>
              <span>{steps[step].title}</span>
              <div className="flex gap-1.5 ml-auto">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === step
                        ? "bg-[#d9730d] w-8"
                        : "bg-[#37352f]/10 dark:bg-gray-800 w-1.5"
                    }`}
                  />
                ))}
              </div>
            </div>
          </header>

          <div className="h-px bg-[#37352f]/10 dark:bg-gray-800 w-full mb-12" />

          <div className="relative">
            {/* Ghost Card 2 (Deepest) */}
            {step < steps.length - 2 && (
              <div className="absolute top-8 left-6 right-6 -bottom-8 bg-[#37352f]/[0.02] dark:bg-white/[0.01] rounded-3xl border border-[#37352f]/[0.03] dark:border-white/[0.02] pointer-events-none" />
            )}

            {/* Ghost Card 1 (Middle) */}
            {step < steps.length - 1 && (
              <div className="absolute top-4 left-3 right-3 -bottom-4 bg-[#37352f]/[0.04] dark:bg-white/[0.02] rounded-3xl border border-[#37352f]/[0.05] dark:border-white/[0.03] pointer-events-none shadow-sm" />
            )}

            {/* Main Active Card */}
            <div className="relative z-20 bg-white dark:bg-[#1e1e1e] p-8 lg:p-12 rounded-3xl border border-[rgba(55,53,47,0.09)] dark:border-gray-800 shadow-xl shadow-[#37352f]/5 min-h-[500px] transition-all duration-500">
              {steps[step].content}
            </div>
          </div>

          {/* Mobile Navigation (Bottom) - Only show when side nav is hidden */}
          <div className="lg:hidden mt-16 flex items-center justify-between border-t border-[#37352f]/10 pt-8">
            <button
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                step === 0
                  ? "opacity-0 pointer-events-none"
                  : "bg-white dark:bg-transparent border border-[#37352f]/10 text-[#37352f] dark:text-gray-100 hover:bg-[#37352f]/[0.02]"
              }`}
            >
              ← Previous
            </button>

            <button
              onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
              disabled={step === steps.length - 1}
              className={`flex items-center gap-2 px-8 py-3 bg-[#faebdd] text-[#d9730d] rounded-xl font-bold transition-all border border-[#d9730d]/20 shadow-sm active:scale-95 ${
                step === steps.length - 1
                  ? "opacity-0 pointer-events-none"
                  : "hover:opacity-80"
              }`}
            >
              Next Phase →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
