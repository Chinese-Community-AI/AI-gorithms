"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface FocusModeContextType {
  isFocusMode: boolean;
  toggleFocusMode: () => void;
}

const FocusModeContext = createContext<FocusModeContextType | undefined>(
  undefined
);

export function FocusModeProvider({ children }: { children: React.ReactNode }) {
  const [isFocusMode, setIsFocusMode] = useState(false);

  // Load focus mode state from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("focusMode");
    if (saved === "true") {
      setIsFocusMode(true);
    }
  }, []);

  // Save focus mode state to localStorage
  useEffect(() => {
    localStorage.setItem("focusMode", isFocusMode.toString());
  }, [isFocusMode]);

  const toggleFocusMode = () => {
    setIsFocusMode((prev) => !prev);
  };

  return (
    <FocusModeContext.Provider value={{ isFocusMode, toggleFocusMode }}>
      {children}
    </FocusModeContext.Provider>
  );
}

export function useFocusMode() {
  const context = useContext(FocusModeContext);
  if (context === undefined) {
    throw new Error("useFocusMode must be used within a FocusModeProvider");
  }
  return context;
}
