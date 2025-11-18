"use client";

import { useFocusMode } from "@/contexts/FocusModeContext";

export default function Header() {
  const { isFocusMode, toggleFocusMode } = useFocusMode();

  return (
    <header
      className={`bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 h-16 fixed top-0 right-0 z-10 transition-all duration-300 ${
        isFocusMode ? "left-0" : "left-64"
      }`}
    >
      <div className="h-full flex items-center justify-between px-6">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleFocusMode}
            className={`px-4 py-2 text-sm rounded transition-colors ${
              isFocusMode
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {isFocusMode ? "Exit Focus" : "Focus Mode"}
          </button>
          <select className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800">
            <option>English</option>
            <option>简体中文</option>
          </select>
        </div>
      </div>
    </header>
  );
}
