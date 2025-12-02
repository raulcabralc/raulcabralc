"use client";
import { useEffect } from "react";

export function HydrationWarningSupressor({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const originalError = console.error;
    console.error = (...args) => {
      if (typeof args[0] === "string" && args[0].includes("data-darkreader")) {
        return;
      }
      originalError(...args);
    };

    return () => {
      console.error = originalError;
    };
  }, []);

  return <div suppressHydrationWarning>{children}</div>;
}
