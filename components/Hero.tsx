"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Instagram, Github, Code2 } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="section-container pt-20 pb-24 lg:pb-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
    >
      <div className="flex-1 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-black/60 px-3 py-1 text-xs text-orange-300/90 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orange-400 to-red-500 shadow-soft-glow" />
          <span>17-year-old creative developer & designer</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-orange-400 mb-2">
            Full Stack Frontend Developer
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            <span className="block text-slate-100">Kartik</span>
            <span className="block bg-primary-gradient bg-clip-text text-transparent">
              Rana
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="text-base sm:text-lg text-slate-300 max-w-xl"
        >
          I build{" "}
          <span className="text-orange-400 font-medium">
            modern, fast, premium web experiences
          </span>
          . 17-year-old developer from Uttarkashi, Uttarakhand, now based in{" "}
          <span className="font-medium text-slate-100">Gurugram, Haryana</span>{" "}
          and currently studying in{" "}
          <span className="font-medium text-slate-100">
            Class 12 (NIOS Board).
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 text-xs sm:text-sm text-slate-300"
        >
          <InfoPill label="Age" value="17 Years" />
          <InfoPill label="Based in" value="Gurugram, Haryana" />
          <InfoPill label="From" value="Uttarkashi, Uttarakhand" />
          <InfoPill label="Education" value="Class 12 • NIOS" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-primary-gradient px-6 py-2.5 text-sm font-medium text-white shadow-soft-glow hover:shadow-[0_0_50px_rgba(249,115,22,0.8)] transition-shadow"
          >
            View Work
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#hire-me"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-6 py-2.5 text-sm font-medium text-slate-100 hover:border-orange-500/60 hover:text-orange-100 transition-colors"
          >
            Hire Me
          </a>

          <div className="flex items-center gap-3 text-slate-400 text-xs sm:text-sm">
            <span className="hidden sm:inline">Connect</span>
            <a
              href="mailto:kartikrana.dev@gmail.com"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/70 hover:border-orange-500/70 hover:text-orange-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/kartik.x.ii"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/70 hover:border-orange-500/70 hover:text-orange-300 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/70 hover:border-orange-500/70 hover:text-orange-300 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 w-full max-w-md lg:max-w-lg"
      >
        <div className="relative">
          <div className="absolute -inset-0.5 rounded-[32px] bg-primary-gradient opacity-60 blur-3xl" />
          <div className="relative rounded-[32px] glass-panel px-8 py-10 flex flex-col gap-5 overflow-hidden">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-orange-400">
                  Featured Role
                </p>
                <p className="mt-1 text-sm font-medium text-slate-100">
                  Full Stack Frontend Developer
                </p>
              </div>
              <div className="h-10 w-10 rounded-2xl bg-primary-gradient flex items-center justify-center text-white shadow-soft-glow">
                <Code2 className="w-5 h-5" />
              </div>
            </div>

            <div className="mt-2 space-y-2 text-sm text-slate-300">
              <p>
                Designing and building premium, animated interfaces with React,
                Next.js, Tailwind CSS, and Framer Motion.
              </p>
              <p className="text-xs text-slate-400">
                Also editing cinematic videos and graphics that match the same
                modern visual style.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs text-slate-300 pt-2">
              <Tag label="Frontend" value="React • Next.js • Tailwind" />
              <Tag label="Creative" value="UI • Motion • Video" />
              <Tag label="Tools" value="VS Code • Vercel • Figma" />
              <Tag label="Experience" value="Projects • Instagram pages" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="absolute -bottom-8 -left-6 hidden sm:block"
          >
            <div className="glass-panel rounded-2xl px-4 py-3 flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-primary-gradient flex items-center justify-center text-white shadow-soft-glow text-xs font-semibold">
                17
              </div>
              <div className="text-xs text-slate-300">
                <p className="font-medium text-slate-100">
                  Young but production ready
                </p>
                <p>Delivering real, polished experiences.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass-panel rounded-2xl px-3.5 py-2.5">
      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-xs sm:text-sm font-medium text-slate-100">
        {value}
      </p>
    </div>
  );
}

function Tag({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/60 px-3 py-2">
      <p className="text-[10px] uppercase tracking-[0.18em] text-orange-400">
        {label}
      </p>
      <p className="mt-1 text-[11px] text-slate-200">{value}</p>
    </div>
  );
}

