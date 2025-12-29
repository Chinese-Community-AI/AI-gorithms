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
      className="p-4 lg:p-10"
      style={{
        marginTop: "3rem", // Height of the fixed header (h-12)
        height: "calc(100vh - 3rem)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div
        className={`grid gap-8 items-stretch ${
          isFocusMode ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"
        }`}
        style={{
          gridTemplateRows: "1fr",
          minHeight: 0,
          height: "100%",
        }}
      >
        <div className="min-w-0 overflow-y-auto">{children}</div>
        <div
          className="h-full overflow-hidden"
          style={{ position: "relative" }}
        >
          <AIChat />
        </div>
      </div>
    </main>
  );
}
