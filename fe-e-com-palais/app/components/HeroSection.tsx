"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-surface">
      {/* Background Image — slow scale on load */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
      >
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeYvf_nsfHkqMTekCv_qnGMAQaQ4JLAsbP-BC8OtNRKiIlvtUbGiD8bUMRszEA4a2JjJwNsorUbnT05GjWNqxSQi1Wnu2WHkdeEeeSomUp5ut3hNwc0_IODag89rH-j6D0aA3duc0cHHCVeOP3QcA-vRfldItL03yywbMgnKmUwVjv9C1GrOYDbTw-sHdo6D-CS7tWwrQUcJ8Zm3X5zZcYYlMaKIy3rElbxbReZT_2-86jGwxCYjAqweUbPubsoRl88J-vNktsKWU"
          alt="Luxury minimal bathroom with marble walls, a freestanding sculptural white washbasin, and soft natural morning light streaming through a window"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover brightness-[0.95]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-surface via-transparent to-transparent opacity-60" />
      </motion.div>

      {/* Content — staggered entrance */}
      <div className="relative z-10 px-12 md:px-24 max-w-4xl">
        <motion.span
          className="font-label uppercase tracking-[0.3rem] text-primary text-sm mb-6 block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
        >
          Artisan Craftsmanship
        </motion.span>

        <motion.h1
          className="text-6xl md:text-8xl font-serif italic text-on-surface leading-tight mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
        >
          Elevate Your <br />
          <span className="text-primary-container">Bathroom</span> Experience
        </motion.h1>

        <motion.p
          className="text-lg text-on-surface-variant max-w-lg mb-10 font-light leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95, ease: EASE }}
        >
          Where architectural rigor meets poetic design. Discover our curated
          collection of exported luxury washbasins and fixtures.
        </motion.p>

        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15, ease: EASE }}
        >
          <Link href="/products">
            <button className="bg-primary text-on-primary px-10 py-4 font-label uppercase tracking-widest text-xs hover:bg-surface-tint transition-all">
              Explore Collection
            </button>
          </Link>
          <Link href="/#about">
            <button className="border border-outline-variant/30 px-10 py-4 font-label uppercase tracking-widest text-xs hover:bg-surface-container transition-all">
              View Heritage
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
