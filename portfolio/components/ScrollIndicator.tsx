"use client";
import React, { useEffect, useState } from "react";

export function ScrollIndicator() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrolled = window.scrollY;

      const isScrollable = documentHeight > windowHeight;
      const isNearBottom = scrolled + windowHeight >= documentHeight * 0.9;

      setShowScrollIndicator(isScrollable && !isNearBottom);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-opacity duration-500 z-50 ${
        showScrollIndicator ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Background Circle */}
      <div className="absolute inset-0 bg-neutral-950 rounded-full scale-125 -z-10"></div>

      {/* Scroll Indicator */}
      <div className="w-6 h-10 border-2 border-neutral-600 rounded-full flex justify-center bg-neutral-950">
        <div className="w-1 h-3 bg-rebound rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  );
}
