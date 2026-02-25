"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HireMe() {
  return (
    <section
      id="hire-me"
      className="section-container py-16 sm:py-20 lg:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl bg-primary-gradient p-[1px]"
      >
        <div className="relative rounded-3xl bg-black/80 px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 flex flex-col md:flex-row items-center gap-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,113,22,0.28),_transparent_55%)] pointer-events-none" />
          <div className="relative flex-1 space-y-3">
            <p className="text-xs font-medium tracking-[0.25em] text-orange-200 uppercase">
              Let&apos;s Build Something
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
              Let&apos;s work together to build something amazing.
            </h2>
            <p className="text-sm sm:text-base text-orange-100/80 max-w-xl">
              Whether it&apos;s a modern portfolio, a landing page, or a full
              product experience, I can help design and build it with motion,
              performance, and polish.
            </p>
          </div>
          <div className="relative flex flex-col items-stretch gap-3 w-full md:w-auto">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-2.5 text-sm font-medium text-black shadow-soft-glow hover:bg-slate-100 transition-colors"
            >
              Hire Me
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-[11px] text-orange-100/80 text-center md:text-left">
              Quick replies, clear communication, and a focus on details.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

