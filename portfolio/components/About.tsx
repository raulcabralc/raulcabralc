"use client";
import React from "react";
import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import { FlipCounter } from "./FlipCounter";

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-8 lg:px-16 xl:px-80 bg-neutral-950"
    >
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
                Full Stack Developer with expertise in building modern web
                applications using{" "}
                <span className="text-white font-medium">
                  NestJS, React, TypeScript, and AWS cloud architecture
                </span>
                . I focus on creating scalable solutions and writing clean,
                maintainable code.
              </p>

              <p className="text-neutral-300 leading-relaxed">
                Software Engineer at{" "}
                <span className="text-rebound font-medium">Compass.UOL</span>,
                where I develop enterprise applications and work with{" "}
                <span className="text-white font-medium">
                  cloud infrastructure and DevOps practices
                </span>
                . I enjoy solving complex problems and contributing to
                open-source projects in my spare time.
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
                  src="/assets/profile.jpg"
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
      <div id="techs"></div>
    </section>
  );
}
