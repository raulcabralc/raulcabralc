"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md ${
        isMenuOpen ? "" : "border-b border-neutral-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-white">
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

        <button
          className="md:hidden text-white relative w-6 h-6"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Hamburger Icon */}
          <motion.svg
            className="absolute inset-0 w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{
              opacity: isMenuOpen ? 0 : 1,
              rotate: isMenuOpen ? 90 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </motion.svg>

          {/* X Icon */}
          <motion.svg
            className="absolute inset-0 w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{
              opacity: isMenuOpen ? 1 : 0,
              rotate: isMenuOpen ? 0 : -90,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </motion.svg>
        </button>
      </div>

      {/* Mobile Menu com animação */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-b border-neutral-800 overflow-hidden"
          >
            <nav className="px-8 py-4">
              <motion.a
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                href="#home"
                className="block py-2 mb-2 text-neutral-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </motion.a>
              <motion.a
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
                href="#about"
                className="block py-2 mb-2 text-neutral-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </motion.a>
              <motion.a
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                href="#projects"
                className="block py-2 mb-2 text-neutral-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </motion.a>
              <motion.a
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.25 }}
                href="#contact"
                className="block py-2 text-neutral-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
