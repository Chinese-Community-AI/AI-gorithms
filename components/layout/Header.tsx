"use client";

import { useFocusMode } from "@/contexts/FocusModeContext";
import { useTutorMode } from "@/contexts/TutorModeContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useMobileMenu } from "@/contexts/MobileMenuContext";
import { useSearch } from "@/contexts/SearchContext";

export default function Header() {
  const { isFocusMode, toggleFocusMode } = useFocusMode();
  const { isTutorMode, toggleTutorMode } = useTutorMode();
  const { theme, toggleTheme } = useTheme();
  const { toggleMobileMenu } = useMobileMenu();
  const { openSearch } = useSearch();

  return (
    <header
      className={`bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 h-16 fixed top-0 z-10 transition-all duration-300 ${
        isFocusMode ? "left-0 right-0" : "lg:left-64 left-0 right-0"
      }`}
    >
      <div className="h-full flex items-center justify-between px-4 lg:px-6">
        <div className="flex items-center space-x-2 lg:space-x-4">
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search..."
            onClick={openSearch}
            readOnly
            className="hidden sm:block px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base cursor-pointer"
          />
        </div>
        <div className="flex items-center space-x-2 lg:space-x-4">
          <button
            onClick={toggleTutorMode}
            className={`hidden sm:block px-3 lg:px-4 py-2 text-xs lg:text-sm rounded transition-colors ${
              isTutorMode
                ? "bg-purple-500 text-white hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700"
                : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            }`}
          >
            {isTutorMode ? "Exit AI Tutor" : "AI Tutor Mode"}
          </button>
          <button
            onClick={toggleFocusMode}
            className={`hidden sm:block px-3 lg:px-4 py-2 text-xs lg:text-sm rounded transition-colors ${
              isFocusMode
                ? "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            }`}
          >
            {isFocusMode ? "Exit AI Chat" : "AI Chat Mode"}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-gray-700 dark:text-gray-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
          <select className="hidden lg:block px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm">
            <option>English</option>
            <option>简体中文</option>
          </select>
          <button
            onClick={() => {
              // TODO: Implement login functionality
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
