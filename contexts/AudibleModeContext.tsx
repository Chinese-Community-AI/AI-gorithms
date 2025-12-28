"use client";

import { createContext, useContext, useState } from "react";

interface AudibleModeContextType {
  isAudibleMode: boolean;
  toggleAudibleMode: () => void;
  closeAudibleMode: () => void;
}

const AudibleModeContext = createContext<AudibleModeContextType | undefined>(
  undefined
);

export function AudibleModeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAudibleMode, setIsAudibleMode] = useState(false);

  const toggleAudibleMode = () => {
    setIsAudibleMode((prev) => !prev);
  };

  const closeAudibleMode = () => {
    setIsAudibleMode(false);
  };

  return (
    <AudibleModeContext.Provider
      value={{ isAudibleMode, toggleAudibleMode, closeAudibleMode }}
    >
      {children}
    </AudibleModeContext.Provider>
  );
}

export function useAudibleMode() {
  const context = useContext(AudibleModeContext);
  if (context === undefined) {
    throw new Error(
      "useAudibleMode must be used within an AudibleModeProvider"
    );
  }
  return context;
}
