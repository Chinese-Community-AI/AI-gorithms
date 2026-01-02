"use client";

import { useState } from "react";
import { navigation, type NavItem } from "@/lib/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFocusMode } from "@/contexts/FocusModeContext";
import { useMobileMenu } from "@/contexts/MobileMenuContext";

const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }) => (
  <svg
    viewBox="0 0 100 100"
    className={`w-3 h-3 transition-transform duration-150 ${
      isExpanded ? "rotate-90" : ""
    }`}
  >
    <path
      d="M30,15 L70,50 L30,85"
      fill="none"
      stroke="currentColor"
      strokeWidth="12"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function NavItemComponent({
  item,
  level = 0,
}: {
  item: NavItem;
  level?: number;
}) {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(
    item.title === "Part 1: Data Structures Basics" ||
      (item.href !== "/" && pathname.startsWith(item.href))
  );
  const { closeMobileMenu } = useMobileMenu();
  const hasChildren = item.children && item.children.length > 0;
  const isActive = pathname === item.href;

  const handleLinkClick = () => {
    closeMobileMenu();
  };

  return (
    <div>
      <div className="flex items-center group relative px-1">
        <div
          className={`flex-1 flex items-center rounded-[4px] transition-colors duration-150 ease-in-out cursor-pointer py-[3px] my-[1px] ${
            isActive
              ? "bg-[#faebdd] font-bold text-[#d9730d] shadow-sm"
              : "hover:bg-[rgba(55,53,47,0.05)] text-[var(--foreground)] opacity-80 hover:opacity-100"
          }`}
          style={{ paddingLeft: `${level * 0.75 + 0.25}rem` }}
          onClick={() => hasChildren && setIsExpanded(!isExpanded)}
        >
          <div className="w-5 h-5 flex items-center justify-center mr-0.5">
            {hasChildren && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                className="p-0.5 rounded-sm hover:bg-[rgba(55,53,47,0.1)] text-[var(--foreground)] opacity-40 hover:opacity-100 transition-all"
              >
                <ChevronIcon isExpanded={isExpanded} />
              </button>
            )}
          </div>

          <div className="flex items-center flex-1 min-w-0 pr-2">
            {!hasChildren ? (
              <Link
                href={item.href}
                onClick={handleLinkClick}
                className="flex-1 text-[13.5px] leading-tight truncate no-underline py-0.5"
              >
                {item.title}
              </Link>
            ) : (
              <span className="flex-1 text-[13.5px] leading-tight truncate py-0.5 font-medium opacity-90">
                {item.title}
              </span>
            )}
          </div>
        </div>
      </div>
      {hasChildren && isExpanded && item.children && (
        <div className="mt-0">
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
          className="lg:hidden fixed inset-0 bg-black/10 backdrop-blur-[2px] z-30"
          onClick={closeMobileMenu}
        />
      )}

      <aside
        className={`${
          isOpen ? "w-[240px]" : "w-0"
        } bg-[var(--sidebar-bg)] transition-all duration-300 h-screen fixed left-0 top-0 overflow-y-auto overflow-x-hidden z-40 ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="py-2 flex flex-col h-full">
          {/* Header/Brand Area */}
          <div className="px-4 py-3 flex items-center justify-between group">
            <div className="flex items-center gap-2 overflow-hidden">
              <div className="w-5 h-5 bg-[#faebdd] border border-[#d9730d]/20 rounded flex items-center justify-center flex-shrink-0 shadow-sm">
                <span className="text-[#d9730d] text-[10px] font-extrabold">
                  A
                </span>
              </div>
              <h2 className="font-bold text-[14px] text-[var(--foreground)] truncate opacity-80">
                AI-gorithms
              </h2>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 hover:bg-[rgba(55,53,47,0.08)] rounded text-[var(--foreground)] opacity-0 group-hover:opacity-40 hover:!opacity-80 transition-all"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 px-2 space-y-[1px]">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`flex items-center px-3 py-1.5 rounded-[4px] text-[13.5px] font-medium transition-colors no-underline ${
                usePathname() === "/"
                  ? "bg-[#faebdd] font-bold text-[#d9730d] shadow-sm"
                  : "text-[var(--foreground)] opacity-70 hover:opacity-100 hover:bg-[rgba(55,53,47,0.05)]"
              }`}
            >
              <span className="mr-2 opacity-60">🏠</span>
              Home
            </Link>
            <Link
              href="/pricing"
              onClick={closeMobileMenu}
              className={`flex items-center px-3 py-1.5 rounded-[4px] text-[13.5px] font-medium transition-colors no-underline ${
                usePathname() === "/pricing"
                  ? "bg-[#faebdd] font-bold text-[#d9730d] shadow-sm"
                  : "text-[var(--foreground)] opacity-70 hover:opacity-100 hover:bg-[rgba(55,53,47,0.05)]"
              }`}
            >
              <span className="mr-2 opacity-60">💰</span>
              Pricing
            </Link>

            <div className="mt-4 pt-4 border-t border-[rgba(55,53,47,0.06)] px-2 mb-2">
              <span className="text-[11px] font-bold text-[var(--foreground)] opacity-40 uppercase tracking-wider pl-1">
                Content
              </span>
            </div>

            {navigation.map((item) => (
              <NavItemComponent key={item.href} item={item} />
            ))}
          </nav>
        </div>
      </aside>

      {/* Re-open button when sidebar is closed */}
      {!isOpen && !isFocusMode && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed left-4 top-4 p-2 bg-[var(--background)] border border-[rgba(55,53,47,0.09)] rounded-md shadow-sm z-50 text-[var(--foreground)] opacity-60 hover:opacity-100 transition-all"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </>
  );
}
