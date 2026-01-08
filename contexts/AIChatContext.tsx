"use client";

import { createContext, useContext, useState, useCallback } from "react";

interface AIChatContextType {
  pendingMessage: string | null;
  sendMessage: (content: string) => void;
  clearPendingMessage: () => void;
}

const AIChatContext = createContext<AIChatContextType | undefined>(undefined);

export function AIChatProvider({ children }: { children: React.ReactNode }) {
  const [pendingMessage, setPendingMessage] = useState<string | null>(null);

  const sendMessage = useCallback((content: string) => {
    setPendingMessage(content);
  }, []);

  const clearPendingMessage = useCallback(() => {
    setPendingMessage(null);
  }, []);

  return (
    <AIChatContext.Provider
      value={{ pendingMessage, sendMessage, clearPendingMessage }}
    >
      {children}
    </AIChatContext.Provider>
  );
}

export function useAIChat() {
  const context = useContext(AIChatContext);
  if (context === undefined) {
    throw new Error("useAIChat must be used within an AIChatProvider");
  }
  return context;
}
