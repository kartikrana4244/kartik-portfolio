"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Image as ImageIcon,
  Instagram,
  ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    icon: <Code2 className="w-5 h-5" />,
    description:
      "Modern, fast, responsive websites built with the latest tech stack and best practices.",
    tag: "Development"
  },
  {
    title: "UI/UX Design",
    icon: <Palette className="w-5 h-5" />,
    description:
      "Premium, modern, user-friendly interfaces designed in Figma with a focus on detail.",
    tag: "Design"
  },
  {
    title: "Graphic Design",
    icon: <ImageIcon className="w-5 h-5" />,
    description:
      "Social media posts, branding assets, and visual design that match your identity.",
    tag: "Branding"
  },
  {
    title: "Instagram Page Handling",
    icon: <Instagram className="w-5 h-5" />,
    description:
      "Managing and growing Instagram pages with consistent content, visuals, and strategy.",
    tag: "Social"
  }
];

export function Services() {
  return (
    <section
      id="services"
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
            Offerings
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Services{" "}
            <span className="bg-primary-gradient bg-clip-text text-transparent">
              I Provide
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
            From idea to polished product, I can help with design, development,
            and content that all feels consistent and premium.
          </p>
        </div>
        <div className="text-xs sm:text-sm text-slate-400 flex items-center gap-2">
          <ArrowRight className="w-4 h-4 text-orange-400" />
          <span>Available for freelance projects and collaborations.</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
        className="grid md:grid-cols-2 gap-5 lg:gap-6"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="rounded-2xl glass-panel p-5 sm:p-6 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-gradient text-white shadow-soft-glow">
                  {service.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-100">
                    {service.title}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    {service.tag}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-300">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

