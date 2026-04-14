"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "fade";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
}

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function AnimateInView({
  children,
  className,
  delay = 0,
  duration = 0.8,
  direction = "up",
  distance = 40,
}: Props) {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x:
        direction === "left"
          ? distance
          : direction === "right"
          ? -distance
          : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: EASE }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
