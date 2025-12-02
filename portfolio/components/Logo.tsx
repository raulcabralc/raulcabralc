import React from "react";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Raul. Dev Logo"
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="var(--font-outfit), sans-serif" // Garante que use a fonte do projeto
        fontWeight="800"
        fontSize="80"
      >
        <tspan fill="#d4d4d4">R</tspan>

        <tspan fill="#F25F4C">.</tspan>
      </text>
    </svg>
  );
};
