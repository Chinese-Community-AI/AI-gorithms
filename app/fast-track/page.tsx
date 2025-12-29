"use client";

import { ReactNode } from "react";

// Reusable components
const Callout = ({
  type = "info",
  children,
}: {
  type?: "info" | "warning" | "critical";
  children: ReactNode;
}) => {
  const styles = {
    info: {
      background: "rgba(46, 170, 220, 0.08)",
      borderColor: "rgba(46, 170, 220, 0.3)",
    },
    warning: {
      background: "rgba(251, 243, 219, 0.6)",
      borderColor: "rgba(233, 196, 106, 0.4)",
    },
    critical: {
      background: "rgba(235, 87, 87, 0.08)",
      borderColor: "rgba(235, 87, 87, 0.3)",
    },
  };

  const style = styles[type];

  return (
    <div
      style={{
        background: style.background,
        borderLeft: `3px solid ${style.borderColor}`,
        padding: "1.25rem",
        borderRadius: "3px",
        marginBottom: "1rem",
      }}
    >
      {children}
    </div>
  );
};

// Helper function to map badge labels to variants
const getBadgeVariant = (
  label: string
): "default" | "intermediate" | "advanced" | "critical" | "must-read" => {
  const lowerLabel = label.toLowerCase();
  if (lowerLabel.includes("beginner")) return "default";
  if (lowerLabel.includes("intermediate")) return "intermediate";
  if (lowerLabel.includes("advanced")) return "advanced";
  if (
    lowerLabel.includes("critical") ||
    lowerLabel.includes("foundation") ||
    lowerLabel.includes("section")
  )
    return "critical";
  if (lowerLabel.includes("must read") || lowerLabel.includes("must-read"))
    return "must-read";
  return "default";
};

const Badge = ({
  label,
  variant,
}: {
  label: string;
  variant?: "default" | "intermediate" | "advanced" | "critical" | "must-read";
}) => {
  const styles = {
    default: {
      background: "rgba(55, 53, 47, 0.08)",
      color: "rgb(55, 53, 47)",
      borderColor: "rgba(55, 53, 47, 0.1)",
    },
    intermediate: {
      background: "rgba(46, 170, 220, 0.1)",
      color: "rgb(46, 170, 220)",
      borderColor: "rgba(46, 170, 220, 0.2)",
    },
    advanced: {
      background: "rgba(147, 51, 234, 0.1)",
      color: "rgb(147, 51, 234)",
      borderColor: "rgba(147, 51, 234, 0.2)",
    },
    critical: {
      background: "rgba(235, 87, 87, 0.1)",
      color: "rgb(235, 87, 87)",
      borderColor: "rgba(235, 87, 87, 0.2)",
    },
    "must-read": {
      background: "rgba(235, 87, 87, 0.1)",
      color: "rgb(235, 87, 87)",
      borderColor: "rgba(235, 87, 87, 0.2)",
    },
  };

  const badgeVariant = variant || getBadgeVariant(label);
  const style = styles[badgeVariant] || styles.default;

  return (
    <span
      style={{
        background: style.background,
        color: style.color,
        padding: "0.2rem 0.5rem",
        borderRadius: "3px",
        fontSize: "0.875rem",
        fontWeight: 500,
        border: `1px solid ${style.borderColor}`,
      }}
    >
      {label}
    </span>
  );
};

const TopicCard = ({
  title,
  badge,
  time,
  children,
  variant = "default",
}: {
  title: string;
  badge?: string;
  time?: string;
  children: ReactNode;
  variant?: "default" | "critical";
}) => {
  const borderColor =
    variant === "critical"
      ? "rgba(235, 87, 87, 0.2)"
      : "rgba(55, 53, 47, 0.09)";

  return (
    <div
      style={{
        border: `1px solid ${borderColor}`,
        borderRadius: "6px",
        padding: "1.25rem",
        marginBottom: "1.5rem",
        background: "white",
        boxShadow: "rgba(15, 15, 15, 0.03) 0px 0px 0px 1px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "0.75rem",
        }}
      >
        <h3
          style={{
            fontSize: "1.375rem",
            fontWeight: 600,
            margin: 0,
            color: "rgb(55, 53, 47)",
          }}
        >
          {title}
        </h3>
        {badge && <Badge label={badge} />}
        {time && (
          <span
            style={{
              fontSize: "1rem",
              color: "rgba(55, 53, 47, 0.65)",
              fontStyle: "italic",
            }}
          >
            {time}
          </span>
        )}
      </div>
      {children}
    </div>
  );
};

