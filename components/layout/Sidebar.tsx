"use client";

import { useState } from "react";
import { navigation, type NavItem } from "@/lib/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFocusMode } from "@/contexts/FocusModeContext";

function NavItemComponent({
  item,
  level = 0,
}: {
  item: NavItem;
  level?: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const hasChildren = item.children && item.children.length > 0;
  const isActive = pathname === item.href;

  return (
    <div>
      <div className="flex items-center">
        {hasChildren && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 mr-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded text-gray-600 dark:text-gray-400"
          >
            {isExpanded ? "▼" : "▶"}
          </button>
        )}
        <Link
          href={item.href}
          className={`flex-1 px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 ${
            isActive
              ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold"
              : ""
          }`}
          style={{ paddingLeft: `${level * 1 + 0.75}rem` }}
        >
          {item.title}
        </Link>
      </div>
      {hasChildren && isExpanded && (
        <div className="ml-4 mt-1">
          {item.children.map((child) => (
            <NavItemComponent key={child.href} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const { isFocusMode } = useFocusMode();

  if (isFocusMode) {
    return null;
  }

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-16"
      } bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 h-screen fixed left-0 top-0 overflow-y-auto`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h2
            className={`font-bold text-lg text-gray-900 dark:text-gray-100 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            AI-gorithms
          </h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded text-gray-700 dark:text-gray-300"
            aria-label="Toggle sidebar"
          >
            {isOpen ? "←" : "→"}
          </button>
        </div>

        {isOpen && (
          <nav className="space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 font-semibold text-gray-700 dark:text-gray-300"
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 font-semibold text-gray-700 dark:text-gray-300"
            >
              Pricing
            </Link>
            <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-800">
              {navigation.map((item) => (
                <NavItemComponent key={item.href} item={item} />
              ))}
            </div>
          </nav>
        )}
      </div>
    </aside>
  );
}
