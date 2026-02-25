"use client";

import { motion } from "framer-motion";
import { Sparkles, Video, PenTool } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-container py-16 sm:py-20 lg:py-24">
      <div className="grid lg:grid-cols-[1.1fr_minmax(0,0.9fr)] gap-10 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-xs font-medium tracking-[0.25em] text-orange-400 uppercase mb-3">
            Biography
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
            About{" "}
            <span className="bg-primary-gradient bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
            I&apos;m Kartik Rana, a{" "}
            <span className="font-medium text-slate-100">
              full stack frontend developer
            </span>{" "}
            obsessed with crafting modern, premium web experiences. I design
            and build interfaces that feel cinematic, fast, and delightful to
            use.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3">
            While my core strength is{" "}
            <span className="font-medium text-slate-100">
              modern frontend development
            </span>{" "}
            (React, Next.js, Tailwind, Framer Motion), I&apos;m actively
            learning backend development so I can ship fully connected,
            production-ready experiences end-to-end.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Beyond code, I&apos;m also into{" "}
            <span className="font-medium text-slate-100">
              graphic design, video editing, and Figma
            </span>
            . I&apos;ve handled Instagram pages, creating cohesive visual
            identities, reels, and content that actually engages people — which
            feeds directly into how I think about product visuals and
            storytelling on the web.
          </p>

          <div className="mt-6 grid sm:grid-cols-3 gap-3 text-xs sm:text-sm">
            <HighlightCard
              icon={<Sparkles className="w-4 h-4" />}
              title="Modern Interfaces"
              text="Smooth, animated, and responsive experiences."
            />
            <HighlightCard
              icon={<Video className="w-4 h-4" />}
              title="Video Editing"
              text="Cinematic edits that match the brand's energy."
            />
            <HighlightCard
              icon={<PenTool className="w-4 h-4" />}
              title="Design-First"
              text="Figma-driven workflow for pixel-perfect UI."
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-[28px] bg-primary-gradient opacity-40 blur-2xl" />
          <div className="relative rounded-[28px] glass-panel px-6 py-6 sm:px-7 sm:py-7 flex flex-col gap-5 overflow-hidden">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-orange-400">
                  Snapshot
                </p>
                <p className="mt-1 text-sm font-medium text-slate-100">
                  Full Stack Frontend & Creative
                </p>
              </div>
              <div className="h-10 w-10 rounded-2xl bg-primary-gradient flex items-center justify-center text-white shadow-soft-glow text-xs font-semibold">
                KR
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 text-xs text-slate-300">
              <MiniStat label="Primary" value="Frontend • Next.js" />
              <MiniStat label="Learning" value="APIs • Backend" />
              <MiniStat label="Creative" value="Figma • Graphics • Video" />
              <MiniStat label="Social" value="Instagram page handling" />
            </div>

            <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-200">
              {[
                "Clean, premium visuals",
                "Micro-interactions",
                "Story-driven design",
                "Consistent branding"
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/60 px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
              <span>Always exploring what&apos;s next on the web.</span>
              <span className="text-orange-300 font-medium">
                Building since early teens.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HighlightCard({
  icon,
  title,
  text
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="glass-panel rounded-2xl px-3.5 py-3.5 flex flex-col gap-2">
      <div className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-primary-gradient text-white text-xs shadow-soft-glow">
        {icon}
      </div>
      <p className="text-xs font-medium text-slate-100">{title}</p>
      <p className="text-[11px] text-slate-300">{text}</p>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/70 px-3 py-2">
      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-[11px] text-slate-100">{value}</p>
    </div>
  );
}

