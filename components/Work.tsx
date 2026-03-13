"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Antwork Consultants",
    description:
      "A professional consulting and recruitment platform that helps businesses find the right talent and workforce solutions. Designed with a modern, responsive interface to improve user experience and accessibility. Focused on delivering reliable hiring services and connecting companies with skilled professionals.",
    imageAlt: "Clean desk setup with editing screen",
    tech: ["Next.js", "Tailwind css"],
    liveUrl: "https://www.antworkconsultants.com/",
    githubUrl: "#"
  },
  {
    title: "Rana Electrical",
    description:
      "A professional website developed for Rana Electrical to showcase electrical services and solutions. Built with a clean, responsive design to help customers easily explore services and contact the business. Focused on performance, modern UI, and a smooth user experience across all devices.",
    imageAlt: "Laptop with code and gradient UI",
    tech: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://rana-elecrical.vercel.app/",
    githubUrl: "https://github.com/kartikrana4244/Rana-elecrical.git",
    githubTarget: "_blank",
    githubRel: "noopener noreferrer"
  },
  {
    title: "Creative Agency Site",
    description:
      "A concept landing page for a creative agency with smooth page transitions and lead generation forms.",
    imageAlt: "Team meeting in modern office",
    tech: ["Astro", "Tailwind", "Animations"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export function Work() {
  return (
    <section
      id="work"
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
            Projects &amp; Creations
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Selected{" "}
            <span className="bg-primary-gradient bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
            A mix of web development, motion-heavy interfaces, and creative
            visuals that show how I think about experience, storytelling, and
            performance.
          </p>
        </div>
        <div className="text-xs sm:text-sm text-slate-400 flex items-center gap-2">
          <ArrowUpRight className="w-4 h-4 text-orange-400" />
          <span>More projects coming as I ship new ideas.</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
        className="grid lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="rounded-2xl glass-panel overflow-hidden flex flex-col"
          >
            <div className="relative h-44 sm:h-48 bg-gradient-to-br from-orange-500/40 via-red-500/30 to-amber-400/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.35),_transparent_55%)]" />
              <div className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-[11px] text-slate-100 flex items-center gap-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-400 shadow-soft-glow" />
                <span>Case Study</span>
              </div>
              <div className="absolute inset-x-0 bottom-3 flex justify-center">
                <div className="h-20 w-40 sm:h-24 sm:w-48 rounded-2xl bg-black/60 border border-white/10 shadow-soft-glow" />
              </div>
            </div>

            <div className="flex-1 p-5 sm:p-6 flex flex-col gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-100 flex items-center justify-between gap-2">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 text-slate-500" />
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-[11px] text-slate-100">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-black/70 px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between pt-2 text-xs">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary-gradient px-3.5 py-1.5 text-[11px] font-medium text-white shadow-soft-glow hover:shadow-[0_0_40px_rgba(249,115,22,0.8)] transition-shadow"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Preview
                </a>
                <a
                  href={project.githubUrl}
                  target={project.githubTarget}
                  rel={project.githubRel}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-black/70 px-3.5 py-1.5 text-[11px] font-medium text-slate-100 hover:border-orange-500/60 hover:text-orange-100 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

