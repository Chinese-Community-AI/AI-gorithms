"use client";

import { useFocusMode } from "@/contexts/FocusModeContext";
import { useTutorMode } from "@/contexts/TutorModeContext";
import { useAudibleMode } from "@/contexts/AudibleModeContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useMobileMenu } from "@/contexts/MobileMenuContext";
import { useSearch } from "@/contexts/SearchContext";
import { usePlan } from "@/contexts/PlanContext";

const NavButton = ({
  onClick,
  isActive,
  activeClass,
  label,
  activeLabel,
}: {
  onClick: () => void;
  isActive: boolean;
  activeClass: string;
  label: string;
  activeLabel: string;
}) => (
  <button
    onClick={onClick}
    className={`hidden sm:block px-3 py-1.5 text-xs lg:text-sm rounded-sm font-medium transition-all duration-200 ${
      isActive
        ? `${activeClass} shadow-sm`
        : "text-[var(--foreground)] opacity-70 hover:opacity-100 hover:bg-[var(--sidebar-hover)]"
    }`}
  >
    {isActive ? activeLabel : label}
  </button>
);

export default function Header() {
  const { isFocusMode, toggleFocusMode } = useFocusMode();
  const { isTutorMode, toggleTutorMode } = useTutorMode();
  const { isAudibleMode, toggleAudibleMode } = useAudibleMode();
  const { theme, toggleTheme } = useTheme();
  const { toggleMobileMenu } = useMobileMenu();
  const { openSearch } = useSearch();
  const { activePlan, setActivePlan } = usePlan();

  return (
    <header
      className={`bg-[var(--background)] border-b border-[rgba(55,53,47,0.09)] h-12 fixed top-0 z-10 transition-all duration-300 ${
        isFocusMode ? "left-0 right-0" : "lg:left-64 left-0 right-0"
      }`}
      style={{
        left: isFocusMode ? "0" : "240px",
      }}
    >
      <div className="h-full flex items-center justify-between px-4 lg:px-6">
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-1.5 hover:bg-[var(--sidebar-hover)] rounded text-[var(--foreground)] opacity-70"
            aria-label="Toggle menu"
          >
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

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
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search..."
              onClick={openSearch}
              readOnly
              className="hidden sm:block pl-9 pr-4 py-1.5 w-48 lg:w-64 bg-[var(--sidebar-hover)] border-none rounded-md text-[var(--foreground)] placeholder-[var(--foreground)] placeholder-opacity-40 focus:outline-none text-sm cursor-pointer transition-all duration-200 hover:bg-[rgba(55,53,47,0.12)]"
            />
          </div>
        </div>

        <div className="flex items-center space-x-1 lg:space-x-2">
          <NavButton
            onClick={toggleTutorMode}
            isActive={isTutorMode}
            activeClass="bg-[#faebdd] text-[#d9730d] dark:bg-[#2c221a] dark:text-[#d9730d]"
            label="AI Tutor"
            activeLabel="Exit Tutor"
          />
          <NavButton
            onClick={toggleFocusMode}
            isActive={isFocusMode}
            activeClass="bg-[#faebdd] text-[#d9730d] dark:bg-[#2c221a] dark:text-[#d9730d]"
            label="AI Chat"
            activeLabel="Exit Chat"
          />
          <NavButton
            onClick={toggleAudibleMode}
            isActive={isAudibleMode}
            activeClass="bg-[#faebdd] text-[#d9730d] dark:bg-[#2c221a] dark:text-[#d9730d]"
            label="Audible"
            activeLabel="Exit Audible"
          />

          <div className="w-px h-4 bg-[rgba(55,53,47,0.09)] mx-1" />

          <select
            value={activePlan}
            onChange={(e) => setActivePlan(e.target.value as any)}
            className="hidden sm:block bg-transparent hover:bg-[var(--sidebar-hover)] px-2 py-1 rounded text-[var(--foreground)] opacity-70 text-xs font-bold focus:outline-none cursor-pointer border-none appearance-none"
          >
            <option value="fast-track">Fast Track</option>
            <option value="mastery">Mastery Plan</option>
          </select>

          <div className="w-px h-4 bg-[rgba(55,53,47,0.09)] mx-1" />

          <button
            onClick={toggleTheme}
            className="p-1.5 hover:bg-[var(--sidebar-hover)] rounded text-[var(--foreground)] opacity-60 hover:opacity-100 transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg
                className="w-4.5 h-4.5"
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
                className="w-4.5 h-4.5"
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

          <select className="hidden md:block bg-transparent hover:bg-[var(--sidebar-hover)] px-2 py-1 rounded text-[var(--foreground)] opacity-70 text-xs font-medium focus:outline-none cursor-pointer border-none">
            <option>English</option>
            <option>简体中文</option>
          </select>

          <button
            onClick={() => {}}
            className="px-3 py-1.5 bg-[#faebdd] text-[#d9730d] dark:bg-[#2c221a] dark:text-[#d9730d] rounded-md font-bold text-xs lg:text-sm hover:opacity-80 transition-opacity ml-2 shadow-sm border border-[#d9730d]/10"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
