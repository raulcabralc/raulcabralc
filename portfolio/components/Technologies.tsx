"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const topRowTechs = [
  {
    name: "TypeScript",
    logo: "https://cdn.simpleicons.org/typescript",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Java",
    logo: "https://cdn.simpleicons.org/openjdk",
    url: "https://www.oracle.com/java/",
  },
  {
    name: "Sass",
    logo: "https://cdn.simpleicons.org/sass",
    url: "https://sass-lang.com/",
  },
  {
    name: "React",
    logo: "https://cdn.simpleicons.org/react",
    url: "https://react.dev/",
  },
  {
    name: "Storybook",
    logo: "https://cdn.simpleicons.org/storybook",
    url: "https://storybook.js.org/",
  },
  {
    name: "Node.js",
    logo: "https://cdn.simpleicons.org/nodedotjs",
    url: "https://nodejs.org/",
  },
  {
    name: "Flask",
    logo: "https://cdn.simpleicons.org/flask",
    url: "https://flask.palletsprojects.com/",
  },
  {
    name: "NestJS",
    logo: "https://cdn.simpleicons.org/nestjs",
    url: "https://nestjs.com/",
  },
  {
    name: "Spring Boot",
    logo: "https://cdn.simpleicons.org/springboot",
    url: "https://spring.io/projects/spring-boot",
  },
];

const bottomRowTechs = [
  {
    name: "Jest",
    logo: "https://cdn.simpleicons.org/jest",
    url: "https://jestjs.io/",
  },
  {
    name: "RabbitMQ",
    logo: "https://cdn.simpleicons.org/rabbitmq",
    url: "https://www.rabbitmq.com/",
  },
  {
    name: "Docker",
    logo: "https://cdn.simpleicons.org/docker",
    url: "https://www.docker.com/",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.simpleicons.org/mongodb",
    url: "https://www.mongodb.com/",
  },
  {
    name: "MySQL",
    logo: "https://cdn.simpleicons.org/mysql",
    url: "https://www.mysql.com/",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.simpleicons.org/postgresql",
    url: "https://www.postgresql.org/",
  },
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    url: "https://aws.amazon.com/",
  },
  {
    name: "Python",
    logo: "https://cdn.simpleicons.org/python",
    url: "https://www.python.org/",
  },
];

export function Technologies() {
  return (
    <>
      <style jsx>{`
        @keyframes scrollLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }
        @keyframes scrollRight {
          from {
            transform: translateX(-33.333%);
          }
          to {
            transform: translateX(0);
          }
        }
        .scroll-left {
          animation: scrollLeft 30s linear infinite;
        }
        .scroll-right {
          animation: scrollRight 30s linear infinite;
        }
      `}</style>

      <section className="py-12 px-4 sm:px-8 lg:px-16 xl:px-80 bg-neutral-950 w-full max-w-full overflow-hidden">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-rebound text-sm font-mono shrink-0">02.</span>
            <h2 className="text-2xl font-bold text-white shrink-0">
              Technologies
            </h2>
            <div className="flex-1 h-px bg-neutral-800"></div>
          </motion.div>

          {/* WRAPPER SANDUÍCHE
            Este 'relative' serve de âncora para os gradientes.
          */}
          <div className="relative w-full">
            {/* --- CAMADA 1: GRADIENTES (Frente) --- 
                z-20 garante que fiquem acima dos ícones.
                pointer-events-none deixa o clique passar para os ícones embaixo.
            */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-20 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 z-20 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none"></div>

            {/* --- CAMADA 2: CONTEÚDO (Fundo) --- 
                overflow-hidden corta o que sai da tela.
                relative z-0 cria um contexto de pilha novo para não brigar com os gradientes.
            */}
            <div className="w-full overflow-hidden relative z-0 py-2">
              {/* Top Row */}
              <div className="mb-8 w-max">
                <div className="scroll-left flex gap-4">
                  {[...topRowTechs, ...topRowTechs, ...topRowTechs].map(
                    (tech, index) => (
                      <a
                        key={`top-${index}`}
                        href={tech.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 bg-neutral-900/50 px-4 py-3 rounded-lg border border-neutral-800 flex-shrink-0 hover:bg-neutral-800/70 hover:border-rebound/50 transition-all duration-300 cursor-pointer"
                      >
                        <Image
                          suppressHydrationWarning
                          src={tech.logo}
                          alt={tech.name}
                          width={28}
                          height={28}
                          className="transition-all duration-300 brightness-0 invert opacity-60 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100"
                        />
                        <span className="text-white font-medium text-sm whitespace-nowrap">
                          {tech.name}
                        </span>
                      </a>
                    )
                  )}
                </div>
              </div>

              {/* Bottom Row */}
              <div className="w-max">
                <div className="scroll-right flex gap-4">
                  {[
                    ...bottomRowTechs,
                    ...bottomRowTechs,
                    ...bottomRowTechs,
                  ].map((tech, index) => (
                    <a
                      key={`bottom-${index}`}
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 bg-neutral-900/50 px-4 py-3 rounded-lg border border-neutral-800 flex-shrink-0 hover:bg-neutral-800/70 hover:border-rebound/50 transition-all duration-300 cursor-pointer"
                    >
                      <Image
                        suppressHydrationWarning
                        src={tech.logo}
                        alt={tech.name}
                        width={28}
                        height={28}
                        className="transition-all duration-300 brightness-0 invert opacity-60 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100"
                      />
                      <span className="text-white font-medium text-sm whitespace-nowrap">
                        {tech.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
