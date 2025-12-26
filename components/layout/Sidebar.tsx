"use client";

import { useState } from "react";
import { navigation, type NavItem } from "@/lib/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFocusMode } from "@/contexts/FocusModeContext";
import { useMobileMenu } from "@/contexts/MobileMenuContext";

function NavItemComponent({
  item,
  level = 0,
}: {
  item: NavItem;
  level?: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const { closeMobileMenu } = useMobileMenu();
  const hasChildren = item.children && item.children.length > 0;
  const isActive = pathname === item.href;

  const handleLinkClick = () => {
    closeMobileMenu();
  };

  return (
    <div>
      <div className="flex items-center">
        {hasChildren && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="p-1 mr-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded text-gray-600 dark:text-gray-400 flex-shrink-0"
          >
            {isExpanded ? "▼" : "▶"}
          </button>
        )}
        {hasChildren ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className={`flex-1 text-left px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 ${
              isActive
                ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold"
                : ""
            }`}
            style={{ paddingLeft: `${level * 1 + 0.75}rem` }}
          >
            {item.title}
          </button>
        ) : (
          <Link
            href={item.href}
            onClick={handleLinkClick}
            className={`flex-1 px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 ${
              isActive
                ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold"
                : ""
            }`}
            style={{ paddingLeft: `${level * 1 + 0.75}rem` }}
          >
            {item.title}
          </Link>
        )}
      </div>
      {hasChildren && isExpanded && item.children && (
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
  const { isMobileMenuOpen, closeMobileMenu } = useMobileMenu();

  if (isFocusMode) {
    return null;
  }

  return (
    <>
      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeMobileMenu}
        />
      )}

      <aside
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 h-screen fixed left-0 top-0 overflow-y-auto z-40 ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
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
              className="hidden lg:block p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded text-gray-700 dark:text-gray-300"
              aria-label="Toggle sidebar"
            >
              {isOpen ? "←" : "→"}
            </button>
            <button
              onClick={closeMobileMenu}
              className="lg:hidden p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded text-gray-700 dark:text-gray-300"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {isOpen && (
            <nav className="space-y-1">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 font-semibold text-gray-700 dark:text-gray-300"
              >
                Home
              </Link>
              <Link
                href="/pricing"
                onClick={closeMobileMenu}
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
    </>
  );
}
