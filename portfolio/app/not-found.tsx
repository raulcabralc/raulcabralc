"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-neutral-950 flex items-center justify-center px-8 overflow-hidden">
      {/* Grid Background (igual ao seu Hero) */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(64,64,64,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(64,64,64,0.3)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Fade nas bordas */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-neutral-950 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent" />
      </div>

      {/* Content */}
      <div className="text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-outfit"
        >
          <h1 className="text-6xl md:text-9xl font-bold text-neutral-800 mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Page not found
          </h2>
          <p className="text-neutral-400 mb-8 max-w-md mx-auto">
            The page you were looking for does not exist or was moved.
          </p>

          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 bg-rebound hover:bg-rebound-dark text-white rounded-lg transition-colors duration-200"
          >
            Back to home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
