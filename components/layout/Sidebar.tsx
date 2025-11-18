"use client";

import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-16"
      } bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 h-screen fixed left-0 top-0 overflow-y-auto`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className={`font-bold text-lg ${isOpen ? "block" : "hidden"}`}>
            AI-gorithms
          </h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
            aria-label="Toggle sidebar"
          >
            {isOpen ? "←" : "→"}
          </button>
        </div>

        {isOpen && (
          <nav className="space-y-2">
            <a
              href="/"
              className="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              Home
            </a>
            <a
              href="/pricing"
              className="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              Pricing
            </a>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <p className="px-3 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">
                Chapters
              </p>
              <a
                href="/introduction"
                className="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                Introduction
              </a>
              <a
                href="/study-plans"
                className="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                Study Plans
              </a>
            </div>
          </nav>
        )}
      </div>
    </aside>
  );
}
