"use client";

import { createContext, useContext, useState } from "react";

interface TutorModeContextType {
  isTutorMode: boolean;
  toggleTutorMode: () => void;
  closeTutorMode: () => void;
}

const TutorModeContext = createContext<TutorModeContextType | undefined>(
  undefined
);

export function TutorModeProvider({ children }: { children: React.ReactNode }) {
  const [isTutorMode, setIsTutorMode] = useState(false);

  const toggleTutorMode = () => {
    setIsTutorMode((prev) => !prev);
  };

  const closeTutorMode = () => {
    setIsTutorMode(false);
  };

  return (
    <TutorModeContext.Provider
      value={{ isTutorMode, toggleTutorMode, closeTutorMode }}
    >
      {children}
    </TutorModeContext.Provider>
  );
}

export function useTutorMode() {
  const context = useContext(TutorModeContext);
  if (context === undefined) {
    throw new Error("useTutorMode must be used within a TutorModeProvider");
  }
  return context;
}
