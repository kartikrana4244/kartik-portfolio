import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="section-container py-8 border-t border-white/5 text-xs sm:text-sm text-slate-400 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
      <div>
        <p className="text-slate-200 font-medium">
          Kartik Rana &middot; Full Stack Frontend Developer
        </p>
        <p className="text-[11px] sm:text-xs mt-0.5">
          &copy; {new Date().getFullYear()} Kartik Rana. All rights reserved.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
          Instagram
        </span>
        <a
          href="https://instagram.com/kartik.x.ii"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-xs text-slate-100 hover:border-orange-500/60 hover:text-orange-100 transition-colors"
        >
          <Instagram className="w-3.5 h-3.5" />
          @kartik.x.ii
        </a>
      </div>
    </footer>
  );
}

