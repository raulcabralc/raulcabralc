"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FlipWords } from "./ui/flip-words";

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);

  const words = [
    "Full Stack Developer",
    "Back End Developer",
    "Front End Developer",
    "Tech Enthusiast",
    "Creative Mind",
    "DevOps Engineer",
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsMouseInside(true);
  };

  const handleMouseLeave = () => {
    setIsMouseInside(false);
  };

  return (
    <div
      id="home"
      className="px-4 sm:px-8 lg:px-16 xl:px-80 py-20 sm:py-32 lg:py-40 h-[70vh] w-full bg-neutral-950 flex flex-col items-center lg:items-start justify-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Grid Base */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2f_1px,transparent_1px)] bg-[size:25px_25px]"></div>

      {/* Interactive Grid Overlay */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
          isMouseInside ? "opacity-100" : "opacity-0"
        }`}
        style={{
          maskImage: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, 
        rgba(0,0,0,0.2) 0%, 
        rgba(0,0,0,0.2) 50%, 
        rgba(0,0,0,0.05) 80%, 
        transparent 100%)`,
          WebkitMaskImage: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, 
        rgba(0,0,0,0.2) 0%, 
        rgba(0,0,0,0.2) 50%, 
        rgba(0,0,0,0.05) 80%, 
        transparent 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#7f7f7f_1px,transparent_1px),linear-gradient(to_bottom,#7f7f7f_1px,transparent_1px)] bg-[size:25px_25px]"></div>
      </div>

      {/* Fade overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_20%,rgb(10,10,10)),linear-gradient(to_bottom,transparent_70%,rgb(10,10,10))]"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 px-3 py-1 bg-neutral-800/50 rounded-full text-xs text-neutral-400 border border-neutral-700"
        >
          🟢 Available for projects
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white relative z-20"
        >
          <span className="relative inline-block">Raul Cabral</span>
        </motion.h1>

        {/* Description */}
        <FlipWords
          words={words}
          className="mt-1 font-normal text-xl sm:text-3xl max-w-lg text-rebound"
        ></FlipWords>

        {/* Local */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-3 flex items-center text-sm text-neutral-500"
        >
          <svg
            className="w-4 h-4 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            suppressHydrationWarning
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          Paraíba, Brazil
        </motion.div>
      </motion.div>
    </div>
  );
}
