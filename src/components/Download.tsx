"use client";

import { motion } from "framer-motion";

const platforms = [
  {
    name: "macOS",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-white">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
    label: "Download for Mac",
    sublabel: "Apple Silicon & Intel",
    href: "#",
  },
  {
    name: "Windows",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
        <path d="M3 12V6.75l6-1.32v6.48L3 12zm6.27.09l.01 6.48-6.27-1.32V12.6l6.26-.51zM10.44 5.17L20.25 3v8.92l-9.81.08V5.17zM20.25 13l-.01 8.92-9.8-1.79-.01-7.2L20.25 13z" />
      </svg>
    ),
    label: "Download for Windows",
    sublabel: "Windows 10+",
    href: "#",
  },
  {
    name: "Linux",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <rect x="4" y="4" width="16" height="16" rx="2" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
    label: "Download for Linux",
    sublabel: ".deb / .AppImage",
    href: "#",
  },
];

export function Download() {
  return (
    <section id="download" className="relative overflow-hidden px-6 py-28 lg:py-36">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/10 blur-[120px]" />
        <div className="absolute left-1/3 bottom-0 h-[300px] w-[300px] rounded-full bg-secondary-500/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-5 font-[family-name:var(--font-poppins)] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Start Tracking{" "}
            <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
              Today
            </span>
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-lg leading-relaxed text-slate-400">
            Download Flow for free. No account required. Your data stays on your
            device from the very first second.
          </p>
        </motion.div>

        {/* Desktop downloads */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-10 grid max-w-3xl gap-4 sm:grid-cols-3"
        >
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              className="glass glass-hover group flex flex-col items-center gap-3 rounded-2xl px-6 py-6 text-center transition-all duration-300"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.05]">
                {platform.icon}
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  {platform.label}
                </div>
                <div className="mt-0.5 text-xs text-slate-500">
                  {platform.sublabel}
                </div>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Mobile stores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {["App Store", "Play Store"].map((store) => (
            <span
              key={store}
              className="glass rounded-xl px-5 py-2.5 text-sm text-slate-500"
            >
              {store} &middot; Coming soon
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
