"use client";

import { motion } from "framer-motion";
import {
  Code2,
  LayoutTemplate,
  Database,
  Wrench,
  Palette,
  ArrowRight
} from "lucide-react";

const skillGroups = [
  {
    label: "Frontend",
    icon: <Code2 className="w-4 h-4" />,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS"
    ]
  },
  {
    label: "Backend (Learning)",
    icon: <Database className="w-4 h-4" />,
    items: ["Node.js", "APIs", "Database basics"]
  },
  {
    label: "Design",
    icon: <Palette className="w-4 h-4" />,
    items: ["Figma", "Graphic Design", "UI Design"]
  },
  {
    label: "Tools",
    icon: <Wrench className="w-4 h-4" />,
    items: ["Git", "Vercel", "VS Code"]
  }
];

export function Skills() {
  return (
    <section
      id="skills"
      className="section-container py-16 sm:py-20 lg:py-24 space-y-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
      >
        <div>
          <p className="text-xs font-medium tracking-[0.25em] text-orange-400 uppercase mb-3">
            Skills &amp; Expertise
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Technical{" "}
            <span className="bg-primary-gradient bg-clip-text text-transparent">
              Arsenal
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
            A blend of frontend engineering, visual design, and the tools needed
            to ship real projects — from prototypes to production-ready
            experiences.
          </p>
        </div>
        <div className="text-xs sm:text-sm text-slate-400 flex items-center gap-2">
          <LayoutTemplate className="w-4 h-4 text-orange-400" />
          <span>Focused on clean architecture &amp; reusable components.</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
        className="grid md:grid-cols-2 gap-5 lg:gap-6"
      >
        {skillGroups.map((group, idx) => (
          <SkillCard
            key={group.label}
            label={group.label}
            icon={group.icon}
            items={group.items}
            index={idx}
          />
        ))}
      </motion.div>
    </section>
  );
}

function SkillCard({
  label,
  icon,
  items,
  index
}: {
  label: string;
  icon: React.ReactNode;
  items: string[];
  index: number;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="relative rounded-2xl gradient-border"
      style={{ "--delay": `${index * 0.04}s` } as React.CSSProperties}
    >
      <div className="rounded-2xl glass-panel p-5 sm:p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-primary-gradient text-white shadow-soft-glow">
              {icon}
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Category
              </p>
              <p className="text-sm font-medium text-slate-100">{label}</p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-500" />
        </div>

        <div className="flex flex-wrap gap-2 text-xs text-slate-100">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/60 px-3 py-1"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

