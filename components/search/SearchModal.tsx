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
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20 px-4"
      onClick={closeSearch}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search articles, topics..."
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {results.length > 0 ? (
            <ul className="divide-y divide-gray-200 dark:divide-gray-800">
              {results.map((item, index) => (
                <li key={`${item.href}-${index}`}>
                  <Link
                    href={item.href}
                    onClick={closeSearch}
                    className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100"
                  >
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {item.href}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : query.trim() !== "" ? (
            <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
              No results found for "{query}"
            </div>
          ) : (
            <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
              Start typing to search...
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
          Press{" "}
          <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
            Enter
          </kbd>{" "}
          to navigate,{" "}
          <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
            Esc
          </kbd>{" "}
          to close
        </div>
      </div>
    </div>
  );
}
