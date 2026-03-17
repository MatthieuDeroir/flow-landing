"use client";

import { motion } from "framer-motion";

const privacyPoints = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: "100% Local Storage",
    description:
      "Your data lives on your device in a local SQLite database. Nothing leaves your machine — ever.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="1" y1="1" x2="23" y2="23" /><path d="M16.72 11.06A10.94 10.94 0 0119 12.55" /><path d="M5 12.55a10.94 10.94 0 015.17-2.39" /><path d="M10.71 5.05A16 16 0 0122.56 9" /><path d="M1.42 9a15.91 15.91 0 014.7-2.88" /><path d="M8.53 16.11a6 6 0 016.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" />
      </svg>
    ),
    title: "No Cloud Required",
    description:
      "Flow works completely offline. No internet needed, no sync servers, no third-party services.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Encrypted Backups",
    description:
      "Export encrypted .flow backup files (AES-256-GCM). Restore on any device, only you hold the key.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" />
      </svg>
    ),
    title: "Fully Deletable",
    description:
      "Delete any or all data at any time. No hidden copies, no data retention. Your data, your rules.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Privacy() {
  return (
    <section id="privacy" className="relative overflow-hidden px-6 py-28 lg:py-36">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-emerald-600/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <h2 className="mb-5 font-[family-name:var(--font-poppins)] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Privacy is Not a Feature.{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-primary-400 bg-clip-text text-transparent">
              It&apos;s the Foundation.
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-slate-400">
            We built Flow for people who care about their mental health{" "}
            <em className="text-slate-300">and</em> their privacy. Your most
            intimate data deserves the highest protection.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2"
        >
          {privacyPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={itemVariants}
              className="glass glass-hover flex items-start gap-5 rounded-2xl p-7 transition-all duration-300"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                {point.icon}
              </div>
              <div>
                <h3 className="mb-1.5 font-[family-name:var(--font-poppins)] text-base font-semibold text-white">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
