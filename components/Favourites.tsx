"use client";

import { motion } from "framer-motion";
import { Braces, Code2, Layers, Figma, Terminal } from "lucide-react";

const favourites = [
  {
    name: "Next.js",
    icon: <Braces className="w-6 h-6" />,
    description: "App Router, server components, and lightning-fast pages."
  },
  {
    name: "React",
    icon: <Code2 className="w-6 h-6" />,
    description: "Component-driven UIs with hooks, context, and patterns."
  },
  {
    name: "Tailwind CSS",
    icon: <Layers className="w-6 h-6" />,
    description: "Utility-first styling that keeps design consistent."
  },
  {
    name: "Figma",
    icon: <Figma className="w-6 h-6" />,
    description: "Designing, prototyping, and exploring visual directions."
  },
  {
    name: "VS Code",
    icon: <Terminal className="w-6 h-6" />,
    description: "My main space for writing and refining code."
  }
];

export function Favourites() {
  return (
    <section
      id="favourites"
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
            Entertainment
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Favourite{" "}
            <span className="bg-primary-gradient bg-clip-text text-transparent">
              Stack &amp; Tools
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
            The tools and technologies I reach for when building premium,
            animated, and high-performance web experiences.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
        className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4"
      >
        {favourites.map((fav, index) => (
          <motion.div
            key={fav.name}
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="glass-panel rounded-2xl p-4 flex flex-col items-start gap-3"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-gradient text-white shadow-soft-glow">
              {fav.icon}
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-slate-100">{fav.name}</p>
              <p className="text-[11px] text-slate-300">{fav.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

