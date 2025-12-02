"use client";
import React from "react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-white hover:cursor-zoom-in">
          Raul<span className="text-rebound">.</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-neutral-300 hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-neutral-300 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-neutral-300 hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-neutral-300 hover:text-white transition-colors"
          >
            Contact
          </a>
        </nav>

        <button className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
