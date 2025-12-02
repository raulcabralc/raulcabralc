"use client";
import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="px-80 py-40 h-[70vh] w-full bg-neutral-950 flex flex-col items-start justify-start relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:25px_25px]"></div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_20%,rgb(10,10,10)),linear-gradient(to_bottom,transparent_70%,rgb(10,10,10))]"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-start mt-20"
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

        {/* Nome */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:text-7xl text-3xl font-bold text-left text-white relative z-20"
        >
          <span className="relative inline-block">
            Raul Cabral
            <span className="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden">
              <span
                className="absolute bottom-0 w-full h-full rounded-xl"
                style={{
                  background:
                    "linear-gradient(to right, transparent 50%, rgba(242,95,76,0.3) 50%, #F25F4C 50%, rgba(242,95,76,0.3) 60%, transparent 70%, transparent 100%)",
                  animation: "slideUnderline 2.5s linear infinite",
                  transform: "translateX(-100%)",
                }}
              ></span>
            </span>
          </span>
        </motion.h1>

        {/* Descrição */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-left"
        >
          Full Stack Developer •{" "}
          <span className="text-rebound">NestJS & TypeScript</span>
          <span
            className="text-neutral-300 ml-1"
            style={{
              animation: "typingCursorSmooth 2s ease-in-out infinite",
            }}
          >
            |
          </span>
        </motion.p>

        {/* Localização */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-3 flex items-center text-sm text-neutral-500"
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
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