const SectionHeading = ({
  children,
  subtitle,
}: {
  children: ReactNode;
  subtitle?: string;
}) => (
  <>
    <h2
      style={{
        fontSize: "1.875rem",
        fontWeight: 600,
        marginTop: "2.5rem",
        marginBottom: subtitle ? "1rem" : "1.5rem",
        color: "rgb(55, 53, 47)",
      }}
    >
      {children}
    </h2>
    {subtitle && (
      <p
        style={{
          color: "rgba(55, 53, 47, 0.65)",
          marginBottom: "2rem",
          fontStyle: "italic",
        }}
      >
        <em>{subtitle}</em>
      </p>
    )}
  </>
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
  <div
    style={{
      border: "1px solid rgba(55, 53, 47, 0.09)",
      padding: "1.25rem",
      borderRadius: "6px",
      background: "white",
      boxShadow: "rgba(15, 15, 15, 0.03) 0px 0px 0px 1px",
    }}
  >
    <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{emoji}</div>
    <strong
      style={{
        color: "rgb(55, 53, 47)",
        fontWeight: 600,
        display: "block",
        marginBottom: "0.5rem",
      }}
    >
      {title}
    </strong>
    {children}
  </div>
);

// Main content component
function FastTrackContent() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "3rem 2rem",
        fontSize: "1.125rem",
      }}
    >
      {/* Overview */}
      <Callout type="info">
        <h3
          style={{
            marginTop: 0,
            marginBottom: "0.75rem",
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "rgb(55, 53, 47)",
          }}
        >
          Overview
        </h3>
        <p
          style={{
            marginBottom: "0.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
          }}
        >
          <strong>Goal:</strong> Master core algorithm patterns and solve
          medium-level problems independently in the shortest time possible.
        </p>
        <p
          style={{
            marginBottom: 0,
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
          }}
        >
          <strong>Total estimated time:</strong> 4-6 weeks (1-2 hours/day)
        </p>
      </Callout>

      {/* Who is this for */}
      <SectionHeading>Who is this for?</SectionHeading>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1rem",
          marginBottom: "2.5rem",
        }}
      >
        <TipCard emoji="⏰" title="Limited Time">
          <p
            style={{
              marginTop: "0.5rem",
              marginBottom: 0,
              color: "rgba(55, 53, 47, 0.65)",
              fontSize: "0.875rem",
              lineHeight: 1.5,
            }}
          >
            Need to prep for interviews quickly
          </p>
        </TipCard>
        <TipCard emoji="🎯" title="High-Impact Focus">
          <p
            style={{
              marginTop: "0.5rem",
              marginBottom: 0,
              color: "rgba(55, 53, 47, 0.65)",
              fontSize: "1rem",
              lineHeight: 1.5,
            }}
          >
            Want to learn most important topics first
          </p>
        </TipCard>
        <TipCard emoji="📚" title="Structured Learning">
          <p
            style={{
              marginTop: "0.5rem",
              marginBottom: 0,
              color: "rgba(55, 53, 47, 0.65)",
              fontSize: "1rem",
              lineHeight: 1.5,
            }}
          >
            Prefer template-based approach
          </p>
        </TipCard>
      </div>

      {/* Learning Principles */}
      <SectionHeading>Learning Principles</SectionHeading>
      <Callout type="info">
        <h3
          style={{
            marginTop: 0,
            marginBottom: "0.75rem",
            fontSize: "1.125rem",
            fontWeight: 600,
            color: "rgb(55, 53, 47)",
          }}
        >
          Three Core Principles
        </h3>
        <ol
          style={{
            marginBottom: 0,
            paddingLeft: "1.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
          }}
        >
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Template-First Approach</strong> — Learn unified frameworks,
            not isolated problems
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Progressive Difficulty</strong> — Build foundations before
            advanced topics
          </li>
          <li>
            <strong>Practice After Learning</strong> — Understand concepts
            first, then solve problems
          </li>
        </ol>
      </Callout>
      <Callout type="warning">
        <p style={{ margin: 0, color: "rgb(55, 53, 47)", lineHeight: 1.6 }}>
          <strong>Important:</strong> Don't skip framework articles to jump
          straight to problems. Solid foundations save time in the long run.
        </p>
      </Callout>

      {/* Part 1: Data Structures Fundamentals */}
      <SectionHeading subtitle="Week 1-2">
        Part 1: Data Structures Fundamentals
      </SectionHeading>

      <TopicCard title="Arrays & Linked Lists" badge="Beginner" time="2 days">
        <ul
          style={{
            margin: 0,
            paddingLeft: "1.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
          }}
        >
          <li style={{ marginBottom: "0.25rem" }}>
            Array basics and circular array technique
          </li>
          <li style={{ marginBottom: "0.25rem" }}>Linked list principles</li>
          <li style={{ marginBottom: "0.25rem" }}>Two-pointer technique</li>
          <li style={{ marginBottom: "0.25rem" }}>
            Sequential vs linked storage
          </li>
          <li>O(1) insertion/deletion with circular arrays</li>
        </ul>
      </TopicCard>

      <TopicCard title="Hash Tables" badge="Beginner" time="1-2 days">
        <p
          style={{
            marginBottom: "0.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
          }}
        >
          <strong>Core Concepts:</strong>
        </p>
        <ul
          style={{
            margin: "0 0 0.5rem 0",
            paddingLeft: "1.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
          }}
        >
          <li style={{ marginBottom: "0.25rem" }}>Hash table principles</li>
          <li>LinkedHashMap and ArrayHashMap patterns</li>
        </ul>
        <p
          style={{
            margin: 0,
            color: "rgba(55, 53, 47, 0.65)",
            fontStyle: "italic",
            fontSize: "0.875rem",
          }}
        >
          <em>Skip: Detailed collision resolution implementations</em>
        </p>
      </TopicCard>

      <TopicCard
        title="Binary Trees ⭐"
        badge="Critical Foundation"
        time="2-3 days"
        variant="critical"
      >
        <Callout type="warning">
          <p
            style={{
              margin: 0,
              color: "rgb(55, 53, 47)",
              lineHeight: 1.6,
              fontSize: "0.875rem",
            }}
          >
            <strong>Why This Is Critical:</strong> All recursive algorithms are
            essentially tree traversal. Master this and you'll understand
            DFS/Backtracking, Dynamic Programming, and Divide & Conquer.
          </p>
        </Callout>
        <p
          style={{
            marginBottom: "0.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
            fontSize: "0.875rem",
          }}
        >
          <strong>Core Concepts:</strong>
        </p>
        <ul
          style={{
            margin: 0,
            paddingLeft: "1.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
          }}
        >
          <li style={{ marginBottom: "0.25rem" }}>
            Tree traversal (recursive & level-order)
          </li>
          <li style={{ marginBottom: "0.25rem" }}>N-ary trees</li>
          <li>DFS vs BFS decision framework</li>
        </ul>
      </TopicCard>

      <TopicCard title="Binary Search Trees" badge="Beginner" time="1 day">
        <p
          style={{
            marginBottom: "0.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
            fontSize: "0.875rem",
          }}
        >
          <strong>Core Concepts:</strong>
        </p>
        <ul
          style={{
            margin: 0,
            paddingLeft: "1.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
          }}
        >
          <li style={{ marginBottom: "0.25rem" }}>
            "Left smaller, right larger" property
          </li>
          <li>Basic operations and construction</li>
        </ul>
      </TopicCard>

      <TopicCard title="Binary Heap" badge="Beginner" time="0.5 days">
        <p
          style={{
            marginBottom: "0.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
            fontSize: "0.875rem",
          }}
        >
          <strong>Core Concepts:</strong>
        </p>
        <ul
          style={{
            margin: "0 0 0.5rem 0",
            paddingLeft: "1.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
          }}
        >
          <li style={{ marginBottom: "0.25rem" }}>
            Priority queues (auto-sorting with O(log N))
          </li>
          <li>Heap structure and swim/sink operations</li>
        </ul>
        <p
          style={{
            margin: 0,
            color: "rgba(55, 53, 47, 0.65)",
            fontStyle: "italic",
            fontSize: "0.875rem",
          }}
        >
          <em>Skip: Implementation details</em>
        </p>
      </TopicCard>

      <TopicCard title="Graphs" badge="Beginner" time="1 day">
        <p
          style={{
            marginBottom: "0.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
            fontSize: "0.875rem",
          }}
        >
          <strong>Core Concepts:</strong>
        </p>
        <ul
          style={{
            margin: 0,
            paddingLeft: "1.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
          }}
        >
          <li style={{ marginBottom: "0.25rem" }}>Graph representation</li>
          <li>DFS/BFS traversal templates</li>
        </ul>
      </TopicCard>

      {/* Part 2: Algorithm Patterns */}
      <SectionHeading subtitle="Week 2-5">
        Part 2: Algorithm Patterns
      </SectionHeading>

      <TopicCard
        title="🎯 Start Here: Core Framework"
        badge="Must Read"
        time="0.5 days"
        variant="critical"
      >
        <Callout type="info">
          <p
            style={{
              margin: "0 0 0.5rem 0",
              color: "rgb(55, 53, 47)",
              lineHeight: 1.6,
              fontSize: "0.875rem",
            }}
          >
            <strong>
              Framework Thinking for Learning Data Structures and Algorithms
            </strong>
          </p>
          <p
            style={{
              margin: 0,
              color: "rgb(55, 53, 47)",
              lineHeight: 1.6,
              fontSize: "0.875rem",
            }}
          >
            This article summarizes all data structures, reveals the essence of
            all algorithms, and should be revisited as you progress.
          </p>
        </Callout>
      </TopicCard>

      <TopicCard title="Linked Lists" badge="Intermediate" time="2 days">
        <ul
          style={{
            margin: 0,
            paddingLeft: "1.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
          }}
        >
          <li style={{ marginBottom: "0.25rem" }}>
            Two-pointer technique framework (1 day)
          </li>
          <li style={{ marginBottom: "0.25rem" }}>
            Classic problems practice (1 day)
          </li>
          <li>Optional: Recursive operations (1 day)</li>
        </ul>
      </TopicCard>

      <TopicCard title="Arrays" badge="Intermediate" time="3-5 days">
        <p
          style={{
            marginBottom: "0.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
            fontSize: "0.875rem",
          }}
        >
          <strong>Key Techniques:</strong>
        </p>
        <ul
          style={{
            margin: "0 0 0.75rem 0",
            paddingLeft: "1.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
          }}
        >
          <li style={{ marginBottom: "0.25rem" }}>
            Two-pointer variants (fast/slow, left/right)
          </li>
          <li style={{ marginBottom: "0.25rem" }}>Binary search</li>
          <li>Sliding window</li>
        </ul>
        <p
          style={{
            marginBottom: "0.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
            fontSize: "0.875rem",
          }}
        >
          <strong>Topics:</strong>
        </p>
        <ul
          style={{
            margin: 0,
            paddingLeft: "1.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
          }}
        >
          <li style={{ marginBottom: "0.25rem" }}>
            Two-pointer fundamentals (0.5 days)
          </li>
          <li style={{ marginBottom: "0.25rem" }}>
            2D array traversal techniques (1-2 days)
          </li>
          <li style={{ marginBottom: "0.25rem" }}>
            Sliding window template (2 days)
          </li>
          <li style={{ marginBottom: "0.25rem" }}>
            Binary search templates (1-2 days)
          </li>
          <li>Prefix sum & difference arrays (1-2 days)</li>
        </ul>
      </TopicCard>

      <TopicCard title="Stack & Queue" badge="Intermediate" time="2-4 days">
        <ul
          style={{
            margin: 0,
            paddingLeft: "1.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
          }}
        >
          <li style={{ marginBottom: "0.25rem" }}>
            Basic implementations (0.5 days)
          </li>
          <li style={{ marginBottom: "0.25rem" }}>
            Classic problems (1-2 days)
          </li>
          <li>Monotonic stack/queue (2-3 days)</li>
        </ul>
      </TopicCard>

      <TopicCard
        title="Binary Trees Deep Dive ⭐⭐"
        badge="Critical Section"
        time="5-7 days"
        variant="critical"
      >
        <Callout type="critical">
          <p
            style={{
              margin: 0,
              color: "rgb(55, 53, 47)",
              lineHeight: 1.6,
              fontSize: "0.875rem",
            }}
          >
            <strong>Most Important For Interview Success</strong> — This is the
            most crucial section. Spend extra time here if needed.
          </p>
        </Callout>
        <p
          style={{
            marginBottom: "0.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
            fontSize: "0.875rem",
          }}
        >
          <strong>Core Framework (3-4 days):</strong>
        </p>
        <ul
          style={{
            margin: "0 0 0.75rem 0",
            paddingLeft: "1.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
          }}
        >
          <li style={{ marginBottom: "0.25rem" }}>
            Recursive thinking: "traversal" vs "decomposition" (0.5 days)
          </li>
          <li style={{ marginBottom: "0.25rem" }}>
            Pre/in/post-order positions in real problems (1 day)
          </li>
          <li>
            Binary tree insights: thinking, construction, serialization (2-3
            days)
          </li>
        </ul>
        <p
          style={{
            marginBottom: "0.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
            fontSize: "0.875rem",
          }}
        >
          <strong>Practice (2 days):</strong>
        </p>
        <ul
          style={{
            margin: "0 0 0.5rem 0",
            paddingLeft: "1.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
          }}
        >
          <li style={{ marginBottom: "0.25rem" }}>
            "Traversal" thinking problems
          </li>
          <li style={{ marginBottom: "0.25rem" }}>
            "Decomposition" thinking problems
          </li>
          <li>Level-order traversal problems</li>
        </ul>
        <p
          style={{
            margin: 0,
            color: "rgba(55, 53, 47, 0.65)",
            fontStyle: "italic",
            fontSize: "0.875rem",
          }}
        >
          <em>
            Optional Extensions: Lowest common ancestor series, Complete binary
            tree node counting
          </em>
        </p>
      </TopicCard>

      <TopicCard title="BST Operations" badge="Intermediate" time="2-3 days">
        <ul
          style={{
            margin: 0,
            paddingLeft: "1.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
          }}
        >
          <li style={{ marginBottom: "0.25rem" }}>
            BST properties and operations (1-2 days)
          </li>
          <li>BST construction (1 day)</li>
        </ul>
      </TopicCard>

      <TopicCard
        title="Data Structure Design"
        badge="Intermediate"
        time="2-3 days"
      >
        <p
          style={{
            marginBottom: "0.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
            fontSize: "0.875rem",
          }}
        >
          <strong>Must Know:</strong> LRU Cache (1 day)
        </p>
        <p
          style={{
            margin: 0,
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
            fontSize: "0.875rem",
          }}
        >
          <strong>Optional:</strong> LFU Cache, Calculator implementation (1
          day), Additional design problems (1 day)
        </p>
      </TopicCard>

      <TopicCard title="Graph Algorithms" badge="Intermediate" time="3-4 days">
        <p
          style={{
            marginBottom: "0.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
            fontSize: "0.875rem",
          }}
        >
          <strong>Essential Topics:</strong>
        </p>
        <ul
          style={{
            margin: "0 0 0.5rem 0",
            paddingLeft: "1.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
          }}
        >
          <li style={{ marginBottom: "0.25rem" }}>
            Cycle detection & topological sort (1-2 days)
          </li>
          <li style={{ marginBottom: "0.25rem" }}>Bipartite graph check</li>
          <li style={{ marginBottom: "0.25rem" }}>
            Union-Find algorithm (1 day)
          </li>
          <li style={{ marginBottom: "0.25rem" }}>
            Minimum spanning tree — Kruskal (1 day)
          </li>
          <li>Dijkstra's shortest path (1 day)</li>
        </ul>
        <p
          style={{
            margin: 0,
            color: "rgba(55, 53, 47, 0.65)",
            fontStyle: "italic",
            fontSize: "0.875rem",
          }}
        >
          <em>Pro Tip: Save templates for quick reuse in coding contests</em>
        </p>
      </TopicCard>

      <TopicCard title="DFS/Backtracking ⭐" badge="Advanced" time="5-7 days">
        <Callout type="info">
          <p
            style={{
              margin: 0,
              color: "rgb(55, 53, 47)",
              lineHeight: 1.6,
              fontSize: "0.875rem",
            }}
          >
            <strong>Why Important:</strong> Brute-force fallback when optimal
            solution is unclear. Can help you score partial points in contests.
          </p>
        </Callout>
        <p
          style={{
            marginBottom: "0.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
            fontSize: "0.875rem",
          }}
        >
          <strong>Core Patterns (3-4 days):</strong>
        </p>
        <ul
          style={{
            margin: 0,
            paddingLeft: "1.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
          }}
        >
          <li style={{ marginBottom: "0.25rem" }}>
            Backtracking framework (1-2 days)
          </li>
          <li style={{ marginBottom: "0.25rem" }}>Sudoku & N-Queens</li>
          <li style={{ marginBottom: "0.25rem" }}>
            Permutations/combinations/subsets (1-2 days)
          </li>
          <li>Island problems & DFS differences (1 day)</li>
        </ul>
      </TopicCard>

      <TopicCard title="BFS Algorithm" badge="Intermediate" time="3 days">
        <Callout type="info">
          <p
            style={{
              margin: 0,
              color: "rgb(55, 53, 47)",
              lineHeight: 1.6,
              fontSize: "0.875rem",
            }}
          >
            <strong>Key Insight:</strong> Similar to tree level-order traversal;
            excellent for shortest path problems
          </p>
        </Callout>
        <p
          style={{
            marginBottom: "0.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
            fontSize: "0.875rem",
          }}
        >
          <strong>Framework (1 day):</strong> BFS problem-solving template
        </p>
        <p
          style={{
            margin: 0,
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
            fontSize: "0.875rem",
          }}
        >
          <strong>Practice (2 days):</strong> Priority problems include Complete
          Binary Tree Inserter, Keys and Rooms, Minimum Genetic Mutation,
          Shortest Path in Binary Matrix, Rotting Oranges, Word Ladder, and
          more.
        </p>
      </TopicCard>

      <TopicCard
        title="Dynamic Programming ⭐"
        badge="Advanced"
        time="6-8 days"
      >
        <Callout type="info">
          <p
            style={{
              margin: 0,
              color: "rgb(55, 53, 47)",
              lineHeight: 1.6,
              fontSize: "0.875rem",
            }}
          >
            <strong>Key Insight:</strong> Optimized brute-force with memoization
            for overlapping subproblems
          </p>
        </Callout>
        <p
          style={{
            marginBottom: "0.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
            fontSize: "0.875rem",
          }}
        >
          <strong>Core Framework (2-3 days):</strong>
        </p>
        <ul
          style={{
            margin: "0 0 0.75rem 0",
            paddingLeft: "1.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
          }}
        >
          <li style={{ marginBottom: "0.25rem" }}>
            DP problem-solving framework (1-2 days)
          </li>
          <li style={{ marginBottom: "0.25rem" }}>
            Longest increasing subsequence
          </li>
          <li style={{ marginBottom: "0.25rem" }}>
            Base case & memo initialization (1-2 days)
          </li>
          <li>Optimal substructure & traversal direction</li>
        </ul>
        <p
          style={{
            marginBottom: "0.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
            fontSize: "0.875rem",
          }}
        >
          <strong>Practice (4-5 days):</strong>
        </p>
        <ul
          style={{
            margin: 0,
            paddingLeft: "1.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
          }}
        >
          <li style={{ marginBottom: "0.25rem" }}>Edit distance (1-2 days)</li>
          <li style={{ marginBottom: "0.25rem" }}>Maximum subarray</li>
          <li style={{ marginBottom: "0.25rem" }}>
            Longest common subsequence
          </li>
          <li>Knapsack problems: 0-1, subset, complete (1-2 days)</li>
        </ul>
      </TopicCard>

      <TopicCard title="Greedy Algorithm" badge="Intermediate" time="1 day">
        <Callout type="warning">
          <p
            style={{
              margin: 0,
              color: "rgb(55, 53, 47)",
              lineHeight: 1.6,
              fontSize: "0.875rem",
            }}
          >
            <strong>Key Insight:</strong> Use problem properties to avoid
            brute-force.{" "}
            <em>
              Note: No fixed template; requires problem-specific observation
            </em>
          </p>
        </Callout>
      </TopicCard>

      <TopicCard title="Divide & Conquer" badge="Intermediate" time="1 day">
        <p
          style={{
            margin: 0,
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
            fontSize: "0.875rem",
          }}
        >
          <strong>Pattern:</strong> Break down → solve subproblems → combine
          results
        </p>
      </TopicCard>

      <TopicCard title="Math & Tricks" badge="Intermediate" time="2-3 days">
        <ul
          style={{
            margin: 0,
            paddingLeft: "1.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
          }}
        >
          <li style={{ marginBottom: "0.25rem" }}>
            One-line solutions & randomization (1-2 days)
          </li>
          <li>Prime numbers & math techniques (1 day)</li>
        </ul>
      </TopicCard>

      <TopicCard title="Classic Problems" badge="Advanced" time="2-4 days">
        <p
          style={{
            marginBottom: "0.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
            fontSize: "0.875rem",
          }}
        >
          <strong>High-Value Problems:</strong>
        </p>
        <ul
          style={{
            margin: 0,
            paddingLeft: "1.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
          }}
        >
          <li style={{ marginBottom: "0.25rem" }}>
            Meeting rooms (scanline technique) (1-2 days)
          </li>
          <li style={{ marginBottom: "0.25rem" }}>Trapping rain water</li>
          <li style={{ marginBottom: "0.25rem" }}>Ugly number series</li>
          <li style={{ marginBottom: "0.25rem" }}>
            Weighted random selection (1-2 days)
          </li>
          <li>nSum problems & template</li>
        </ul>
      </TopicCard>

      <TopicCard title="Sorting Algorithms" badge="Beginner" time="1 day">
        <div
          style={{
            background: "rgba(55, 53, 47, 0.03)",
            borderLeft: "3px solid rgba(55, 53, 47, 0.16)",
            padding: "0.875rem 1rem",
            margin: 0,
            borderRadius: "3px",
          }}
        >
          <p
            style={{
              margin: "0 0 0.5rem 0",
              color: "rgb(55, 53, 47)",
              lineHeight: 1.6,
              fontSize: "0.875rem",
            }}
          >
            <strong>Interview Focus:</strong> Principles, complexity, use cases
            (not implementation)
          </p>
          <p
            style={{
              margin: 0,
              color: "rgb(55, 53, 47)",
              lineHeight: 1.6,
              fontSize: "0.875rem",
            }}
          >
            <em>
              Recommendation: Watch video overview of 10 classic sorting
              algorithms
            </em>
          </p>
        </div>
      </TopicCard>

      {/* Study Tips */}
      <SectionHeading>Study Tips</SectionHeading>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1rem",
          marginBottom: "2.5rem",
        }}
      >
        <TipCard emoji="⏱️" title="Time Management">
          <ul
            style={{
              marginTop: "0.5rem",
              marginBottom: 0,
              paddingLeft: "1.5rem",
              fontSize: "0.875rem",
              color: "rgba(55, 53, 47, 0.65)",
              lineHeight: 1.6,
            }}
          >
            <li style={{ marginBottom: "0.25rem" }}>
              Estimates assume 1-2 hours/day
            </li>
            <li style={{ marginBottom: "0.25rem" }}>
              Longer study sessions = faster progress
            </li>
            <li>
              Don't get stuck on single problems — move forward and review later
            </li>
          </ul>
        </TipCard>
        <TipCard emoji="📋" title="Problem Lists">
          <p
            style={{
              marginTop: "0.5rem",
              marginBottom: "0.25rem",
              fontSize: "0.875rem",
              color: "rgba(55, 53, 47, 0.65)",
            }}
          >
            <strong>Use Them For:</strong>
          </p>
          <ul
            style={{
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
              paddingLeft: "1.5rem",
              fontSize: "0.875rem",
              color: "rgba(55, 53, 47, 0.65)",
              lineHeight: 1.6,
            }}
          >
            <li style={{ marginBottom: "0.25rem" }}>
              Understanding company-specific patterns
            </li>
            <li>Review after mastering templates</li>
          </ul>
          <p
            style={{
              margin: 0,
              fontSize: "0.875rem",
              color: "rgba(55, 53, 47, 0.65)",
            }}
          >
            <strong>Don't:</strong> Skip templates to only practice company
            lists
          </p>
        </TipCard>
        <TipCard emoji="🤔" title="When Stuck">
          <ol
            style={{
              marginTop: "0.5rem",
              marginBottom: 0,
              paddingLeft: "1.5rem",
              fontSize: "0.875rem",
              color: "rgba(55, 53, 47, 0.65)",
              lineHeight: 1.6,
            }}
          >
            <li style={{ marginBottom: "0.25rem" }}>
              Read framework articles first
            </li>
            <li style={{ marginBottom: "0.25rem" }}>Understand the template</li>
            <li style={{ marginBottom: "0.25rem" }}>Apply to problems</li>
            <li>Review and strengthen understanding</li>
          </ol>
        </TipCard>
        <TipCard emoji="📊" title="Progress Tracking">
          <p
            style={{
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
              fontSize: "0.875rem",
              color: "rgba(55, 53, 47, 0.65)",
            }}
          >
            Use the visual roadmap to:
          </p>
          <ul
            style={{
              margin: 0,
              paddingLeft: "1.5rem",
              fontSize: "0.875rem",
              color: "rgba(55, 53, 47, 0.65)",
              lineHeight: 1.6,
            }}
          >
            <li style={{ marginBottom: "0.25rem" }}>Track completed topics</li>
            <li style={{ marginBottom: "0.25rem" }}>
              Navigate between concepts
            </li>
            <li>Plan your study path</li>
          </ul>
        </TipCard>
      </div>

      {/* Success Metrics */}
      <SectionHeading>Success Metrics</SectionHeading>
      <Callout type="info">
        <h3
          style={{
            marginTop: 0,
            marginBottom: "0.75rem",
            fontSize: "1.125rem",
            fontWeight: 600,
            color: "rgb(55, 53, 47)",
          }}
        >
          After Completing This Plan
        </h3>
        <ul
          style={{
            marginBottom: 0,
            paddingLeft: "1.5rem",
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
          }}
        >
          <li style={{ marginBottom: "0.5rem" }}>
            ✓ Recognize which algorithm pattern applies to new problems
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            ✓ Solve medium-level LeetCode problems independently
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            ✓ Apply templates to variations of learned patterns
          </li>
          <li>✓ Write clean, structured solutions consistently</li>
        </ul>
        <p
          style={{
            marginTop: "1rem",
            marginBottom: 0,
            color: "rgb(55, 53, 47)",
            lineHeight: 1.6,
          }}
        >
          <strong>Next Steps:</strong> Return to advanced topics or
          company-specific problem lists as needed.
        </p>
      </Callout>

      <Callout type="warning">
        <p style={{ margin: 0, color: "rgb(55, 53, 47)", lineHeight: 1.6 }}>
          <strong>Remember:</strong> <em>Quality over quantity.</em> Deep
          understanding of templates &gt; memorizing many problems.
        </p>
      </Callout>
    </div>
  );
}

// Main page component
export default function FastTrackPage() {
  return (
    <div className="flex gap-8 relative">
      <div className="flex-1 min-w-0">
        <article className="w-full">
          <header className="mb-8 mt-12 scroll-mt-32">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              1 Month Fast Track
            </h1>
          </header>

          <div className="prose prose-gray dark:prose-invert dark:prose-pre:bg-gray-900 max-w-none prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-code:text-gray-900 dark:prose-code:text-gray-100 prose-li:text-gray-700 dark:prose-li:text-gray-300">
            <FastTrackContent />
          </div>
        </article>
      </div>
    </div>
  );
}
