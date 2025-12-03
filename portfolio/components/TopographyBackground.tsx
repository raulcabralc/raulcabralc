"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TopographyProps {
  children: React.ReactNode;
  className?: string;
}

export function TopographyBackground({
  children,
  className = "",
}: TopographyProps) {
  // Controle do Mouse para o efeito de paralaxe
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Suaviza o movimento do mouse
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Calcula movimento oposto para as camadas (efeito de profundidade)
  // Ajustei os valores para ser um movimento mais sutil
  const layer1X = useTransform(springX, [0, 1], [-10, 10]);
  const layer1Y = useTransform(springY, [0, 1], [-10, 10]);

  const layer2X = useTransform(springX, [0, 1], [20, -20]);
  const layer2Y = useTransform(springY, [0, 1], [20, -20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth);
    mouseY.set(clientY / innerHeight);
  };

  const colorPrimary = "#262626";
  const colorHighlight = "#333333";

  return (
    <div
      className={`relative w-full overflow-hidden bg-neutral-950 ${className}`}
      onMouseMove={handleMouseMove}
      style={{ minHeight: "600px" }}
    >
      {/* --- Background --- */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none overflow-hidden">
        {/* Main Lines */}
        <motion.div
          style={{ x: layer1X, y: layer1Y }}
          className="absolute inset-[-10%] w-[120%] h-[120%]"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
          >
            {/* Center Organic Form */}
            <motion.path
              d="M0,500 C200,400 300,600 500,500 C700,400 800,600 1000,500 V1000 H0 Z"
              fill="none"
              stroke={colorPrimary}
              strokeWidth="3"
              initial={{ opacity: 0 }}
              animate={{
                d: [
                  "M0,500 C200,400 300,600 500,500 C700,400 800,600 1000,500 V1000 H0 Z",
                  "M0,500 C200,550 300,450 500,500 C700,550 800,450 1000,500 V1000 H0 Z",
                  "M0,500 C200,400 300,600 500,500 C700,400 800,600 1000,500 V1000 H0 Z",
                ],
                opacity: 1,
              }}
              transition={{
                d: { duration: 20, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 1 },
              }}
            />

            {/* Upper Line */}
            <motion.path
              d="M0,300 C200,200 400,400 600,300 C800,200 900,400 1000,300"
              fill="none"
              stroke={colorHighlight}
              strokeWidth="2"
              animate={{
                d: [
                  "M0,300 C200,250 400,350 600,300 C800,250 900,350 1000,300",
                  "M0,300 C200,350 400,250 600,300 C800,350 900,250 1000,300",
                  "M0,300 C200,250 400,350 600,300 C800,250 900,350 1000,300",
                ],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Organic Form */}
            <motion.path
              d="M-100,800 Q200,700 400,800 T900,800"
              fill="none"
              stroke={colorPrimary}
              strokeWidth="3"
              animate={{
                d: [
                  "M-100,800 Q200,700 400,800 T900,800",
                  "M-100,800 Q200,900 400,800 T900,800",
                  "M-100,800 Q200,700 400,800 T900,800",
                ],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          style={{ x: layer2X, y: layer2Y }}
          className="absolute inset-0 w-full h-full opacity-30"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
          >
            {/* Dotted line */}
            <motion.path
              d="M0,600 Q500,500 1000,600"
              fill="none"
              stroke={colorHighlight}
              strokeWidth="4"
              strokeDasharray="10 10"
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      </div>

      {/* --- Content --- */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
