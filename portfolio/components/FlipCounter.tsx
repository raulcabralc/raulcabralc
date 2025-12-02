"use client";
import React, { useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";

interface DigitProps {
  targetValue: string;
  delay: number;
}

function AnimatedDigit({ targetValue, delay }: DigitProps) {
  const [currentValue, setCurrentValue] = useState("0");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (targetValue === "/") {
      setCurrentValue("/");
      return;
    }

    const timer = setTimeout(() => {
      setIsAnimating(true);

      const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      let currentIndex = 0;
      const target = parseInt(targetValue);

      const animateNext = () => {
        setCurrentValue(numbers[currentIndex % 10]);
        currentIndex++;

        if (currentIndex > 8 + target) {
          setCurrentValue(targetValue);
          setIsAnimating(false);
          return;
        }

        setTimeout(animateNext, 50);
      };

      animateNext();
    }, delay);

    return () => clearTimeout(timer);
  }, [targetValue, delay]);

  return (
    <div className="inline-block w-4 text-center h-8 relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentValue}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{
            duration: 0.15,
            ease: "easeOut",
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {currentValue}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function FlipCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="text-2xl font-bold text-rebound flex"
    >
      {isInView && (
        <>
          <AnimatedDigit targetValue="2" delay={200} />
          <AnimatedDigit targetValue="4" delay={300} />
          <AnimatedDigit targetValue="/" delay={0} />
          <AnimatedDigit targetValue="7" delay={400} />
        </>
      )}
    </motion.div>
  );
}
