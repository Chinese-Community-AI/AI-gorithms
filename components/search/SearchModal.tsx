"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useSearch } from "@/contexts/SearchContext";
import { navigation } from "@/lib/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";

function flattenNavigation(
  items: typeof navigation
): Array<{ title: string; href: string }> {
  const result: Array<{ title: string; href: string }> = [];

  items.forEach((item) => {
    result.push({ title: item.title, href: item.href });
    if (item.children) {
      item.children.forEach((child) => {
        result.push({ title: child.title, href: child.href });
      });
    }
  });

  return result;
}

export default function SearchModal() {
  const { isSearchOpen, closeSearch } = useSearch();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<
    Array<{ title: string; href: string }>
  >([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const allItems = useMemo(() => flattenNavigation(navigation), []);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase();
    const filtered = allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery) ||
        item.href.toLowerCase().includes(searchQuery)
    );
    setResults(filtered.slice(0, 10)); // Limit to 10 results
  }, [query, allItems]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeSearch();
    } else if (e.key === "Enter" && results.length > 0) {
      router.push(results[0].href);
      closeSearch();
    }
  };

  if (!isSearchOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-50 flex items-start justify-center pt-20 px-4"
      onClick={closeSearch}
    >
      <div
        className="bg-[var(--background)] dark:bg-[#191919] rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden border border-[rgba(55,53,47,0.09)] dark:border-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-[rgba(55,53,47,0.06)] dark:border-gray-800 bg-[var(--sidebar-bg)]">
          <div className="relative group">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none opacity-40">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search articles, topics..."
              className="w-full pl-10 pr-4 py-3 bg-[var(--background)] border border-[rgba(55,53,47,0.12)] rounded-lg text-[var(--foreground)] placeholder-[var(--foreground)] placeholder-opacity-30 focus:outline-none focus:ring-2 focus:ring-[#d9730d]/10 transition-all"
            />
          </div>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {results.length > 0 ? (
            <ul className="divide-y divide-[rgba(55,53,47,0.06)] dark:divide-gray-800">
              {results.map((item, index) => (
                <li key={`${item.href}-${index}`}>
                  <Link
                    href={item.href}
                    onClick={closeSearch}
                    className="block px-4 py-4 hover:bg-[var(--sidebar-hover)] transition-colors no-underline group"
                  >
                    <div className="font-bold text-[var(--foreground)] mb-0.5 group-hover:text-[#d9730d] transition-colors">
                      {item.title}
                    </div>
                    <div className="text-[0.6875rem] font-bold text-[var(--foreground)] opacity-30 uppercase tracking-tighter">
                      {item.href}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : query.trim() !== "" ? (
            <div className="px-4 py-12 text-center">
              <div className="text-3xl mb-3 opacity-20">🔍</div>
              <div className="text-sm font-bold text-[var(--foreground)] opacity-40">
                No results found for "{query}"
              </div>
            </div>
          ) : (
            <div className="px-4 py-12 text-center">
              <div className="text-3xl mb-3 opacity-20">⌨️</div>
              <div className="text-sm font-bold text-[var(--foreground)] opacity-40">
                Start typing to search...
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-[rgba(55,53,47,0.06)] dark:border-gray-800 bg-[var(--sidebar-bg)] flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1.5 text-[0.625rem] font-bold text-[var(--foreground)] opacity-30 uppercase tracking-widest">
              <kbd className="px-1.5 py-0.5 bg-[var(--background)] border border-[rgba(55,53,47,0.1)] rounded shadow-sm">
                Enter
              </kbd>{" "}
              to navigate
            </span>
            <span className="flex items-center gap-1.5 text-[10px] font-bold text-[var(--foreground)] opacity-30 uppercase tracking-widest">
              <kbd className="px-1.5 py-0.5 bg-[var(--background)] border border-[rgba(55,53,47,0.1)] rounded shadow-sm">
                Esc
              </kbd>{" "}
              to close
            </span>
          </div>
          <span className="text-[0.625rem] font-bold text-[#d9730d] opacity-60 uppercase tracking-widest">
            HaoHaoXueXi Search
          </span>
        </div>
      </div>
    </div>
  );
}
