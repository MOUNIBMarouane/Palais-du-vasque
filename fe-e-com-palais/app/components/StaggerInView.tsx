"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

interface ContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Wrap a list of <StaggerItem> children to get staggered reveal */
export function StaggerContainer({ children, className, delay = 0 }: ContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}

interface ItemProps {
  children: ReactNode;
  className?: string;
}

/** Child of StaggerContainer — inherits stagger timing automatically */
export function StaggerItem({ children, className }: ItemProps) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
