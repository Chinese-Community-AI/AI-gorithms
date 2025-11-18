"use client";

import { useFocusMode } from "@/contexts/FocusModeContext";

export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isFocusMode } = useFocusMode();

  return (
    <div
      className={`flex-1 transition-all duration-300 bg-white dark:bg-gray-950 min-h-screen ${
        isFocusMode ? "ml-0" : "lg:ml-64 ml-0"
      }`}
    >
      {children}
    </div>
  );
}
