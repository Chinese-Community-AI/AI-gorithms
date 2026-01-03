"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type PlanType = "fast-track" | "mastery";

interface PlanContextType {
  activePlan: PlanType;
  setActivePlan: (plan: PlanType) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export function PlanProvider({ children }: { children: ReactNode }) {
  const [activePlan, setActivePlan] = useState<PlanType>("fast-track");

  return (
    <PlanContext.Provider value={{ activePlan, setActivePlan }}>
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);
  if (context === undefined) {
    throw new Error("usePlan must be used within a PlanProvider");
  }
  return context;
}
