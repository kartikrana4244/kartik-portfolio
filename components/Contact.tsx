"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Send } from "lucide-react";

export function Contact() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      // In a real app, hook this to an API or email service.
      alert("Thanks for reaching out! I will get back to you soon.");
    }, 600);
  };

  return (
    <section
      id="contact"
      className="section-container py-16 sm:py-20 lg:py-24 space-y-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-10 lg:gap-14 items-start"
      >
        <div className="space-y-5">
          <div>
            <p className="text-xs font-medium tracking-[0.25em] text-orange-400 uppercase mb-3">
              Let&apos;s Connect
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Contact{" "}
              <span className="bg-primary-gradient bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-lg">
              Have a{" "}
              <span className="font-medium text-slate-100">
                project or idea in mind
              </span>
              ? I&apos;m always open to collaborations, freelance work, or just
              a quick chat about design and development.
            </p>
          </div>

          <div className="space-y-3 text-sm text-slate-300">
            <ContactRow
              icon={<Mail className="w-4 h-4" />}
              label="Email"
              value="kartikrana.dev@gmail.com"
            />
            <ContactRow
              icon={<Instagram className="w-4 h-4" />}
              label="Instagram"
              value="@kartik.x.ii"
            />
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
          className="glass-panel rounded-2xl p-5 sm:p-6 lg:p-7 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2.5 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-orange-500/70"
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2.5 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-orange-500/70"
              />
            </Field>
          </div>

          <Field label="Message">
            <textarea
              required
              placeholder="Tell me about your project or idea..."
              rows={4}
              className="w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2.5 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-orange-500/70 resize-none"
            />
          </Field>

          <div className="pt-1 flex justify-end">
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 rounded-full bg-primary-gradient px-6 py-2.5 text-sm font-medium text-white shadow-soft-glow hover:shadow-[0_0_45px_rgba(249,115,22,0.8)] transition-shadow disabled:opacity-70"
            >
              <Send className="w-4 h-4" />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-primary-gradient text-white shadow-soft-glow">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
          {label}
        </p>
        <p className="text-sm font-medium text-slate-100">{value}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="space-y-1.5 text-xs sm:text-sm text-slate-200">
      <span className="block text-[11px] uppercase tracking-[0.18em] text-slate-400">
        {label}
      </span>
      {children}
    </label>
  );
}

