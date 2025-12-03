import { Project } from "../interfaces/project.interface";

export const projects: Project[] = [
  {
    title: "Rebound TS",
    description:
      "A TypeScript utility library or framework wrapper designed to enhance developer productivity with strict typing and resilience patterns.",
    tech: ["TypeScript", "NPM Package", "Decorator"],
    github: "https://github.com/raulcabralc/rebound-ts",
    docs: "https://rebound.raulc.dev",
    npmVersion: "1.0.1",
  },
  {
    title: "Bar App",
    description:
      "Application designed for bar management or ordering systems, featuring menu visualization and order tracking capabilities.",
    tech: ["React", "TypeScript", "NestJS"],
    github: "https://github.com/raulcabralc/bar-app",
  },
  {
    title: "InfoLei",
    description:
      "Information system dedicated to legal consultation or legislation display, simplifying access to law documents.",
    tech: ["React Native", "TypeScript", "OpenAI Integration"],
    github: "https://github.com/raulcabralc/infolei",
  },
  {
    title: "Sensei Java",
    description:
      "A comprehensive Java project focused on backend logic, serving as a teacher assistant in post-class activities.",
    tech: ["Java", "Spring Boot", "Maven"],
    github: "https://github.com/raulcabralc/sensei-java",
  },
  {
    title: "Financial Calc BR",
    description:
      "Specialized calculator for Brazilian financial context, handling specific taxes, interest rates, and local currency formatting.",
    tech: ["TypeScript", "NPM Package", "Jest"],
    github: "https://github.com/raulcabralc/financial-calc-br",
    docs: "https://financial.raulc.dev",
    npmVersion: "1.0.0",
  },
  {
    title: "Compass Product API",
    description:
      "Microservice for product management developed during the Compass UOL scholarship program (Project 1).",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Jest"],
    github: "https://github.com/raulcabralc/ANJUN25_D01_COMPASSPRODUCT",
  },
  {
    title: "Compass Imob",
    description:
      "Real estate management API developed as part of the Compass UOL challenge (Project 2), handling property data.",
    tech: [
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Swagger",
      "Jest",
      "Clean Arch",
    ],
    github: "https://github.com/raulcabralc/ANJUN25_D02_COMPASSIMOB",
  },
  {
    title: "Compass Store",
    description:
      "Static document gallery API developed as part of the Compass UOL challenge (Project 3), handling AWS S3 and DynamoDB integration.",
    tech: [
      "TypeScript",
      "NestJS",
      "AWS Cloud",
      "S3",
      "DynamoDB",
      "Jest",
      "MVP",
    ],
    github: "https://github.com/raulcabralc/ANJUN25_D03_COMPASSSTORE",
  },
  {
    title: "Melanoma Detection Project",
    description:
      "AI-powered project for analyzing skin images to assist in the early detection of melanoma using computer vision.",
    tech: ["Flask", "Python", "HTML", "Scss"],
    github: "https://github.com/lucansdev/melanoma_project",
  },
];
