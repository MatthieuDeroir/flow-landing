"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    description: "All tracking features, basic analytics",
    features: [
      "All 12+ tracking dimensions",
      "Basic analytics & charts",
      "CSV / JSON export",
      "Relax hub & breathing",
      "Local encrypted backups",
      "Unlimited history",
    ],
    cta: "Download Free",
    href: "#download",
    highlighted: false,
    accent: "emerald",
  },
  {
    name: "Monthly",
    price: "1.39",
    period: "/month",
    description: "Advanced analytics & premium features",
    features: [
      "Everything in Free",
      "Cross-dimension correlations",
      "Predictive insights",
      "Advanced sleep analysis",
      "Trend anomaly detection",
      "Priority support",
    ],
    cta: "Start Monthly",
    href: "#download",
    highlighted: true,
    accent: "primary",
  },
  {
    name: "Lifetime",
    price: "13.89",
    period: "one-time",
    description: "Pay once, own forever. Best value.",
    features: [
      "Everything in Monthly",
      "All future premium features",
      "Lifetime updates",
      "Early access to betas",
      "Support indie development",
      "No recurring charges",
    ],
    cta: "Get Lifetime",
    href: "#download",
    highlighted: false,
    accent: "secondary",
  },
];

function Check({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`shrink-0 ${className}`}>
      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-600/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <h2 className="mb-5 font-[family-name:var(--font-poppins)] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Simple,{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Fair Pricing
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-slate-400">
            Flow is free for all tracking features. Premium unlocks advanced
            analytics — and a lifetime option that&apos;s cheaper than one month
            of most competitors.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid items-start gap-5 lg:grid-cols-3"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`relative flex flex-col rounded-2xl p-8 ${
                plan.highlighted
                  ? "border border-primary-500/30 bg-gradient-to-b from-primary-500/[0.08] to-white/[0.02] shadow-xl shadow-primary-500/10 backdrop-blur-xl lg:-my-4 lg:py-12"
                  : "glass"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary-500 px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-primary-500/30">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8 text-center">
                <h3 className="font-[family-name:var(--font-poppins)] text-lg font-semibold text-white">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="font-[family-name:var(--font-poppins)] text-5xl font-bold text-white">
                    {plan.price === "0" ? "Free" : `€${plan.price}`}
                  </span>
                  {plan.price !== "0" && (
                    <span className="text-sm text-slate-500">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm text-slate-400">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <ul className="mb-8 flex-1 space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                    <Check
                      className={
                        plan.highlighted
                          ? "text-primary-400"
                          : plan.accent === "secondary"
                            ? "text-secondary-400"
                            : "text-emerald-400"
                      }
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`block rounded-xl py-3.5 text-center text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25 hover:bg-primary-400 hover:shadow-primary-500/30"
                    : "glass glass-hover text-slate-200"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
