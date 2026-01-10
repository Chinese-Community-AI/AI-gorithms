"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScaleHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Pages that should remain at original (100%) size
    const isOriginalPage = pathname === "/" || pathname === "/pricing";
    
    if (isOriginalPage) {
      document.documentElement.style.fontSize = "100%";
    } else {
      document.documentElement.style.fontSize = "150%";
    }
  }, [pathname]);

  return null;
}
