"use client";
import React, { useState } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Button({ children, onClick, className = "" }: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`px-6 py-2 text-white font-bold shadow-[0_0_20px_rgba(242,95,76,0.5)] ${className}`}
      style={{
        borderRadius: isHovered ? "8px" : "50px",
        backgroundColor: isHovered ? "#D14030" : "#F25F4C",
        transition: "all 0.3s ease-in-out",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
