"use client";

import { motion } from "framer-motion";

export function Problem() {
  return (
    <section className="relative px-6 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary-600/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-8 font-[family-name:var(--font-poppins)] text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            You&apos;re not one metric.{" "}
            <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
              You&apos;re the pattern between all of them.
            </span>
          </h2>

          <div className="mx-auto max-w-2xl space-y-6">
            <p className="text-lg leading-relaxed text-slate-400">
              A mood tracker shows you how you feel. A sleep app shows you how you
              slept. A habit tracker shows you what you did. But none of them shows
              you{" "}
              <em className="text-slate-300">why.</em>
            </p>
            <p className="text-lg leading-relaxed text-slate-400">
              The answer is never in one number — it&apos;s in the connections between
              all of them. Your energy crashes on Wednesdays because of Tuesday
              nights. Your anxiety spikes when you skip exercise for three days.
              Your best days share a pattern you&apos;ve never noticed.
            </p>
            <p className="text-lg font-medium text-slate-300">
              Flow connects the dots that other apps leave scattered.
            </p>
          </div>
        </motion.div>

        {/* Visual: scattered dots becoming connected */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex items-center justify-center gap-8"
        >
          {/* Fragmented trackers */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-2">
              {["Mood", "Sleep", "Exercise"].map((label) => (
                <div
                  key={label}
                  className="glass rounded-lg px-3 py-2 text-xs text-slate-500"
                >
                  {label}
                </div>
              ))}
            </div>
            <span className="text-xs text-slate-600">Separate apps</span>
          </div>

          {/* Arrow */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 text-primary-400/60"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>

          {/* Connected in Flow */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative rounded-xl border border-primary-500/20 bg-primary-500/[0.06] px-5 py-3">
              <div className="flex gap-2">
                {["Mood", "Sleep", "Exercise"].map((label, i) => (
                  <div
                    key={label}
                    className={`rounded-lg px-3 py-2 text-xs font-medium ${
                      i === 0
                        ? "bg-orange-500/15 text-orange-400"
                        : i === 1
                          ? "bg-indigo-500/15 text-indigo-400"
                          : "bg-red-500/15 text-red-400"
                    }`}
                  >
                    {label}
                  </div>
                ))}
              </div>
              {/* Connection lines */}
              <div className="absolute inset-x-4 top-1/2 h-px bg-gradient-to-r from-orange-400/20 via-primary-400/30 to-red-400/20" />
            </div>
            <span className="text-xs font-medium text-primary-400">
              Connected in Flow
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
