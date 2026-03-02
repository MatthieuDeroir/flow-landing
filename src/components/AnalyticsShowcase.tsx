"use client";

import { motion } from "framer-motion";

const freeFeatures = [
  "Daily mood & energy trends",
  "Weekly summaries",
  "Basic sleep & hydration charts",
  "CSV / JSON export",
  "Calendar heatmap",
];

const premiumFeatures = [
  "Cross-dimension correlations",
  "Predictive mood insights",
  "Advanced sleep phase analysis",
  "Medication effectiveness tracking",
  "Custom date range reports",
  "Trend anomaly detection",
];

function Check({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`shrink-0 ${className}`}>
      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AnalyticsShowcase() {
  return (
    <section className="relative px-6 py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-secondary-600/8 blur-[120px]" />
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
            Insights That{" "}
            <span className="bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent">
              Actually Help
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-slate-400">
            Free analytics cover the essentials. Premium unlocks deep
            correlations and predictive insights.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Free Tier */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass flex flex-col rounded-2xl p-8"
          >
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-sm font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Free Forever
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-xl font-semibold text-white">
                Core Analytics
              </h3>
            </div>

            {/* Mock chart */}
            <div className="mb-8 flex h-44 items-end justify-between gap-1.5 rounded-xl bg-white/[0.02] p-5">
              {[40, 55, 35, 65, 70, 50, 80, 60, 75, 85, 65, 70].map(
                (h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-primary-500/80 to-primary-400/40 transition-all"
                    style={{ height: `${h}%` }}
                  />
                ),
              )}
            </div>

            <ul className="space-y-3.5">
              {freeFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                  <Check className="text-emerald-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Premium Tier */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col overflow-hidden rounded-2xl border border-secondary-500/20 bg-gradient-to-b from-secondary-500/[0.06] to-white/[0.02] p-8 backdrop-blur-xl"
          >
            {/* Corner glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-secondary-500/20 blur-[60px]" />

            <div className="relative mb-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary-500/10 px-3 py-1.5 text-sm font-medium text-secondary-400">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary-400" />
                Premium
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-xl font-semibold text-white">
                Advanced Insights
              </h3>
            </div>

            {/* Mock correlation chart */}
            <div className="relative mb-8 flex h-44 items-center justify-center overflow-hidden rounded-xl bg-white/[0.02]">
              {/* Fake heatmap grid */}
              <div className="absolute inset-4 grid grid-cols-6 grid-rows-4 gap-1.5 opacity-30">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-sm"
                    style={{
                      background: [
                        "rgba(168,85,247,0.4)",
                        "rgba(168,85,247,0.2)",
                        "rgba(168,85,247,0.6)",
                        "rgba(168,85,247,0.1)",
                        "rgba(168,85,247,0.5)",
                        "rgba(168,85,247,0.3)",
                      ][i % 6],
                    }}
                  />
                ))}
              </div>
              <div className="relative z-10 text-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="mx-auto mb-2 text-secondary-400"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-sm font-medium text-secondary-300">
                  Correlation Matrix
                </p>
              </div>
            </div>

            <ul className="space-y-3.5">
              {premiumFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                  <Check className="text-secondary-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
