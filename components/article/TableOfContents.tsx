"use client";

import { useEffect, useState } from "react";
import { useFocusMode } from "@/contexts/FocusModeContext";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
  isOpen: boolean;
  onToggle: () => void;
}

export default function TableOfContents({
  headings,
  isOpen,
  onToggle,
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState("");
  const { isFocusMode } = useFocusMode();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Hide TOC when Focus Mode is active
  if (isFocusMode || headings.length === 0) {
    return null;
  }

  return (
    <div className="sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto pr-2 scrollbar-thin">
      <div
        className={`bg-[var(--sidebar-bg)] border border-[rgba(55,53,47,0.09)] dark:border-gray-800 rounded-xl transition-all shadow-sm ${
          isOpen ? "p-4" : "p-2"
        }`}
      >
        <div className={`flex items-center gap-2 ${isOpen ? "mb-4" : ""}`}>
          <button
            onClick={onToggle}
            className="p-1 hover:bg-[var(--sidebar-hover)] rounded text-[var(--foreground)] opacity-40 hover:opacity-100 transition-all flex-shrink-0"
            aria-label="Toggle table of contents"
          >
            <svg
              viewBox="0 0 100 100"
              className={`w-3 h-3 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <path
                d="M15,30 L50,70 L85,30"
                fill="none"
                stroke="currentColor"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h3
            className={`font-bold text-[11px] uppercase tracking-wider text-[var(--foreground)] opacity-40 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Table of Contents
          </h3>
        </div>
        {isOpen && (
          <nav className="space-y-[1px]">
            {headings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHeading(heading.id);
                }}
                className={`block text-[13px] py-1.5 px-3 rounded-md transition-all no-underline leading-tight ${
                  activeId === heading.id
                    ? "bg-[#faebdd] text-[#d9730d] font-bold shadow-sm"
                    : "text-[var(--foreground)] opacity-60 hover:opacity-100 hover:bg-[var(--sidebar-hover)]"
                }`}
                style={{
                  marginLeft: `${(heading.level - 1) * 0.5}rem`,
                }}
              >
                {heading.text}
              </a>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}
