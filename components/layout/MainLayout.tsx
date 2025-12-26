"use client";

import { useFocusMode } from "@/contexts/FocusModeContext";
import AIChat from "@/components/ai/AIChat";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { isFocusMode } = useFocusMode();

  return (
    <main
      className="pt-32 p-4 lg:p-8"
      style={{
        height: "calc(100vh - 4rem)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className={`grid gap-8 flex-1 items-stretch ${
          isFocusMode ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"
        }`}
        style={{ gridTemplateRows: "1fr" }}
      >
        <div className="min-w-0 overflow-y-auto">{children}</div>
        <div className="h-full min-h-0 flex">
          <AIChat />
        </div>
      </div>
    </main>
  );
}
