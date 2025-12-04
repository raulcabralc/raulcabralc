"use client";
import React from "react";
import { TopographyBackground } from "./TopographyBackground";
import { CardSpotlight } from "./ui/card-spotlight";
import { motion } from "framer-motion";
import { projects } from "@/src/constants/projects";

export function Projects() {
  return (
    <section id="projects" className="relative w-full overflow-hidden">
      <TopographyBackground className="py-20">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-80">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <span className="text-rebound text-sm font-mono shrink-0">
                03.
              </span>
              <h2 className="text-2xl font-bold text-white shrink-0">
                Projects
              </h2>
              <div className="flex-1 h-px bg-neutral-800"></div>
            </motion.div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: false }}
                >
                  <CardSpotlight className="h-full p-6">
                    <div className="flex flex-col h-full relative z-20">
                      <h3 className="flex text-xl font-bold text-white mb-4 gap-3">
                        {project.title}
                        {project.version && (
                          <span className="px-2 py-1 text-xs bg-neutral-900/50 text-rebound-dark rounded-full border border-neutral-700/50">
                            v{project.version}
                          </span>
                        )}
                      </h3>
                      <p className="text-neutral-300 text-sm mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs bg-neutral-800/50 text-rebound rounded-full border border-neutral-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-start mt-auto gap-5">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-neutral-100 hover:text-rebound transition-colors text-sm"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          Code
                        </a>
                        {project.docSlug && (
                          <a
                            href={`https://docs.raulc.dev/docs/${project.docSlug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-neutral-100 hover:text-rebound transition-colors text-sm"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4Z" />
                            </svg>
                            Docs
                          </a>
                        )}
                      </div>
                    </div>
                  </CardSpotlight>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </TopographyBackground>
    </section>
  );
}
