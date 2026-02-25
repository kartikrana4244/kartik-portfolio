"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Favourites", href: "#favourites" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-40"
    >
      <div className="section-container">
        <div className="mt-4 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link href="#hero" className="flex items-baseline gap-1">
            <span className="text-lg font-semibold tracking-[0.2em] text-orange-400">
              KARTIK
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-200/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#hire-me"
              className="rounded-full bg-primary-gradient px-5 py-2 text-sm font-medium text-white shadow-soft-glow hover:shadow-[0_0_45px_rgba(249,115,22,0.6)] transition-shadow"
            >
              Hire Me
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-full border border-white/10 bg-black/50 p-2 text-slate-100"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-2 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-xl px-4 py-4 md:hidden"
          >
            <div className="flex flex-col gap-3 text-sm">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-200/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#hire-me"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex items-center justify-center rounded-full bg-primary-gradient px-4 py-2 text-sm font-medium text-white shadow-soft-glow"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

