"use client";
import React from "react";
import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import { FlipCounter } from "./FlipCounter";

export function About() {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 xl:px-80 bg-neutral-950">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Label */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-rebound text-sm font-mono">01.</span>
            <h2 className="text-2xl font-bold text-white">About</h2>
            <div className="flex-1 h-px bg-neutral-800"></div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Text Content */}
            <div className="md:col-span-2 space-y-4">
              <p className="text-neutral-300 leading-relaxed">
                I'm a dedicated Full Stack Developer who discovered my passion
                for coding in early 2024. Since then, I've been on an intensive
                journey mastering modern web technologies, specializing in{" "}
                <span className="text-white font-medium">
                  NestJS, React, TypeScript, and AWS cloud architecture
                </span>
                .
              </p>

              <p className="text-neutral-300 leading-relaxed">
                Recently completed an intensive internship at{" "}
                <span className="text-rebound font-medium">Compass.UOL</span>,
                where I built scalable enterprise applications and gained
                hands-on experience with{" "}
                <span className="text-white font-medium">
                  cloud infrastructure and modern development practices
                </span>
                . I'm passionate about contributing to the developer community
                through open-source projects.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div>
                  <div className="text-2xl font-bold text-rebound">
                    <AnimatedCounter end={15} suffix="+" />
                  </div>
                  <div className="text-sm text-neutral-400">Projects Built</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-rebound">
                    <AnimatedCounter end={5} suffix="+" />
                  </div>
                  <div className="text-sm text-neutral-400">Technologies</div>
                </div>
                <div>
                  <FlipCounter />
                  <div className="text-sm text-neutral-400">
                    Learning Mindset
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative">
              <div className="w-full aspect-square rounded-lg overflow-hidden border border-neutral-700">
                <img
                  src="/assets/profile.png"
                  alt="Raul Cabral"
                  className="w-full h-full object-cover"
                />
                {/* Inset fade overlay */}
                <div className="absolute inset-0 rounded-lg shadow-[inset_0_0_40px_rgba(10,10,10,0.4)] pointer-events-none"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
