"use client";

import Link from "next/link";

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
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 2rem" }}>
      {/* Greeting */}
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "rgb(55, 53, 47)",
          marginTop: 0,
          marginBottom: "2.5rem",
        }}
      >
        {getGreeting()}
      </h1>

      {/* Recently Visited */}
      <div style={{ marginBottom: "3rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "1rem",
            color: "rgb(55, 53, 47)",
          }}
        >
          <span style={{ fontSize: "1.125rem" }}>🕐</span>
          <h2
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              margin: 0,
              color: "rgb(55, 53, 47)",
            }}
          >
            Recently visited
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            overflowX: "auto",
            paddingBottom: "0.5rem",
            scrollbarWidth: "thin",
          }}
        >
          {recentlyVisited.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              style={{
                minWidth: "200px",
                border: "1px solid rgba(55, 53, 47, 0.09)",
                borderRadius: "3px",
                padding: "1rem",
                background: "white",
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "all 0.2s",
                boxShadow: "rgba(15, 15, 15, 0.03) 0px 0px 0px 1px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "rgba(15, 15, 15, 0.1) 0px 2px 4px";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "rgba(15, 15, 15, 0.03) 0px 0px 0px 1px";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                {item.icon}
              </div>
              <div
                style={{
                  fontWeight: 500,
                  color: "rgb(55, 53, 47)",
                  marginBottom: "0.25rem",
                  fontSize: "0.875rem",
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(55, 53, 47, 0.65)",
                  marginTop: "auto",
                }}
              >
                {item.date}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Access */}
      <div style={{ marginBottom: "3rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "1rem",
            color: "rgb(55, 53, 47)",
          }}
        >
          <span style={{ fontSize: "1.125rem" }}>⚡</span>
          <h2
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              margin: 0,
              color: "rgb(55, 53, 47)",
            }}
          >
            Quick access
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "0.75rem",
          }}
        >
          <Link
            href="/fast-track"
            style={{
              border: "1px solid rgba(55, 53, 47, 0.09)",
              borderRadius: "3px",
              padding: "1.5rem",
              background: "white",
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
              transition: "all 0.2s",
              boxShadow: "rgba(15, 15, 15, 0.03) 0px 0px 0px 1px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "rgba(15, 15, 15, 0.1) 0px 2px 4px";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "rgba(15, 15, 15, 0.03) 0px 0px 0px 1px";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>
              🚀
            </div>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                marginTop: 0,
                marginBottom: "0.5rem",
                color: "rgb(55, 53, 47)",
              }}
            >
              Fast Track
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "0.875rem",
                color: "rgba(55, 53, 47, 0.65)",
                lineHeight: 1.5,
              }}
            >
              1-3 months interview ready path
            </p>
          </Link>

          <Link
            href="/basics"
            style={{
              border: "1px solid rgba(55, 53, 47, 0.09)",
              borderRadius: "3px",
              padding: "1.5rem",
              background: "white",
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
              transition: "all 0.2s",
              boxShadow: "rgba(15, 15, 15, 0.03) 0px 0px 0px 1px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "rgba(15, 15, 15, 0.1) 0px 2px 4px";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "rgba(15, 15, 15, 0.03) 0px 0px 0px 1px";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>
              📚
            </div>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                marginTop: 0,
                marginBottom: "0.5rem",
                color: "rgb(55, 53, 47)",
              }}
            >
              Basics
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "0.875rem",
                color: "rgba(55, 53, 47, 0.65)",
                lineHeight: 1.5,
              }}
            >
              Fundamental data structures and algorithms
            </p>
          </Link>

          <Link
            href="/pricing"
            style={{
              border: "1px solid rgba(55, 53, 47, 0.09)",
              borderRadius: "3px",
              padding: "1.5rem",
              background: "white",
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
              transition: "all 0.2s",
              boxShadow: "rgba(15, 15, 15, 0.03) 0px 0px 0px 1px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "rgba(15, 15, 15, 0.1) 0px 2px 4px";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "rgba(15, 15, 15, 0.03) 0px 0px 0px 1px";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>
              💎
            </div>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                marginTop: 0,
                marginBottom: "0.5rem",
                color: "rgb(55, 53, 47)",
              }}
            >
              Pricing
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "0.875rem",
                color: "rgba(55, 53, 47, 0.65)",
                lineHeight: 1.5,
              }}
            >
              View plans and features
            </p>
          </Link>
        </div>
      </div>

      {/* Learn Section */}
      <div style={{ marginBottom: "3rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "1rem",
            color: "rgb(55, 53, 47)",
          }}
        >
          <span style={{ fontSize: "1.125rem" }}>📖</span>
          <h2
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              margin: 0,
              color: "rgb(55, 53, 47)",
            }}
          >
            Learn
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            overflowX: "auto",
            paddingBottom: "0.5rem",
            scrollbarWidth: "thin",
          }}
        >
          {learnCards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              style={{
                minWidth: "240px",
                border: "1px solid rgba(55, 53, 47, 0.09)",
                borderRadius: "3px",
                padding: "1rem",
                background: "white",
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "all 0.2s",
                boxShadow: "rgba(15, 15, 15, 0.03) 0px 0px 0px 1px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "rgba(15, 15, 15, 0.1) 0px 2px 4px";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "rgba(15, 15, 15, 0.03) 0px 0px 0px 1px";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
                {card.icon}
              </div>
              <div
                style={{
                  fontWeight: 500,
                  color: "rgb(55, 53, 47)",
                  marginBottom: "0.25rem",
                  fontSize: "0.875rem",
                }}
              >
                {card.title}
              </div>
              <div
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(55, 53, 47, 0.65)",
                  marginBottom: "0.5rem",
                  lineHeight: 1.4,
                }}
              >
                {card.description}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(55, 53, 47, 0.65)",
                  marginTop: "auto",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <span>📖</span>
                {card.readTime}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
