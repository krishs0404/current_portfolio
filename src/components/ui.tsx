"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export function Section(props: PropsWithChildren<{ className?: string; id?: string }>) {
  return (
    <section
      id={props.id}
      className={cn(
        "w-full max-w-6xl mx-auto px-6 md:px-8 lg:px-10 py-16 md:py-24",
        props.className,
      )}
    >
      {props.children}
    </section>
  );
}

export function Heading(props: PropsWithChildren<{ kicker?: string; sub?: string; className?: string }>) {
  return (
    <div className={cn("mb-10", props.className)}>
      {props.kicker && (
        <motion.div
          initial={{ y: 8, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-widest text-foreground/60"
        >
          {props.kicker}
        </motion.div>
      )}
      <motion.h2
        initial={{ y: 8, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-3xl md:text-4xl font-semibold tracking-tight"
      >
        {props.children}
      </motion.h2>
      {props.sub && (
        <motion.p
          initial={{ y: 8, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base md:text-lg text-foreground/70 mt-2 max-w-2xl"
        >
          {props.sub}
        </motion.p>
      )}
    </div>
  );
}

export function Card(props: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      initial={{ y: 12, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "rounded-xl border border-foreground/10 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40 p-5",
        props.className,
      )}
    >
      {props.children}
    </motion.div>
  );
}


