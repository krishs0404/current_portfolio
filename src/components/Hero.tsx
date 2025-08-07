"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Github, Linkedin, FileDown } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_70%_-20%,rgba(99,102,241,0.15),transparent_60%),radial-gradient(800px_500px_at_10%_-10%,rgba(16,185,129,0.15),transparent_60%)]"
        aria-hidden
      />
      <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-10 py-20 md:py-28">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 text-lg md:text-xl text-foreground/70 max-w-2xl"
        >
          {profile.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 flex gap-3 flex-wrap"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-2 hover:bg-foreground/5 transition"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-2 hover:bg-foreground/5 transition"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-2 hover:bg-foreground/5 transition"
          >
            <FileDown size={18} /> Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
}


