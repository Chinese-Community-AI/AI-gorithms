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
      className={`transition-all duration-300 bg-white dark:bg-gray-950 min-h-screen ${
        isFocusMode ? "ml-0 flex-1" : "lg:ml-[15rem] ml-0 flex-1"
      }`}
    >
      {children}
    </div>
  );
}
