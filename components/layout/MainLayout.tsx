"use client";

import { useFocusMode } from "@/contexts/FocusModeContext";
import AIChat from "@/components/ai/AIChat";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { isFocusMode } = useFocusMode();

  return (
    <main className="pt-32 p-4 lg:p-8 min-h-[calc(100vh-4rem)]">
      <div
        className={`grid gap-8 ${
          isFocusMode ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"
        }`}
      >
        <div className="min-w-0">{children}</div>
        <AIChat />
      </div>
    </main>
  );
}
