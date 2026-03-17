"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary-600/15 blur-[120px]" />
        <div className="absolute left-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-secondary-600/10 blur-[100px]" />
        <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-accent-500/8 blur-[80px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
            100% Private &middot; 100% Offline &middot; 100% Yours
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 font-[family-name:var(--font-poppins)] text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Your Wellbeing.
          <br />
          <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
            Your Data.
          </span>{" "}
          Your Device.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
        >
          Track mood, sleep, hydration, medication, exercise and more — all in
          one beautiful app that lives on your machine. No cloud, no accounts,
          no compromises.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#download"
            className="group flex items-center gap-2.5 rounded-2xl bg-primary-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-primary-500/25 transition-all hover:bg-primary-400 hover:shadow-2xl hover:shadow-primary-500/30"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 3v10M6 9l4 4 4-4M4 15h12" />
            </svg>
            Download for Free
          </a>
          <a
            href="#features"
            className="glass glass-hover flex items-center gap-2.5 rounded-2xl px-8 py-4 text-base font-semibold text-slate-200 transition-all"
          >
            See Features
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </motion.div>

        {/* App preview placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] shadow-2xl shadow-black/50"
        >
          <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-5 py-3.5">
            <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <div className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-xs font-medium text-slate-500">
              Flow — Dashboard
            </span>
          </div>
          <div className="flex h-64 items-center justify-center bg-gradient-to-br from-slate-900/50 to-slate-800/30 sm:h-80 lg:h-[420px]">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.05]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-slate-600"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <p className="text-sm text-slate-600">
                App screenshot coming soon
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
