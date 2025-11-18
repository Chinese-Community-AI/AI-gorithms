"use client";

import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface BreadcrumbItem {
  title: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (!items || items.length === 0) {
    return null;
  }

  // Don't show breadcrumbs if only "Home" is present (we're on home page or no match found)
  if (items.length === 1 && items[0].href === "/") {
    return null;
  }

  return (
    <nav
      className="mb-6 pt-2 pb-2 border-b border-gray-200 dark:border-gray-800"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center flex-wrap gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.href}-${index}`} className="flex items-center">
              {index > 0 && (
                <ChevronRightIcon className="h-4 w-4 text-gray-400 dark:text-gray-500 mx-2 flex-shrink-0" />
              )}
              {isLast ? (
                <span className="text-gray-900 dark:text-gray-100 font-medium">
                  {item.title}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  {item.title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
